import type { Metadata } from "next";
import { TechnologyView } from "@/views/technology-page";
import { en } from "@/i18n/dictionaries/en";

export const metadata: Metadata = {
  title: en.meta.titles.technology,
  description: en.meta.descriptions.technology,
};

export default function Page() {
  return <TechnologyView />;
}
