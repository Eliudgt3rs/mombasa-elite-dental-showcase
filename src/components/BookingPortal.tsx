import React, { useState, useEffect } from "react";
import { testimonials } from "../types";
import { 
  Calendar, Phone, User, CheckCircle2, Star, Sparkles, 
  ChevronLeft, ChevronRight, Send, ArrowRight, ShieldCheck, HelpCircle, HeartPulse
} from "lucide-react";

interface BookingPortalProps {
  preselectedTreatment: string;
}

export default function BookingPortal({ preselectedTreatment }: BookingPortalProps) {
  // Assessment State
  const [assessmentStep, setAssessmentStep] = useState(0);
  const [answers, setAnswers] = useState({
    goal: "",
    urgency: "",
    sensitivity: ""
  });
  const [assessmentResult, setAssessmentResult] = useState<string | null>(null);

  // Booking Form State
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    treatment: "",
    date: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [refId, setRefId] = useState("");

  // Sync preselected treatment
  useEffect(() => {
    if (preselectedTreatment) {
      setFormData((prev) => ({ ...prev, treatment: preselectedTreatment }));
      // Scroll to booking form if a treatment is preselected from bento grid
      const formEl = document.getElementById("booking-card");
      if (formEl) {
        formEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [preselectedTreatment]);

  // Testimonial State
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const treatmentsList = [
    "Cosmetic Dentistry (Veneers & Whitening)",
    "Dental Implants & Restorations",
    "Orthodontics (Invisalign & Braces)",
    "Premium Routine Care (Biofilm Cleaning)"
  ];

  // Assessment Questions Flow
  const handleAnswerSelect = (key: "goal" | "urgency" | "sensitivity", value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    const nextStep = assessmentStep + 1;
    
    if (nextStep < 3) {
      setAssessmentStep(nextStep);
    } else {
      // Calculate Recommendation
      calculateRecommendation(value);
    }
  };

  const calculateRecommendation = (finalSensitivity: string) => {
    const selectedGoal = answers.goal;
    let recommendation = "";
    
    if (selectedGoal === "whitening" || selectedGoal === "veneers") {
      recommendation = "Cosmetic Dentistry (Veneers & Whitening)";
    } else if (selectedGoal === "straight") {
      recommendation = "Orthodontics (Invisalign & Braces)";
    } else if (selectedGoal === "missing") {
      recommendation = "Dental Implants & Restorations";
    } else {
      recommendation = "Premium Routine Care (Biofilm Cleaning)";
    }

    setAssessmentResult(recommendation);
    // Autofill form
    setFormData((prev) => ({ ...prev, treatment: recommendation }));
    setAssessmentStep(3);
  };

  const resetAssessment = () => {
    setAssessmentStep(0);
    setAnswers({ goal: "", urgency: "", sensitivity: "" });
    setAssessmentResult(null);
  };

  // Submit Callback Request
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.treatment || !formData.date) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate luxury API response delay
    setTimeout(() => {
      const generatedRef = "MED-" + Math.floor(100000 + Math.random() * 900000);
      setRefId(generatedRef);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Visual Accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-slate-50 rounded-full blur-3xl -z-10 -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-teal-50/20 rounded-full blur-3xl -z-10 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Step 1: Virtual Assessment Widget */}
        <div id="assessment" className="mb-24">
          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-2xl">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-600/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              
              {/* Text Side */}
              <div className="lg:col-span-5 space-y-4">
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-teal-400 block">
                  Interactive Smart Planner
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
                  1-Minute Smart Smile Assessment
                </h3>
                <p className="font-sans text-sm text-slate-300 leading-relaxed">
                  Answer 3 basic questions to receive a tailor-made dental roadmap. Your result will instantly synchronize with our callback booking slot.
                </p>
                <div className="flex items-center space-x-3 text-slate-400 pt-2">
                  <ShieldCheck className="w-5 h-5 text-teal-400" />
                  <span className="font-sans text-xs">100% Confidential & Free</span>
                </div>
              </div>

              {/* Quiz Widget Card Side */}
              <div className="lg:col-span-7 bg-slate-800/80 border border-slate-700/50 p-6 sm:p-8 rounded-2xl min-h-[300px] flex flex-col justify-between">
                
                {/* Step 0: Goal */}
                {assessmentStep === 0 && (
                  <div className="space-y-6">
                    <div>
                      <span className="text-teal-400 text-xs font-bold font-mono">STEP 01 OF 03</span>
                      <h4 className="font-serif text-lg sm:text-xl font-medium mt-1">What is your primary smile or dental goal?</h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button
                        onClick={() => handleAnswerSelect("goal", "whitening")}
                        className="p-4 bg-slate-900 border border-slate-700 rounded-xl hover:border-teal-400 hover:bg-slate-850 transition-all font-sans text-sm text-left flex items-center justify-between group"
                      >
                        <span>Whiter, Brighter Smile</span>
                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-teal-400 transition-colors" />
                      </button>
                      <button
                        onClick={() => handleAnswerSelect("goal", "veneers")}
                        className="p-4 bg-slate-900 border border-slate-700 rounded-xl hover:border-teal-400 hover:bg-slate-850 transition-all font-sans text-sm text-left flex items-center justify-between group"
                      >
                        <span>Fix Chipped/Gapped Teeth</span>
                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-teal-400 transition-colors" />
                      </button>
                      <button
                        onClick={() => handleAnswerSelect("goal", "straight")}
                        className="p-4 bg-slate-900 border border-slate-700 rounded-xl hover:border-teal-400 hover:bg-slate-850 transition-all font-sans text-sm text-left flex items-center justify-between group"
                      >
                        <span>Straighten Teeth (Invisalign)</span>
                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-teal-400 transition-colors" />
                      </button>
                      <button
                        onClick={() => handleAnswerSelect("goal", "missing")}
                        className="p-4 bg-slate-900 border border-slate-700 rounded-xl hover:border-teal-400 hover:bg-slate-850 transition-all font-sans text-sm text-left flex items-center justify-between group"
                      >
                        <span>Replace Missing Teeth</span>
                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-teal-400 transition-colors" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 1: Urgency */}
                {assessmentStep === 1 && (
                  <div className="space-y-6">
                    <div>
                      <span className="text-teal-400 text-xs font-bold font-mono">STEP 02 OF 03</span>
                      <h4 className="font-serif text-lg sm:text-xl font-medium mt-1">When did you last visit a dentist for a professional checkup?</h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button
                        onClick={() => handleAnswerSelect("urgency", "less6")}
                        className="p-4 bg-slate-900 border border-slate-700 rounded-xl hover:border-teal-400 hover:bg-slate-850 transition-all font-sans text-sm text-left flex items-center justify-between group"
                      >
                        <span>Within the last 6 months</span>
                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-teal-400 transition-colors" />
                      </button>
                      <button
                        onClick={() => handleAnswerSelect("urgency", "year")}
                        className="p-4 bg-slate-900 border border-slate-700 rounded-xl hover:border-teal-400 hover:bg-slate-850 transition-all font-sans text-sm text-left flex items-center justify-between group"
                      >
                        <span>About 1 - 2 years ago</span>
                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-teal-400 transition-colors" />
                      </button>
                      <button
                        onClick={() => handleAnswerSelect("urgency", "years")}
                        className="p-4 bg-slate-900 border border-slate-700 rounded-xl hover:border-teal-400 hover:bg-slate-850 transition-all font-sans text-sm text-left flex items-center justify-between group"
                      >
                        <span>3+ years ago</span>
                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-teal-400 transition-colors" />
                      </button>
                      <button
                        onClick={() => handleAnswerSelect("urgency", "never")}
                        className="p-4 bg-slate-900 border border-slate-700 rounded-xl hover:border-teal-400 hover:bg-slate-850 transition-all font-sans text-sm text-left flex items-center justify-between group"
                      >
                        <span>Only when in severe pain</span>
                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-teal-400 transition-colors" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 2: Sensitivity */}
                {assessmentStep === 2 && (
                  <div className="space-y-6">
                    <div>
                      <span className="text-teal-400 text-xs font-bold font-mono">STEP 03 OF 03</span>
                      <h4 className="font-serif text-lg sm:text-xl font-medium mt-1">Are you currently experiencing dental pain or temperature sensitivity?</h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button
                        onClick={() => handleAnswerSelect("sensitivity", "none")}
                        className="p-4 bg-slate-900 border border-slate-700 rounded-xl hover:border-teal-400 hover:bg-slate-850 transition-all font-sans text-sm text-left flex items-center justify-between group"
                      >
                        <span>No pain, completely healthy</span>
                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-teal-400 transition-colors" />
                      </button>
                      <button
                        onClick={() => handleAnswerSelect("sensitivity", "mild")}
                        className="p-4 bg-slate-900 border border-slate-700 rounded-xl hover:border-teal-400 hover:bg-slate-850 transition-all font-sans text-sm text-left flex items-center justify-between group"
                      >
                        <span>Mild sensitivity to cold/sweet</span>
                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-teal-400 transition-colors" />
                      </button>
                      <button
                        onClick={() => handleAnswerSelect("sensitivity", "moderate")}
                        className="p-4 bg-slate-900 border border-slate-700 rounded-xl hover:border-teal-400 hover:bg-slate-850 transition-all font-sans text-sm text-left flex items-center justify-between group"
                      >
                        <span>Occasional throbbing discomfort</span>
                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-teal-400 transition-colors" />
                      </button>
                      <button
                        onClick={() => handleAnswerSelect("sensitivity", "severe")}
                        className="p-4 bg-slate-900 border border-slate-700 rounded-xl hover:border-teal-400 hover:bg-slate-850 transition-all font-sans text-sm text-left flex items-center justify-between group"
                      >
                        <span>Severe pain / Needs instant relief</span>
                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-teal-400 transition-colors" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Result & Autofill */}
                {assessmentStep === 3 && (
                  <div className="space-y-6">
                    <div className="bg-teal-900/30 border border-teal-500/20 p-5 rounded-xl">
                      <div className="flex items-center space-x-2 text-teal-400 text-xs font-bold uppercase tracking-wider">
                        <Sparkles className="w-4 h-4" />
                        <span>Our Smart recommendation</span>
                      </div>
                      <h4 className="font-serif text-xl sm:text-2xl font-semibold text-white mt-1.5 leading-snug">
                        {assessmentResult}
                      </h4>
                      <p className="font-sans text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                        We recommend organizing a comprehensive luxury consultation and diagnostic scan to design your smile blueprint perfectly.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-3">
                      <a
                        href="#booking-portal"
                        onClick={(e) => {
                          e.preventDefault();
                          const el = document.getElementById("booking-card");
                          if (el) el.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="w-full sm:w-auto font-sans text-xs sm:text-sm font-medium bg-teal-600 text-white hover:bg-teal-700 py-3 px-6 rounded-xl text-center transition-all flex items-center justify-center space-x-2"
                      >
                        <span>Autofilled! Lock appointment below</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      <button
                        onClick={resetAssessment}
                        className="w-full sm:w-auto font-sans text-xs text-slate-400 hover:text-white underline"
                      >
                        Retake Assessment
                      </button>
                    </div>
                  </div>
                )}

                {/* Progress Indicators */}
                {assessmentStep < 3 && (
                  <div className="flex items-center justify-between pt-6 border-t border-slate-700/40">
                    <div className="flex items-center space-x-1.5">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            i === assessmentStep ? "w-8 bg-teal-400" : "w-2 bg-slate-700"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="font-sans text-xs text-slate-400 font-medium">
                      Smart Assistant v1.2
                    </span>
                  </div>
                )}

              </div>

            </div>
          </div>
        </div>

        {/* Step 2: Main Appointment Form Component */}
        <div id="booking-portal" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-12">
          
          {/* Left Side: Text and Trust Features */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8 pr-0 lg:pr-6">
            <div className="space-y-4">
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-teal-600 block">
                Direct Clinic Concierge
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Request an Appointment Call-Back
              </h2>
              <p className="font-sans text-sm sm:text-base text-slate-500 leading-relaxed">
                Take the first step toward visual smile perfection. Fill out our simplified front-door form, and our lead receptionist will dial you back in record time.
              </p>
            </div>

            <div className="space-y-4 border-t border-slate-100 pt-6">
              <div className="flex items-start space-x-3.5">
                <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600 flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="font-sans text-sm font-bold text-slate-900">Immediate callback response</h4>
                  <p className="font-sans text-xs text-slate-500">During work hours, we guarantee call-backs in less than 15 minutes.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3.5">
                <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600 flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="font-sans text-sm font-bold text-slate-900">Custom date pre-selection</h4>
                  <p className="font-sans text-xs text-slate-500">Secure your spot in our high-end private rooms in Nyali, Mombasa.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3.5">
                <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600 flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="font-sans text-sm font-bold text-slate-900">Priority safety protocols</h4>
                  <p className="font-sans text-xs text-slate-500">Private appointments ensure minimum lobby crowding and maximum individual care.</p>
                </div>
              </div>
            </div>

            {/* Testimonials Slider in Side column */}
            <div id="reviews" className="bg-slate-50 p-6 rounded-2xl border border-slate-100 relative">
              <div className="flex items-center space-x-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="font-sans text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-200/50">
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonials[currentTestimonial].avatarUrl}
                    alt={testimonials[currentTestimonial].name}
                    className="w-9 h-9 rounded-full object-cover border border-slate-200"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h5 className="font-sans text-xs font-bold text-slate-900">{testimonials[currentTestimonial].name}</h5>
                    <p className="font-sans text-[10px] text-slate-400">{testimonials[currentTestimonial].role}</p>
                  </div>
                </div>
                <div className="flex space-x-1.5">
                  <button
                    onClick={prevTestimonial}
                    className="p-1 rounded bg-white border border-slate-200 hover:border-slate-850 hover:bg-slate-50 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4 text-slate-500" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-1 rounded bg-white border border-slate-200 hover:border-slate-850 hover:bg-slate-50 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Right Side: Booking Card */}
          <div id="booking-card" className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-2xl shadow-slate-900/5 p-6 sm:p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-teal-500 to-cyan-500" />

              {!isSuccess ? (
                /* Interactive Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="space-y-1.5">
                    <h3 className="font-serif text-2xl font-bold text-slate-900">Request Callback</h3>
                    <p className="font-sans text-xs text-slate-500">Complete the prompt fields to schedule your elite call-back consultation.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name Input */}
                    <div className="space-y-1.5">
                      <label htmlFor="fullName" className="font-sans text-xs font-bold uppercase tracking-wider text-slate-500">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          id="fullName"
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="E.g., Dr. Amina Bakari"
                          className="w-full font-sans text-sm pl-10 pr-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:border-teal-500 focus:bg-white transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Phone Number Input */}
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="font-sans text-xs font-bold uppercase tracking-wider text-slate-500">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="E.g., +254 712 345 678"
                          className="w-full font-sans text-sm pl-10 pr-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:border-teal-500 focus:bg-white transition-all duration-300"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Preferred Treatment Select */}
                    <div className="space-y-1.5">
                      <label htmlFor="treatment" className="font-sans text-xs font-bold uppercase tracking-wider text-slate-500">
                        Preferred Treatment
                      </label>
                      <div className="relative">
                        <select
                          id="treatment"
                          required
                          value={formData.treatment}
                          onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                          className="w-full font-sans text-sm px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:border-teal-500 focus:bg-white transition-all duration-300 appearance-none cursor-pointer"
                        >
                          <option value="">-- Choose Dental Specialty --</option>
                          {treatmentsList.map((t, idx) => (
                            <option key={idx} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Preferred Date Picker */}
                    <div className="space-y-1.5">
                      <label htmlFor="date" className="font-sans text-xs font-bold uppercase tracking-wider text-slate-500">
                        Preferred Date
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          id="date"
                          type="date"
                          required
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full font-sans text-sm pl-10 pr-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:border-teal-500 focus:bg-white transition-all duration-300 cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 text-slate-400 flex items-center space-x-2">
                    <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
                    <span className="font-sans text-[10px] sm:text-xs">Have special dental anxiety? Our receptionist will coordinate a pre-numb protocol.</span>
                  </div>

                  {/* Submission Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full font-sans font-medium py-4 px-4 rounded-xl shadow-lg shadow-teal-600/10 hover:shadow-teal-600/20 transition-all duration-300 flex items-center justify-center space-x-2 ${
                      isSubmitting
                        ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                        : "bg-teal-600 text-white hover:bg-teal-700 active:scale-98"
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center space-x-2">
                        <svg className="animate-spin h-5 w-5 text-slate-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Transmitting secure request...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Confirm Priority Callback</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center space-x-4 pt-4 border-t border-slate-100">
                    <div className="flex items-center space-x-1 font-sans text-[10px] uppercase tracking-wider text-slate-400">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                      <span>HIPAA Compliant</span>
                    </div>
                    <span className="text-slate-200">|</span>
                    <div className="flex items-center space-x-1 font-sans text-[10px] uppercase tracking-wider text-slate-400">
                      <HelpCircle className="w-3.5 h-3.5 text-emerald-500" />
                      <span>End-to-End Cryptography</span>
                    </div>
                  </div>

                </form>
              ) : (
                /* Success Slate (Pristine interactions confirmation) */
                <div className="text-center space-y-8 py-8 animate-fade-in">
                  <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mx-auto border-2 border-emerald-100">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-3">
                    <span className="font-sans text-xs font-bold uppercase tracking-widest text-emerald-600">
                      Request Transmitted Successfully
                    </span>
                    <h4 className="font-serif text-3xl font-bold text-slate-900 leading-tight">
                      See you soon, <br />
                      <span className="text-teal-600">{formData.fullName}</span>
                    </h4>
                    <p className="font-sans text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
                      We have generated your elite dental ticket. A Mombasa Elite representative will call your number (<strong className="text-slate-800">{formData.phone}</strong>) within 15 minutes to lock down your consultation time.
                    </p>
                  </div>

                  {/* Reference Ticket info */}
                  <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 max-w-sm mx-auto text-left space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                      <span>REFERENCE CODE</span>
                      <span className="font-bold text-slate-800 font-sans bg-slate-200 px-2 py-0.5 rounded">
                        {refId}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span>PRESELECTED TREATMENT</span>
                      <span className="font-semibold text-slate-800">{formData.treatment}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span>TARGET CLINIC SLOT</span>
                      <span className="font-semibold text-slate-800">{formData.date}</span>
                    </div>
                  </div>

                  {/* Onboarding steps representation */}
                  <div className="pt-4 space-y-2">
                    <p className="font-sans text-xs uppercase tracking-wider text-slate-400 font-bold">What happens next?</p>
                    <div className="flex items-center justify-center space-x-6 sm:space-x-8 text-xs text-slate-500 max-w-md mx-auto">
                      <div className="text-center space-y-1">
                        <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-[10px] mx-auto">✓</div>
                        <span>Sent Request</span>
                      </div>
                      <div className="h-0.5 w-8 bg-emerald-200" />
                      <div className="text-center space-y-1">
                        <div className="w-6 h-6 rounded-full bg-teal-50 text-teal-600 border border-teal-200 animate-pulse flex items-center justify-center font-bold text-[10px] mx-auto">2</div>
                        <span className="text-slate-800 font-medium">Verify Call</span>
                      </div>
                      <div className="h-0.5 w-8 bg-slate-200" />
                      <div className="text-center space-y-1">
                        <div className="w-6 h-6 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center font-bold text-[10px] mx-auto">3</div>
                        <span>Smile Design</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <button
                      onClick={() => {
                        setIsSuccess(false);
                        setFormData({ fullName: "", phone: "", treatment: "", date: "" });
                      }}
                      className="font-sans text-xs font-semibold text-teal-600 hover:text-teal-700 underline focus:outline-none"
                    >
                      Submit Another Callback Request
                    </button>
                  </div>

                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
