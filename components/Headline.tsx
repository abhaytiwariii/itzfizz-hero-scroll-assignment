import React from "react";

export default function Headline() {
  const text = "WELCOME ITZFIZZ";

  return (
    <h1 className="headline absolute top-[15%] left-0 w-full text-center text-[clamp(2rem,6vw,5rem)] tracking-widest font-black uppercase z-20 pointer-events-none mix-blend-difference">
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="headline-char inline-block will-change-transform opacity-0 translate-y-[30px]"
          style={{ whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char}
        </span>
      ))}
    </h1>
  );
}
