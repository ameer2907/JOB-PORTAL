export interface Job {
  id: string;
  title: string;
  company: string;
  companyLogo: string;
  location: string;
  type: "Full-time" | "Part-time" | "Remote" | "Contract";
  salary: string;
  experience: string;
  category: string;
  description: string;
  requirements: string[];
  posted: string;
  featured?: boolean;
}

export interface Company {
  id: string;
  name: string;
  logo: string;
  industry: string;
  openPositions: number;
  location: string;
}

export interface Category {
  name: string;
  icon: string;
  count: number;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
  text: string;
}

export const jobs: Job[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "TechCorp",
    companyLogo: "TC",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120k - $160k",
    experience: "5+ years",
    category: "IT & Software",
    description: "We're looking for a talented Senior Frontend Developer to join our growing team. You'll work on cutting-edge web applications using React, TypeScript, and modern tooling. This role offers the opportunity to mentor junior developers and shape the technical direction of our frontend architecture.",
    requirements: ["5+ years React experience", "TypeScript proficiency", "State management expertise", "CI/CD knowledge", "Team leadership experience"],
    posted: "2 days ago",
    featured: true,
  },
  {
    id: "2",
    title: "Data Scientist",
    company: "DataFlow AI",
    companyLogo: "DF",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130k - $170k",
    experience: "3+ years",
    category: "Data Science",
    description: "Join our data science team to build ML models that power our recommendation engine. You'll work with large-scale datasets and collaborate with engineering teams to deploy models to production.",
    requirements: ["Python & R proficiency", "ML/DL frameworks", "SQL expertise", "Statistics background", "Communication skills"],
    posted: "1 day ago",
    featured: true,
  },
  {
    id: "3",
    title: "UX/UI Designer",
    company: "DesignHub",
    companyLogo: "DH",
    location: "Remote",
    type: "Remote",
    salary: "$90k - $120k",
    experience: "3+ years",
    category: "Design",
    description: "Create beautiful, intuitive user experiences for our suite of SaaS products. You'll conduct user research, create wireframes and prototypes, and work closely with developers to bring designs to life.",
    requirements: ["Figma expertise", "User research skills", "Prototyping", "Design systems", "Accessibility knowledge"],
    posted: "3 days ago",
    featured: true,
  },
  {
    id: "4",
    title: "Marketing Manager",
    company: "GrowthLab",
    companyLogo: "GL",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$85k - $110k",
    experience: "4+ years",
    category: "Marketing",
    description: "Lead our marketing initiatives including content strategy, paid advertising, and brand development. Drive growth through data-informed marketing campaigns across multiple channels.",
    requirements: ["Digital marketing expertise", "Analytics proficiency", "Content strategy", "Team management", "Budget planning"],
    posted: "5 days ago",
  },
  {
    id: "5",
    title: "DevOps Engineer",
    company: "CloudScale",
    companyLogo: "CS",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$140k - $180k",
    experience: "4+ years",
    category: "IT & Software",
    description: "Build and maintain our cloud infrastructure on AWS. Implement CI/CD pipelines, container orchestration, and monitoring solutions to support our rapidly growing platform.",
    requirements: ["AWS/GCP experience", "Kubernetes", "Terraform", "CI/CD pipelines", "Monitoring tools"],
    posted: "1 week ago",
  },
  {
    id: "6",
    title: "Product Manager",
    company: "InnovateTech",
    companyLogo: "IT",
    location: "Chicago, IL",
    type: "Full-time",
    salary: "$110k - $145k",
    experience: "5+ years",
    category: "Management",
    description: "Drive product strategy and roadmap for our B2B SaaS platform. Work cross-functionally with engineering, design, and sales to deliver features that delight customers.",
    requirements: ["Product strategy", "Agile methodology", "Data analysis", "Stakeholder management", "Technical background"],
    posted: "4 days ago",
  },
  {
    id: "7",
    title: "Content Writer",
    company: "MediaPulse",
    companyLogo: "MP",
    location: "Remote",
    type: "Part-time",
    salary: "$45k - $65k",
    experience: "2+ years",
    category: "Marketing",
    description: "Create compelling blog posts, case studies, and thought leadership content for our tech-focused audience. Strong writing skills and understanding of SEO best practices required.",
    requirements: ["Excellent writing skills", "SEO knowledge", "Tech industry knowledge", "Editorial experience", "CMS experience"],
    posted: "6 days ago",
  },
  {
    id: "8",
    title: "Backend Engineer",
    company: "FinSecure",
    companyLogo: "FS",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$125k - $165k",
    experience: "4+ years",
    category: "IT & Software",
    description: "Build secure, scalable APIs and microservices for our fintech platform. You'll work with Node.js, PostgreSQL, and Redis to power financial transactions for millions of users.",
    requirements: ["Node.js expertise", "PostgreSQL", "Microservices architecture", "Security best practices", "Financial domain knowledge"],
    posted: "3 days ago",
    featured: true,
  },
];

export const companies: Company[] = [
  { id: "1", name: "TechCorp", logo: "TC", industry: "Technology", openPositions: 12, location: "San Francisco" },
  { id: "2", name: "DataFlow AI", logo: "DF", industry: "AI / ML", openPositions: 8, location: "New York" },
  { id: "3", name: "CloudScale", logo: "CS", industry: "Cloud Computing", openPositions: 15, location: "Seattle" },
  { id: "4", name: "DesignHub", logo: "DH", industry: "Design", openPositions: 5, location: "Remote" },
  { id: "5", name: "FinSecure", logo: "FS", industry: "Fintech", openPositions: 10, location: "Boston" },
  { id: "6", name: "GrowthLab", logo: "GL", industry: "Marketing", openPositions: 7, location: "Austin" },
];

export const categories: Category[] = [
  { name: "IT & Software", icon: "💻", count: 1420 },
  { name: "Data Science", icon: "📊", count: 856 },
  { name: "Marketing", icon: "📈", count: 643 },
  { name: "Design", icon: "🎨", count: 512 },
  { name: "Finance", icon: "💰", count: 398 },
  { name: "Healthcare", icon: "🏥", count: 327 },
  { name: "Education", icon: "📚", count: 264 },
  { name: "Management", icon: "👔", count: 489 },
];

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "Software Engineer",
    company: "TechCorp",
    avatar: "SC",
    text: "JobPortal helped me find my dream role in just two weeks. The search filters and company profiles made it easy to target exactly what I was looking for.",
  },
  {
    name: "Marcus Johnson",
    role: "HR Director",
    company: "CloudScale",
    avatar: "MJ",
    text: "As a recruiter, this platform has been incredible for finding top talent. The quality of applicants and the easy-to-use posting system saves us hours every week.",
  },
  {
    name: "Emily Rodriguez",
    role: "Product Designer",
    company: "DesignHub",
    avatar: "ER",
    text: "I love how the platform showcases company culture. It helped me find a team that truly values design and creativity. Couldn't be happier with my new role!",
  },
];

export const stats = [
  { label: "Jobs Posted", value: "12,000+" },
  { label: "Companies", value: "3,500+" },
  { label: "Job Seekers", value: "50,000+" },
  { label: "Successful Hires", value: "8,200+" },
];
