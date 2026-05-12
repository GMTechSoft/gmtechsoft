export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  outcome: string;
  playStoreUrl: string | null;
  stats: { label: string; value: string }[];
  techStack: string[];
  highlights: string[];
  featured: boolean;
  isLive: boolean;
  color: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "notes-vault",
    title: "Notes Vault",
    category: "Productivity",
    description: "A secure, offline-first notes app built with Flutter and Hive local database. Users can create, organize, and protect their notes — all stored locally on device with no internet required.",
    outcome: "Live on Google Play Store. Built with Hive for fast, offline local storage.",
    // https://play.google.com/store/apps/details?id=com.notes.vault.app
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.notes.vault.app",
    stats: [
      { label: "Database", value: "Hive (Local)" },
      { label: "Status", value: "Live ✓" },
      { label: "Platform", value: "Android" }
    ],
    techStack: ["Flutter", "Dart", "Hive"],
    highlights: [
      "100% offline — no internet required",
      "Local Hive database for fast read/write",
      "Secure note storage on device",
      "Clean, minimal UI"
    ],
    featured: true,
    isLive: true,
    color: "#C9A84C",
    image: "/assets/projects/dar-ul-taqwa.png"
  },
  {
    id: 2,
    slug: "jamia-dar-ul-taqwa",
    title: "Jamia Dar ul Taqwa",
    category: "Education",
    description: "Official app for Jamia Dar ul Taqwa — an Islamic educational institution. Features include news, schedules, announcements, and content served via REST API integration.",
    outcome: "Live on Google Play Store. Real API integration serving live institutional content.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.darultaqwa.parent",
    stats: [
      { label: "Integration", value: "REST API" },
      { label: "Status", value: "Live ✓" },
      { label: "Platform", value: "Android" }
    ],
    techStack: ["Flutter", "Dart", "REST API"],
    highlights: [
      "Live REST API integration",
      "Real-time announcements and schedules",
      "Published on Google Play Store",
      "Institutional content management"
    ],
    featured: true,
    isLive: true,
    color: "#7B5CF6",
    image: "/assets/projects/dar-ul-taqwa.png"
  },
  {
    id: 3,
    slug: "ecom-seller-dashboard",
    title: "E-commerce Seller Dashboard",
    category: "E-commerce",
    description: "A full-featured web e-commerce seller dashboard built with Flutter Web. Sellers can manage products, track orders, upload images, and handle their store — all powered by Firebase. Admin dashboard currently in development.",
    outcome: "Complete seller panel built. Firebase backend fully integrated. Admin dashboard in progress.",
    playStoreUrl: null,
    stats: [
      { label: "Auth", value: "Firebase Auth" },
      { label: "Database", value: "Firestore" },
      { label: "Storage", value: "Firebase Storage" }
    ],
    techStack: ["Flutter", "Firebase Auth", "Firestore", "Firebase Storage"],
    highlights: [
      "Firebase Auth for secure login",
      "Firestore for real-time product & order data",
      "Firebase Storage for product images",
      "Admin dashboard in active development",
      "Built entirely via CLI"
    ],
    featured: true,
    isLive: false,
    color: "#1D9E75",
    image: "/assets/projects/seller-dashboard.png"
  },
  {
    id: 4,
    slug: "zakat-calculator",
    title: "All-in-One Zakat Calculator",
    category: "Islamic Finance",
    description: "A comprehensive Zakat calculator app covering Gold, Silver, Cash, Trade Goods, and Livestock (Chopayan). Gold and silver Zakat is calculated using live real-time prices fetched from an external website — so every calculation reflects today's actual market rate. Built with 100% self-written code.",
    outcome: "Currently in testing mode. Live gold & silver prices fetched in real-time. 100% self-coded — no AI tools used.",
    playStoreUrl: null,
    stats: [
      { label: "Zakat Types", value: "5 Categories" },
      { label: "Prices", value: "Live (Real-time)" },
      { label: "Code", value: "Self-Written" }
    ],
    techStack: ["Flutter", "Dart", "Web Scraping", "REST API"],
    highlights: [
      "Gold Zakat with live real-time gold price",
      "Silver Zakat with live real-time silver price",
      "Cash & Trade Goods Zakat calculator",
      "Livestock (Chopayan) Zakat calculator",
      "100% self-written code — no AI tools used",
      "Currently in testing phase"
    ],
    featured: true,
    isLive: false,
    color: "#C9A84C",
    image: "/assets/projects/Zakat-app.jpg"
  },
  {
    id: 5,
    slug: "school-parent-app",
    title: "School Parent Portal",
    category: "Education",
    description: "A parent-facing Flutter app that connects families to their child's school life. Parents can view attendance records, fee status, exam results, and academic progress — all fetched via REST API from the school's backend system.",
    outcome: "Parents can track their child's attendance, fees, results, and progress in real time.",
    playStoreUrl: null,
    stats: [
      { label: "Integration", value: "REST API" },
      { label: "Users", value: "Parents" },
      { label: "Status", value: "Completed" }
    ],
    techStack: ["Flutter", "Dart", "REST API"],
    highlights: [
      "Real-time attendance tracking for parents",
      "Fee payment status and history",
      "Exam results and report cards",
      "Student academic progress overview",
      "REST API integration with school backend"
    ],
    featured: false,
    isLive: false,
    color: "#1D9E75",
    image: "/assets/projects/Zakat_app.jpg"
  },
];
