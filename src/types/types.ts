export type RobotsDirective =
  | "index, follow"
  | "index, nofollow"
  | "noindex, follow"
  | "noindex, nofollow";

export interface AlternateLocale {
  href: string;
  hreflang: string;
}

export interface MetadataSEOProps {
  title: string;
  description: string;
  canonical?: string;
  siteName?: string;
  titleTemplate?: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article" | "profile";
  locale?: string;
  keywords?: string[];
  robots?: RobotsDirective;
  noindex?: boolean;
  nofollow?: boolean;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  themeColor?: string;
  twitterCard?: "summary" | "summary_large_image";
  alternateLocales?: AlternateLocale[];
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
}
