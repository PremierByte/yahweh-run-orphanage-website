"use client";

import Image from "next/image";
import {
  Building2,
  Home,
  GraduationCap,
  Stethoscope,
  Briefcase,
  Trees,
} from "lucide-react";
import PageHeader from "@/components/sections/PageHeader";

const projectImages = [
  "/images/project/future-building1.jpeg",
  "/images/project/future-building2.jpeg",
  "/images/project/future-building3.jpeg",
  "/images/project/future-building4.jpeg",
  "/images/project/future-building5.jpeg",
  "/images/project/future-building6.jpeg",
];

const features = [
  { icon: <Home />, title: "Homes for Orphans & Staff" },
  { icon: <GraduationCap />, title: "Nursery to Secondary School" },
  { icon: <Stethoscope />, title: "Clinic & Hospital" },
  { icon: <Briefcase />, title: "Skill Acquisition Center" },
  { icon: <Trees />, title: "Recreational Center" },
  { icon: <Building2 />, title: "Modern Facilities" },
];

const ProjectPage = () => {
  return (
    <main className="bg-white">
      <PageHeader
        title="Our Future Home"
        subTitle="Yahweh Run Orphanage Foundation Building Project at Udo, Benin-City, Nigeria. A comprehensive community for our children to thrive."
      />

      {/* Project Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Yahweh Building Project
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our orphanage building project will have Homes both for Orphans
                and Staffs, Nursery to Secondary School Level, Clinics/Hospital,
                Skill Acquisition & Recreational Centers for Youth and Mothers.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 bg-tertiary rounded-2xl"
                  >
                    <div className="text-secondary">{feature.icon}</div>
                    <span className="font-bold text-primary">
                      {feature.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/project/future-building1.jpeg"
                alt="Project Preview"
                width={800}
                height={600}
                className="rounded-[3rem] shadow-2xl"
              />
              <div className="absolute -bottom-10 -right-10 hidden md:block">
                <div className="bg-secondary p-8 rounded-3xl text-white shadow-xl">
                  <p className="text-4xl font-bold">500M</p>
                  <p className="font-bold uppercase tracking-widest text-sm">
                    Goal (₦)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-tertiary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            Architectural Vision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectImages.map((img, i) => (
              <div
                key={i}
                className="group relative h-80 overflow-hidden rounded-3xl shadow-lg"
              >
                <Image
                  src={img}
                  alt={`Project Image ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-primary">
              Help Us Build This Dream
            </h2>
            <p className="text-xl text-gray-600">
              Your contribution towards our building project ensures that we can
              house more children and provide them with world-class facilities
              for their growth and development.
            </p>
            <div className="flex justify-center gap-4">
              <button onClick={() => { window.location.href = "/donate" }} className="bg-primary hover:cursor-pointer text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-all">
                Support the Project
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectPage;
