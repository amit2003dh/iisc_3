import Link from 'next/link';
import Image from 'next/image';
import { Container } from './Container';
import VaaniLogo from '../assets/vaanilogo.png';
import IIScLogo from '../assets/IIScLogo.png';
import ArtparkLogo from '../assets/ARTPARK.png';

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const BuildingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Data', href: '/#data' },
  { label: 'Team', href: '/team' },
  { label: 'Partners', href: '/#partners' },
  { label: 'Media', href: '/#media' },
  { label: 'Case Studies', href: '/case-studies' },
];

export function CaseStudiesFooter() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <Container>
        <div className="pt-16 pb-12 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-slate-800">

          {/* Brand column */}
          <div>
            <div className="mb-5">
              <Image
                src={VaaniLogo}
                width={130}
                height={44}
                alt="Vaani"
                className="brightness-0 invert opacity-90"
              />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-8">
              India&apos;s largest open-source speech dataset — capturing the linguistic diversity of 150,000+ hours of audio across 30+ states and 100+ languages.
            </p>
            <div className="flex items-center gap-5">
              <Image
                src={IIScLogo}
                width={40}
                height={40}
                alt="IISc"
                className="opacity-60 hover:opacity-100 transition-opacity duration-200 brightness-0 invert"
              />
              <Image
                src={ArtparkLogo}
                width={110}
                height={30}
                alt="ARTPARK"
                className="opacity-60 hover:opacity-100 transition-opacity duration-200 brightness-0 invert"
              />
            </div>
          </div>

          {/* Navigation links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-xs uppercase tracking-widest">
              Explore
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="block w-0 group-hover:w-3 h-px bg-blue-400 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-xs uppercase tracking-widest">
              Contact Us
            </h3>
            <p className="text-sm text-slate-400 mb-5 leading-relaxed">
              We are always open to new ideas and collaborations. Feel free to reach out to us.
            </p>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <a
                  href="mailto:vaanicontact@gmail.com"
                  className="flex items-start gap-3 hover:text-white transition-colors duration-200 group"
                >
                  <MailIcon />
                  <span>vaanicontact@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <BuildingIcon />
                <address className="not-italic leading-relaxed">
                  SPIRE LAB, Room No. EE C 326<br />
                  Department of Electrical Engineering<br />
                  Indian Institute of Science<br />
                  Bangalore – 560012
                </address>
              </li>
              <li>
                <a
                  href="https://huggingface.co/datasets/ARTPARK-IISc/Vaani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-white transition-colors duration-200"
                >
                  <ExternalLinkIcon />
                  <span>Access Dataset on HuggingFace</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            &copy; 2024 The Project VAANI. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            An initiative by IISc &amp; ARTPARK
          </p>
        </div>
      </Container>
    </footer>
  );
}
