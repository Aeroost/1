import { isLocale, type Locale } from "./config";
import type { Dictionary } from "./dictionaries/en";
import { en } from "./dictionaries/en";
import { fa } from "./dictionaries/fa";
import { ar } from "./dictionaries/ar";
import { fr } from "./dictionaries/fr";
import { es } from "./dictionaries/es";
import { ru } from "./dictionaries/ru";
import { zh } from "./dictionaries/zh";

export const dictionaries: Record<Locale, Dictionary> = { en, fa, ar, fr, es, ru, zh };

export function getDictionary(locale: string | null | undefined): Dictionary {
  if (!isLocale(locale)) return en;
  return dictionaries[locale];
}
