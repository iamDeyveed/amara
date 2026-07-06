import type { LucideIcon } from "lucide-react";
import {
  Brain,
  Code2,
  Handshake,
  Layers3,
  Leaf,
  Lightbulb,
  Puzzle,
  Sparkles,
  Target,
  UsersRound
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type PreviewTile = {
  name: string;
  meta: string;
  className: string;
  image?: string;
};

export type ProcessStep = {
  title: string;
};

export type ValueCard = {
  title: string;
  icon: LucideIcon;
};

export type ExpertiseGroup = {
  title: string;
  items: string[];
  icon: LucideIcon;
};

export type Project = {
  title: string;
  sector: string;
  type: string;
  className: string;
  symbol: string;
  image?: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "My work", href: "/work" },
  { label: "About me", href: "/about" }
];

export const socialLinks = [
  { label: "LinkedIn", shortLabel: "in", href: "#" },
  { label: "X", shortLabel: "X", href: "#" },
  { label: "Instagram", shortLabel: "ig", href: "#" },
  { label: "TikTok", shortLabel: "tk", href: "#" },
  { label: "Facebook", shortLabel: "f", href: "#" }
];

export const previewTiles: PreviewTile[] = [
  {
    name: "Nexera",
    meta: "ERP System",
    className: "from-[#e8531d] to-[#8a2a0d]",
    image: "/images/nexera-preview.png"
  },
  {
    name: "Plenix",
    meta: "Fintech",
    className: "from-[#0f1030] to-[#1c1f4f]",
    image: "/images/plenix-preview.png"
  },
  {
    name: "Shop With Me",
    meta: "Ecommerce",
    className: "from-[#e8c419] to-[#b89210]",
    image: "/images/shop-with-me-preview.png"
  },
  { name: "AGRIXA", meta: "Agrotech", className: "from-[#5a7a3e] to-[#141a10]" },
  { name: "ABIZ Kitchen", meta: "Brand", className: "from-[#f0e9e0] to-[#d7cabd]" },
  { name: "Case Study Mockup", meta: "Presentation", className: "from-[#dcdcdc] to-[#8f8f8f]" }
];

export const processSteps: ProcessStep[] = [
  { title: "Research & Discovery" },
  { title: "Define & Ideate" },
  { title: "Design, Test & Ship" }
];

export const valueCards: ValueCard[] = [
  { title: "Problem Solving", icon: Puzzle },
  { title: "Team Work", icon: UsersRound },
  { title: "Intentional Design", icon: Target },
  { title: "Growth Mindset", icon: Leaf }
];

export const expertiseGroups: ExpertiseGroup[] = [
  {
    title: "Strategy",
    icon: Brain,
    items: [
      "User Research",
      "User Flow",
      "Competitive Analysis",
      "Information Architecture",
      "Journey Mapping",
      "Problem Framing",
      "Product Strategy",
      "Design Thinking",
      "Data-Informed Decision Making"
    ]
  },
  {
    title: "Product Design",
    icon: Layers3,
    items: [
      "User Experience Design",
      "User Interface Design",
      "Interaction Design",
      "Visual Design",
      "Mobile App Design",
      "Responsive Web Design",
      "Wireframing",
      "Prototyping",
      "Design Systems",
      "Accessibility Design",
      "Usability Testing"
    ]
  },
  {
    title: "AI & Handoff",
    icon: Code2,
    items: [
      "AI-Assisted Research",
      "AI-Powered Ideation",
      "AI for Design Implementation",
      "Prompt Engineering",
      "AI Workflow Optimization",
      "Basics of HTML & CSS",
      "Developer Handoff",
      "Design-to-Code Communication"
    ]
  },
  {
    title: "Collaboration",
    icon: Handshake,
    items: [
      "Interpersonal Skills",
      "Communication Skills",
      "Design Presentation",
      "Workshop Facilitation",
      "Team Collaboration",
      "Feedback Management",
      "Documentation"
    ]
  }
];

export const caseStudyCategories = [
  "Web app (1)",
  "Website (1)",
  "Mobile app (3)",
  "Brand design (1)"
];

export const projects: Project[] = [
  {
    title: "Nexera",
    sector: "ERP System",
    type: "Web Design",
    className: "from-[#e8531d] to-[#8a2a0d] text-white",
    symbol: "Nx"
    // Replace with a project screenshot later: image: "/images/nexera.jpg"
  },
  {
    title: "Plenix",
    sector: "Fintech",
    type: "Mobile App",
    className: "from-[#eef0f6] to-[#cdd3e5] text-[#141450]",
    symbol: "Px"
  },
  {
    title: "AGRIXA",
    sector: "Agrotech",
    type: "Website & Mobile App",
    className: "from-[#6a8a4e] to-[#1a2414] text-white",
    symbol: "Ag"
  },
  {
    title: "NavEase",
    sector: "Transport-tech",
    type: "Mobile App",
    className: "from-[#28374d] to-[#111923] text-[#dbe4f0]",
    symbol: "Ne"
  },
  {
    title: "Shop with me",
    sector: "Ecommerce",
    type: "Mobile App",
    className: "from-[#eecb1c] to-[#b89210] text-[#3a2c00]",
    symbol: "Sw"
  },
  {
    title: "Abiz Kitchen",
    sector: "Brand Design",
    type: "Brand Design",
    className: "from-[#f0e9e0] to-[#d5c4b5] text-[#5c1e2b]",
    symbol: "Ak"
  }
];

export const aboutExperience = [
  "I've always been drawn to creating things that are both meaningful and useful. For me, design goes beyond making something look good, it's about understanding people, solving problems, and shaping experiences that make life a little easier. I enjoy collaborating with others, exploring ideas from different perspectives, and turning insights into solutions that deliver real value. My approach to product design is grounded in curiosity, research, and thoughtful decision-making.",
  "Through collaborations and hands-on projects, I've learned that the best products are built by listening closely to users, asking the right questions, and designing with intention. One experience that shaped my thinking involved researching a navigation-focused product designed to help commuters find their way more easily. Conducting interviews and gathering feedback directly from users deepened my understanding of human behavior and reinforced the importance of designing around real needs rather than assumptions."
];

export const aboutJourney = [
  "Looking back, product design feels like a natural continuation of a journey that started long before I knew the term existed. As a child, I loved drawing and spent much of my time exploring art and creativity. In secondary school, I pursued the arts, and later developed skills in catering, where I discovered the creative process behind designing cakes. I also worked in event decoration, learning how colors, structure, and details come together to create memorable experiences.",
  "While studying History and International Studies at university, I developed a strong foundation in research, critical thinking, and understanding people through the lens of culture, events, and human behavior. Alongside my academic journey, I earned a diploma in product design, eventually choosing to dedicate myself fully to the craft. Today, my work sits at the intersection of creativity, research, and problem-solving, a combination of experiences that continue to shape how I think, design, and build."
];

export const contact = {
  email: "Mbantaamarachi@gmail.com",
  whatsapp: "+2348140407243"
};

export const quote =
  "Blending design thinking, emerging technologies, and AI-assisted workflows to create products that move faster and work smarter.";

export const bringIcon = Sparkles;
