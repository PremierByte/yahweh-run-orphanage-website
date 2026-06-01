"use client";

import PageHeader from "@/components/sections/PageHeader";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Star, Users, Briefcase } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const scholarshipLevels = [
  {
    level: "Primary School",
    description:
      "Provide the foundational years of learning, including uniforms, books, and tuition.",
    icon: <Star className="h-6 w-6" />,
  },
  {
    level: "Secondary School",
    description:
      "Support a student through their crucial adolescent years of higher learning.",
    icon: <BookOpen className="h-6 w-6" />,
  },
  {
    level: "University",
    description:
      "Empower a brilliant mind to achieve a degree and professional career path.",
    icon: <GraduationCap className="h-6 w-6" />,
  },
  {
    level: "Vocational Studies",
    description:
      "Equip a young adult with practical skills like tailoring, carpentry, or IT.",
    icon: <Briefcase className="h-6 w-6" />,
  },
];

const EducationSupportPage = () => {
  return (
    <main className="bg-white">
      <PageHeader
        title=" Education: A Path to Hope"
        subTitle="Yahweh Run Orphanage Foundation is championing the education of
              children who are orphans and less privileged. We believe every
              child deserves the key to a better future."
      />

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Image
                src="/child-edu.jpg"
                alt="Education for Children"
                width={600}
                height={450}
                className="rounded-[3rem] shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Our Educational Mission
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Education is the most powerful weapon which you can use to
                change the world. At Yahweh Run, we don't just provide shelter;
                we nurture minds. Many of our children come from background
                where education was a distant dream. We make it their reality.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-primary font-bold">
                  <div className="h-10 w-10 rounded-full bg-tertiary flex items-center justify-center text-secondary">
                    <Users size={20} />
                  </div>
                  <span>85+ Children Currently in School</span>
                </div>
                <p className="text-gray-600">
                  You can be a part of the cause by sponsoring a child in
                  Primary, Secondary, or in the University. Your support covers
                  tuition, books, uniforms, and specialized learning materials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarship Grid */}
      <section className="py-20 bg-tertiary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-12">
            Scholarship Opportunities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {scholarshipLevels.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-all border border-gray-100"
              >
                <div className="bg-tertiary w-14 h-14 rounded-2xl flex items-center justify-center text-secondary mx-auto mb-6">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">
                  {s.level}
                </h3>
                <p className="text-gray-600 text-sm mb-6">{s.description}</p>
                <Link
                  href="/contact"
                  className="text-secondary font-bold hover:underline"
                >
                  Inquire Now →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-[3rem] p-12 text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Ready to Sponsor?
            </h2>
            <p className="text-xl opacity-80 mb-10 max-w-2xl mx-auto">
              To sponsor a child or donate specifically to our education fund,
              please contact us or use our donation portal. Every naira brings a
              child closer to their dream.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/donate"
                className="bg-secondary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-secondary/90 transition-all"
              >
                Donate to Education
              </Link>
              <Link
                href="/contact"
                className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all"
              >
                Contact Sponsorship Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EducationSupportPage;
