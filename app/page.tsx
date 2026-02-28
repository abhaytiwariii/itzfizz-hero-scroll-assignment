import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />

      {/* Spacer / Dummy Sections */}
      <section
        id="services"
        className="w-full py-32 px-6 flex flex-col items-center justify-center bg-[#080810] border-t border-white/5 relative z-10"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-wide">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 bg-accent/20 rounded-full mb-6 flex items-center justify-center">
                <div className="w-6 h-6 bg-accent rounded-full" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Service {i}</h3>
              <p className="text-muted text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="w-full py-40 px-6 flex flex-col items-center justify-center bg-black relative z-10"
      >
        <div className="max-w-3xl text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8">
            Ready to Elevate?
          </h2>
          <p className="text-muted max-w-xl mx-auto mb-12 text-lg">
            Join the movement and see the difference with Itzfizz. Connect with
            our team to get started.
          </p>
          <button className="bg-accent text-white font-bold py-4 px-10 rounded-full hover:bg-blue-600 transition-transform hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(59,130,246,0.3)]">
            Get In Touch
          </button>
        </div>
      </section>
    </main>
  );
}
