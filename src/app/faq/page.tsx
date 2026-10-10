import type { Metadata } from "next";
import { FaqView } from "@/views/faq-page";
import { en } from "@/i18n/dictionaries/en";

export const metadata: Metadata = {
  title: en.meta.titles.faq,
  description: en.meta.descriptions.faq,
};

export default function Page() {
  return <FaqView />;
}
