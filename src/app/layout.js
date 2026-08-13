import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import { BASE_BLOB_URL, SITE_URL } from "@/lib/site";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Valentin Westermeyer | Développeur Next.js et WordPress à Strasbourg",
    template: "%s | Valentin Westermeyer",
  },
  description:
    "Portfolio de Valentin Westermeyer, développeur web à Strasbourg, spécialisé WordPress et Next.js. Découvrez mes projets.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Valentin Westermeyer | Développeur Next.js et WordPress à Strasbourg",
    description:
      "Portfolio 2025 de Valentin Westermeyer, développeur web à Strasbourg spécialisé en Next.js et React. Création de sites web modernes et performants.",
    url: SITE_URL,
    siteName: "Valentin Westermeyer - Développeur Web",
    images: [
      {
        url: `${BASE_BLOB_URL}/Banner.png`,
        width: 1200,
        height: 630,
        alt: "Valentin Westermeyer - Portfolio web - Développeur Next.js et WordPress à Strasbourg",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

// Le site n'affiche quasiment aucun texte : les données structurées sont le
// seul moyen de décrire l'identité et le périmètre à Google sans toucher à la DA.
const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Valentin Westermeyer — Portfolio",
      inLanguage: "fr-FR",
      publisher: { "@id": `${SITE_URL}/#valentin` },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#valentin`,
      name: "Valentin Westermeyer",
      url: SITE_URL,
      jobTitle: "Développeur web",
      email: "contact@vlntn.fr",
      telephone: "+33603751457",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Strasbourg",
        addressRegion: "Grand Est",
        addressCountry: "FR",
      },
      knowsAbout: [
        "Développement web",
        "Next.js",
        "React",
        "WordPress",
        "JavaScript",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Direction artistique",
      ],
      sameAs: [
        "https://www.linkedin.com/in/valentinwestermeyer/",
        "https://github.com/vlntnwest",
        "https://www.behance.net/valentiwesterm",
      ],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${inter.className} antialiased touch-none overflow-x-hidden scrollbar-hidden`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
        <main className="flex flex-col h-auto">
          <Header />
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}
