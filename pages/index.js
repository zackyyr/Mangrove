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
  <div className={styles.container}>
    <Navbar />
    <Hero />
    <About />
    <Team />
    <Explore />
    <News />
    <Community />
    <CTA />
    <Footer />
  </div>
    
  </>
}
