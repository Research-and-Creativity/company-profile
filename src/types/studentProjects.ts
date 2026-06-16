export interface StudentProject {
    id: string;
    title: string;
    description: string;
    thumbnail: string | string[];
    authors: string[];
    year: number;
    techStack: string[];
    demoUrl?: string;
    githubUrl?: string;
    category: "Web" | "Mobile" | "Desktop" | "AI/ML" ;
    featured?: boolean;
    creatorType?: "Mahasiswa" | "Dosen";
}