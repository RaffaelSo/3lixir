export type HomeContent = {
  manifesto: {
    eyebrow: string;
    statement: string;
    paragraphs: string[];
  };
  world: {
    eyebrow: string;
    headline: string;
    lines: string[];
    image: { src: string; alt: string };
  };
  contact: {
    eyebrow: string;
    headline: string;
    services: string[];
    emailLabel: string;
    instagramHeading: string;
    fullContactLabel: string;
    email: string;
    instagramLabel: string;
    instagramHref: string;
  };
};
