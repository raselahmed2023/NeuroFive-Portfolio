import Link from "next/link";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 py-8 sm:flex-row">
        
        <p className="text-sm text-slate-400">
          © 2026 Rasel Ahmed. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          <Link
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition hover:text-white"
            aria-label="GitHub"
          >
            <FaGithub size={21} />
          </Link>

          <Link
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition hover:text-cyan-400"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={21} />
          </Link>

          <Link
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition hover:text-blue-400"
            aria-label="Facebook"
          >
            <FaFacebookF size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}