"use client";

import { navItems } from "@/components/navigation/nav";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { useAuthStore } from "@/store/authStore";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, isAuthenticated, logout } = useAuthStore();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (path?: string) => path && pathname === path;

  const linkBase =
    "uppercase transition-colors duration-200 font-bold text-gray-600 hover:text-secondary tracking-wider text-xs";
  const activeStyle = "text-secondary font-black";

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setUserDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Yahweh Run Logo"
            width={70}
            height={70}
            className="w-[60px] h-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item, index) =>
            Array.isArray(item.link) ? (
              <div key={index} className="relative group">
                <button
                  className={cn(
                    linkBase,
                    "flex items-center gap-1 py-2",
                    pathname.startsWith(
                      item.link[0].link.split("/").slice(0, 2).join("/"),
                    ) && activeStyle,
                  )}
                >
                  {item.name}
                  <ChevronDown
                    size={14}
                    className="group-hover:rotate-180 transition-transform duration-300"
                  />
                </button>
                <div className="absolute left-0 mt-1 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[60]">
                  {item.link.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subItem.link}
                      className={cn(
                        "block px-6 py-2.5 text-xs font-bold text-gray-600 hover:bg-tertiary hover:text-secondary transition-colors uppercase tracking-widest",
                        isActive(subItem.link) && "text-secondary bg-tertiary",
                      )}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={index}
                href={item.link!}
                className={cn(linkBase, isActive(item.link) && activeStyle)}
              >
                {item.name}
              </Link>
            ),
          )}

          <Link
            href="/donate"
            className="bg-secondary text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/20 hover:-translate-y-0.5"
          >
            Donate Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-primary p-2 rounded-xl bg-tertiary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-8 space-y-6">
              {navItems.map((item, index) =>
                Array.isArray(item.link) ? (
                  <div key={index} className="space-y-4">
                    <span className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
                      {item.name}
                    </span>
                    <div className="grid grid-cols-1 gap-3 pl-4">
                      {item.link.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.link}
                          onClick={() => setMobileMenuOpen(false)}
                          className={cn(
                            "text-xs font-bold uppercase tracking-wider text-gray-600 hover:text-secondary",
                            isActive(subItem.link) && "text-secondary",
                          )}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={index}
                    href={item.link!}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "block text-xs font-bold uppercase tracking-wider text-gray-600 hover:text-secondary",
                      isActive(item.link) && "text-secondary",
                    )}
                  >
                    {item.name}
                  </Link>
                ),
              )}
              <div className="pt-4">
                <Link
                  href="/donate"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center bg-secondary text-white py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-xl"
                >
                  Donate Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
