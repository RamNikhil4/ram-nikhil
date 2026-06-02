import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import ejs from "ejs";

// Configuration for local messages storage
const MESSAGES_FILE_PATH = path.join(process.cwd(), "data", "messages.json");

// Helper to escape HTML to prevent XSS when using raw HTML blocks (<%- %>) in EJS
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // 1. Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill out all fields." },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    const timestamp = new Date();
    const formattedDate = timestamp.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const formattedTime = timestamp.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    });

    // 2. Save submission locally (Local DB backup)
    const newSubmission = {
      id: crypto.randomUUID(),
      name,
      email,
      message,
      submittedAt: timestamp.toISOString(),
    };

    try {
      // Ensure the "data" directory exists
      await fs.mkdir(path.dirname(MESSAGES_FILE_PATH), { recursive: true });

      let existingSubmissions = [];
      try {
        const fileContent = await fs.readFile(MESSAGES_FILE_PATH, "utf-8");
        existingSubmissions = JSON.parse(fileContent);
      } catch (err) {
        // File doesn't exist yet, start with empty list
      }

      existingSubmissions.unshift(newSubmission); // Latest submissions first
      await fs.writeFile(
        MESSAGES_FILE_PATH,
        JSON.stringify(existingSubmissions, null, 2),
        "utf-8",
      );
    } catch (dbErr) {
      console.error("Local DB storage error:", dbErr);
    }

    // 3. Email Notification via Brevo Transactional REST API
    const brevoApiKey = process.env.BREVO_API_KEY;
    const toEmail = process.env.TO_EMAIL || "your-email@example.com";
    const toName = process.env.TO_NAME || "Ram Nikhil";
    const senderEmail = process.env.SENDER_EMAIL || "onboarding@brevo.com";
    const senderName = process.env.SENDER_NAME || "Portfolio Contact";

    if (brevoApiKey) {
      try {
        // Load custom Midnight Champagne EJS email template
        const templatePath = path.join(
          process.cwd(),
          "public",
          "email-template.ejs",
        );
        const templateContent = await fs.readFile(templatePath, "utf-8");

        const escapedMessage = escapeHtml(message).replace(/\n/g, "<br>");

        // Compile and render the template using EJS
        const htmlContent = ejs.render(templateContent, {
          sender_name: name,
          sender_email: email,
          message_body: escapedMessage,
          date: formattedDate,
          time: formattedTime,
        });

        // Send request using native fetch API to Brevo SMTP endpoint
        const emailResponse = await fetch(
          "https://api.brevo.com/v3/smtp/email",
          {
            method: "POST",
            headers: {
              accept: "application/json",
              "content-type": "application/json",
              "api-key": brevoApiKey,
            },
            body: JSON.stringify({
              sender: {
                name: senderName,
                email: senderEmail,
              },
              to: [
                {
                  email: toEmail,
                  name: toName,
                },
              ],
              replyTo: {
                email: email,
                name: name,
              },
              subject: `✦ Portfolio Contact: Message from ${name}`,
              htmlContent: htmlContent,
            }),
          },
        );

        if (!emailResponse.ok) {
          const errorData = await emailResponse.json();
          console.error("Brevo API error:", errorData);
          return NextResponse.json({
            success: true,
            message: "Message saved locally, but email dispatch failed.",
          });
        }
      } catch (emailErr) {
        console.error("Email sending exception:", emailErr);
        return NextResponse.json({
          success: true,
          message: "Message saved locally, but email server error occurred.",
        });
      }
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully!",
    });
  } catch (error) {
    console.error("Contact API Server Error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 },
    );
  }
}
