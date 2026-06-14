"use client";

import PageHeader from "@/components/sections/PageHeader";
import { contactInfo } from "@/data/company";
import {
  Users,
  Mail,
  MapPin,
  Download,
  HeartHandshake,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const volunteerRoles = [
  {
    title: "Child Care & Mentorship",
    description:
      "Spend time playing, teaching, and mentoring our children to build their confidence and social skills.",
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: "Educational Support",
    description:
      "Help with homework, vocational training, or teaching a specific subject or skill you're passionate about.",
    icon: <CheckCircle className="h-6 w-6" />,
  },
  {
    title: "Administrative Help",
    description:
      "Assist with office tasks, social media, event planning, or fundraising activities.",
    icon: <HeartHandshake className="h-6 w-6" />,
  },
];

const VolunteersPage = () => {
  return (
    <main className="bg-white">
      <PageHeader
        title="Become a Volunteer"
        subTitle="Our foundation welcomes anyone who wishes to support us by
              volunteering in any capacity they are able to. Your time is the
              most valuable gift you can give."
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <Image
                src="/images/family-traveling-together-through-woods.jpg"
                alt="Family traveling together through woods"
                width={600}
                height={400}
                className="rounded-[3rem] shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Why Volunteer With Us?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Volunteering at Yahweh Run Orphanage is a life-changing
                experience. Not only do you make a direct impact on the lives of
                vulnerable children, but you also become part of a community
                dedicated to love and service. Whether you have an hour a week
                or a month to spare, we value your contribution.
              </p>
              <div className="space-y-6">
                {volunteerRoles.map((role, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1 text-secondary">
                      {role.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">{role.title}</h4>
                      <p className="text-sm text-gray-600">
                        {role.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Application Section */}
          <div className="bg-tertiary rounded-[3rem] p-8 md:p-16 border border-gray-100">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-primary mb-6">
                How to Apply
              </h2>
              <p className="text-gray-600 mb-12">
                Applying to be a volunteer is straightforward. Follow the steps
                below and we'll be waiting to receive you soonest.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white p-8 rounded-3xl shadow-sm">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4 text-xl">
                    1
                  </div>
                  <h4 className="font-bold mb-2">Download Form</h4>
                  <p className="text-sm text-gray-500">
                    Get the registration form in PDF format.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4 text-xl">
                    2
                  </div>
                  <h4 className="font-bold mb-2">Complete It</h4>
                  <p className="text-sm text-gray-500">
                    Fill in your details and areas of interest.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4 text-xl">
                    3
                  </div>
                  <h4 className="font-bold mb-2">Submit</h4>
                  <p className="text-sm text-gray-500">
                    Email it to us or visit our office in person.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href="/pdf/Volunteer-form.pdf"
                  target="_blank"
                  className="flex items-center gap-2 bg-secondary text-white px-10 py-4 rounded-full font-bold hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/20"
                >
                  <Download size={20} /> Download Form
                </a>
              </div>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex gap-6 items-center p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
              <div className="bg-tertiary p-4 rounded-2xl text-secondary">
                <Mail size={32} />
              </div>
              <div>
                <h4 className="font-bold text-primary">Email Your Form</h4>
                <p className="text-gray-600">{contactInfo.emails[0]}</p>
              </div>
            </div>
            <div className="flex gap-6 items-center p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
              <div className="bg-tertiary p-4 rounded-2xl text-secondary">
                <MapPin size={32} />
              </div>
              <div className="">
                <h4 className="font-bold text-primary">Visit Our Office</h4>
                <p className="text-gray-600">
                  {contactInfo.locations[0].address}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default VolunteersPage;
