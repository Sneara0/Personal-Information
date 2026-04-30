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
import { ThemeProvider } from "./components/ThemeProvider"; // ThemeProvider ইমপোর্ট করুন
import Services from "./components/services/Services";

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
      <body className="bg-white dark:bg-[#0a0a0a] text-gray-800 dark:text-gray-100 transition-colors duration-300">
        {/* ThemeProvider দিয়ে পুরো অ্যাপকে র‍্যাপ করা হলো */}
        <ThemeProvider 
          attribute="class" 
          defaultTheme="dark" 
          enableSystem={false}
        >
          {/* Lenis Smooth Scroll Wrapper */}
          <SmoothScroll>
            <Cursor /> 
            <Navbar />
            <main>{children}</main>
            <AboutSection />
            <Services></Services>
            <SkillsSection />
            <ProjectsSection />
            <Contact />
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}