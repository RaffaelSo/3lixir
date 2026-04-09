export type ProcessFrame = {
  src: string;
  alt: string;
  caption?: string;
  layout: "square" | "tall" | "wide";
};

export type CreditBlock = {
  campaign: string;
  year: string;
  entries: { role: string; name: string }[];
};

export type HomeContent = {
  manifesto: {
    eyebrow: string;
    statement: string;
    paragraphs: string[];
  };
  process: {
    eyebrow: string;
    title: string;
    intro: string;
    frames: ProcessFrame[];
  };
  world: {
    eyebrow: string;
    headline: string;
    lines: string[];
    image: { src: string; alt: string };
  };
  collaborations: {
    eyebrow: string;
    title: string;
    blocks: CreditBlock[];
  };
  contact: {
    eyebrow: string;
    headline: string;
    services: string[];
    email: string;
    instagramLabel: string;
    instagramHref: string;
  };
};
