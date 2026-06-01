"use client";

import PageHeader from "@/components/sections/PageHeader";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, MessageSquare } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { faqs } from "@/data/faqs";

const FAQItem = ({ faq, index }: { faq: any; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 border-b border-gray-100 pb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left py-4 focus:outline-none"
      >
        <span
          className={`text-lg font-bold transition-colors ${isOpen ? "text-secondary" : "text-primary"}`}
        >
          {faq.question}
        </span>
        <div
          className={`flex-shrink-0 ml-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        >
          {isOpen ? (
            <Minus className="text-secondary" />
          ) : (
            <Plus className="text-primary" />
          )}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-gray-600 leading-relaxed pb-4">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQPage = () => {
  return (
    <main className="bg-white">
      <PageHeader
        title="Frequently Asked Questions"
        subTitle=" Find answers to common questions about our foundation, our
              children, and how you can get involved."
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}

            <div className="mt-20 p-10 bg-tertiary rounded-[3rem] text-center">
              <MessageSquare className="h-10 w-10 text-secondary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-4">
                Still have questions?
              </h3>
              <p className="text-gray-600 mb-8">
                If you couldn't find the answer you're looking for, please don't
                hesitate to reach out to our team.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-primary/90 transition-all"
              >
                Contact Us Directly
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQPage;
