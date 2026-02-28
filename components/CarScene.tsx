import React from "react";
import Image from "next/image";

export default function CarScene() {
  return (
    <div className="car-wrapper absolute inset-0 flex items-center justify-center pointer-events-none z-10 opacity-0 scale-[0.85] will-change-transform">
      <div className="relative w-[80vw] max-w-[550px] aspect-[16/9]">
        <Image
          src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1000&auto=format&fit=crop"
          alt="Top View Car image"
          fill
          className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
          priority
        />
      </div>
    </div>
  );
}
