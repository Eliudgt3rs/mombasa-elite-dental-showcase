export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  details: string[];
  duration: string;
  highlight: string;
  imageUrl: string;
}

export interface HighlightItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  rating: number;
  text: string;
  avatarUrl: string;
}

export const highlights: HighlightItem[] = [
  {
    id: "tech",
    title: "Advanced Technology",
    description: "Equipped with 3D CBCT imaging, painless lasers, and digital intraoral scanners.",
    iconName: "Cpu"
  },
  {
    id: "specs",
    title: "Certified Specialists",
    description: "UK & US trained dental consultants with over 15+ years of combined experience.",
    iconName: "Award"
  },
  {
    id: "emergency",
    title: "Emergency Care",
    description: "Priority same-day emergency triage and instant pain-relief procedures available.",
    iconName: "ShieldAlert"
  }
];

export const services: ServiceItem[] = [
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    subtitle: "Veneers & Whitening",
    description: "Craft your dream smile with precision porcelain veneers, lumineers, and laser teeth whitening.",
    iconName: "Sparkles",
    details: [
      "Custom E-Max Porcelain Veneers",
      "In-Office Zoom! Laser Teeth Whitening",
      "Composite Bonding & Smile Contouring",
      "Digital Smile Design (DSD) Mockups"
    ],
    duration: "1 - 2 Sessions",
    highlight: "Most Popular",
    imageUrl: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "implants",
    title: "Dental Implants",
    subtitle: "Premium Restorations",
    description: "Restore missing teeth permanently with biocompatible titanium implants that look and feel completely natural.",
    iconName: "Hammer",
    details: [
      "Single Tooth Titanium Implants",
      "All-on-4® Full Arch Restorations",
      "Bone Grafting & Sinus Lifts",
      "Premium Porcelain & Zirconia Crowns"
    ],
    duration: "2 - 3 Sessions",
    highlight: "Lifetime Warranty",
    imageUrl: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "ortho",
    title: "Orthodontics",
    subtitle: "Invisalign & Alignment",
    description: "Straighten your smile discreetly using clear aligners or premium clear ceramic brackets, tailored to your lifestyle.",
    iconName: "Smile",
    details: [
      "Official Invisalign® Platinum Providers",
      "Discreet Clear Ceramic Braces",
      "Accelerated Orthodontic Treatments",
      "Post-Treatment Retainers & Care"
    ],
    duration: "6 - 18 Months",
    highlight: "Invisible Fit",
    imageUrl: "https://images.unsplash.com/photo-1512223792601-592a9809eed4?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "routine",
    title: "Premium Routine Care",
    subtitle: "Prevention & Diagnostics",
    description: "Maintain peak oral health with ultrasonic deep cleanings, early cavity detection, and comprehensive gum care.",
    iconName: "Activity",
    details: [
      "Guided Biofilm Therapy (Ultrasonic Cleaning)",
      "High-Definition Intraoral Camera Screening",
      "Deep Gum/Periodontal Laser Therapy",
      "Digital Dental X-Rays & Diagnosis"
    ],
    duration: "45 - 60 Mins",
    highlight: "Essential Wellness",
    imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600"
  }
];

export const testimonials: TestimonialItem[] = [
  {
    id: "1",
    name: "Amina Omar",
    role: "Mombasa Resident",
    rating: 5,
    text: "The porcelain veneers created by Mombasa Dental completely changed my life. The level of care, the premium environment, and the gentle approach was unlike anything I've experienced in Kenya before.",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120"
  },
  {
    id: "2",
    name: "Dr. Ken Mwangi",
    role: "Corporate Executive",
    rating: 5,
    text: "I was extremely anxious about getting an implant. Mombasa Dental used digital imaging and complete local numbing—the procedure was entirely pain-free. I highly recommend their implant center.",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120"
  },
  {
    id: "3",
    name: "Sarah Jenkins",
    role: "Frequent Visitor",
    rating: 5,
    text: "Their Invisalign treatment is brilliant. The clinic is absolutely pristine, overlooking the ocean views. It feels more like a luxury boutique hotel than a dental clinic. Mombasa is lucky to have this elite tier service!",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120"
  }
];
