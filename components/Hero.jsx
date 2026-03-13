import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import IIScLogo from "../assets/IIScLogo.png";
import ArtparkLogo from "../assets/ARTPARK.png";
import GoogleLogo from "../assets/GoogleLogo.png";
import BhasniLogo from "../assets/bhashini.png";

function OrnamentSVG() {
  return (
    <svg
      width="180"
      height="80"
      viewBox="0 0 180 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="opacity-60"
    >
      <g stroke="#212191" strokeWidth="1.2" fill="none">
        <ellipse cx="90" cy="40" rx="85" ry="35" />
        <ellipse cx="90" cy="40" rx="60" ry="22" />
        <ellipse cx="90" cy="40" rx="35" ry="12" />
        <path d="M5 40 Q47.5 10 90 40 Q132.5 70 175 40" strokeDasharray="3 3" />
        <path d="M5 40 Q47.5 70 90 40 Q132.5 10 175 40" strokeDasharray="3 3" />
        <circle cx="90" cy="40" r="5" fill="#212191" opacity="0.5" />
        <circle cx="5" cy="40" r="3" fill="#E8845A" opacity="0.6" />
        <circle cx="175" cy="40" r="3" fill="#E8845A" opacity="0.6" />
        <circle cx="90" cy="5" r="3" fill="#9B99E8" opacity="0.5" />
        <circle cx="90" cy="75" r="3" fill="#9B99E8" opacity="0.5" />
        <line
          x1="90"
          y1="0"
          x2="90"
          y2="80"
          strokeDasharray="2 4"
          opacity="0.4"
        />
        <line
          x1="0"
          y1="40"
          x2="180"
          y2="40"
          strokeDasharray="2 4"
          opacity="0.4"
        />
      </g>
    </svg>
  );
}

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  const anim = (delay = 0) => ({
    className: `anim-slide-up`,
    style: {
      animationPlayState: mounted ? "running" : "paused",
      animationDelay: `${delay}ms`,
      opacity: mounted ? undefined : 0,
    },
  });

  return (
    <section
      id="Home"
      className="hero-gradient min-h-screen flex flex-col items-center justify-center pt-20 pb-16 px-4 text-center overflow-hidden"
    >
      <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto w-full">

        <div
          className="anim-fade-in"
          style={{ animationPlayState: mounted ? "running" : "paused", opacity: mounted ? undefined : 0 }}
        >
          <OrnamentSVG />
        </div>

        <div {...anim(100)}>
          <div className="inline-flex items-center gap-2 border border-[#212191]/30 rounded-full px-4 py-1.5 text-sm text-[#212191] bg-white/60 backdrop-blur-sm shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#212191] animate-pulse" />
            India's Sovereign Language Dataset
          </div>
        </div>

        <div {...anim(230)}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-gray-900 leading-tight">
            Capturing the language landscape for an inclusive digital India
          </h1>
        </div>

        <div {...anim(380)}>
          <p className="text-lg sm:text-xl text-gray-500 max-w-2xl leading-relaxed">
            Project Vaani is one of the largest datasets of Indian dialects ever
            to exist. Upon completion, it will contain more than 150,000 hours of
            audio across all districts in India.
          </p>
        </div>

        <div {...anim(520)}>
          <Link
            href="https://huggingface.co/datasets/ARTPARK-IISc/VAANI"
            target="_blank"
            className="inline-flex items-center gap-2 text-base font-semibold text-white bg-gray-900 hover:bg-[#212191] transition-all duration-300 px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Experience Vaani
          </Link>
        </div>
      </div>

      <div
        className="mt-24 w-full max-w-5xl mx-auto anim-fade-in"
        style={{ animationPlayState: mounted ? "running" : "paused", animationDelay: "700ms", opacity: mounted ? undefined : 0 }}
      >
        <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-8 text-center">
          India Builds with Vaani
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10">
          <Link
            href="https://www.iisc.ac.in/"
            target="_blank"
            className="opacity-60 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 hover:-translate-y-1"
          >
            <Image src={IIScLogo} alt="IISc" width={52} height={52} className="object-contain h-12 w-auto" />
          </Link>
          <Link
            href="https://artpark.in/"
            target="_blank"
            className="opacity-60 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 hover:-translate-y-1"
          >
            <Image src={ArtparkLogo} alt="Artpark" width={180} height={48} className="object-contain h-10 w-auto" />
          </Link>
          <Link
            href="https://cloud.google.com/"
            target="_blank"
            className="opacity-60 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 hover:-translate-y-1"
          >
            <Image src={GoogleLogo} alt="Google" width={120} height={40} className="object-contain h-8 w-auto" />
          </Link>
          <Link
            href="https://bhashini.gov.in/"
            target="_blank"
            className="opacity-60 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 hover:-translate-y-1"
          >
            <Image src={BhasniLogo} alt="Bhashini" width={80} height={64} className="object-contain h-12 w-auto" />
          </Link>
        </div>
      </div>
    </section>
  );
}
