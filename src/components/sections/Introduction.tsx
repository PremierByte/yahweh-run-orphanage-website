"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { companyInfo } from "@/data/company";
import { Heart, ShieldCheck, Stars } from "lucide-react";

const Introduction = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
              <Image 
                src="/woman-and-child.jpg" 
                alt="Children playing" 
                width={600} 
                height={700}
                className="object-cover w-full h-[500px]"
              />
            </div>
          </motion.div>
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-secondary font-black uppercase tracking-[0.3em] text-xs mb-4 block">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-primary mb-8 leading-tight">
              A Home Built on <span className="text-secondary">Love</span>,{" "}
              <br />
              Faith and Hope.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Established in April 2022, Yahweh Run Orphanage Foundation was
              born out of a deep-seated desire to rescue, rehabilitate, and
              reintegrate vulnerable children. We don't just provide a roof; we
              provide a family.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="flex gap-4">
                <div className="bg-tertiary p-3 rounded-2xl text-secondary h-fit">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Our Mission</h4>
                  <p className="text-sm text-gray-500 line-clamp-2">
                    {companyInfo.mission}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-tertiary p-3 rounded-2xl text-secondary h-fit">
                  <Heart size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Our Values</h4>
                  <p className="text-sm text-gray-500 line-clamp-2">
                    {companyInfo.values}
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-sm group"
            >
              Read more
              <span className="w-12 h-[2px] bg-secondary group-hover:w-16 transition-all"></span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
