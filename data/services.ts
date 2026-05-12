export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: "1",
    title: "E-commerce Apps",
    description: "Full-featured buyer apps and seller dashboards with product management, orders, payments, and real-time updates.",
    icon: "shopping-bag"
  },
  {
    id: "2",
    title: "Admin Dashboards",
    description: "Web and mobile dashboards with Firebase Auth, Firestore, and Storage. Clean UI, real-time data, role-based access.",
    icon: "layout-dashboard"
  },
  {
    id: "3",
    title: "Productivity Apps",
    description: "Notes apps, calculators, and utility tools — built with local databases like Hive for offline-first experience.",
    icon: "note"
  }
];
