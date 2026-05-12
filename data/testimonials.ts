export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  company: string;
  country: string;
  stars: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Ghulam built our institution's app exactly as we needed. The API integration worked perfectly and the app has been running smoothly since launch. Very professional and reliable developer.",
    name: "Admin Team",
    role: "Management",
    company: "Jamia Dar ul Taqwa",
    country: "Pakistan",
    stars: 5
  },
  {
    id: 2,
    quote: "The Zakat calculator app Ghulam built for us was impressive — especially the live gold and silver price feature. He understood the Islamic finance requirements perfectly and delivered clean, working code.",
    name: "Beta Tester",
    role: "Early User",
    company: "Private Client",
    country: "Pakistan",
    stars: 5
  }
];
