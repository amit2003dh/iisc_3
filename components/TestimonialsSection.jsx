"use client";

import { useState, useEffect, useRef } from 'react';
import { Container } from './Container';
import { ScrollReveal } from './ScrollReveal';

const testimonialsData = [
  {
    id: 1,
    quote: "Vaani's dataset, with its multiple languages, real-life scenarios, background noises, and multi-dialect conversations, is very well-suited for the speech models we train. We have seen good results from fine-tuning our models on these datasets. The work done by the Vaani team in gathering datasets to support real-life use cases for Bharat is truly commendable.",
    companyName: "Convozen.ai",
    personRole: "Zaher Abdul, Senior Director AI & ML"
  },
  {
    id: 2,
    quote: "The Vaani Datasets have been invaluable in improving our Speech Models. The quality is excellent, with a great balance of gender variation, detailed metadata, and highly accurate transcripts with precise noise tagging.",
    companyName: "Reverie Language Technology LTD",
    personRole: "Pranjal Nayak, Head of R&D"
  },
  {
    id: 3,
    quote: "At SandLogic, we believe India's AI future must be sovereign, inclusive, and representative of our people. The Vaani dataset captures the richness of Indian speech and has helped us benchmark and enhance our models for stronger performance in both research and enterprise use cases.",
    companyName: "SandLogic Technologies",
    personRole: "Dr. Kruthika K R, Founding Researcher"
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [transitioning, setTransitioning] = useState(false);

  const changeIndex = (newIndex) => {
    if (newIndex === currentIndex) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setTransitioning(false);
    }, 300);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      const next = currentIndex === testimonialsData.length - 1 ? 0 : currentIndex + 1;
      setTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(next);
        setTransitioning(false);
      }, 300);
    }, 16000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const getCurrentTestimonials = () => {
    const testimonials = [];
    const maxDisplay = Math.min(3, testimonialsData.length);
    for (let i = 0; i < maxDisplay; i++) {
      const index = (currentIndex + i) % testimonialsData.length;
      testimonials.push(testimonialsData[index]);
    }
    return testimonials;
  };

  const nextSlide = () => {
    changeIndex(currentIndex === testimonialsData.length - 1 ? 0 : currentIndex + 1);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    changeIndex(currentIndex === 0 ? testimonialsData.length - 1 : currentIndex - 1);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    changeIndex(index);
    setIsAutoPlaying(false);
  };

  const current = getCurrentTestimonials();

  return (
    <section className="py-20 bg-white">
      <Container>
        <ScrollReveal animClass="fade-up">
          <h2 className="font-display text-2xl tracking-tight text-slate-900 sm:text-3xl text-center mb-16 font-bold">
            What Startups Are Saying
          </h2>
        </ScrollReveal>

        <ScrollReveal animClass="fade-up" delay={120}>
          <div className="relative">
            {testimonialsData.length > 3 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200"
                  aria-label="Previous testimonials"
                >
                  <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200"
                  aria-label="Next testimonials"
                >
                  <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            <div
              className={`transition-opacity duration-300 ${transitioning ? 'opacity-0' : 'opacity-100'}`}
            >
              <div className={`grid gap-6 mb-8 max-w-6xl mx-auto ${
                current.length === 1 ? 'grid-cols-1 max-w-md mx-auto' :
                current.length === 2 ? 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto' :
                'grid-cols-1 md:grid-cols-3'
              }`}>
                {current.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className="bg-white rounded-2xl shadow-md border border-slate-100 p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="mb-5">
                      <svg className="w-8 h-8 text-blue-200 mb-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <blockquote className="text-sm text-slate-600 leading-relaxed italic">
                        {testimonial.quote}
                      </blockquote>
                    </div>
                    <div className="pt-4 border-t border-slate-100">
                      <p className="font-bold text-blue-600 text-sm">{testimonial.companyName}</p>
                      <p className="text-slate-500 text-xs mt-1">{testimonial.personRole}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {testimonialsData.length > 3 && (
              <div className="flex justify-center space-x-2 mt-8">
                {testimonialsData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors duration-200 ${
                      index === currentIndex ? 'bg-blue-600' : 'bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
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
