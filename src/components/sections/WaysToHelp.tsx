"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  HeartHandshake,
  UserPlus,
  Gift,
  ArrowRight,
  BookOpen,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";

const ways = [
  {
    icon: <GraduationCap className="h-10 w-10 text-secondary" />,
    title: "Educational Support",
    description:
      "Sponsor a child's school fees, uniforms, and books to secure their future.",
    link: "/ways-to-help/educational-support",
    cta: "Learn More",
  },
  {
    icon: <HeartHandshake className="h-10 w-10 text-secondary" />,
    title: "Become a Volunteer",
    description:
      "Share your time and skills to help us care for the children and run our home.",
    link: "/ways-to-help/volunteers",
    cta: "Join Us Today",
  },
  {
    icon: <BookOpen className="h-10 w-10 text-secondary" />,
    title: "Our Needs List",
    description:
      "Check our list of essential items needed for the daily running of the orphanage.",
    link: "/ways-to-help/needs",
    cta: "View Needs",
  },
];

const WaysToHelp = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-widest text-secondary"
          >
            How You Can Help
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-3xl font-bold text-primary md:text-5xl"
          >
            Make a Real Difference
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-secondary"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {ways.map((way, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col items-center overflow-hidden rounded-3xl bg-tertiary p-8 text-center transition-all hover:bg-primary hover:text-white"
            >
              <div className="mb-6 rounded-2xl bg-white p-5 shadow-sm group-hover:bg-white/10 group-hover:text-white">
                {way.icon}
              </div>
              <h3 className="mb-4 text-2xl font-bold">{way.title}</h3>
              <p className="mb-8 opacity-80">{way.description}</p>
              <Link
                href={way.link}
                className="mt-auto flex items-center font-bold text-secondary group-hover:text-white"
              >
                {way.cta} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WaysToHelp;
