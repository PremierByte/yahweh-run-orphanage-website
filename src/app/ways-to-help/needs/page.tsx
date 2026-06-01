"use client";

import PageHeader from "@/components/sections/PageHeader";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  Utensils,
  BookOpen,
  HeartPulse,
  Laptop,
  Package,
} from "lucide-react";

const needCategories = [
  {
    title: "General Items",
    icon: <Package className="h-8 w-8 text-secondary" />,
    items: [
      "School Bus & Generator",
      "Nappies (Towel or Pampers)",
      "Body & Hair Creams",
      "Medicated Soaps & Powder",
      "Toothpastes/Tooth brushes",
      "Towels & Bed sheets",
      "Rubber Slippers (All sizes)",
      "Detergents & Disinfectants",
      "Sanitary Towels",
    ],
  },
  {
    title: "Food & Nutrition",
    icon: <Utensils className="h-8 w-8 text-secondary" />,
    items: [
      "SMA Gold / Progress",
      "Powdered & Liquid Milk",
      "Rice, Beans & Garri",
      "Semovita & Yam",
      "Cooking Oil (Veg & Red)",
      "Indomie & Noodles",
      "Cereals (Corn Flakes, Oats)",
      "Protein (Chicken, Meat, Fish)",
    ],
  },
  {
    title: "School Supplies",
    icon: <BookOpen className="h-8 w-8 text-secondary" />,
    items: [
      "School Shoes & Bags",
      "Exercise & Text Books",
      "Stationery Sets",
      "School Uniform Materials",
      "Black Shoes (Various sizes)",
    ],
  },
  {
    title: "Medical Needs",
    icon: <HeartPulse className="h-8 w-8 text-secondary" />,
    items: [
      "Antibiotics",
      "Blood Tonics & Capsules",
      "Paracetamol",
      "Multi-vitamins",
      "First Aid Kits",
      "Basic Medical Supplies",
    ],
  },
  {
    title: "Library & Tech",
    icon: <Laptop className="h-8 w-8 text-secondary" />,
    items: [
      "Computers & Laptops",
      "Reading Tables & Chairs",
      "Bookshelves",
      "Inspirational Books",
      "Educational Software",
    ],
  },
  {
    title: "Kitchen & Utility",
    icon: <ShoppingCart className="h-8 w-8 text-secondary" />,
    items: [
      "Large Size Stoves",
      "Cooking Pots & Frying Pans",
      "Plastic Plates & Cups",
      "Cutlery Sets",
      "Charcoal & Cooking Gas",
    ],
  },
];

const NeedsPage = () => {
  return (
    <main className="bg-white">
      <PageHeader
        title="Our Needs"
        subTitle="Your donations of essential items help us maintain a high standard of care for every child. 
              Small or large, every contribution provides Rehabilitation, Reformation, and Reintegration."
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Current Orphanage Needs
            </h2>
            <p className="text-gray-600">
              Below are some of the items we require for the daily operations
              and long-term development of the orphanage. You can drop these
              items off at our facility or contact us for pickup.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {needCategories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-tertiary p-8 rounded-[2.5rem] border border-gray-100 shadow-sm"
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="p-3 bg-white rounded-2xl shadow-sm">
                    {cat.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary">
                    {cat.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {cat.items.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-secondary"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 bg-primary text-white p-12 rounded-[3rem] text-center">
            <h3 className="text-2xl font-bold mb-4">Bulk Donation?</h3>
            <p className="opacity-80 mb-8 max-w-2xl mx-auto">
              If you wish to donate a school bus, generator, or other large
              items, please contact us directly so we can arrange the necessary
              logistics and documentation.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-secondary text-white px-10 py-4 rounded-full font-bold hover:bg-secondary/90 transition-all">
                Contact Us Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NeedsPage;
