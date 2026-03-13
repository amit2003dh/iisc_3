"use client";

import { useState } from 'react';
import { CaseStudyCard } from './CaseStudyCard';
import { Container } from './Container';
import { caseStudiesData } from './caseStudiesData';
import { ScrollReveal } from './ScrollReveal';

export function CaseStudiesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const changeIndex = (newIndex) => {
    if (newIndex === currentIndex) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setTransitioning(false);
    }, 300);
  };

  const nextSlide = () => {
    changeIndex(currentIndex >= caseStudiesData.length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    changeIndex(currentIndex <= 0 ? caseStudiesData.length - 1 : currentIndex - 1);
  };

  const currentCaseStudy = caseStudiesData[currentIndex];

  return (
    <section className="py-20 bg-slate-50">
      <Container>
        <ScrollReveal animClass="fade-up">
          <h2 className="font-display text-2xl tracking-tight text-slate-900 sm:text-3xl text-center mb-16 font-bold">
            Case Studies
          </h2>
        </ScrollReveal>

        <ScrollReveal animClass="fade-up" delay={120}>
          <div className="relative max-w-2xl mx-auto">
            {caseStudiesData.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                  aria-label="Previous case study"
                >
                  <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                  aria-label="Next case study"
                >
                  <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            <div className={`transition-opacity duration-300 ${transitioning ? 'opacity-0' : 'opacity-100'}`}>
              <CaseStudyCard {...currentCaseStudy} />
            </div>

            {caseStudiesData.length > 1 && (
              <div className="flex justify-center space-x-2 mt-8">
                {caseStudiesData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => changeIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors duration-200 ${
                      index === currentIndex ? 'bg-blue-600' : 'bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to case study ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
