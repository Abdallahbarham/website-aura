
// Define solution types
export type Solution = {
  id: number;
  title: string;
  description: string;
  category: string;
  items: string[];
  courseLink: string;
  imageUrl: string;
};

// Professional Development solutions
export const professionalDevelopmentSolutions: Solution[] = [
  {
    id: 1,
    title: "Certified Professional Manager",
    description: "Our professional manager certification equips leaders with strategic management skills, effective communication techniques, and problem-solving abilities to drive organizational success.",
    category: "Professional Development",
    items: ["Leadership Skills", "Strategic Planning", "Team Management", "Conflict Resolution"],
    courseLink: "https://exampleeducation.com/courses/certified-professional-manager",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 2,
    title: "Digital Transformation Certificate",
    description: "Learn to lead digital change initiatives and implement technology solutions that drive business value in this comprehensive certification program.",
    category: "Professional Development",
    items: ["Change Management", "Digital Strategy", "Technology Implementation", "Data Analytics"],
    courseLink: "https://exampleeducation.com/courses/digital-transformation",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 3,
    title: "Leadership Excellence",
    description: "Develop advanced leadership capabilities to inspire teams, drive innovation, and navigate complex organizational challenges.",
    category: "Professional Development",
    items: ["Executive Presence", "Strategic Vision", "Team Building", "Emotional Intelligence"],
    courseLink: "https://exampleeducation.com/courses/leadership-excellence",
    imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 4,
    title: "Business Analytics",
    description: "Master data-driven decision making with our comprehensive business analytics program focused on practical applications.",
    category: "Professional Development",
    items: ["Data Visualization", "Statistical Analysis", "Predictive Modeling", "Business Intelligence"],
    courseLink: "https://exampleeducation.com/courses/business-analytics",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  }
];

// Methodologies & Tools solutions
export const methodologiesSolutions: Solution[] = [
  {
    id: 5,
    title: "Frameworks",
    description: "Access our library of proven business frameworks designed to streamline processes and enhance decision-making across your organization.",
    category: "Methodologies & Tools",
    items: ["Strategic Planning Frameworks", "Process Optimization Models", "Decision Making Tools", "Risk Assessment Templates"],
    courseLink: "https://exampleeducation.com/courses/business-frameworks",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 6,
    title: "Templates",
    description: "Accelerate your projects with our comprehensive collection of ready-to-use templates for various business functions and challenges.",
    category: "Methodologies & Tools",
    items: ["Project Management Templates", "Strategic Analysis Tools", "Reporting Templates", "Process Documentation"],
    courseLink: "https://exampleeducation.com/courses/business-templates",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 7,
    title: "Skill Assessments",
    description: "Evaluate and benchmark organizational and individual capabilities with our comprehensive assessment tools and methodologies.",
    category: "Methodologies & Tools",
    items: ["Competency Mapping", "Skills Gap Analysis", "Performance Measurement", "Development Planning"],
    courseLink: "https://exampleeducation.com/courses/skill-assessments",
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 8,
    title: "Practice Guides",
    description: "Implement best practices across your organization with our detailed, industry-validated practice guides and implementation roadmaps.",
    category: "Methodologies & Tools",
    items: ["Implementation Roadmaps", "Industry Best Practices", "Process Guidelines", "Quality Standards"],
    courseLink: "https://exampleeducation.com/courses/practice-guides",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  }
];

// Community & Insights solutions
export const communitySolutions: Solution[] = [
  {
    id: 9,
    title: "Masterclasses",
    description: "Join expert-led masterclasses exploring cutting-edge topics and practices in business, technology, and leadership.",
    category: "Community & Insights",
    items: ["Executive Leadership", "Digital Transformation", "Innovation Management", "Change Strategies"],
    courseLink: "https://exampleeducation.com/courses/masterclasses",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 10,
    title: "Expert Interviews",
    description: "Gain insights from industry leaders and renowned experts through our exclusive interview series on critical business challenges.",
    category: "Community & Insights",
    items: ["Leadership Perspectives", "Industry Trends", "Success Stories", "Strategic Insights"],
    courseLink: "https://exampleeducation.com/courses/expert-interviews",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 11,
    title: "Research Analyses",
    description: "Access in-depth analyses of industry trends, market dynamics, and emerging practices to inform your strategic decisions.",
    category: "Community & Insights",
    items: ["Market Intelligence", "Competitive Analysis", "Future Trends", "Industry Benchmarks"],
    courseLink: "https://exampleeducation.com/courses/research-analyses",
    imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 12,
    title: "Journal Articles",
    description: "Explore peer-reviewed articles examining theoretical foundations and practical applications in business management and leadership.",
    category: "Community & Insights",
    items: ["Academic Research", "Case Studies", "Management Theory", "Applied Methods"],
    courseLink: "https://exampleeducation.com/courses/journal-articles",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  }
];
