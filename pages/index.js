import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

// Components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Section
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Team from "@/components/sections/Team";
import Explore from "@/components/sections/Explore";
import News from "@/components/sections/News";
import Community from "@/components/sections/Community";
import CTA from "@/components/sections/CTA";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return <>
<Head>
        {/* SEO: Title */}
        <title>Mangrove Guardians - Save Our Coasts with Nature</title>

        {/* SEO: Meta Description */}
        <meta name="description" content="Join the movement to protect and restore mangrove forests. Discover how we combine eco-tourism, education, and community efforts to safeguard our coasts and fight climate change." />

        {/* SEO: Keywords (opsional, tidak lagi terlalu penting) */}
        <meta name="keywords" content="mangrove, conservation, eco-tourism, coastal protection, environment, climate action, education" />

        {/* SEO: Canonical */}
        <link rel="canonical" href="https://www.mangroveguardians.org/" />

        {/* Open Graph (Social Media) */}
        <meta property="og:title" content="Mangrove Guardians - Save Our Coasts with Nature" />
        <meta property="og:description" content="Join the movement to protect and restore mangrove forests." />
        <meta property="og:image" content="https://www.mangroveguardians.org/og-image.jpg" />
        <meta property="og:url" content="https://www.mangroveguardians.org/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mangrove Guardians - Save Our Coasts with Nature" />
        <meta name="twitter:description" content="Join the movement to protect and restore mangrove forests." />
        <meta name="twitter:image" content="https://www.mangroveguardians.org/og-image.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <div className={styles.hero}>
            <Navbar />
            <Hero />
          </div>

            <About />
            <Team />
            <Explore />
            <News />
            <Community />
            <CTA />
            <Footer />
      </main>

    
  </>
}
