import { ArrowRight, Cpu, Award, ShieldAlert, Sparkles, Star } from "lucide-react";

interface HeroProps {
  onScheduleClick: () => void;
  onExploreClick: () => void;
}

export default function Hero({ onScheduleClick, onExploreClick }: HeroProps) {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-white">
      {/* Background soft accent blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-50/50 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-slate-50 rounded-full blur-2xl -z-10 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-teal-50 border border-teal-100 px-3.5 py-1.5 rounded-full">
              <Sparkles className="w-4 h-4 text-teal-600" />
              <span className="font-sans text-xs font-semibold uppercase tracking-wider text-teal-700">
                Pioneering Dental Luxury in Mombasa
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
              Elevating Mombasa's <br className="hidden sm:inline" />
              <span className="text-teal-600 relative inline-block">
                Smiles
                <span className="absolute left-0 bottom-2 w-full h-1 bg-teal-100 -z-10" />
              </span> with World-Class Care.
            </h1>

            <p className="font-sans text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Experience premium, painless cosmetic and restorative dentistry in a modern, welcoming environment. Designed for those who demand absolute excellence.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onScheduleClick}
                className="w-full sm:w-auto font-sans font-medium bg-teal-600 text-white hover:bg-teal-700 px-8 py-4 rounded-xl shadow-lg shadow-teal-600/20 hover:shadow-teal-600/30 transition-all duration-300 ease-in-out flex items-center justify-center space-x-2 group hover:-translate-y-0.5"
              >
                <span>Schedule a Call-Back</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto font-sans font-medium border-2 border-slate-200 text-slate-800 hover:border-slate-900 hover:bg-slate-50 px-8 py-4 rounded-xl transition-all duration-300 ease-in-out flex items-center justify-center space-x-2 active:scale-95"
              >
                <span>Explore Services</span>
              </button>
            </div>

            {/* Small trust indicator */}
            <div className="flex items-center justify-center lg:justify-start space-x-3 pt-4 border-t border-slate-100">
              <div className="flex -space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=64"
                  alt="Reviewer"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  referrerPolicy="no-referrer"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=64"
                  alt="Reviewer"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  referrerPolicy="no-referrer"
                />
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=64"
                  alt="Reviewer"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-left">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="font-sans text-xs font-bold text-slate-800 ml-1">4.9/5</span>
                </div>
                <p className="font-sans text-xs text-slate-500">Trusted by 2,000+ happy patient smiles in Nyali</p>
              </div>
            </div>
          </div>

          {/* Right Mockup/Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative behind elements */}
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-teal-100 rounded-2xl -z-10" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-slate-200 rounded-3xl -z-10" />

              {/* Main Premium Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10 border-4 border-white aspect-[4/5] md:aspect-square lg:aspect-[4/5] group">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
                  alt="Mombasa Elite Dental Studio Suite"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  referrerPolicy="no-referrer"
                />
                {/* Overlay badge with statistics */}
                <div className="absolute bottom-6 left-6 right-6 glass-card p-4 rounded-2xl border border-white/40 flex items-center justify-between shadow-lg">
                  <div className="space-y-0.5">
                    <p className="font-sans text-xs font-medium text-slate-500">Clinic Standard</p>
                    <p className="font-serif text-lg font-bold text-slate-900">5-Star Boutique</p>
                  </div>
                  <div className="bg-teal-600 text-white px-3 py-1.5 rounded-lg font-sans text-xs font-semibold uppercase tracking-wide">
                    100% Painless
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Feature Highlights Banner (Subtle 3-column banner beneath hero) */}
        <div id="why-us" className="mt-20 lg:mt-28 border-t border-slate-100 pt-12">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
              An Uncompromising Standard of Excellence
            </h2>
            <p className="font-sans text-sm md:text-base text-slate-500 mt-2">
              Every detail is calibrated to deliver the most comfortable, modern, and reliable dental experience possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Advanced Tech Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-teal-500/20 shadow-sm hover:shadow-md transition-all duration-300 flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600">
                <Cpu className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-sans text-base font-bold text-slate-900">Advanced Technology</h3>
                <p className="font-sans text-xs md:text-sm text-slate-500 leading-relaxed">
                  Experience diagnostic intraoral 3D scanning, digital dental designs, and cutting-edge painless lasers.
                </p>
              </div>
            </div>

            {/* Certified Specialists Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-teal-500/20 shadow-sm hover:shadow-md transition-all duration-300 flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600">
                <Award className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-sans text-base font-bold text-slate-900">Certified Specialists</h3>
                <p className="font-sans text-xs md:text-sm text-slate-500 leading-relaxed">
                  Our clinicians are internationally qualified with board certifications in modern aesthetic and surgical dentistry.
                </p>
              </div>
            </div>

            {/* Emergency Care Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-teal-500/20 shadow-sm hover:shadow-md transition-all duration-300 flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-sans text-base font-bold text-slate-900">Emergency Care Available</h3>
                <p className="font-sans text-xs md:text-sm text-slate-500 leading-relaxed">
                  Dealing with intense dental pain or a broken tooth? We offer guaranteed same-day emergency treatments.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
