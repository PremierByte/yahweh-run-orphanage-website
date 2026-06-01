"use client";

import { companyInfo } from "@/data/company";
import { services } from "@/data/services";
import {
  Mail,
  MapPin,
  Phone,
  Instagram,
  Facebook,
  Twitter,
  ChevronRight,
  Heart,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2B3539] text-white pt-24 pb-12 relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          {/* Column 1: Brand & Mission */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="inline-block">
              <Image
                width={140}
                height={60}
                alt="Yahweh Run Logo"
                className=" object-contain"
                src="/logo.png"
              />
            </Link>
            <p className="text-gray-200 text-base leading-relaxed max-w-sm">
              Yahweh Run Orphanage Foundation is dedicated to providing a loving
              home, quality education, and a sustainable future for abandoned
              and vulnerable children in Nigeria.
            </p>
          </div>

          {/* Column 2: Quick Links - About */}
          <div className="lg:col-span-2 lg:ml-8">
            <h3 className="text-lg font-bold text-white mb-8 relative inline-block">
              About Us
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-secondary rounded-full" />
            </h3>
            <ul className="space-y-4">
              <FooterLink href="/about" label="Our Mission" />
              <FooterLink href="/about/team" label="Board of Trustees" />
              <FooterLink href="/about/faq" label="FAQ" />
              <FooterLink href="/project" label="Building Project" />
              <FooterLink href="/contact" label="Contact Us" />
            </ul>
          </div>

          {/* Column 3: Quick Links - Programs */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold text-white mb-8 relative inline-block">
              Our Programs
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-secondary rounded-full" />
            </h3>
            <ul className="space-y-4">
              {services.map((s, k) => (
                <FooterLink key={k} href={s.href} label={s.title} />
              ))}
              <FooterLink href="/causes" label="All Causes" />
            </ul>
          </div>

          {/* Column 4: Get Involved & Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold text-white mb-8 relative inline-block">
              Get Involved
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-secondary rounded-full" />
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="mt-1 bg-white/5 p-2.5 rounded-xl text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                    Call Us
                  </p>
                  <a
                    href="tel:+2349159643315"
                    className="text-sm font-bold hover:text-secondary transition-colors"
                  >
                    +234 915 964 3315
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="mt-1 bg-white/5 p-2.5 rounded-xl text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                    Email Us
                  </p>
                  <a
                    href="mailto:info@yahwehrunorphanage.org"
                    className="text-sm font-bold hover:text-secondary transition-colors truncate block max-w-[180px]"
                  >
                    info@yahwehrunorphanage.org
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="mt-1 bg-white/5 p-2.5 rounded-xl text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                    Location
                  </p>
                  <span className="text-sm font-bold leading-tight block">
                    Benin City, Edo State, Nigeria
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom: Copyright & Legal */}
        <div className="pt-8 border-t text-center border-white/10 flex flex-col md:flex-row justify-center items-center gap-6">
          <p className="text-gray-400 text-center text-sm">
            © {currentYear} {companyInfo.name}. All Rights Reserved. - Developed
            by{" "}
            <a
              href={companyInfo.developerWebsite}
              className="text-secondary font-bold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {companyInfo.developer}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="text-gray-200 hover:text-secondary transition-all duration-300 flex items-center group text-sm font-medium"
      >
        <ChevronRight
          size={14}
          className="mr-2 text-secondary/50 group-hover:text-secondary transition-colors"
        />
        {label}
      </Link>
    </li>
  );
}

export default Footer;
