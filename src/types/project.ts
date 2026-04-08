export type ProjectCredit = {
  label: string;
  value: string;
};

export type ProjectImage = {
  image: string;
  alt: string;
};

export type ProjectBlock =
  | {
      type: "image";
      image: string;
      alt: string;
      caption?: string;
      aspect?: "portrait" | "landscape" | "cinema" | "square";
    }
  | {
      type: "pair";
      images: [ProjectImage, ProjectImage];
      caption?: string;
    }
  | {
      type: "statement";
      text: string;
      note?: string;
      align?: "left" | "center";
    };

export type Project = {
  slug: string;
  title: string;
  year: string;
  season: string;
  role: string;
  category: string;
  location: string;
  excerpt: string;
  statement: string;
  description: string;
  heroImage: string;
  heroAlt: string;
  mood: string;
  tags: string[];
  featured: boolean;
  gridClass: string;
  credits: ProjectCredit[];
  blocks: ProjectBlock[];
};
