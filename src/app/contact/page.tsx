import type { Metadata } from "next";

import { ContactFormShell } from "@/components/editorial/contact-form-shell";
import { ContactLinks } from "@/components/editorial/contact-links";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact 3LIXIR for campaigns, editorials, and creative collaborations.",
};

export default function ContactPage() {
  return (
    <>
      <ContactLinks />
      <ContactFormShell />
    </>
  );
}
