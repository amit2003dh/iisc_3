'use client';

import Link from 'next/link';
import { Container } from './Container';
import Model2 from './Model2';
import { useMyContext } from '../contexts/MyContext';
import { useInView } from '../hooks/useInView';

export function DownloadSection() {
  const { popup } = useMyContext();
  const [sectionRef, sectionInView] = useInView();
  const [cardRef, cardInView] = useInView();

  return (
    <section id="Data" className="py-24 sm:py-32 bg-white overflow-hidden">
      {popup && <Model2 />}
      <Container>
        <div
          ref={sectionRef}
          style={{
            opacity: sectionInView ? 1 : 0,
            transform: sectionInView ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight max-w-xl leading-tight">
            Unleash the Power of our Data!
          </h2>
        </div>

        <div
          ref={cardRef}
          className="relative rounded-3xl overflow-hidden"
          style={{
            opacity: cardInView ? 1 : 0,
            transform: cardInView ? 'translateY(0)' : 'translateY(32px)',
            transition: 'opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s',
          }}
        >
          <div
            className="relative px-8 py-16 sm:px-16 sm:py-20"
            style={{
              background: 'linear-gradient(135deg, #212191 0%, #11115B 50%, #1a1a8c 100%)',
            }}
          >
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #fff 0%, transparent 70%)' }} />
              <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full opacity-15" style={{ background: 'radial-gradient(circle, #9B99E8 0%, transparent 70%)' }} />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5" style={{ background: 'radial-gradient(circle, #fff 0%, transparent 60%)' }} />
              {/* Dot grid */}
              <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
            </div>

            <div className="relative flex flex-col lg:flex-row items-center gap-12">
              {/* Left: stats pills */}
              <div className="flex-1 flex flex-col items-center lg:items-start gap-6">
                <div>
                  <p className="text-xs font-semibold text-blue-300 uppercase tracking-widest mb-2">Open Source Dataset</p>
                  <h3 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                    India's largest<br />speech dataset — free.
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {[
                    { val: '150K+', lab: 'Audio Hours' },
                    { val: '773', lab: 'Districts' },
                    { val: 'CC-BY-4.0', lab: 'License' },
                  ].map((s) => (
                    <div key={s.lab} className="flex flex-col items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-3">
                      <span className="text-xl font-extrabold text-white">{s.val}</span>
                      <span className="text-xs text-blue-200 uppercase tracking-wider">{s.lab}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: CTA */}
              <div className="flex-1 flex flex-col items-center lg:items-end gap-6 text-center lg:text-right">
                <p className="text-lg text-blue-100 leading-relaxed max-w-sm">
                  Our comprehensive multimodal dataset for Indian languages is{' '}
                  <span className="font-bold text-white">now exclusively on Hugging Face</span>.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="https://huggingface.co/datasets/ARTPARK-IISc/Vaani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-[#212191] font-semibold bg-white px-7 py-3.5 rounded-full hover:bg-blue-50 transition-all shadow-xl hover:-translate-y-0.5 text-base"
                  >
                    <img src="https://img.icons8.com/fluency/48/hugging-face_app.png" alt="Hugging Face" className="h-5 w-5" />
                    Download Dataset
                  </Link>
                  <Link
                    href="https://creativecommons.org/licenses/by/4.0/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white font-semibold border border-white/30 px-7 py-3.5 rounded-full hover:bg-white/10 transition-all text-base"
                  >
                    View License
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
