"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Headline from "./Headline";
import CarScene from "./CarScene";
import StatsGrid from "./StatsGrid";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Master timeline for initial load
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to(".headline-char", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.05,
      })
        .to(
          ".car-wrapper",
          {
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power2.out",
          },
          "-=0.4",
        )
        .to(
          ".stat-item",
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
          },
          "-=0.8",
        );

      // 2. ScrollTrigger Animation
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=150%",
          pin: true,
          scrub: 1.5,
        },
      });

      scrollTl
        .to(
          ".car-wrapper",
          {
            scale: 1.25,
            rotation: 15,
            y: -80,
            ease: "none",
          },
          0,
        )
        .to(
          ".headline",
          {
            letterSpacing: "0.5em", // smoothly spread text
            ease: "none",
          },
          0,
        )
        .to(
          ".stat-item",
          {
            opacity: 0,
            y: 40,
            ease: "none",
          },
          0,
        );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-background"
    >
      <Headline />
      <CarScene />
      <StatsGrid />
    </section>
  );
}
