"use client";

import PageHeader from "@/components/sections/PageHeader";
import { motion } from "framer-motion";
import {
  Heart,
  FileText,
  ClipboardCheck,
  Info,
  ShieldCheck,
  Home,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    title: "Initial Inquiry",
    description:
      "Express your interest and learn about our foundation's commitment to every child's success.",
    icon: <Info className="h-6 w-6" />,
  },
  {
    title: "Government Liaison",
    description:
      "Visit the Ministry of Women Affairs and Social Development in Benin City for interviews and investigation.",
    icon: <FileText className="h-6 w-6" />,
  },
  {
    title: "Authorization",
    description:
      "Once satisfied, the ministry issues a letter of authorization to adopt a child.",
    icon: <ClipboardCheck className="h-6 w-6" />,
  },
  {
    title: "Home Integration",
    description:
      "Bring the child into your loving home and begin your journey as a family.",
    icon: <Home className="h-6 w-6" />,
  },
];

const AdoptionPage = () => {
  return (
    <main className="bg-white">
      <PageHeader
        title="Adoption & Fostering"
        subTitle="You can help a child develop and grow up to be an accepted member of the society. 
              Through adoption, you can make the child part of your family forever."
      />

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Our Philosophy on Adoption
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Every child is an object of our love for God and for humanity.
                To adopt or foster a baby from Yahweh Run Orphanage Foundation
                is a journey of the heart. Adopters must be ready to love the
                child for the rest of their days and be accountable for their
                success.
              </p>
              <div className="bg-tertiary p-8 rounded-3xl border-l-4 border-secondary">
                <p className="italic text-primary font-medium">
                  "We do not charge money for adoption. Every child is a gift,
                  not a commodity. Be ready to be a good steward of this gift."
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Image
                src="/woman-and-child.jpg"
                alt="Mother and Child"
                width={600}
                height={450}
                className="rounded-[3rem] shadow-2xl"
              />
            </div>
          </div>

          {/* Steps Section */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">
              The Adoption Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative text-center px-4"
                >
                  <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center text-secondary mx-auto mb-6 relative z-10">
                    {step.icon}
                    <div className="absolute -top-2 -right-2 bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                      {i + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[70%] w-full h-[2px] bg-tertiary"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Important Conditions */}
          <div className="bg-tertiary rounded-[3rem] p-8 md:p-16">
            <div className="flex items-center gap-4 mb-12">
              <ShieldCheck className="h-10 w-10 text-secondary" />
              <h2 className="text-3xl font-bold text-primary">
                Important Conditions
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "No monetary charges for adoption - don't offer money to anyone.",
                "Original letter of approval from Ministry is mandatory.",
                "Medical tests are carried out for all children.",
                "Regular progress reports of adopted children are required.",
                "Home monitoring is handled exclusively by State Social Welfare.",
                "Adoptive parents must demonstrate lifelong commitment and love.",
              ].map((condition, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="mt-1 h-5 w-5 rounded-full bg-secondary flex-shrink-0 flex items-center justify-center text-white text-[10px]">
                    ✓
                  </div>
                  <p className="text-gray-700 font-medium">{condition}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 text-center">
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              For further inquiries regarding adoption or to schedule an initial
              consultation, please reach out to our social welfare department.
            </p>
            <Link
              href="/contact"
              className="bg-primary text-white px-12 py-4 rounded-full font-bold hover:bg-primary/90 transition-all"
            >
              Contact Social Welfare
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AdoptionPage;
