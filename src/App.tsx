/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import BookingPortal from "./components/BookingPortal";
import Footer from "./components/Footer";
import { Sparkles, Heart, Smile, Star, ArrowRight, ShieldCheck, Clock, MapPin } from "lucide-react";

export default function App() {
  const [selectedTreatment, setSelectedTreatment] = useState<string>("");

  const handleBookClick = () => {
    setSelectedTreatment("");
    const element = document.getElementById("booking-card");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectTreatment = (treatmentName: string) => {
    setSelectedTreatment(treatmentName);
    const element = document.getElementById("booking-card");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToSection = (targetId: string) => {
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between selection:bg-teal-500 selection:text-white">
      {/* Sticky Header */}
      <Navbar onBookClick={handleBookClick} />

      {/* Main Single-Page Content */}
      <main className="flex-grow">
        
        {/* Hero Section + Features Ribbon */}
        <Hero 
          onScheduleClick={handleBookClick} 
          onExploreClick={() => handleScrollToSection("#services")} 
        />

        {/* Brand Promise Banner Section */}
        <section className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05] -z-10" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="space-y-2 text-center lg:text-left">
                <p className="font-sans text-xs uppercase tracking-widest text-teal-200 font-bold">The Elite Standard</p>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold">Are you ready to design your signature smile?</h3>
                <p className="font-sans text-xs sm:text-sm text-teal-50/80">
                  Book a private call-back consultation today. No lobby waiting, no clinical anxiety.
                </p>
              </div>
              <button
                onClick={handleBookClick}
                className="w-full lg:w-auto font-sans font-semibold bg-white text-teal-700 hover:bg-slate-50 px-8 py-4 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-2.5 active:scale-95 hover:-translate-y-0.5"
              >
                <span>Initiate Smile Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* Bento Grid High-Value Services Section */}
        <Services onBookSelectedTreatment={handleSelectTreatment} />

        {/* Clinic Experience / Boutique Gallery Section */}
        <section className="py-20 md:py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Visual Grid of Luxury Space */}
              <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-md aspect-square">
                    <img
                      src="https://images.unsplash.com/photo-1579684389782-64d84b5e905d?auto=format&fit=crop&q=80&w=400"
                      alt="Private consulting dentist"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-md aspect-[3/4] bg-teal-50 p-6 flex flex-col justify-between">
                    <div className="w-10 h-10 bg-teal-600 text-white rounded-xl flex items-center justify-center">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-sans text-sm font-bold text-slate-900">Patient Comfort First</h4>
                      <p className="font-sans text-xs text-slate-500">Every treatment suite includes noise-cancelling headphones and private ocean breezes.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="rounded-2xl overflow-hidden shadow-md aspect-[3/4]">
                    <img
                      src="https://images.unsplash.com/photo-1512223792601-592a9809eed4?auto=format&fit=crop&q=80&w=400"
                      alt="Pristine hygiene instruments"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-md aspect-square">
                    <img
                      src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=400"
                      alt="Modern luxury clinic interior room"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: Premium Information */}
              <div className="lg:col-span-6 space-y-6 md:space-y-8">
                <div className="space-y-4">
                  <span className="font-sans text-xs font-bold uppercase tracking-widest text-teal-600 block">
                    Bespoke Medical Suite
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                    Where Medical Excellence <br />
                    Meets Oceanfront Tranquility
                  </h2>
                  <p className="font-sans text-sm sm:text-base text-slate-500 leading-relaxed">
                    Mombasa Elite Dental was founded to challenge the sterile, stressful atmosphere of conventional dentistry. Located in the beautiful residential enclave of Nyali, our clinic delivers clinical sophistication paired with the discrete hospitality of a premium wellness hotel.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-2">
                  <div className="space-y-1.5">
                    <div className="font-serif text-3xl font-bold text-teal-600">15+</div>
                    <p className="font-sans text-xs font-bold uppercase text-slate-500">Years Experience</p>
                    <p className="font-sans text-xs text-slate-400">Board-certified dental consultants trained globally.</p>
                  </div>
                  <div className="space-y-1.5">
                    <div className="font-serif text-3xl font-bold text-teal-600">100%</div>
                    <p className="font-sans text-xs font-bold uppercase text-slate-500">Biocompatible</p>
                    <p className="font-sans text-xs text-slate-400">Only ultra-premium ceramic, porcelain, and bio-implants.</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h4 className="font-sans text-sm font-bold text-slate-900">Premium Location in Nyali, Mombasa</h4>
                    <p className="font-sans text-xs sm:text-sm text-slate-500">
                      Convenient private parking, complete ocean views, and strict security protocol for our high-profile clients.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Smart Smile Assessment + Interactive Callback Portal + Testimonial Swiper */}
        <BookingPortal preselectedTreatment={selectedTreatment} />

      </main>

      {/* Footer Element */}
      <Footer onQuickLinkClick={handleScrollToSection} />
    </div>
  );
}
