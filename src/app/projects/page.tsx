import type { Metadata } from "next";
import { ProjectsView } from "@/views/projects-page";
import { en } from "@/i18n/dictionaries/en";

export const metadata: Metadata = {
  title: en.meta.titles.projects,
  description: en.meta.descriptions.projects,
};

export default function Page() {
  return <ProjectsView />;
}
