"use client";

import PageHeader from "@/components/sections/PageHeader";
import { motion } from "framer-motion";
import { Heart, CreditCard, Banknote, Globe, AlertTriangle } from "lucide-react";
import { useState, useEffect } from "react";
import Modal from "@/components/ui/Modal";
import { companyInfo, contactInfo } from "@/data/company";

const DonatePage = () => {
  const [isFraudModalOpen, setIsFraudModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFraudModalOpen(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-white">
      <Modal
        isOpen={isFraudModalOpen}
        onClose={() => setIsFraudModalOpen(false)}
        title="Fraud Alert"
        size="md"
        overlayClassName="bg-primary/60 backdrop-blur-sm"
      >
        <div className="flex flex-col items-center text-center p-2">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-6">
            <AlertTriangle size={32} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4 uppercase">
            Beware of Fraudsters
          </h3>
          <p className="text-gray-600 leading-relaxed font-medium">
            {companyInfo.fraudAlert}
          </p>
          <button
            onClick={() => setIsFraudModalOpen(false)}
            className="mt-8 w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-primary/90 transition-all"
          >
            I Understand
          </button>
        </div>
      </Modal>

      <PageHeader
        title=" Support Our Mission"
        subTitle=" Your generosity provides food, shelter, and hope for our children.
              Thank you for your kindness."
      />

      {/* Donation Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Local Bank Transfer */}
            <div className="bg-tertiary p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center text-secondary mb-6 shadow-sm">
                <Banknote className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-bold text-primary mb-4">
                Bank Transfer (Local)
              </h2>
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    Bank Name
                  </p>
                  <p className="font-bold text-primary">
                    Ecobank Nigeria Plc
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    Account Name
                  </p>
                  <p className="font-bold text-primary text-sm">
                    Yahweh Run Orphanage Foundation
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    Account Number
                  </p>
                  <p className="font-bold text-secondary text-2xl">
                    2160040222
                  </p>
                </div>
              </div>
            </div>

            {/* Online Payment */}
            <div className="bg-primary p-8 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform"></div>
              <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center text-secondary mb-6">
                <CreditCard className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Paystack / Online</h2>
              <p className="opacity-80 mb-8">
                Securely donate using your debit card or USSD through our
                payment gateway.
              </p>
              <button className="w-full bg-secondary text-white py-4 rounded-xl font-bold text-lg hover:bg-secondary/90 transition-all">
                Pay Securely Online
              </button>
            </div>

            {/* International Donations */}
            <div className="bg-tertiary p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center text-secondary mb-6 shadow-sm">
                <Globe className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-bold text-primary mb-4">
                International (USD)
              </h2>
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    Method
                  </p>
                  <p className="font-bold text-primary">
                    PayPal / Wire Transfer
                  </p>
                </div>
                <p className="text-sm">
                  Please contact us directly for our USD domiciliary account
                  details or PayPal link.
                </p>
                <button
                  onClick={() => {
                    location.href = "/contact";
                  }}
                  className="text-secondary hover:cursor-pointer font-bold flex items-center gap-2 hover:gap-3 transition-all mt-4"
                >
                  Contact for Details <span>→</span>
                </button>
              </div>
            </div>
          </div>

          {/* OTHER COUNTRIES Section */}
          <div className="mt-16 bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden relative group">
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700"></div>

            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-primary mb-8 flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary shadow-sm">
                  <Globe size={24} />
                </div>
                Other Countries & Transfer Services
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="bg-tertiary/50 p-6 rounded-3xl border border-primary/5">
                    <p className="text-gray-700 leading-relaxed text-lg font-medium">
                      <span className="text-primary font-bold">PLEASE NOTE:</span> Contact us first through email or phone before sending any donation by Western Union, Money Gram and other Transfer Services from other countries.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Official Emails</p>
                      <div className="space-y-3">
                        <a href={`mailto:${contactInfo.emails[0]}`} className="text-sm font-bold text-primary hover:text-secondary flex items-center gap-2 group/link transition-colors">
                          <span className="w-2 h-2 rounded-full bg-secondary scale-0 group-hover/link:scale-100 transition-transform"></span>
                          {contactInfo.emails[0]}
                        </a>
                        <a href={`mailto:${contactInfo.emails[1]}`} className="text-sm font-bold text-primary hover:text-secondary flex items-center gap-2 group/link transition-colors">
                          <span className="w-2 h-2 rounded-full bg-secondary scale-0 group-hover/link:scale-100 transition-transform"></span>
                          {contactInfo.emails[1]}
                        </a>
                      </div>
                    </div>
                    <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Official Phones</p>
                      <div className="space-y-3">
                        <a href="tel:+2349159643315" className="text-sm font-bold text-primary hover:text-secondary flex items-center gap-2 group/link transition-colors">
                          <span className="w-2 h-2 rounded-full bg-secondary scale-0 group-hover/link:scale-100 transition-transform"></span>
                          +234 915 964 3315
                        </a>
                        <a href="tel:+2348100607950" className="text-sm font-bold text-primary hover:text-secondary flex items-center gap-2 group/link transition-colors">
                          <span className="w-2 h-2 rounded-full bg-secondary scale-0 group-hover/link:scale-100 transition-transform"></span>
                          +234 810 060 7950
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="bg-secondary/5 p-8 rounded-3xl border border-secondary/20 relative overflow-hidden">
                    <div className="absolute -top-4 -right-4 text-secondary/10 rotate-12">
                      <Heart size={120} />
                    </div>
                    <p className="text-primary text-lg font-bold leading-relaxed relative z-10 italic">
                      "All donations either cash or by cheques should be made to Yahweh Run Orphanage Foundation. Please do not send cash donation by post."
                    </p>
                  </div>

                  <div className="bg-primary p-8 rounded-3xl text-white shadow-lg shadow-primary/20">
                    <p className="text-xs font-bold text-white/50 uppercase tracking-widest mb-4">Hand Delivery Address</p>
                    <p className="text-lg font-bold leading-relaxed">
                      Yahweh Run Orphanage Foundation Office:<br />
                      <span className="text-secondary">No 1, Osaigbovo Street, Off Makava Street, Off Peanut Road, Off Sapele Road, Benin City, Edo State, Nigeria.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Note */}
          <div className="mt-20 bg-gray-50 p-12 rounded-[3rem] text-center max-w-4xl mx-auto">
            <Heart className="h-12 w-12 text-secondary mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-primary mb-4">
              Your Gift Changes Everything
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We are committed to financial integrity. 100% of your public
              donations go directly to supporting the children. We'll send you a
              receipt and periodic updates on the impact of your generosity.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DonatePage;
