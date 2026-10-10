import type { Metadata } from "next";
import { AboutView } from "@/views/about-page";
import { en } from "@/i18n/dictionaries/en";

export const metadata: Metadata = {
  title: en.meta.titles.about,
  description: en.meta.descriptions.about,
};

export default function Page() {
  return <AboutView />;
}
