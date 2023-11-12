export interface ProjectsSection {
       myProjectsSections: {
        projectName: string;
        aboutProject: string;
        demonstrationGif?: string;
        githubLink : string;
        publicateLink?: string;
        info ?: string;
        technologies: {
                name: string;
                imageUrl: string;
        }[]
       }[]
}