"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function SparklesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0 -z-10 pointer-events-none"
      options={{
        background: { color: "transparent" },
        fpsLimit: 120,
        particles: {
          color: { value: ["#ffffff", "#ff0000", "#facc15"] },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "out" },
          },
          number: {
            density: { 
              enable: true,
            },
            value: 120, 
          },
          opacity: {
            // এরর ফিক্স: এখানে সরাসরি ভ্যালু রেঞ্জ দেওয়া হয়েছে
            value: { min: 0.1, max: 0.6 },
            animation: {
              enable: true,
              speed: 1,
              sync: false,
              startValue: "random",
              // 'minimumValue' এর বদলে নতুন ভার্সনে এটি নিজে থেকেই 
              // উপরের value.min কে টার্গেট করে।
            },
          },
          shape: { type: "circle" },
          size: {
            value: { min: 0.5, max: 1.5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}