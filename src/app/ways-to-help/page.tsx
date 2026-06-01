import { motion } from "framer-motion";
import { Heart, HandHelping, GraduationCap, Gift, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const ways = [
  {
    title: "Child Sponsorship",
    description:
      "Connect personally with a child and provide for their education, healthcare, and daily needs.",
    icon: <Users className="h-8 w-8" />,
    link: "/ways-to-help/education", // Pointing to education as a primary sponsorship path
    image: "/images/woman-and-child.jpg",
  },
  {
    title: "Become a Volunteer",
    description:
      "Join our team of dedicated volunteers and make a direct impact on the lives of our children.",
    icon: <HandHelping className="h-8 w-8" />,
    link: "/ways-to-help/volunteers",
    image: "/images/slides/slide1.jpg",
  },
  {
    title: "Educational Support",
    description:
      "Help us provide quality education, school supplies, and vocational training for our kids.",
    icon: <GraduationCap className="h-8 w-8" />,
    link: "/ways-to-help/education",
    image: "/images/child-edu.jpg",
  },
  {
    title: "Our Needs List",
    description:
      "Check our list of essential items needed for the daily running of the orphanage.",
    icon: <Gift className="h-8 w-8" />,
    link: "/ways-to-help/needs",
    image: "/images/slides/slide2.jpeg",
  },
  {
    title: "Adoption & Fostering",
    description:
      "Open your home and heart to a child through our legal and supportive adoption process.",
    icon: <Heart className="h-8 w-8" />,
    link: "/ways-to-help/adoption",
    image: "/woman-and-child.jpg",
  },
];

const WaysToHelpPage = () => {
  return (
    <main className="bg-white">
      {/* Header */}
      <section className="relative py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Ways to Help</h1>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">
            Every act of kindness, no matter how small, helps us provide a
            better future for our children.
          </p>
        </div>
      </section>

      {/* Ways Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {ways.map((way, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-[2.5rem] bg-tertiary shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto">
                    <Image
                      src={way.image}
                      alt={way.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="mb-4 text-secondary">{way.icon}</div>
                    <h2 className="text-2xl font-bold text-primary mb-4">
                      {way.title}
                    </h2>
                    <p className="text-gray-600 mb-8">{way.description}</p>
                    <Link
                      href={way.link}
                      className="font-bold text-secondary flex items-center gap-2 hover:gap-4 transition-all"
                    >
                      Learn More <span className="text-2xl">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <Heart className="h-16 w-16 text-secondary mx-auto mb-8 animate-pulse" />
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Make a Difference Today
          </h2>
          <p className="text-xl opacity-80 max-w-2xl mx-auto mb-10">
            Your donations go directly towards providing food, shelter, and
            education for the children at Yahweh Run Orphanage.
          </p>
          <Link
            href="/donate"
            className="inline-block bg-secondary text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/20"
          >
            Donate Now
          </Link>
        </div>
      </section>
    </main>
  );
};

export default WaysToHelpPage;
