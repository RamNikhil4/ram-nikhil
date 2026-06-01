"use client";

export default function Footer() {
  return (
    <footer className="relative py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <p className="text-text-muted/60 font-mono text-xs tracking-wider">
          &copy; {new Date().getFullYear()} Ram Nikhil Teja
        </p>
      </div>
    </footer>
  );
}
