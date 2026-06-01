"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Award, Heart } from "lucide-react";
import PageHeader from "@/components/sections/PageHeader";
import { trustees } from "@/data/trustees";

const TeamPage = () => {
  return (
    <main className="bg-white">
      <PageHeader
        title="Board of Trustees"
        subTitle="Our leadership team is composed of dedicated professionals and
              spiritual leaders committed to the highest standards of integrity,
              accountability, and compassionate care."
      />

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Governing with Integrity
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              The Board of Trustees at Yahweh Run Orphanage Foundation provides
              strategic oversight, ensuring that every resource is utilized
              effectively for the benefit of the children. Our board members
              bring a wealth of experience in administration, law, ministry, and
              social work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustees.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="relative h-80 w-full mb-6 overflow-hidden rounded-[2rem] shadow-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 text-white">
                    <p className="text-sm italic">{member.description}</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary">
                  {member.name}
                </h3>
                <p className="text-secondary font-semibold text-sm uppercase tracking-wider">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars of Leadership */}
      <section className="py-20 bg-tertiary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-10 rounded-3xl shadow-sm text-center">
              <div className="bg-tertiary w-16 h-16 rounded-2xl flex items-center justify-center text-secondary mx-auto mb-6">
                <ShieldCheck size={32} />
              </div>
              <h4 className="text-xl font-bold text-primary mb-4">
                Accountability
              </h4>
              <p className="text-gray-600 text-sm">
                We maintain strict financial and operational transparency in all
                our activities.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm text-center">
              <div className="bg-tertiary w-16 h-16 rounded-2xl flex items-center justify-center text-secondary mx-auto mb-6">
                <Award size={32} />
              </div>
              <h4 className="text-xl font-bold text-primary mb-4">
                Excellence
              </h4>
              <p className="text-gray-600 text-sm">
                Striving for the best possible outcomes in the rehabilitation
                and education of our kids.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm text-center">
              <div className="bg-tertiary w-16 h-16 rounded-2xl flex items-center justify-center text-secondary mx-auto mb-6">
                <Heart size={32} />
              </div>
              <h4 className="text-xl font-bold text-primary mb-4">
                Compassion
              </h4>
              <p className="text-gray-600 text-sm">
                Every decision is rooted in our deep love for God and the
                children we serve.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TeamPage;
