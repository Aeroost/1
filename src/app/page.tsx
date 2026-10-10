import type { Metadata } from "next";
import { HomeView } from "@/views/home-page";
import { en } from "@/i18n/dictionaries/en";

export const metadata: Metadata = {
  title: en.meta.titles.home,
  description: en.meta.descriptions.home,
};

export default function Page() {
  return <HomeView />;
}
