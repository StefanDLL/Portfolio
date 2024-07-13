import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2024 Stefan Le
      </small>
      <p className="text-xs">
        <span className="font-semibold">Om mitt portfolio:</span> byggt med
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting & Github Pages.
      </p>
    </footer>
  );
}
