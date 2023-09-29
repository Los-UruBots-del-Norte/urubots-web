import type {Menu} from '@/components/types/Menu';
import {UrlObject} from "url";

interface Locale {
  lang: string;
  url: string;
  lang_name: string;
}

interface HeaderProps {
  locales: Locale[];
  navigation: Menu[];
}

export type { HeaderProps };
