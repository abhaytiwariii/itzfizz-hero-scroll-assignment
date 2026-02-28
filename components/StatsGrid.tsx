import React from "react";

const stats = [
  { value: "58%", label: "Increase in pick-up point use" },
  { value: "23%", label: "Decrease in customer phone calls" },
  { value: "27%", label: "Increase in pick-up point use" },
  { value: "40%", label: "Decrease in customer phone calls" },
];

export default function StatsGrid() {
  return (
    <div className="absolute bottom-12 left-0 w-full px-6 z-30 pointer-events-none">
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="stat-item will-change-transform opacity-0 translate-y-[20px] text-center lg:text-left"
          >
            <div className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-accent leading-tight">
              {stat.value}
            </div>
            <div className="text-sm text-muted max-w-[150px] mx-auto lg:mx-0 mt-2">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
