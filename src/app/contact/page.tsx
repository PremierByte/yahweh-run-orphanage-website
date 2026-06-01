"use client";

import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { contactInfo } from "@/data/company";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PageHeader from "@/components/sections/PageHeader";
import InteractiveMap from "@/components/common/InteractiveMap";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";
import { toast } from "sonner";
import { useState } from "react";

const contactSchema = z.object({
  fullname: z.string().min(3, "Full name is required"),
  email: z.string().email("Valid email is required"),
  subject: z.string().min(5, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const response = await axios.post("/api/contact", data);
      if (response.data.success) {
        toast.success("Message sent successfully! We'll get back to you soon.");
        reset();
      } else {
        toast.error("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      toast.error("An error occurred. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-white">
      <PageHeader
        title="Contact Us"
        subTitle="Have questions or want to support our mission? We'd love to hear from you."
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">
                Get in Touch
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="bg-tertiary p-4 rounded-2xl text-secondary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">
                      Call Us
                    </p>
                    {contactInfo.phones.map((phone, i) => (
                      <p key={i} className="text-xl font-bold text-primary">
                        {phone}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-tertiary p-4 rounded-2xl text-secondary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">
                      Email Us
                    </p>
                    <p className="text-xl font-bold text-primary">
                      {contactInfo.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-tertiary p-4 rounded-2xl text-secondary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">
                      Visit Us
                    </p>
                    {contactInfo.locations.map((loc, i) => (
                      <p
                        key={i}
                        className="text-xl font-bold text-primary leading-tight"
                      >
                        {loc.address}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-tertiary rounded-3xl">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Office Hours
                </h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-bold text-primary">
                      8:00 AM - 5:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-bold text-primary">
                      9:00 AM - 2:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between text-secondary">
                    <span>Sunday</span>
                    <span className="font-bold uppercase">
                      Visiting by Appointment
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
              <h3 className="text-2xl font-bold text-primary mb-8">
                Send us a Message
              </h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">
                      Full Name
                    </label>
                    <Input
                      {...register("fullname")}
                      placeholder="John Doe"
                      className={errors.fullname ? "border-red-500" : "h-12"}
                    />
                    {errors.fullname && (
                      <p className="text-xs text-red-500 font-bold">
                        {errors.fullname.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">
                      Email Address
                    </label>
                    <Input
                      {...register("email")}
                      placeholder="john@example.com"
                      className={errors.email ? "border-red-500" : "h-12"}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 font-bold">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">
                    Subject
                  </label>
                  <Input
                    {...register("subject")}
                    placeholder="How can we help you?"
                    className={errors.subject ? "border-red-500" : "h-12"}
                  />
                  {errors.subject && (
                    <p className="text-xs text-red-500 font-bold">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">
                    Message
                  </label>
                  <textarea
                    {...register("message")}
                    className={`w-full min-h-[150px] p-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary ${
                      errors.message ? "border-red-500" : "border-gray-200"
                    }`}
                    placeholder="Write your message here..."
                  ></textarea>
                  {errors.message && (
                    <p className="text-xs text-red-500 font-bold">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold py-6 text-lg rounded-xl flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin h-5 w-5" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        <InteractiveMap />
      </div>
    </main>
  );
};

export default ContactPage;
