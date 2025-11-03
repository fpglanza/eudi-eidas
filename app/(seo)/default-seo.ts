export const defaultSEO = {
  titleTemplate: "%s | EUDI Wallet & eIDAS 2.0 per PMI",
  defaultTitle: "EUDI Wallet & eIDAS 2.0 per PMI italiane",
  description:
    "Guide pratiche, vendor e strumenti su EUDI Wallet, eIDAS 2.0, firme elettroniche e onboarding KYC/KYB.",
  openGraph: {
    type: "website",
    siteName: "EUDI & eIDAS per PMI",
  },
  twitter: { cardType: "summary_large_image" },
  additionalMetaTags: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ],
} as const;
