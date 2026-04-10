// src/types/project.ts
export interface Project {
  id: number;
  title: string;
  year: string;
  size: 'large' | 'small';
  description: string;
  tags: string[];
  github: string;
  url: string;
  video: string;
  cover: string;
  gallery: string[];
  position: number;
}
