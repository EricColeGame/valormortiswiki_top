export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Valor Mortis Wiki",
  shortName: "Valor Mortis",
  logoText: "VM",
  tagline: "Guides, Combat, Weapons & Lore",
  description: "Explore the complete Valor Mortis Wiki with beginner guides, combat mechanics, weapons, abilities, enemies, story lore, release details and progression tips for this dark fantasy Soulslike.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://valormortiswiki.top",
  supportEmail: "support@valormortiswiki.top",
  gameUrl: "https://store.steampowered.com/app/2828710/Valor_Mortis/",
  heroVideoId: "BUVCBbdzyxU", // Valor Mortis - Official "The Crimson Plague" Gameplay Trailer
  social: {
    discord: "https://discord.gg/valormortis",
    youtube: "https://www.youtube.com/@OneMoreLevel",
    twitter: "https://x.com/ValorMortis",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
