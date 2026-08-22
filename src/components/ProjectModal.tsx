import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  CheckCircle2,
  Briefcase,
  Smartphone,
  Layers,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Target,
  Search,
  FileCode2,
  GitBranch,
  Rocket,
  ArrowLeftRight,
  TrendingUp,
  Compass,
  Palette,
  Workflow,
  LayoutDashboard,
  BookOpen
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface ProjectDetail {
  id: string;
  title: string;
  subtitle?: string;
  category: string;
  types: string[];
  year: string;
  video?: string;
  image?: string;
  overview?: string;
  roleTitle?: string;
  roleDescription?: string;
  challenge?: {
    description: string;
    goals: string[];
    note?: string;
  };
  discovery?: {
    description: string;
    items: string[];
  };
  productDefinition?: {
    description: string;
    deliverables: string[];
  };
  productStructure?: {
    description?: string;
    services: {
      name: string;
      description: string;
      items?: string[];
    }[];
  };
  leadAndActivityManagement?: {
    description: string;
    flow: string[];
    summary?: string;
  };
  eventsAndBookings?: {
    description: string;
    items: string[];
    summary?: string;
  };
  dashboardDesign?: {
    description: string;
    hierarchy: string[];
    summary?: string;
  };
  mobileExperience?: {
    description: string;
    bottomNav: string[];
    summary?: string;
  };
  productExperience?: {
    description: string;
    items: {
      title: string;
      description: string;
    }[];
    alignmentNote?: string;
  };
  userJourneyDesign?: {
    description: string;
    stages: string[];
    summary?: string;
  };
  exampleWorkflow?: {
    title: string;
    description: string;
    items: string[];
    summary?: string;
  };
  productManagement?: {
    description: string;
    responsibilities: string[];
    summary?: string;
  };
  developmentAndDelivery?: {
    description: string;
    stages: string[];
    summary?: string;
  };
  dashboardExperience?: {
    description: string;
    combination?: string;
    itemsTitle?: string;
    items: string[];
    summary?: string;
  };
  contentAndEducation?: {
    description: string;
    items: string[];
    summary?: string;
  };
  designContribution?: {
    description: string;
    responsibilities: string[];
    summary?: string;
  };
  featuresManaged?: string[];
  keyProductExperience?: {
    description: string;
    itemsTitle?: string;
    items: string[];
  };
  designSystemAndConsistency?: {
    description: string;
    items: string[];
    summary?: string;
  };
  prototypeAndHandoff?: {
    description: string;
    stages: string[];
  };
  developmentAndIntegration?: {
    description: string;
    responsibilities: string[];
  };
  testingAndLaunch?: {
    description?: string;
    items: string[];
  };
  transformation?: {
    traditional: string[];
    apollo: string[];
    outcome: string;
  };
  contributionWorkflow?: {
    stages: string[];
    summary: string;
  };
  coreServices?: string[];
  impactHighlights?: string[];
}

export const apolloProjectDetail: ProjectDetail = {
  id: "01",
  title: "Apollo",
  subtitle: "Mobile Banking Application",
  category: "Digital Banking · Mobile Application · Bank of Abyssinia",
  types: ["Product Owner", "Business Analyst", "UX/UI Designer"],
  year: "2023 – 2024",
  overview:
    "Apollo is a digital banking application developed by Bank of Abyssinia to provide customers with convenient, secure, and self-service access to banking services through their mobile devices. The platform brings multiple banking services into a single digital experience, reducing the need for customers to visit physical branches.\n\nThe application supports services including digital account opening, biometric authentication, account management, transfers, payments, card services, virtual cards, QR payments, loans, and other digital banking services.",
  roleTitle: "Product Owner · Business Analyst · UX/UI Designer",
  roleDescription:
    "I managed the product throughout its lifecycle, from discovery and requirements definition through UX/UI design, development, testing, launch, and post-launch improvement.",
  challenge: {
    description:
      "Traditional banking services often required customers to visit branches and depend on manual or staff-assisted processes. The challenge was to transform these processes into simple, secure, and accessible digital journeys that customers could complete independently.",
    goals: [
      "Reduce dependence on physical branches",
      "Simplify banking processes",
      "Enable customer self-service",
      "Provide secure digital access to banking services",
      "Integrate multiple banking services",
      "Deliver intuitive and consistent customer experiences"
    ]
  },
  discovery: {
    description:
      "I worked with customers, business stakeholders, and technical teams to understand business requirements, customer needs, existing processes, and opportunities for digital transformation.",
    items: [
      "User research & customer persona analysis",
      "Requirements gathering and stakeholder interviews",
      "Current-state process analysis & branch workflow mapping",
      "Identification of product gaps & friction points",
      "Definition and prioritization of core product requirements"
    ]
  },
  productDefinition: {
    description:
      "I translated customer and business requirements into actionable product specifications and managed the prioritized product backlog in Jira, coordinating priorities across business, design, and technical teams.",
    deliverables: [
      "Product Requirements Documents (PRDs)",
      "User stories with rigorous acceptance criteria",
      "End-to-end user process flows & system state diagrams",
      "Functional and non-functional requirements",
      "Feature specifications & scope definitions",
      "Prioritized sprint and product backlogs in Jira"
    ]
  },
  designContribution: {
    description:
      "I personally contributed to the design of the full range of services provided through Apollo, translating banking processes into intuitive digital customer journeys. The focus was on simplifying complex banking processes and enabling customers to complete services independently.",
    responsibilities: [
      "User journeys & multi-step transaction mapping",
      "User flows & decision trees",
      "Wireframes and structural layouts",
      "Interactive high-fidelity prototypes",
      "High-fidelity interfaces & consistent component design",
      "Interaction design & micro-feedback",
      "Digital banking workflows & validation states"
    ]
  },
  featuresManaged: [
    "Digital account opening & self-onboarding",
    "Account management & balance inquiries",
    "Money transfers (P2P, Inter-bank & RTGS)",
    "Bill payments & utility settlements",
    "QR payments for seamless merchant checkouts",
    "Card services & physical card management",
    "Virtual and digital instant cards",
    "Digital micro-loans & credit facilities",
    "Transaction history & downloadable statements",
    "Digital authentication, biometric login & security",
    "Integrated multi-service digital banking ecosystem"
  ],
  developmentAndIntegration: {
    description:
      "I worked closely with developers and technical teams throughout implementation to ensure that product requirements and designs were accurately translated into functional solutions.",
    responsibilities: [
      "Clarifying functional & UI requirements",
      "Supporting feature implementation & sprint deliverables",
      "Coordinating core banking & back-end API integrations",
      "Reviewing implemented features against acceptance criteria",
      "Resolving requirements gaps & edge cases",
      "Collaborating with technical teams on product & performance issues",
      "Ensuring strict alignment between product requirements, design, and implementation"
    ]
  },
  testingAndLaunch: {
    description: "I participated throughout the testing and release lifecycle to ensure enterprise reliability:",
    items: [
      "User Acceptance Testing (UAT)",
      "Quality Assurance (QA) testing",
      "Production validation & sanity testing",
      "Defect identification, triage, and resolution",
      "Release coordination across mobile stores",
      "Feature launches & phased deployment",
      "Post-launch telemetry & continuous improvements"
    ]
  },
  transformation: {
    traditional: ["Branch visit", "Manual process", "Staff assistance", "Service completion"],
    apollo: ["Mobile access", "Digital journey", "Self-service", "Service completion"],
    outcome:
      "The product enabled customers to access and complete a growing range of banking services directly through their mobile devices, improving convenience and reducing dependence on physical banking channels."
  },
  contributionWorkflow: {
    stages: [
      "Discovery",
      "Research",
      "Requirements",
      "Product Definition",
      "UX/UI Design",
      "Backlog Management",
      "Development",
      "Integration",
      "Testing",
      "Launch",
      "Continuous Improvement"
    ],
    summary:
      "My work combined Product Management, Business Analysis, UX/UI Design, and delivery coordination to transform banking requirements into customer-facing digital experiences."
  },
  impactHighlights: [
    "Transformed branch-dependent banking operations into 100% self-service mobile journeys",
    "Unified multiple disparate financial services into a single, cohesive user experience",
    "Enabled instant digital onboarding, secure biometric access, and seamless everyday payments"
  ]
};

export const boaProjectDetail: ProjectDetail = {
  id: "02",
  title: "BOA Mobile",
  subtitle: "Mobile Banking Application",
  category: "Mobile Banking Application · Bank of Abyssinia",
  types: ["Product Owner", "Business Analyst", "UX/UI Designer"],
  year: "2022 – Present",
  overview:
    "BOA Mobile is Bank of Abyssinia's flagship mobile banking application serving millions of customers. It provides comprehensive financial self-service, ranging from high-frequency payments and instant transfers to card management, foreign remittance, and micro-lending.",
  roleTitle: "Product Owner · Business Analyst · UX/UI Designer",
  roleDescription:
    "I was responsible for the product across its lifecycle, from identifying customer and business needs to defining, designing, delivering, and continuously improving the digital banking experience.",
  challenge: {
    description:
      "Modernize traditional retail banking operations into high-performance digital journeys while maintaining strict regulatory compliance, enterprise-grade security, and accessibility across diverse customer segments.",
    goals: [
      "Deliver instant, friction-free customer self-service",
      "Unify multi-currency accounts and domestic/international transfers",
      "Provide secure biometric authentication and device-binding protocols",
      "Modernize user interfaces with a consistent, accessible design system"
    ]
  },
  discovery: {
    description:
      "Conducted extensive stakeholder workshops, customer feedback evaluations, and quantitative transaction analytics to uncover product bottlenecks and identify growth opportunities.",
    items: [
      "Customer journey mapping and friction-point analysis",
      "Stakeholder interviews across branch operations and digital banking",
      "Competitive benchmarking across regional fintech platforms",
      "Requirements elicitation and prioritization"
    ]
  },
  productDefinition: {
    description:
      "Translated high-level business goals into rigorous Product Requirement Documents (PRDs), user stories, and acceptance criteria.",
    deliverables: [
      "Comprehensive Product Requirements Documents (PRDs)",
      "User stories with verifiable acceptance criteria",
      "System flowcharts & API contract documentation",
      "Sprint backlog management and prioritization"
    ]
  },
  designContribution: {
    description:
      "I contributed to the design of the entire range of services provided through the BOA Mobile application, translating banking processes and requirements into user journeys, flows, wireframes, prototypes, and high-fidelity interfaces.",
    responsibilities: [
      "Designing customer experiences across major banking services rather than isolated screens",
      "Building interactive prototypes and design system components",
      "Optimizing complex transaction flows for rapid task completion",
      "Conducting usability evaluations with diverse user groups"
    ]
  },
  featuresManaged: [
    "Product discovery, user research, and comprehensive business requirements gathering",
    "Feature definition, sprint roadmap planning, and backlog prioritization",
    "Product Requirement Documents (PRDs), functional specs, and user stories with clear acceptance criteria",
    "Information architecture, user journey mapping, wireframing, and interactive design systems",
    "Cross-functional coordination between engineering teams, QA analysts, compliance, and executive leadership",
    "End-to-end release management, usability testing, and continuous feedback loop integration"
  ],
  developmentAndIntegration: {
    description:
      "Partnered daily with mobile engineers and backend architects to align interface specifications with core banking systems and microservices.",
    responsibilities: [
      "Reviewing UI/UX implementation against design tokens",
      "Coordinating backend API payload contracts",
      "Troubleshooting edge-case states and network error handlings",
      "Facilitating agile sprint ceremonies"
    ]
  },
  testingAndLaunch: {
    description: "Led rigorous end-to-end release cycles to ensure zero-defect production rollouts:",
    items: [
      "User Acceptance Testing (UAT) sign-offs",
      "Security and penetration test design verification",
      "Phased rollout strategy and telemetry monitoring",
      "Post-launch customer feedback retrospectives"
    ]
  },
  transformation: {
    traditional: ["Branch visit", "Manual cash deposits", "Paper receipts", "Staff intervention"],
    apollo: ["Mobile authentication", "Real-time balance sync", "Instant QR/P2P transfer", "Zero-friction self-service"],
    outcome:
      "Empowered millions of Bank of Abyssinia customers with uninterrupted, secure, 24/7 digital banking on Android and iOS."
  },
  contributionWorkflow: {
    stages: [
      "Product Discovery",
      "User Research",
      "Stakeholder Alignment",
      "PRD & Stories",
      "UX Wireframing",
      "Design System & UI",
      "Sprint Delivery",
      "Core Banking APIs",
      "UAT & QA",
      "Phased Store Launch",
      "Analytics & Growth"
    ],
    summary:
      "End-to-end ownership spanning product management, business analysis, and high-fidelity UX/UI design for Ethiopia's premier digital banking platform."
  },
  coreServices: [
    "Account Management & Multi-Currency Overviews",
    "Fund Transfers (Instant P2P, Inter-Bank, RTGS & Scheduled Transfers)",
    "Bill Payments, Merchant QR & Utility Settlements",
    "Cardless ATM Cash Withdrawals & Agent Cash-outs",
    "International Remittance & Foreign Exchange Integration",
    "Digital Loan Applications & Micro-Credit Services",
    "Biometric Authentication (Face ID, Fingerprint) & Device Binding Security"
  ],
  impactHighlights: [
    "Designed and delivered seamless digital journeys for millions of daily active banking customers",
    "Significantly reduced drop-off rates across transaction and bill payment funnels",
    "Streamlined complex banking requirements into clean, modern, and accessible touchpoints"
  ]
};

export const nablisProjectDetail: ProjectDetail = {
  id: "03",
  title: "Nablis Consulting Service",
  subtitle: "Digital Ministry & Spiritual Guidance Platform",
  category: "Digital Ministry & Spiritual Guidance Platform · Web Application",
  types: ["UX/UI Designer", "Product Designer"],
  year: "2023",
  overview:
    "Nablis is a web-based spiritual guidance and ministry platform designed to provide a structured digital environment for spiritual education, communication, consultation, and community engagement.\n\nThe platform brings together spiritual content, Bible study, daily prayers, appointments, events, attendance, galleries, testimonials, and messaging into a single experience, enabling the priest and ministry team to manage and engage with their community digitally.",
  roleTitle: "UX/UI Designer · Product Designer",
  roleDescription:
    "I led the UX/UI design of the platform, translating the ministry's service requirements into structured user journeys, responsive interfaces, and interactive prototypes.\n\nMy work covered the overall platform experience, including the dashboard, navigation structure, content management experiences, communication, appointments, and spiritual engagement features.",
  challenge: {
    description:
      "The objective was to transform a traditionally personal and physical spiritual guidance experience into a structured digital service.\n\nThe platform needed to provide a central place where users could:",
    goals: [
      "Access spiritual content",
      "Study the Bible",
      "Follow daily prayers",
      "Request or manage appointments",
      "Communicate with the ministry",
      "Access blogs and spiritual resources",
      "View upcoming events",
      "Track participation and attendance",
      "Access spiritual media and galleries",
      "Share testimonials"
    ],
    note:
      "At the same time, the administrative experience needed to give the priest and ministry team a clear overview of their activities and community engagement."
  },
  productStructure: {
    description: "The platform was organized around the following core services:",
    services: [
      {
        name: "Dashboard",
        description:
          "The dashboard provides an overview of the user's spiritual activities and upcoming engagements."
      },
      {
        name: "Messaging",
        description:
          "A dedicated communication area designed to support direct interaction between the ministry and its users."
      },
      {
        name: "Bible Study",
        description:
          "A structured environment for accessing and managing Bible study content, allowing users to follow their study progress and access learning materials."
      },
      {
        name: "Daily Prayers",
        description:
          "A dedicated space for daily prayer activities, including progress tracking and devotional content."
      },
      {
        name: "Appointments",
        description:
          "A structured appointment experience for scheduling and managing sessions between users and ministry representatives."
      },
      {
        name: "Blogs",
        description:
          "A content area for publishing and accessing spiritual articles, teachings, reflections, and other written resources."
      },
      {
        name: "Events",
        description:
          "A centralized space for communicating upcoming ministry activities and events."
      },
      {
        name: "Attendance",
        description:
          "A mechanism for managing and tracking participation in ministry activities and sessions."
      },
      {
        name: "Gallery",
        description:
          "A visual content area for sharing ministry activities, events, and other relevant media."
      },
      {
        name: "Testimonials",
        description:
          "A dedicated space for users to share their experiences and feedback about the ministry and its services."
      },
      {
        name: "Settings",
        description:
          "Account and platform configuration, allowing users or administrators to manage their preferences and account-related information."
      }
    ]
  },
  designContribution: {
    description:
      "I designed the platform around a content-rich but structured dashboard experience, making frequently used spiritual services easily accessible through the main navigation.\n\nThe design included:",
    responsibilities: [
      "Information architecture",
      "Navigation structure",
      "User flows",
      "Wireframes",
      "Responsive layouts",
      "High-fidelity interfaces",
      "Interactive prototypes",
      "Reusable UI components"
    ],
    summary:
      "The dashboard was designed to bring important information together in a single view, including spiritual progress, upcoming appointments, daily inspiration, and study materials."
  },
  contributionWorkflow: {
    stages: [
      "Research & Requirements",
      "Information Architecture",
      "User Flows",
      "Wireframes",
      "UX/UI Design",
      "Responsive Design",
      "Prototyping",
      "Development Handoff"
    ],
    summary:
      "I transformed the requirements of the spiritual consulting and ministry service into a complete digital product experience, designing both the overall information architecture and individual user experiences."
  }
};

export const cribProjectDetail: ProjectDetail = {
  id: "05",
  title: "CRIB CRM",
  subtitle: "Network Marketing & Sales Management",
  category: "CRM · Web & Mobile Application · Network Marketing & Sales Management",
  types: ["UX/UI Designer", "Product Designer"],
  year: "2024",
  overview:
    "CRIB CRM is an all-in-one platform designed to help network marketers, coaches, course creators, and community builders manage leads, customer relationships, bookings, content, and engagement from a single platform.\n\nThe product brings essential sales and relationship-management activities together, providing users with a centralized workspace for managing prospects, appointments, training, and customer interactions.",
  roleTitle: "UX/UI Designer · Product Designer",
  roleDescription:
    "I was responsible for the end-to-end UX/UI design of the CRIB CRM web and mobile applications, translating business requirements and user needs into structured workflows, responsive interfaces, and interactive prototypes.",
  challenge: {
    description:
      "The product needed to bring several activities that are normally managed across different tools into a single, simple CRM experience.\n\nThe key challenge was to make it easy for users to manage their leads and daily activities while keeping important information such as upcoming calls, bookings, training, and engagement accessible from one place.",
    goals: [
      "Bring multiple sales and engagement activities into a single platform",
      "Simplify lead and customer relationship management",
      "Keep upcoming calls, bookings, and training accessible from one place",
      "Provide structured workflows for daily engagement",
      "Deliver a seamless experience across web and mobile"
    ]
  },
  productStructure: {
    description: "The mobile experience was organized around five primary areas:",
    services: [
      {
        name: "Home",
        description:
          "The home dashboard provides an overview of the user's CRM activities, giving users an immediate view of their most important activities without requiring them to navigate through multiple sections."
      },
      {
        name: "Leads",
        description:
          "A dedicated area for managing and organizing prospects and customer relationships. Users can access their lead information and manage their interactions throughout the sales process."
      },
      {
        name: "Trainings",
        description:
          "A centralized space for accessing training and learning content, supporting users in developing their knowledge and skills."
      },
      {
        name: "Assistant",
        description:
          "A dedicated assistant experience designed to support users with their CRM activities and workflows."
      },
      {
        name: "Settings",
        description:
          "Account and application configuration, allowing users to manage their preferences and settings."
      }
    ]
  },
  designContribution: {
    description:
      "I designed the complete user experience across the web and mobile applications, including:",
    responsibilities: [
      "Information architecture",
      "Navigation",
      "User flows",
      "Wireframes",
      "Dashboard design",
      "Lead management interfaces",
      "Booking and event experiences",
      "Training interfaces",
      "Responsive layouts",
      "High-fidelity UI",
      "Interactive prototypes",
      "Reusable UI components"
    ]
  },
  mobileExperience: {
    description:
      "The mobile application was designed to provide users with access to their CRM activities while working remotely or on the move.\n\nThe bottom navigation provides direct access to:",
    bottomNav: [
      "Home",
      "Leads",
      "Trainings",
      "Assistant",
      "Settings"
    ],
    summary:
      "This keeps the most important product areas accessible without overwhelming the user with navigation options."
  },
  designSystemAndConsistency: {
    description:
      "I developed reusable design patterns and components to maintain consistency across the platform.\n\nThis included:",
    items: [
      "Navigation components",
      "Cards",
      "Buttons",
      "Forms",
      "Lead information",
      "Activity cards",
      "Status indicators",
      "Typography",
      "Responsive layouts",
      "Interactive elements"
    ]
  },
  prototypeAndHandoff: {
    description:
      "I created high-fidelity interfaces and interactive prototypes to demonstrate the intended user experience and provide clear design specifications for development.",
    stages: [
      "Requirements",
      "Information Architecture",
      "User Flows",
      "Wireframes",
      "UI Design",
      "Prototyping",
      "Development Handoff"
    ]
  },
  contributionWorkflow: {
    stages: [
      "Research & Requirements",
      "UX Architecture",
      "User Flows",
      "Wireframing",
      "UX/UI Design",
      "Prototyping",
      "Development Handoff"
    ],
    summary:
      "I transformed the CRM requirements into a structured web and mobile product experience, designing the core workflows for lead management, activities, bookings, training, and user engagement."
  }
};

export const ayotechProjectDetail: ProjectDetail = {
  id: "04",
  title: "AYOtech Core System",
  subtitle: "Core Business Management System",
  category: "Core Business Management System · Web Application · Enterprise Software",
  types: ["Product Manager", "Business Analyst", "UX/UI Designer"],
  year: "2023",
  overview:
    "The AYOtech Core System is an enterprise web-based platform developed to support the management and day-to-day operations of a client organization. The system was developed from the ground up, translating business processes into structured digital workflows and centralized operational tools.\n\nThe platform provides a modular environment for managing core business functions, with the demonstrated interface including areas such as Member Management, User Management, Role & Permission Management, Transaction Management, Loan Management, Share Desk, and system settings.",
  roleTitle: "Product Manager · Business Analyst · UX/UI Designer",
  roleDescription:
    "I managed the product from initial discovery and requirements through design, development, testing, launch, and post-launch management.\n\nI also managed the Product Management, Business Analysis, and UX/UI teams, coordinating the different disciplines throughout product development.",
  challenge: {
    description:
      "The client required a centralized system to replace fragmented and manual operational processes with a structured digital platform.\n\nThe key challenge was to understand the client's existing business operations and transform them into clear, configurable, and interconnected digital workflows.\n\nThe system needed to:",
    goals: [
      "Digitize core business processes",
      "Centralize operational information",
      "Support multiple business functions",
      "Provide role-based access and permissions",
      "Improve process visibility",
      "Reduce manual work",
      "Provide structured transaction management",
      "Support scalable product and service configuration"
    ]
  },
  discovery: {
    description:
      "I worked directly with stakeholders to understand the client's business operations, existing processes, requirements, and pain points.\n\nThis involved:",
    items: [
      "Stakeholder interviews",
      "Business process analysis",
      "Requirements gathering",
      "Process mapping",
      "Identification of process gaps",
      "Definition of functional requirements",
      "Prioritization of product requirements"
    ]
  },
  productDefinition: {
    description:
      "I converted business requirements into detailed product specifications, including:",
    deliverables: [
      "Product Requirements Documents (PRDs)",
      "User stories",
      "Acceptance criteria",
      "Business rules",
      "Process flows",
      "Functional requirements",
      "Feature specifications",
      "Product backlog"
    ]
  },
  designContribution: {
    description:
      "I was directly involved in designing the system's user experience and interfaces.\n\nThe design focused on creating a structured enterprise interface that could accommodate complex business processes without making the system difficult to navigate.\n\nMy design work included:",
    responsibilities: [
      "Information architecture",
      "User journeys",
      "Process flows",
      "Wireframes",
      "High-fidelity UI",
      "Interactive prototypes",
      "Reusable components",
      "Responsive layouts",
      "Dashboard and data-heavy interfaces"
    ]
  },
  productStructure: {
    description: "The system was organized into functional modules, including:",
    services: [
      {
        name: "Member Management",
        description:
          "A centralized area for managing members and their related information."
      },
      {
        name: "User Management",
        description:
          "Tools for managing system users and their access to the platform."
      },
      {
        name: "Role & Permission Management",
        description:
          "A role-based access structure allowing administrators to control what different users can access and perform within the system."
      },
      {
        name: "Transaction Management",
        description:
          "A centralized area for managing and monitoring business transactions."
      },
      {
        name: "Loan Management",
        description:
          "The demonstrated system includes a comprehensive loan management workflow covering loan services, loan applications, loan configuration, disbursements, loan repayments, repayment schedules, and loan closure. The Manage Loan Service interface allows administrators to create and manage loan products, configure categories, interest methods, rates, tenures, and product statuses."
      },
      {
        name: "Share Desk",
        description:
          "A dedicated area for managing share-related operations within the system."
      },
      {
        name: "Settings",
        description: "System-level configuration and administration."
      }
    ]
  },
  productManagement: {
    description:
      "As Product Manager, I coordinated the product across business, design, and technical teams.\n\nMy responsibilities included:",
    responsibilities: [
      "Defining product requirements",
      "Managing the product roadmap",
      "Prioritizing features",
      "Managing the backlog",
      "Coordinating Product, BA, UX/UI, and development teams",
      "Reviewing product designs",
      "Resolving requirement gaps",
      "Supporting development decisions",
      "Managing stakeholder expectations",
      "Tracking product progress"
    ]
  },
  developmentAndDelivery: {
    description:
      "I worked closely with developers throughout implementation to ensure that the final system reflected the defined business requirements and user experience.\n\nI remained involved throughout implementation, supporting requirement clarification, design validation, testing, and issue resolution.",
    stages: [
      "Discovery",
      "Requirements",
      "Process Design",
      "UX/UI",
      "Development",
      "Integration",
      "UAT",
      "Launch"
    ]
  },
  testingAndLaunch: {
    description:
      "I coordinated product testing and validation before release, including:",
    items: [
      "UAT",
      "Functional testing",
      "Requirement validation",
      "UI/UX validation",
      "Defect identification",
      "Issue resolution",
      "Release coordination",
      "Post-launch support"
    ]
  },
  contributionWorkflow: {
    stages: [
      "Discovery",
      "Business Analysis",
      "Product Strategy",
      "Requirements",
      "Process Flows",
      "UX/UI",
      "Backlog Management",
      "Development",
      "UAT",
      "Launch",
      "Product Management"
    ],
    summary:
      "I managed the AYOtech core system from concept to production, combining Product Management, Business Analysis, and UX/UI Design to transform the client's operational requirements into a working enterprise system."
  }
};

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectDetail | null;
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  // Handle ESC key press & lock background scrolling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6 lg:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 dark:bg-black/90 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Card / Overlaying Page */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="relative w-full max-w-5xl max-h-[94vh] bg-zinc-50 dark:bg-[#070d22] text-foreground rounded-[2rem] sm:rounded-[2.5rem] border border-zinc-200 dark:border-white/15 shadow-2xl overflow-hidden flex flex-col z-10"
          >
            {/* Sticky Header Bar */}
            <div className="sticky top-0 z-20 flex items-center justify-between px-6 sm:px-8 py-4 sm:py-5 bg-zinc-50/95 dark:bg-[#070d22]/95 backdrop-blur-xl border-b border-zinc-200 dark:border-white/10">
              <div className="flex items-center gap-3 min-w-0">
                <Badge className="bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
                  Case Study
                </Badge>
                <h3 className="text-base sm:text-lg font-bold tracking-tight uppercase truncate font-heading">
                  {project.title}
                </h3>
              </div>

              {/* Close Icon at Top Right */}
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="w-10 h-10 rounded-full border border-zinc-300 dark:border-white/20 bg-white/80 dark:bg-white/10 hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900 flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Modal Body */}
            <div className="flex-1 overflow-y-auto px-6 sm:px-8 md:px-12 py-6 sm:py-8 space-y-8 selection:bg-zinc-200 dark:selection:bg-zinc-800">
              {/* Hero Banner / Title */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  {project.types.map((type) => (
                    <span
                      key={type}
                      className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-zinc-200/70 dark:bg-white/10 text-zinc-800 dark:text-zinc-200 border border-zinc-300/50 dark:border-white/10"
                    >
                      {type}
                    </span>
                  ))}
                  <span className="text-xs font-mono opacity-50 px-2">{project.year}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight uppercase font-heading leading-tight">
                  {project.title} {project.subtitle ? (
                    <> — <span className="font-serif italic font-light text-zinc-500 dark:text-zinc-400">{project.subtitle}</span></>
                  ) : null}
                </h2>
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  {project.category}
                </p>
              </div>

              {/* Overview Section */}
              {project.overview && (
                <div className="p-6 sm:p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center shrink-0">
                      <Compass className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight">
                      Overview
                    </h3>
                  </div>

                  <div className="space-y-3 pt-2 text-zinc-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed font-sans">
                    {project.overview.split("\n\n").map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>
                </div>
              )}

              {/* My Role Section */}
              <div className="p-6 sm:p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center shrink-0">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight">
                    My Role
                  </h3>
                </div>

                <div className="space-y-3 pt-1">
                  <p className="text-sm sm:text-base font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wide">
                    {project.roleTitle}
                  </p>
                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans">
                    {project.roleDescription}
                  </p>
                </div>
              </div>

              {/* The Challenge Section */}
              {project.challenge && (
                <div className="p-6 sm:p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center shrink-0">
                      <Target className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight">
                      The Challenge
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans">
                    {project.challenge.description}
                  </p>

                  <div className="pt-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block mb-3">
                      The product needed to:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {project.challenge.goals.map((goal, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 p-3 rounded-2xl bg-zinc-100/70 dark:bg-white/[0.03] border border-zinc-200/80 dark:border-white/5"
                        >
                          <span className="w-2 h-2 rounded-full bg-zinc-900 dark:bg-white shrink-0" />
                          <span className="text-xs sm:text-sm font-medium text-zinc-800 dark:text-zinc-200">
                            {goal}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {project.challenge.note && (
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans pt-2 border-t border-zinc-200/60 dark:border-white/5">
                      {project.challenge.note}
                    </p>
                  )}
                </div>
              )}

              {/* Product Structure Section */}
              {project.productStructure && (
                <div className="p-6 sm:p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center shrink-0">
                      <Layers className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight">
                      Product Structure
                    </h3>
                  </div>

                  {project.productStructure.description && (
                    <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans">
                      {project.productStructure.description}
                    </p>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
                    {project.productStructure.services.map((service, idx) => (
                      <div
                        key={idx}
                        className={`p-4 rounded-2xl bg-zinc-100/70 dark:bg-white/[0.03] border border-zinc-200/80 dark:border-white/5 space-y-2 ${
                          service.items ? "md:col-span-2" : ""
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="w-2 h-2 rounded-full bg-zinc-900 dark:bg-white shrink-0" />
                          <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wide text-zinc-900 dark:text-white">
                            {service.name}
                          </h4>
                        </div>
                        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans pl-4.5">
                          {service.description}
                        </p>
                        {service.items && (
                          <div className="pt-2 pl-4.5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
                            {service.items.map((item, itemIdx) => (
                              <div
                                key={itemIdx}
                                className="flex items-center gap-2 p-2 rounded-xl bg-white/80 dark:bg-white/5 border border-zinc-200/60 dark:border-white/5"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-900 dark:text-white shrink-0" />
                                <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                                  {item}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Lead & Activity Management Section */}
              {project.leadAndActivityManagement && (
                <div className="p-6 sm:p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center shrink-0">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight">
                      Lead & Activity Management
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans">
                    {project.leadAndActivityManagement.description}
                  </p>

                  <div className="p-4 sm:p-5 rounded-2xl bg-zinc-100/80 dark:bg-white/[0.03] border border-zinc-200/80 dark:border-white/5">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      {project.leadAndActivityManagement.flow.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 sm:gap-3">
                          <span className="px-3.5 py-2 rounded-xl bg-white dark:bg-white/10 text-zinc-900 dark:text-white text-xs sm:text-sm font-bold border border-zinc-200/60 dark:border-white/5 shadow-xs">
                            {item}
                          </span>
                          {idx < project.leadAndActivityManagement.flow.length - 1 && (
                            <ArrowRight className="w-4 h-4 text-zinc-400 shrink-0" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {project.leadAndActivityManagement.summary && (
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans pt-1">
                      {project.leadAndActivityManagement.summary}
                    </p>
                  )}
                </div>
              )}

              {/* Events & Bookings Section */}
              {project.eventsAndBookings && (
                <div className="p-6 sm:p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center shrink-0">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight">
                      Events & Bookings
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans">
                    {project.eventsAndBookings.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-1">
                    {project.eventsAndBookings.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-3.5 rounded-2xl bg-zinc-100/70 dark:bg-white/[0.03] border border-zinc-200/80 dark:border-white/5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-zinc-900 dark:text-white shrink-0" />
                        <span className="text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {project.eventsAndBookings.summary && (
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans pt-2 border-t border-zinc-200/60 dark:border-white/5">
                      {project.eventsAndBookings.summary}
                    </p>
                  )}
                </div>
              )}

              {/* Product Experience Section */}
              {project.productExperience && (
                <div className="p-6 sm:p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center shrink-0">
                      <Layers className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight">
                      Product Experience
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans">
                    {project.productExperience.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
                    {project.productExperience.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-zinc-100/70 dark:bg-white/[0.03] border border-zinc-200/80 dark:border-white/5 space-y-1.5"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="w-2 h-2 rounded-full bg-zinc-900 dark:bg-white shrink-0" />
                          <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wide text-zinc-900 dark:text-white">
                            {item.title}
                          </h4>
                        </div>
                        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans pl-4.5">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  {project.productExperience.alignmentNote && (
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 italic leading-relaxed font-sans pt-2 border-t border-zinc-200/60 dark:border-white/5">
                      {project.productExperience.alignmentNote}
                    </p>
                  )}
                </div>
              )}

              {/* Product Discovery Section */}
              {project.discovery && (
                <div className="p-6 sm:p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center shrink-0">
                      <Search className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight">
                      Product Discovery
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans">
                    {project.discovery.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    {project.discovery.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3.5 rounded-2xl bg-zinc-100/70 dark:bg-white/[0.03] border border-zinc-200/80 dark:border-white/5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-zinc-900 dark:text-white shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Product Definition Section */}
              {project.productDefinition && (
                <div className="p-6 sm:p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center shrink-0">
                      <FileCode2 className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight">
                      Product Definition
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans">
                    {project.productDefinition.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    {project.productDefinition.deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3.5 rounded-2xl bg-zinc-100/70 dark:bg-white/[0.03] border border-zinc-200/80 dark:border-white/5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-zinc-900 dark:text-white shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* UX/UI Design Section */}
              {project.designContribution && (
                <div className="p-6 sm:p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center shrink-0">
                      <Smartphone className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight">
                      UX/UI Design
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans">
                    {project.designContribution.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-1">
                    {project.designContribution.responsibilities.map((resp, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-3.5 rounded-2xl bg-zinc-100/70 dark:bg-white/[0.03] border border-zinc-200/80 dark:border-white/5"
                      >
                        <span className="w-2 h-2 rounded-full bg-zinc-900 dark:bg-white shrink-0" />
                        <span className="text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                          {resp}
                        </span>
                      </div>
                    ))}
                  </div>

                  {project.designContribution.summary && (
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans pt-2 border-t border-zinc-200/60 dark:border-white/5">
                      {project.designContribution.summary}
                    </p>
                  )}
                </div>
              )}

              {/* User Journey Design Section */}
              {project.userJourneyDesign && (
                <div className="p-6 sm:p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center shrink-0">
                      <Compass className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight">
                      User Journey Design
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans">
                    {project.userJourneyDesign.description}
                  </p>

                  <div className="p-4 sm:p-5 rounded-2xl bg-zinc-100/80 dark:bg-white/[0.03] border border-zinc-200/80 dark:border-white/5">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      {project.userJourneyDesign.stages.map((stage, idx) => (
                        <div key={idx} className="flex items-center gap-2 sm:gap-3">
                          <span className="px-3 py-1.5 rounded-xl bg-white dark:bg-white/10 text-zinc-900 dark:text-white text-xs sm:text-sm font-bold border border-zinc-200/60 dark:border-white/5 shadow-xs">
                            {stage}
                          </span>
                          {idx < project.userJourneyDesign.stages.length - 1 && (
                            <ArrowRight className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {project.userJourneyDesign.summary && (
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans pt-1">
                      {project.userJourneyDesign.summary}
                    </p>
                  )}
                </div>
              )}

              {/* Dashboard Experience Section */}
              {project.dashboardExperience && (
                <div className="p-6 sm:p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center shrink-0">
                      <LayoutDashboard className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight">
                      Dashboard Experience
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans">
                    {project.dashboardExperience.description}
                  </p>

                  {project.dashboardExperience.combination && (
                    <div className="p-4 rounded-2xl bg-zinc-900 text-white dark:bg-white/10 border border-zinc-800 dark:border-white/10">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-300 block mb-1">
                        Interface Integration
                      </span>
                      <p className="text-xs sm:text-sm font-semibold tracking-wide text-zinc-100">
                        {project.dashboardExperience.combination}
                      </p>
                    </div>
                  )}

                  <div className="pt-2 space-y-3">
                    {project.dashboardExperience.itemsTitle && (
                      <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block">
                        {project.dashboardExperience.itemsTitle}
                      </span>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {project.dashboardExperience.items.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 p-3.5 rounded-2xl bg-zinc-100/70 dark:bg-white/[0.03] border border-zinc-200/80 dark:border-white/5"
                        >
                          <CheckCircle2 className="w-4 h-4 text-zinc-900 dark:text-white shrink-0" />
                          <span className="text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {project.dashboardExperience.summary && (
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans pt-2 border-t border-zinc-200/60 dark:border-white/5">
                      {project.dashboardExperience.summary}
                    </p>
                  )}
                </div>
              )}

              {/* Dashboard Design Section */}
              {project.dashboardDesign && (
                <div className="p-6 sm:p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center shrink-0">
                      <LayoutDashboard className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight">
                      Dashboard Design
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans">
                    {project.dashboardDesign.description}
                  </p>

                  <div className="p-4 sm:p-5 rounded-2xl bg-zinc-100/80 dark:bg-white/[0.03] border border-zinc-200/80 dark:border-white/5">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      {project.dashboardDesign.hierarchy.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 sm:gap-3">
                          <span className="px-3.5 py-2 rounded-xl bg-white dark:bg-white/10 text-zinc-900 dark:text-white text-xs sm:text-sm font-bold border border-zinc-200/60 dark:border-white/5 shadow-xs">
                            {item}
                          </span>
                          {idx < project.dashboardDesign.hierarchy.length - 1 && (
                            <ArrowRight className="w-4 h-4 text-zinc-400 shrink-0" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {project.dashboardDesign.summary && (
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans pt-1">
                      {project.dashboardDesign.summary}
                    </p>
                  )}
                </div>
              )}

              {/* Mobile Experience Section */}
              {project.mobileExperience && (
                <div className="p-6 sm:p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center shrink-0">
                      <Smartphone className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight">
                      Mobile Experience
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans">
                    {project.mobileExperience.description}
                  </p>

                  <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900 text-white dark:bg-white/10 border border-zinc-800 dark:border-white/10 space-y-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-300 block">
                      Bottom Navigation Direct Access
                    </span>
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      {project.mobileExperience.bottomNav.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="px-3.5 py-1.5 rounded-xl bg-white/15 text-white text-xs sm:text-sm font-bold">
                            {item}
                          </span>
                          {idx < project.mobileExperience.bottomNav.length - 1 && (
                            <span className="text-zinc-400 font-bold">·</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {project.mobileExperience.summary && (
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans pt-2 border-t border-zinc-200/60 dark:border-white/5">
                      {project.mobileExperience.summary}
                    </p>
                  )}
                </div>
              )}

              {/* Content & Spiritual Education Section */}
              {project.contentAndEducation && (
                <div className="p-6 sm:p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center shrink-0">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight">
                      Content & Spiritual Education
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans">
                    {project.contentAndEducation.description}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 pt-1">
                    {project.contentAndEducation.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-100/60 dark:bg-white/[0.02] border border-zinc-200/70 dark:border-white/5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 dark:bg-white shrink-0" />
                        <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {project.contentAndEducation.summary && (
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans pt-2 border-t border-zinc-200/60 dark:border-white/5">
                      {project.contentAndEducation.summary}
                    </p>
                  )}
                </div>
              )}

              {/* Key Product Experience Section */}
              {project.keyProductExperience && (
                <div className="p-6 sm:p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center shrink-0">
                      <Workflow className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight">
                      Key Product Experience
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans">
                    {project.keyProductExperience.description}
                  </p>

                  <div className="pt-2 space-y-3">
                    {project.keyProductExperience.itemsTitle && (
                      <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block">
                        {project.keyProductExperience.itemsTitle}
                      </span>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {project.keyProductExperience.items.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 p-3.5 rounded-2xl bg-zinc-100/70 dark:bg-white/[0.03] border border-zinc-200/80 dark:border-white/5"
                        >
                          <CheckCircle2 className="w-4 h-4 text-zinc-900 dark:text-white shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Example Workflow Section (e.g. Loan Service Management) */}
              {project.exampleWorkflow && (
                <div className="p-6 sm:p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center shrink-0">
                      <Workflow className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight">
                      {project.exampleWorkflow.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans">
                    {project.exampleWorkflow.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-1">
                    {project.exampleWorkflow.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-3.5 rounded-2xl bg-zinc-100/70 dark:bg-white/[0.03] border border-zinc-200/80 dark:border-white/5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-zinc-900 dark:text-white shrink-0" />
                        <span className="text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {project.exampleWorkflow.summary && (
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans pt-2 border-t border-zinc-200/60 dark:border-white/5">
                      {project.exampleWorkflow.summary}
                    </p>
                  )}
                </div>
              )}

              {/* Design System & Consistency Section */}
              {project.designSystemAndConsistency && (
                <div className="p-6 sm:p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center shrink-0">
                      <Palette className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight">
                      Design System & Consistency
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans">
                    {project.designSystemAndConsistency.description}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 pt-1">
                    {project.designSystemAndConsistency.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-100/60 dark:bg-white/[0.02] border border-zinc-200/70 dark:border-white/5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 dark:bg-white shrink-0" />
                        <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {project.designSystemAndConsistency.summary && (
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans pt-2 border-t border-zinc-200/60 dark:border-white/5">
                      {project.designSystemAndConsistency.summary}
                    </p>
                  )}
                </div>
              )}

              {/* Prototype & Development Handoff */}
              {project.prototypeAndHandoff && (
                <div className="p-6 sm:p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center shrink-0">
                      <Rocket className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight">
                      Prototype & Development Handoff
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans">
                    {project.prototypeAndHandoff.description}
                  </p>

                  <div className="pt-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block mb-3">
                      The design process followed:
                    </span>
                    <div className="flex flex-wrap items-center gap-2">
                      {project.prototypeAndHandoff.stages.map((stage, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="px-3 py-1.5 rounded-xl bg-zinc-100 dark:bg-white/10 text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-white/5">
                            {stage}
                          </span>
                          {idx < project.prototypeAndHandoff.stages.length - 1 && (
                            <span className="text-xs text-zinc-400">→</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Features Managed Section */}
              {project.featuresManaged && project.featuresManaged.length > 0 && (
                <div className="p-6 sm:p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center shrink-0">
                      <Layers className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight">
                      Features Managed
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    I managed the complete feature set of the application:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
                    {project.featuresManaged.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3.5 rounded-2xl bg-zinc-100/70 dark:bg-white/[0.03] border border-zinc-200/80 dark:border-white/5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-zinc-900 dark:text-white shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-medium leading-snug text-zinc-700 dark:text-zinc-300">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Product Management Section */}
              {project.productManagement && (
                <div className="p-6 sm:p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center shrink-0">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight">
                      Product Management
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans">
                    {project.productManagement.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    {project.productManagement.responsibilities.map((resp, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3.5 rounded-2xl bg-zinc-100/70 dark:bg-white/[0.03] border border-zinc-200/80 dark:border-white/5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-zinc-900 dark:text-white shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300">
                          {resp}
                        </span>
                      </div>
                    ))}
                  </div>

                  {project.productManagement.summary && (
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans pt-2 border-t border-zinc-200/60 dark:border-white/5">
                      {project.productManagement.summary}
                    </p>
                  )}
                </div>
              )}

              {/* Development & Delivery */}
              {project.developmentAndDelivery && (
                <div className="p-6 sm:p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center shrink-0">
                      <GitBranch className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight">
                      Development & Delivery
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans">
                    {project.developmentAndDelivery.description}
                  </p>

                  {project.developmentAndDelivery.stages && (
                    <div className="pt-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block mb-3">
                        The delivery process followed:
                      </span>
                      <div className="flex flex-wrap items-center gap-2">
                        {project.developmentAndDelivery.stages.map((stage, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <span className="px-3 py-1.5 rounded-xl bg-zinc-100 dark:bg-white/10 text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-white/5">
                              {stage}
                            </span>
                            {idx < (project.developmentAndDelivery?.stages?.length ?? 0) - 1 && (
                              <span className="text-xs text-zinc-400">→</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.developmentAndDelivery.summary && (
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans pt-2 border-t border-zinc-200/60 dark:border-white/5">
                      {project.developmentAndDelivery.summary}
                    </p>
                  )}
                </div>
              )}

              {/* Development & Integration */}
              {project.developmentAndIntegration && (
                <div className="p-6 sm:p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center shrink-0">
                      <GitBranch className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight">
                      Development & Integration
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans">
                    {project.developmentAndIntegration.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    {project.developmentAndIntegration.responsibilities.map((resp, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3.5 rounded-2xl bg-zinc-100/70 dark:bg-white/[0.03] border border-zinc-200/80 dark:border-white/5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-zinc-900 dark:text-white shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300">
                          {resp}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Testing & Launch */}
              {project.testingAndLaunch && (
                <div className="p-6 sm:p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center shrink-0">
                      <Rocket className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight">
                      Testing & Launch
                    </h3>
                  </div>

                  {project.testingAndLaunch.description && (
                    <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans">
                      {project.testingAndLaunch.description}
                    </p>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
                    {project.testingAndLaunch.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-3.5 rounded-2xl bg-zinc-100/70 dark:bg-white/[0.03] border border-zinc-200/80 dark:border-white/5"
                      >
                        <span className="w-2 h-2 rounded-full bg-zinc-900 dark:bg-white shrink-0" />
                        <span className="text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Product Transformation (Traditional vs Digital Comparison) */}
              {project.transformation && (
                <div className="p-6 sm:p-8 rounded-[2rem] bg-zinc-100 dark:bg-[#0c1433] border border-zinc-200 dark:border-white/10 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center shrink-0">
                      <ArrowLeftRight className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight">
                      Product Transformation
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {/* Traditional Flow */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400 block mb-3">
                        Traditional Banking Journey
                      </span>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        {project.transformation.traditional.map((step, idx) => (
                          <div key={idx} className="flex items-center gap-2 sm:gap-3">
                            <span className="px-3 py-1.5 rounded-xl bg-zinc-100 dark:bg-white/10 text-zinc-700 dark:text-zinc-300 text-xs sm:text-sm font-semibold">
                              {step}
                            </span>
                            {idx < project.transformation.traditional.length - 1 && (
                              <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Digital Flow */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-[#050a1b] text-white border border-white/20 shadow-md">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/60 block mb-3">
                        {project.title} Digital Experience
                      </span>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        {project.transformation.apollo.map((step, idx) => (
                          <div key={idx} className="flex items-center gap-2 sm:gap-3">
                            <span className="px-3 py-1.5 rounded-xl bg-white/15 text-white text-xs sm:text-sm font-bold">
                              {step}
                            </span>
                            {idx < project.transformation.apollo.length - 1 && (
                              <ArrowRight className="w-3.5 h-3.5 text-white/70" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans">
                    {project.transformation.outcome}
                  </p>
                </div>
              )}

              {/* End-to-End Contribution Lifecycle */}
              {project.contributionWorkflow && (
                <div className="p-6 sm:p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center shrink-0">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight">
                      My Contribution
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    {project.contributionWorkflow.stages.map((stage, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="px-3 py-1.5 rounded-xl bg-zinc-100 dark:bg-white/10 text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-white/5">
                          {stage}
                        </span>
                        {idx < project.contributionWorkflow.stages.length - 1 && (
                          <span className="text-xs text-zinc-400">→</span>
                        )}
                      </div>
                    ))}
                  </div>

                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans pt-2">
                    {project.contributionWorkflow.summary}
                  </p>
                </div>
              )}

              {/* Core Banking Services Suite (if available) */}
              {project.coreServices && project.coreServices.length > 0 && (
                <div className="p-6 sm:p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight">
                      Key Banking Services Covered
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {project.coreServices.map((service, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-3 rounded-xl bg-zinc-100/50 dark:bg-white/[0.02] border border-zinc-200/50 dark:border-white/5 text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-200"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500 shrink-0" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Measurable Impact & Key Highlights */}
              {project.impactHighlights && project.impactHighlights.length > 0 && (
                <div className="p-6 sm:p-8 rounded-[2rem] bg-[#050a1b] text-white border border-white/15 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-white text-zinc-900 flex items-center justify-center shrink-0">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight">
                      Impact & Highlights
                    </h3>
                  </div>

                  <div className="space-y-2.5 pt-2">
                    {project.impactHighlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="text-xs font-bold text-zinc-400 mt-0.5 font-mono">0{idx + 1}.</span>
                        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Bottom Action / Footer inside Modal */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 pb-2 border-t border-zinc-200 dark:border-white/10">
                <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold text-center sm:text-left">
                  {project.category}
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity cursor-pointer"
                >
                  Close Case Study
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
