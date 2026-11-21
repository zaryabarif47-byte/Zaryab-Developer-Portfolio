/*
  EDIT YOUR PORTFOLIO CONTENT HERE.
  Add projects by copying one object in the projects array.
  Leave unknown dates and URLs blank until you can verify them.
*/
window.PORTFOLIO = {
  name: "Zaryab Arif",
  location: "Wah Cantt, Pakistan",
  pitch: "I build fast, SEO-friendly websites and cross-platform mobile apps using PHP/Laravel, Flutter and Firebase.",
  about: "I'm a Computer Science student who enjoys turning ideas into practical digital products. Alongside my studies, I build and maintain web experiences for a digital agency and develop Flutter applications backed by Firebase. My classroom teaching experience has also helped me communicate technical ideas clearly. I value reliable functionality, clean code and thoughtful visual polish.",
  contact: {
    email: "zaryabarif47@gmail.com",
    phone: "+923146510087",
    whatsapp: "923146510087",
    linkedin: "https://www.linkedin.com/in/zaryab-arif-a4a70a3a6",
    github: "https://github.com/zaryabarif47-byte",
    portfolio: ""
  },
  cvPath: "assets/Zaryab-Arif-CV.pdf",
  skills: [
    { title: "Backend", icon: "⌘", items: ["PHP", "MySQL", "Laravel"] },
    { title: "Frontend", icon: "◫", items: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Alpine.js", "wow.js", "IntersectionObserver"] },
    { title: "Mobile development", icon: "▯", items: ["Flutter", "Dart", "Provider"] },
    { title: "Cloud & backend services", icon: "✦", items: ["Firebase Authentication", "Cloud Firestore"] },
    { title: "Tools & deployment", icon: "⚙", items: ["Git", "GitHub", "XAMPP", "phpMyAdmin", "Shared hosting", "GitHub Pages", "SEO-friendly markup"] }
  ],
  projects: [
    {
      id: "exytex",
      number: "01",
      category: "WEB DEVELOPMENT",
      title: "SEO Service Pages — Exytex Technologies",
      description: "Built and maintain PHP-based SEO service pages for a digital agency. Work includes service-page layouts, reusable styling, animation systems, inline SVG illustrations and troubleshooting real production UI issues.",
      details: "Selected pages include SEO Services, Link Building, Local SEO, Regional SEO, National SEO, E-commerce SEO and Amazon Services. Focused on consistent branding, responsive behaviour and making each page feel purpose-built rather than a template copy.",
      role: "Web Developer",
      stack: ["PHP", "Bootstrap", "JavaScript", "CSS animations", "SEO markup"],
      githubUrl: "https://github.com/zaryab47-byte",
linkLabel: "View GitHub Profile",
featured: true
    },
    {
      id: "booksy",
      number: "02",
      category: "MOBILE + WEB APP",
      title: "BOOKSY / BookVault — Library Management",
      description: "A Flutter library management system designed for mobile and web, with separate Admin and User applications sharing a Cloud Firestore backend.",
      details: "Implemented app flows using Provider, Firebase Authentication and Cloud Firestore. Earlier iterations began with PHP/MySQL. Worked through issues including double-booking logic and file/image storage constraints.",
      role: "Developer",
      stack: ["Flutter", "Dart", "Firebase Auth", "Cloud Firestore", "Provider"],
      githubUrl: "https://github.com/zaryab47-byte",
linkLabel: "View GitHub Profile",
featured: true
    },
    {
      id: "laravel-bookvault",
      number: "03",
      category: "BACKEND + WEB APP",
      title: "BookVault — Laravel Library Manager",
      description: "An earlier Laravel 12 version of the personal book library manager, deployed on free shared hosting.",
      details: "Worked through deployment and hosting constraints, manual MySQL table setup in phpMyAdmin, compiled CSS fixes and Alpine.js troubleshooting.",
      role: "Developer",
      stack: ["Laravel 12", "MySQL", "Alpine.js", "Tailwind CSS"],
      githubUrl: "https://github.com/zaryab47-byte",
      linkLabel: "View GitHub Profile",
      featured: true
    },
    {
      id: "fyp",
      number: "04",
      category: "IN PROGRESS",
      title: "Final Year Project",
      description: "Project topic to be announced after final selection.",
      details: "Not avilable till ... Sorry guys but you have to wait for it ...",
      role: "Student project",
      stack: ["Coming soon"],
      githubUrl: "https://github.com/zaryab47-byte",
      linkLabel: "View GitHub Profile",
      linkLabel: "Coming soon",
      featured: false
    }
  ],
  experience: [
    {
      role: "Web Developer",
      organization: "Exytex Technologies",
      type: "Employment type and dates to be confirmed",
      description: "Building and maintaining PHP-based SEO service pages, improving responsive layouts, implementing interactions and animations, and resolving front-end issues."
    },
    {
      role: "Full-Stack & Mobile App Projects",
      organization: "Freelance / Personal Projects",
      type: "Ongoing",
      description: "Developing web and mobile applications with PHP, Laravel, MySQL, Flutter and Firebase, including database-backed features and deployment."
    },
    {
      role: "Teacher",
      organization: "Islamia Model College, AJK",
      type: "Dates to be confirmed",
      description: "Classroom teaching experience in Physics, Computer Science and other subjects for Class 9 and Class 12 students."
    }
  ],
  services: [
    { icon: "⌘", title: "Business websites", description: "Responsive business and agency websites using PHP and Laravel, built around clear content and useful user journeys." },
    { icon: "↗", title: "SEO-friendly pages", description: "Landing pages and service pages with semantic structure, responsive layouts and thoughtful on-page foundations." },
    { icon: "▯", title: "Flutter applications", description: "Cross-platform mobile app development with Flutter, Dart and Firebase-backed features." },
    { icon: "⚙", title: "Bug fixing & UI polish", description: "Debugging existing websites, improving layouts, fixing responsive issues and refining interactions." },
    { icon: "▤", title: "Database & backend work", description: "CRUD functionality, authentication flows and data integration using PHP, Laravel, MySQL and Firebase." }
  ],
  formspreeEndpoint: "https://formspree.io/f/YOUR_FORMSPREE_ID"
};
