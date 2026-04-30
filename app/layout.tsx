import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll"; 
import Cursor from "./components/Cursor"; 
import { ThemeProvider } from "./components/ThemeProvider"; 
import Services from "./components/services/Services";
import Experience from "./components/experience/Experience";
import SparklesBackground from "./components/SparklesBackground"; // ঝিকিমিকি কম্পোনেন্ট ইম্পোর্ট

export const metadata: Metadata = { 
  title: "Sneara | Portfolio",
  description: "Personal portfolio built with Next.js + Tailwind CSS + GSAP + Lenis",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-[#0a0a0a] text-gray-800 dark:text-gray-100 transition-colors duration-300 relative">
        <ThemeProvider 
          attribute="class" 
          defaultTheme="dark" 
          enableSystem={false}
        >
          {/* ঝিকিমিকি ইফেক্টটি সবার নিচে ব্যাকগ্রাউন্ডে থাকবে */}
          <SparklesBackground />

          <SmoothScroll>
            <Cursor /> 
            <Navbar />
            
            {/* মেইন কন্টেন্ট এবং সেকশনগুলো */}
            <main className="relative z-10">
              {children}
              <AboutSection />
              <Services />
              <Experience />
              <SkillsSection />
              <ProjectsSection />
              <Contact />
            </main>
            
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}