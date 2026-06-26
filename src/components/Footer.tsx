import React from "react";
import { 
  Facebook, Instagram, Linkedin, Youtube, MapPin, Phone, Mail, Clock, Smile 
} from "lucide-react";

interface FooterProps {
  onQuickLinkClick: (targetId: string) => void;
}

export default function Footer({ onQuickLinkClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      
      {/* Upper Footer Segment */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Brand & Mission Column */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-lg bg-teal-500 flex items-center justify-center text-white shadow-md shadow-teal-500/10">
                <Smile className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif text-base font-bold tracking-tight block leading-none">
                  Mombasa
                </span>
                <span className="font-sans text-[10px] uppercase tracking-widest text-teal-400 block font-semibold">
                  Dental Clinic
                </span>
              </div>
            </div>

            <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Mombasa's leading private boutique clinic for painless aesthetic dentistry, implants, and orthodontics. Combining five-star hospitality with clinical absolute perfection.
            </p>

            {/* Social Placeholder Handles */}
            <div className="flex items-center space-x-3.5">
              <a
                href="#facebook"
                aria-label="Facebook"
                className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-teal-600 transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#instagram"
                aria-label="Instagram"
                className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-teal-600 transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#linkedin"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-teal-600 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#youtube"
                aria-label="YouTube"
                className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-teal-600 transition-all"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Scroll Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-sans text-xs uppercase tracking-widest text-slate-400 font-bold">
              Treatment Access
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    onQuickLinkClick("#services");
                  }}
                  className="font-sans text-xs sm:text-sm text-slate-400 hover:text-teal-400 transition-colors"
                >
                  Cosmetic Veneers
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    onQuickLinkClick("#services");
                  }}
                  className="font-sans text-xs sm:text-sm text-slate-400 hover:text-teal-400 transition-colors"
                >
                  Porcelain Teeth Whitening
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    onQuickLinkClick("#services");
                  }}
                  className="font-sans text-xs sm:text-sm text-slate-400 hover:text-teal-400 transition-colors"
                >
                  Invisalign Aligners
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    onQuickLinkClick("#services");
                  }}
                  className="font-sans text-xs sm:text-sm text-slate-400 hover:text-teal-400 transition-colors"
                >
                  Dental Implants
                </a>
              </li>
            </ul>
          </div>

          {/* Real Contact Coordinates Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-sans text-xs uppercase tracking-widest text-slate-400 font-bold">
              Clinic Coordinates
            </h4>
            <ul className="space-y-3.5">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                <span className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Elite Plaza, 1st Floor Suite A, Nyali Beach Road, Mombasa, Kenya
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span className="font-sans text-xs sm:text-sm text-slate-400">
                  +254 712 345 678 / +254 799 000 111
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span className="font-sans text-xs sm:text-sm text-slate-400">
                  concierge@mombasaelitedental.co.ke
                </span>
              </li>
              <li className="flex items-start space-x-3 border-t border-slate-800 pt-3.5 mt-3.5">
                <Clock className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                <div className="font-sans text-xs text-slate-400">
                  <p className="font-bold text-slate-300">Mon &ndash; Sat: 8:00 AM &ndash; 6:00 PM</p>
                  <p className="text-[10px] text-slate-500">Sundays: Reserved for Urgent Emergency Triage Only</p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Lower Copyright & Legal Disclaimer bar */}
      <div className="border-t border-slate-800/80 bg-slate-950/40 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-slate-500 text-center sm:text-left">
            &copy; {currentYear} Mombasa Dental Clinic. All Rights Reserved. Designed to Medical-Luxury Standards.
          </p>
          <div className="flex items-center space-x-6 text-[11px] text-slate-500 font-sans">
            <a href="#privacy" className="hover:underline hover:text-slate-300 transition-all">Privacy Policy</a>
            <span>&bull;</span>
            <a href="#terms" className="hover:underline hover:text-slate-300 transition-all">Patient Terms of Service</a>
            <span>&bull;</span>
            <a href="#medical-disclosure" className="hover:underline hover:text-slate-300 transition-all">Medical Disclosure</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
