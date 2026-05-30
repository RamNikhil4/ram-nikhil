"use client";

import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-text-muted">
        <p className="flex items-center gap-1.5">
          Built with <Heart size={13} className="text-rose fill-rose" /> by{" "}
          <span className="text-text-secondary font-medium">
            Ram Nikhil Teja
          </span>
        </p>
        <p className="font-mono text-xs">
          &copy; {new Date().getFullYear()} — All rights reserved.
        </p>
      </div>
    </footer>
  );
}
