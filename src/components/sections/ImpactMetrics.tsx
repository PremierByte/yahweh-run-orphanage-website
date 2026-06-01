"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Utensils, Users, GraduationCap } from "lucide-react";

const metrics = [
  {
    icon: <Users className="h-8 w-8 text-secondary" />,
    label: "Children Supported",
    value: "150+",
    description: "Providing a safe home and loving care.",
  },
  {
    icon: <Utensils className="h-8 w-8 text-secondary" />,
    label: "Meals Served",
    value: "12,000+",
    description: "Nutritious meals provided monthly.",
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-secondary" />,
    label: "Children in School",
    value: "85",
    description: "Quality education for a better future.",
  },
  {
    icon: <Heart className="h-8 w-8 text-secondary" />,
    label: "Active Sponsors",
    value: "200+",
    description: "Generous souls making it all possible.",
  },
];

const ImpactMetrics = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary md:text-4xl"
          >
            Our Impact in Numbers
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-2 h-1 w-20 bg-secondary"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center p-6 text-center bg-tertiary rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4 rounded-full bg-white p-4 shadow-sm">
                {metric.icon}
              </div>
              <h3 className="mb-1 text-3xl font-bold text-primary">
                {metric.value}
              </h3>
              <p className="mb-2 font-semibold text-secondary uppercase tracking-wider text-sm">
                {metric.label}
              </p>
              <p className="text-gray-600 text-sm">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
