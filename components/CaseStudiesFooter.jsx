import Link from 'next/link';
import Image from 'next/image';
import { Container } from './Container';
import VaaniLogo from '../assets/vaanilogo.png';
import IIScLogo from '../assets/IIScLogo.png';
import ArtparkLogo from '../assets/ARTPARK.png';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#About' },
  { label: 'Data', href: '/#Data' },
  { label: 'Team', href: '/team' },
  { label: 'Partners', href: '/#partners' },
  { label: 'Media', href: '/#Media' },
  { label: 'Case Studies', href: '/case-studies' },
];

const MailIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PinIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const LinkIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);

export function CaseStudiesFooter() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0d0d2b 0%, #111827 60%, #0f172a 100%)' }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full opacity-[0.07]" style={{ background: 'radial-gradient(circle, #9B99E8 0%, transparent 70%)' }} />
        <div className="absolute -bottom-32 right-0 w-[500px] h-[500px] rounded-full opacity-[0.05]" style={{ background: 'radial-gradient(circle, #212191 0%, transparent 70%)' }} />
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
      </div>

      <Container>
        {/* Top: brand + partner logos */}
        <div className="relative pt-16 pb-12 flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div className="max-w-sm">
            <Image
              src={VaaniLogo}
              width={130}
              height={44}
              alt="Vaani"
              className="brightness-0 invert opacity-90 mb-5"
            />
            <p className="text-sm text-slate-400 leading-relaxed mb-8">
              India&apos;s largest open-source speech dataset — capturing the linguistic diversity of 150,000+ hours of audio across 773 districts and 100+ languages.
            </p>
            <div className="flex items-center gap-5">
              <Image src={IIScLogo} width={40} height={40} alt="IISc" className="opacity-50 hover:opacity-90 transition-opacity duration-200 brightness-0 invert" />
              <Image src={ArtparkLogo} width={110} height={30} alt="ARTPARK" className="opacity-50 hover:opacity-90 transition-opacity duration-200 brightness-0 invert" />
            </div>
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-4 text-sm text-slate-400">
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1">Get in Touch</h3>
            <a href="mailto:vaanicontact@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors duration-200 group">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center text-blue-400 group-hover:text-white group-hover:bg-blue-500/20 transition-all duration-200" style={{ background: 'rgba(99,102,241,0.1)' }}>
                <MailIcon />
              </span>
              vaanicontact@gmail.com
            </a>
            <a
              href="https://huggingface.co/datasets/ARTPARK-IISc/Vaani"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-white transition-colors duration-200 group"
            >
              <span className="w-8 h-8 rounded-lg flex items-center justify-center text-blue-400 group-hover:text-white group-hover:bg-blue-500/20 transition-all duration-200" style={{ background: 'rgba(99,102,241,0.1)' }}>
                <LinkIcon />
              </span>
              Dataset on Hugging Face
            </a>
            <div className="flex items-start gap-3 text-slate-500">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500" style={{ background: 'rgba(99,102,241,0.07)' }}>
                <PinIcon />
              </span>
              <address className="not-italic leading-relaxed text-xs">
                SPIRE LAB, Room No. EE C 326<br />
                Dept. of Electrical Engineering, IISc<br />
                Bangalore – 560012
              </address>
            </div>
          </div>
        </div>

        {/* Gradient divider */}
        <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(155,153,232,0.4) 30%, rgba(33,33,145,0.5) 60%, transparent)' }} />

        {/* Navigation row */}
        <nav className="py-8 flex flex-wrap items-center justify-center gap-2 sm:gap-1">
          {navLinks.map((link, i) => (
            <span key={link.href} className="flex items-center">
              <Link
                href={link.href}
                className="relative text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200 px-4 py-2 rounded-full hover:bg-white/5 group"
              >
                <span className="absolute inset-x-4 bottom-1.5 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" style={{ background: 'linear-gradient(90deg, #212191, #9B99E8)' }} />
                {link.label}
              </Link>
              {i < navLinks.length - 1 && (
                <span className="hidden sm:block w-1 h-1 rounded-full bg-slate-700 mx-1" />
              )}
            </span>
          ))}
        </nav>

        {/* Bottom divider */}
        <div className="h-px bg-slate-800" />

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} Project VAANI. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#212191] opacity-60" />
            <p className="text-xs text-slate-600">
              An initiative by <span className="text-slate-500">IISc</span> &amp; <span className="text-slate-500">ARTPARK</span>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
