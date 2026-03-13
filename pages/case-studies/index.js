import { CaseStudiesHeader } from "../../components/CaseStudiesHeader";
import { CaseStudiesFooter } from "../../components/CaseStudiesFooter";
import { CaseStudiesSection } from "../../components/CaseStudiesSection";
import { TestimonialsSection } from "../../components/TestimonialsSection";
import { Container } from "../../components/Container";
import { useState, useEffect } from "react";

export default function CaseStudies() {
  const [isClient, setIsClient] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="bg-slate-50">
      {isClient && <CaseStudiesHeader />}
      <main>
        {/* Hero Banner Section */}
        <section className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 py-16 sm:py-24 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-900/25 rounded-full blur-2xl" />
          </div>
          <Container>
            <div className="text-center relative z-10">
              <h1
                className={`font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight anim-slide-up ${mounted ? '' : 'opacity-0'}`}
                style={{ animationPlayState: mounted ? 'running' : 'paused' }}
              >
                How Startups Are Building on Vaani
              </h1>
              <p
                className={`mt-6 text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed anim-slide-up anim-delay-2 ${mounted ? '' : 'opacity-0'}`}
                style={{ animationPlayState: mounted ? 'running' : 'paused' }}
              >
                Discover how innovators are leveraging the Vaani dataset to solve real-world problems in speech, AI, and beyond.
              </p>
            </div>
          </Container>
        </section>

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Case Studies Section */}
        <CaseStudiesSection />

        {/* Call to Action Section */}
        <section className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 py-16 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-10 right-10 w-56 h-56 bg-white/5 rounded-full blur-3xl" />
          </div>
          <Container>
            <div className="text-center relative z-10">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-8">
                Want to Build with the Vaani Dataset?
              </h2>
              <a
                href="https://huggingface.co/datasets/ARTPARK-IISc/Vaani"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full py-3 px-8 text-base font-semibold bg-white text-blue-700 hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Get Access
              </a>
            </div>
          </Container>
        </section>
      </main>
      <CaseStudiesFooter />
    </div>
  );
}
