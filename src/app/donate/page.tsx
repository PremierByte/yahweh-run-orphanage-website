"use client";

import PageHeader from "@/components/sections/PageHeader";
import { motion } from "framer-motion";
import { Heart, CreditCard, Banknote, Globe } from "lucide-react";

const DonatePage = () => {
  return (
    <main className="bg-white">
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
                    First Bank of Nigeria
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
                    2034985612
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
