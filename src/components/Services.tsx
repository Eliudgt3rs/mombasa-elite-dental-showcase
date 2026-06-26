import { useState } from "react";
import { services, ServiceItem } from "../types";
import { Sparkles, Activity, Smile, Layers, Check, X, Clock, ShieldCheck, HeartPulse } from "lucide-react";

// Safe icon mapper helper
function renderServiceIcon(iconName: string, className: string) {
  switch (iconName) {
    case "Sparkles":
      return <Sparkles className={className} />;
    case "Hammer":
      return <Layers className={className} />;
    case "Smile":
      return <Smile className={className} />;
    case "Activity":
      return <Activity className={className} />;
    default:
      return <HeartPulse className={className} />;
  }
}

interface ServicesProps {
  onBookSelectedTreatment: (treatmentName: string) => void;
}

export default function Services({ onBookSelectedTreatment }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-teal-600 block">
            Expertly Crafted Solutions
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            High-Value Dental Treatments
          </h2>
          <p className="font-sans text-base sm:text-lg text-slate-500">
            We specialize in ultra-precise aesthetic redesigns, reconstructive surgery, and luxurious prevention, utilizing state-of-the-art diagnostics.
          </p>
        </div>

        {/* Bento Grid Layout (Aggressively Responsive) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Card 1: Cosmetic Dentistry (Wide/Large - 7 columns on desktop) */}
          <div
            onClick={() => setSelectedService(services[0])}
            className="md:col-span-7 bg-white rounded-3xl border border-slate-100 hover:border-teal-500/20 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer group hover:-translate-y-1 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-teal-50/30 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3 group-hover:bg-teal-100/30 transition-colors" />
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                  {renderServiceIcon(services[0].iconName, "w-6 h-6")}
                </div>
                <span className="font-sans text-xs font-semibold bg-teal-50 text-teal-700 px-3 py-1 rounded-full">
                  {services[0].highlight}
                </span>
              </div>
              
              <div className="space-y-2">
                <p className="font-sans text-xs uppercase tracking-widest text-slate-400 font-semibold">{services[0].subtitle}</p>
                <h3 className="font-serif text-2xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                  {services[0].title}
                </h3>
                <p className="font-sans text-sm sm:text-base text-slate-500 leading-relaxed max-w-xl">
                  {services[0].description}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-8 border-t border-slate-50 mt-8">
              <span className="font-sans text-xs text-slate-400">Duration: <strong className="text-slate-700">{services[0].duration}</strong></span>
              <span className="font-sans text-xs font-semibold text-teal-600 group-hover:translate-x-1 transition-transform inline-flex items-center space-x-1">
                <span>View Treatment Details</span>
                <span>&rarr;</span>
              </span>
            </div>
          </div>

          {/* Card 2: Dental Implants (Tall - 5 columns on desktop) */}
          <div
            onClick={() => setSelectedService(services[1])}
            className="md:col-span-5 bg-white rounded-3xl border border-slate-100 hover:border-teal-500/20 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer group hover:-translate-y-1 relative overflow-hidden"
          >
            <div className="absolute bottom-0 right-0 w-36 h-36 bg-slate-50 rounded-full blur-2xl -z-10" />
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-600 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                  {renderServiceIcon(services[1].iconName, "w-6 h-6")}
                </div>
                <span className="font-sans text-xs font-semibold bg-amber-50 text-amber-800 px-3 py-1 rounded-full">
                  {services[1].highlight}
                </span>
              </div>

              <div className="space-y-2">
                <p className="font-sans text-xs uppercase tracking-widest text-slate-400 font-semibold">{services[1].subtitle}</p>
                <h3 className="font-serif text-2xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                  {services[1].title}
                </h3>
                <p className="font-sans text-sm text-slate-500 leading-relaxed">
                  {services[1].description}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-8 border-t border-slate-50 mt-8">
              <span className="font-sans text-xs text-slate-400">Duration: <strong className="text-slate-700">{services[1].duration}</strong></span>
              <span className="font-sans text-xs font-semibold text-teal-600 group-hover:translate-x-1 transition-transform inline-flex items-center space-x-1">
                <span>View Details</span>
                <span>&rarr;</span>
              </span>
            </div>
          </div>

          {/* Card 3: Orthodontics (Tall - 5 columns on desktop) */}
          <div
            onClick={() => setSelectedService(services[2])}
            className="md:col-span-5 bg-white rounded-3xl border border-slate-100 hover:border-teal-500/20 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer group hover:-translate-y-1 relative overflow-hidden"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-600 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                  {renderServiceIcon(services[2].iconName, "w-6 h-6")}
                </div>
                <span className="font-sans text-xs font-semibold bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
                  {services[2].highlight}
                </span>
              </div>

              <div className="space-y-2">
                <p className="font-sans text-xs uppercase tracking-widest text-slate-400 font-semibold">{services[2].subtitle}</p>
                <h3 className="font-serif text-2xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                  {services[2].title}
                </h3>
                <p className="font-sans text-sm text-slate-500 leading-relaxed">
                  {services[2].description}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-8 border-t border-slate-50 mt-8">
              <span className="font-sans text-xs text-slate-400">Duration: <strong className="text-slate-700">{services[2].duration}</strong></span>
              <span className="font-sans text-xs font-semibold text-teal-600 group-hover:translate-x-1 transition-transform inline-flex items-center space-x-1">
                <span>View Details</span>
                <span>&rarr;</span>
              </span>
            </div>
          </div>

          {/* Card 4: Premium Routine Care (Wide - 7 columns on desktop) */}
          <div
            onClick={() => setSelectedService(services[3])}
            className="md:col-span-7 bg-white rounded-3xl border border-slate-100 hover:border-teal-500/20 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer group hover:-translate-y-1 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-teal-50/10 rounded-full blur-3xl -z-10 translate-x-1/3" />
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                  {renderServiceIcon(services[3].iconName, "w-6 h-6")}
                </div>
                <span className="font-sans text-xs font-semibold bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full">
                  {services[3].highlight}
                </span>
              </div>

              <div className="space-y-2">
                <p className="font-sans text-xs uppercase tracking-widest text-slate-400 font-semibold">{services[3].subtitle}</p>
                <h3 className="font-serif text-2xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                  {services[3].title}
                </h3>
                <p className="font-sans text-sm sm:text-base text-slate-500 leading-relaxed max-w-xl">
                  {services[3].description}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-8 border-t border-slate-50 mt-8">
              <span className="font-sans text-xs text-slate-400">Duration: <strong className="text-slate-700">{services[3].duration}</strong></span>
              <span className="font-sans text-xs font-semibold text-teal-600 group-hover:translate-x-1 transition-transform inline-flex items-center space-x-1">
                <span>View Treatment Details</span>
                <span>&rarr;</span>
              </span>
            </div>
          </div>

        </div>

      </div>

      {/* Interactive Service Details Overlay Drawer */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-end overflow-hidden">
          {/* Backdrop fade */}
          <div
            onClick={() => setSelectedService(null)}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
          />

          {/* Drawer Panel */}
          <div className="relative w-full max-w-lg h-full bg-white shadow-2xl flex flex-col justify-between z-10 overflow-y-auto transform transition-transform duration-300 border-l border-slate-100">
            
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-slate-100 px-6 py-5 flex items-center justify-between z-10">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600">
                  {renderServiceIcon(selectedService.iconName, "w-5 h-5")}
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-slate-900">{selectedService.title}</h4>
                  <p className="font-sans text-xs text-slate-400">{selectedService.subtitle}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-all focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6 space-y-8 flex-grow">
              
              {/* Image Banner */}
              <div className="h-48 rounded-2xl overflow-hidden relative shadow-inner">
                <img
                  src={selectedService.imageUrl}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                <span className="absolute top-4 right-4 font-sans text-xs font-semibold bg-white text-teal-700 px-3 py-1 rounded-full shadow-sm">
                  {selectedService.highlight}
                </span>
              </div>

              {/* Description */}
              <div className="space-y-3">
                <h5 className="font-sans text-xs uppercase tracking-widest font-bold text-slate-400">Overview</h5>
                <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed">
                  {selectedService.description}
                </p>
              </div>

              {/* Core Offerings List */}
              <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-100">
                <h5 className="font-sans text-xs uppercase tracking-widest font-bold text-slate-400">Included Procedures</h5>
                <ul className="space-y-3">
                  {selectedService.details.map((detail, index) => (
                    <li key={index} className="flex items-start space-x-2.5">
                      <div className="mt-0.5 w-5 h-5 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 flex-shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="font-sans text-sm text-slate-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Metadata Highlights */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-slate-100 flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  <div>
                    <p className="font-sans text-xs text-slate-400">Avg. Timeline</p>
                    <p className="font-sans text-sm font-semibold text-slate-800">{selectedService.duration}</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl border border-slate-100 flex items-center space-x-3">
                  <ShieldCheck className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  <div>
                    <p className="font-sans text-xs text-slate-400">Material Standard</p>
                    <p className="font-sans text-sm font-semibold text-slate-800">100% Medical Bio</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Sticky Actions Footer */}
            <div className="sticky bottom-0 bg-white border-t border-slate-100 p-6 space-y-3 z-10">
              <button
                onClick={() => {
                  onBookSelectedTreatment(selectedService.title);
                  setSelectedService(null);
                }}
                className="w-full font-sans font-medium bg-teal-600 text-white hover:bg-teal-700 py-3.5 px-4 rounded-xl transition-all shadow-md shadow-teal-600/10 flex items-center justify-center space-x-2 active:scale-98"
              >
                <span>Select & Request Callback</span>
                <span>&rarr;</span>
              </button>
              <button
                onClick={() => setSelectedService(null)}
                className="w-full text-center font-sans text-sm font-medium text-slate-500 hover:text-slate-800 py-2"
              >
                Keep Exploring
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
