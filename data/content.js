// =========================================================================
// PORTFOLIO CONTENT DATA - MOHAMMED SAMEER AHMED
// You can edit all text, links, projects, and information in this single file.
// =========================================================================

export const personalData = {
  name: "Mohammed Sameer Ahmed",
  shortName: "Sameer",
  role: "Frontend Developer | MCA Student",
  location: "Surat, Gujarat, India",
  timezone: "Asia/Kolkata", // IST (Indian Standard Time)
  email: "md.sameerahmed01@gmail.com",
  github: "https://github.com/mdsameerahmed01",
  linkedin: "https://www.linkedin.com/in/md-sameer-ahmed-106292318",
  store: "https://samstore-75.creator-spring.com/",
  resumeUrl: "/resume.pdf", // Place your resume PDF in the /public folder as resume.pdf
  profileImage: "/profile.jpg", // Place your picture in the /public folder as profile.jpg

  // Hero Section
  hero: {
    greeting: "Hello, I'm",
    headline: "Building clean, responsive web interfaces with focus and curiosity.",
    subtext:
      "Frontend developer and MCA student based in Surat. I enjoy crafting modern, accessible websites, working with JavaScript, and managing online stores.",
    ctaProjects: "View Projects",
    ctaContact: "Contact Me",
  },

  // About Section
  about: {
    title: "About Me",
    sectionNumber: "01",
    bio: [
      "I am an aspiring frontend developer and 1st year MCA student from Surat, Gujarat, having completed my BCA in 2026. I enjoy turning design concepts into functional, responsive web interfaces with clean HTML, CSS, and modern JavaScript.",
      "During my internship at Creative Web Infotech, I worked hands-on with JavaScript and user interface improvements. Alongside programming, I have practical experience in e-commerce operations, product listing, and store administration.",
      "I believe in continuous learning, writing understandable code, and building practical digital solutions with an honest, hard-working mindset.",
    ],
    quickInfo: [
      {
        label: "Education",
        value: "MCA (1st Year)",
        subvalue: "BCA Graduate (2026)",
      },
      {
        label: "Location",
        value: "Surat, Gujarat",
        subvalue: "India (IST / UTC+5:30)",
      },
      {
        label: "Languages",
        value: "English, Hindi, Gujarati",
        subvalue: "Fluent communication",
      },
      {
        label: "Interests",
        value: "Web Dev & E-Commerce",
        subvalue: "Front-end & Online Stores",
      },
    ],
  },

  // Skills Section (Categorized Matrix, Clean Chips)
  skills: {
    title: "Skills & Technologies",
    sectionNumber: "02",
    subtitle:
      "Technologies and practical skills I work with across web development, programming, and store management.",
    categories: [
      {
        name: "Frontend Development",
        icon: "layout",
        skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "Responsive Design", "DOM Manipulation"],
      },
      {
        name: "Programming Languages",
        icon: "code",
        skills: ["Python", "C++", "Java", "VB.NET"],
      },
      {
        name: "Backend & Development Tools",
        icon: "server",
        skills: ["PHP", "Git & GitHub", "VS Code", "MySQL Basics"],
      },
      {
        name: "E-Commerce & Digital Store",
        icon: "shopping-bag",
        skills: ["Website Handling", "Product Listing", "Creator-Spring", "Catalog Organization"],
      },
      {
        name: "Professional & Soft Skills",
        icon: "users",
        skills: [
          "Analytical Thinking",
          "Teamwork & Collaboration",
          "Problem Solving",
          "Effective Communication",
          "Time Management",
        ],
      },
    ],
  },

  // Projects Section
  projects: {
    title: "Featured Projects",
    sectionNumber: "03",
    subtitle:
      "A selection of software, web, and e-commerce projects I have created and managed.",
    githubMoreUrl: "https://github.com/mdsameerahmed01",
    items: [
      {
        id: "samstore",
        title: "SamStore",
        category: "E-Commerce",
        badge: "Live Store",
        description:
          "An active online merchandise store hosted on Creator-Spring featuring apparel and lifestyle products, showcasing practical digital merchandising and product listing skills.",
        tech: ["Creator-Spring", "E-Commerce", "Product Listing", "Store Handling"],
        liveUrl: "https://samstore-75.creator-spring.com/",
        githubUrl: null,
        highlights: [
          "Live product catalog management",
          "Custom digital merchandising",
          "End-to-end checkout integration",
        ],
      },
      {
        id: "projectphp",
        title: "projectphp",
        category: "Web Application",
        badge: "Web Project",
        description:
          "A dynamic web project built with PHP and front-end markup to handle server-side processing, user input forms, and dynamic page rendering.",
        tech: ["PHP", "HTML5", "CSS3", "JavaScript"],
        liveUrl: null,
        githubUrl: "https://github.com/mdsameerahmed01/projectphp",
        highlights: [
          "Server-side request handling",
          "Dynamic HTML templates",
          "Interactive client-side forms",
        ],
      },
      {
        id: "library",
        title: "Library Management",
        category: "Software Application",
        badge: "Academic Project",
        description:
          "A structured library management system created to organize book records, track student borrowings, and manage inventory operations systematically.",
        tech: ["VB.NET", "Database", "Desktop GUI", "File Systems"],
        liveUrl: null,
        githubUrl: "https://github.com/mdsameerahmed01/Library",
        highlights: [
          "Book catalog & circulation tracking",
          "User & member record keeping",
          "Clean administrative interface",
        ],
      },
    ],
  },

  // Experience & Education Section
  experience: {
    title: "Experience & Education",
    sectionNumber: "04",
    subtitle: "My academic milestones, technical course training, and professional internship.",
    work: [
      {
        role: "Front-End JS Developer Intern",
        company: "Creative Web Infotech",
        location: "Surat, Gujarat",
        period: "12 Dec 2025 - 12 Jan 2026",
        duration: "1 Month",
        type: "Internship",
        description:
          "Assisted in front-end web development tasks using JavaScript, HTML, and CSS. Worked on responsive layout adjustments, component bug fixes, and learned collaborative web development practices.",
        showResumeButton: true,
      },
    ],
    education: [
      {
        degree: "Master of Computer Applications (MCA)",
        institution: "Surat, Gujarat",
        location: "Surat, Gujarat",
        period: "2026 - Present",
        status: "Currently Pursuing (1st Year)",
        description:
          "Advanced studies in computer applications, software engineering, modern web technologies, and system architecture.",
      },
      {
        degree: "Bachelor of Computer Applications (BCA)",
        institution:
          "SASCMA English Medium Commerce College (Veer Narmad South Gujarat University)",
        location: "Surat, Gujarat",
        period: "Completed 2026",
        status: "Graduated",
        description:
          "Graduated with core foundations in programming languages, data structures, database management, and web development.",
      },
      {
        degree: "Higher Secondary Certificate (12th)",
        institution: "Symga English Medium High School, Surat",
        location: "GSEB Board",
        period: "2023",
        status: "Completed",
        description: "Higher secondary education completed in English medium under Gujarat State Board.",
      },
      {
        degree: "Secondary School Certificate (10th)",
        institution: "Symga English Medium High School, Surat",
        location: "CBSE Board",
        period: "2021",
        status: "Completed",
        description: "Secondary school education completed under Central Board of Secondary Education.",
      },
      {
        degree: "Course on Computer Concepts (CCC)",
        institution: "IIHT Surat",
        location: "Surat, Gujarat",
        period: "2 Jul 2019 - 1 Oct 2019",
        duration: "3 Months",
        status: "Certified",
        description:
          "Hands-on computer proficiency course covering basic hardware architecture, networking concepts, and office automation tools.",
      },
    ],
  },

  // Contact Section
  contact: {
    title: "Get In Touch",
    sectionNumber: "05",
    subtitle:
      "Feel free to reach out for internship opportunities, project collaborations, or just a friendly chat.",
    email: "md.sameerahmed01@gmail.com",
    subject: "New message from portfolio",
    channels: [
      {
        label: "Email",
        value: "md.sameerahmed01@gmail.com",
        href: "mailto:md.sameerahmed01@gmail.com",
        icon: "mail",
        action: "Send Email",
      },
      {
        label: "LinkedIn",
        value: "linkedin.com/in/md-sameer-ahmed-106292318",
        href: "https://www.linkedin.com/in/md-sameer-ahmed-106292318",
        icon: "linkedin",
        action: "Connect",
      },
      {
        label: "GitHub",
        value: "github.com/mdsameerahmed01",
        href: "https://github.com/mdsameerahmed01",
        icon: "github",
        action: "Follow",
      },
    ],
  },

  // Navigation Links
  navLinks: [
    { label: "About", href: "#about", number: "01" },
    { label: "Skills", href: "#skills", number: "02" },
    { label: "Projects", href: "#projects", number: "03" },
    { label: "Experience", href: "#experience", number: "04" },
    { label: "Contact", href: "#contact", number: "05" },
  ],
};
