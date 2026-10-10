import type { Metadata } from "next";
import { ContactView } from "@/views/contact-page";
import { en } from "@/i18n/dictionaries/en";

export const metadata: Metadata = {
  title: en.meta.titles.contact,
  description: en.meta.descriptions.contact,
};

export default function Page() {
  return <ContactView />;
}
