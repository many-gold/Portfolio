"use client";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter, FaRegEnvelope } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative w-15 h-15 border-b-4elative w-15 h-15 rounded-full overflow-hidden border-2 border-gray-300 dark:border-gray-600">
                <Image
                  src="/photo.jpg"
                  alt="Bizuwork Jemaneh"
                  width={40}
                  height={40}
                  className="inset-shadow-amber-50"
                />
              </div>
              <span className="text-xl font-semibold text-gray-900 dark:text-white">
                Bizuwork Jemaneh
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Building digital experiences that make an impact
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-gray-900 dark:text-white font-semibold">Explore</h3>
            <ul className="space-y-2">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/projects">Projects</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-gray-900 dark:text-white font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <SocialIcon href="https://github.com" icon={<FaGithub />} />
              <SocialIcon href="https://linkedin.com" icon={<FaLinkedin />} />
              <SocialIcon href="https://twitter.com" icon={<FaTwitter />} />
              <SocialIcon href="mailto:contact@johndoe.com" icon={<FaRegEnvelope />} />
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-gray-900 dark:text-white font-semibold">Contact</h3>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>Addis Ababa</p>
              <p>bizuworkjemameneh@gmail.com</p>
              <p>+ (251) 9-82-41-25-66</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} Bizuwork Jemaneh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm"
      >
        {children}
      </Link>
    </li>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
    >
      {icon}
    </Link>
  );
}