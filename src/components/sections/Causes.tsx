"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Button } from "@/components/ui/button";

const causes = [
  {
    id: 1,
    title: "Education for Every Child",
    category: "Education",
    description:
      "We encourage child education. Yahweh orphanage is championing a lead to provide the essential education to a child.",
    image: "/images/child-edu.jpg", // Using image from content folder (assuming it's moved or served)
    raised: 0,
    goal: 10000000,
    currency: "₦",
  },
  {
    id: 2,
    title: "Homes for the Homeless",
    category: "Shelter",
    description:
      "Get the children off the streets. Yahweh orphanage is on a cause to take as much homeless children from off the streets and accommodate them.",
    image: "/images/woman-and-child.jpg",
    raised: 0,
    goal: 10000000,
    currency: "₦",
  },
  {
    id: 3,
    title: "New Building Project",
    category: "Infrastructure",
    description:
      "Orphanage new building project to house children, feed them, educate them and provide every other basic care they need.",
    image: "/images/project/future-building2.jpeg",
    raised: 0,
    goal: 500000000,
    currency: "₦",
  },
];

const Causes = () => {
  return (
    <section className="py-20 bg-tertiary">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col items-center justify-between md:flex-row">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-primary md:text-4xl">
              Our Urgent Causes
            </h2>
            <div className="mt-2 h-1 w-20 bg-secondary"></div>
          </div>
          <Link
            href="/causes"
            className="font-bold text-secondary hover:underline"
          >
            View All Causes →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {causes.map((cause, index) => {
            const progress = (cause.raised / cause.goal) * 100;
            return (
              <motion.div
                key={cause.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-none shadow-lg transition-transform hover:-translate-y-2">
                  <div className="relative h-64 w-full">
                    <Image
                      src={cause.image}
                      alt={cause.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 rounded-full bg-secondary px-4 py-1 text-xs font-bold text-white uppercase">
                      {cause.category}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">
                      {cause.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-6 text-gray-600 line-clamp-2">
                      {cause.description}
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm font-semibold">
                        <span className="text-secondary">
                          Raised: {cause.currency}
                          {cause.raised.toLocaleString()}
                        </span>
                        <span className="text-gray-500">
                          Goal: {cause.currency}
                          {cause.goal.toLocaleString()}
                        </span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-gray-200 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${Math.max(progress, 5)}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-full bg-secondary"
                        ></motion.div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-gray-50 p-6">
                    <Button
                      onClick={() => (location.href = "/donate")}
                      className="w-full bg-primary hover:cursor-pointer hover:bg-primary/90 text-white font-bold py-6"
                    >
                      Donate Now
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Causes;
