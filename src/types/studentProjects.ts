export interface StudentProject {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    authors: string[];
    year: number;
    techStack: string[];
    demoUrl?: string;
    githubUrl?: string;
    category: "Web" | "Mobile" | "Desktop" | "AI/ML" | "Game Development" | "UI/UX Design";
    featured?: boolean;
}