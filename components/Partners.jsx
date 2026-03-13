import Image from 'next/image';
import { Container } from './Container';
import Logo1 from '../assets/ShaipLogo.png';
import Logo2 from '../assets/Megdaplogo.png';
import Logo3 from '../assets/Karya-Logo.png';
import Logo4 from '../assets/GcsLogo.png';
import Logo7 from '../assets/GtsLogo.png';
import MeityLogo from '../assets/Meity.png';
import NewronLogo from '../assets/newron-logo2x.png';

const partners = [
  { src: Logo4, alt: "GCS", width: 110 },
  { src: Logo2, alt: "Megdap", width: 120 },
  { src: Logo3, alt: "Karya", width: 110 },
  { src: Logo1, alt: "Shaip", width: 100 },
  { src: Logo7, alt: "GTS", width: 110 },
  { src: MeityLogo, alt: "MeitY", width: 110 },
  { src: NewronLogo, alt: "Newron", width: 120 },
];

const doubledPartners = [...partners, ...partners];

export function Partners() {
  return (
    <section id="partners" className="bg-white py-20 border-t border-gray-100">
      <Container>
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-3">
            Our Partners
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Built Together with India
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            A collaborative effort across organizations committed to advancing Indian language AI.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, white, transparent)' }}
          />
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, white, transparent)' }}
          />
          <div className="partner-marquee py-4">
            {doubledPartners.map((p, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-10 flex items-center justify-center opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={p.width}
                  height={56}
                  className="object-contain h-12 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

