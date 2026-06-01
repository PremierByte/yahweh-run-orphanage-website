"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Building2, ArrowRight } from "lucide-react";

const ProjectHighlight = () => {
  return (
    <section className="py-24 bg-primary text-white overflow-hidden relative">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-secondary rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[4rem] p-8 md:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Cluster */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-64 relative rounded-3xl overflow-hidden shadow-2xl">
                    <Image 
                      src="/images/project/future-building1.jpeg" 
                      alt="Project View 1" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <div className="h-48 relative rounded-3xl overflow-hidden shadow-2xl">
                    <Image 
                      src="/images/project/future-building2.jpeg" 
                      alt="Project View 2" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="pt-12 space-y-4">
                  <div className="h-48 relative rounded-3xl overflow-hidden shadow-2xl">
                    <Image 
                      src="/images/project/future-building3.jpeg" 
                      alt="Project View 3" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <div className="h-64 relative rounded-3xl overflow-hidden shadow-2xl">
                    <Image 
                      src="/images/project/future-building4.jpeg" 
                      alt="Project View 4" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Overlay Stat Card */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary p-8 rounded-[2.5rem] text-center shadow-2xl border-4 border-primary">
                 <p className="text-4xl font-black mb-1">500M</p>
                 <p className="text-xs font-bold uppercase tracking-widest opacity-80">Target Goal (₦)</p>
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center text-secondary">
                  <Building2 size={24} />
                </div>
                <span className="text-secondary font-black uppercase tracking-[0.3em] text-xs">
                  Featured Project
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
                Help Us Build a <span className="text-secondary">Community</span> of Excellence.
              </h2>
              <p className="text-blue-100/60 text-lg leading-relaxed mb-8">
                Our building project at Udo, Benin-City is more than just an orphanage. It's a comprehensive hub featuring homes, schools, a clinic, and vocational centers designed to empower children and mothers alike.
              </p>
              
              <ul className="space-y-4 mb-10">
                {["Modern Residential Wings", "Nursery to Secondary Schools", "Dedicated Skill Acquisition Center"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-secondary flex items-center justify-center text-primary text-[10px] font-black">✓</div>
                    <span className="font-bold text-sm text-blue-100/80">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/project" 
                  className="bg-secondary text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:bg-secondary/90 transition-all flex items-center gap-2"
                >
                  View Project <ArrowRight size={18} />
                </Link>
                <Link 
                  href="/donate" 
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:bg-white hover:text-primary transition-all"
                >
                  Support Now
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlight;
