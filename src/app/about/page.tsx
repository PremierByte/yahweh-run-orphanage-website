import Image from "next/image";
import { companyInfo } from "@/data/company";
import { Heart, Target, Eye, Users, HelpCircle } from "lucide-react";
import Link from "next/link";
import CTA from "@/components/sections/CTA";
import PageHeader from "@/components/sections/PageHeader";

const AboutPage = () => {
  return (
    <main className="bg-white">
      <PageHeader
        title="  About Our Foundation"
        subTitle="Dedicated to providing love, hope, and a brighter future for
              abandoned and vulnerable children in Nigeria."
      />

      {/* Mission & Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <Image
                src="/images/woman-and-child.jpg"
                alt="About Yahweh Run Orphanage"
                width={600}
                height={400}
                className="rounded-3xl shadow-2xl object-cover"
              />
            </div>
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0 bg-tertiary p-4 rounded-2xl">
                  <Target className="h-8 w-8 text-secondary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-3">
                    Our Mission
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {companyInfo.mission}
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 bg-tertiary p-4 rounded-2xl">
                  <Eye className="h-8 w-8 text-secondary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-3">
                    Our Vision
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {companyInfo.vision}
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 bg-tertiary p-4 rounded-2xl">
                  <Heart className="h-8 w-8 text-secondary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-3">
                    Our Belief
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {companyInfo.beliefs}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-tertiary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-12">
            Our Core Values
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {companyInfo.values.split(", ").map((value, index) => (
              <div
                key={index}
                className="bg-white px-8 py-4 rounded-full shadow-sm text-primary font-bold hover:bg-secondary hover:text-white transition-all cursor-default"
              >
                {value}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link
              href="/about/team"
              className="group bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-all flex items-center justify-between"
            >
              <div className="text-left">
                <h3 className="text-xl font-bold text-primary">
                  Board of Trustees
                </h3>
                <p className="text-gray-500 text-sm">
                  Meet the leadership behind our mission.
                </p>
              </div>
              <div className="h-12 w-12 rounded-full bg-tertiary flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                <Users size={20} />
              </div>
            </Link>
            <Link
              href="/about/faq"
              className="group bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-all flex items-center justify-between"
            >
              <div className="text-left">
                <h3 className="text-xl font-bold text-primary">
                  Common Questions
                </h3>
                <p className="text-gray-500 text-sm">
                  Find answers to frequently asked questions.
                </p>
              </div>
              <div className="h-12 w-12 rounded-full bg-tertiary flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                <HelpCircle size={20} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
};

export default AboutPage;
