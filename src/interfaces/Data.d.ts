export interface Industry {
    id: number;
    title: string;
    projects: number[];
    image: string;
    description: string;
}

export interface Project {
    id: number;
    name: string;
    title: string;
    description: string;
    link: string;
    images: string[];
}

export interface Skill {
    name: string;
    imageUrl: string;
    color: string;
}

export interface Service {
    id: number;
    title: string;
    codepoint: string;
    description: string;
    highlights: {
        title: string;
        codepoint: string;
        description: string;
    }[]
}