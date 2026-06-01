import React from "react";
import "leaflet/dist/leaflet.css";
import { ExternalLink } from "lucide-react";
import { contactInfo } from "@/data/company";

const InteractiveMap: React.FC = () => {
  return (
    <div className="w-full h-[500px] rounded-[32px] overflow-hidden border border-border shadow-xl relative group">
      <iframe
        title="Interactive Office Map"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        src={`https://maps.google.com/maps?q=${encodeURIComponent(
          contactInfo.locations[0].address,
        )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
        allowFullScreen
        loading="lazy"
      />

      <div className="absolute bottom-6 left-6 right-6 md:right-auto md:w-96 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/20">
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-[10px] font-bold text-brand-red uppercase tracking-tighter">
              Current View
            </p>
            <h4 className="font-bold text-brand-navy">
              {contactInfo.locations[0].label}
            </h4>
          </div>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              contactInfo.locations[0].address,
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-brand-red text-white rounded-full hover:scale-110 transition-transform"
          >
            <ExternalLink size={16} />
          </a>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {contactInfo.locations[0].address}
        </p>
      </div>
    </div>
  );
};

export default InteractiveMap;
