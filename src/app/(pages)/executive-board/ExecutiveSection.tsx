'use client';

import { useEffect, useRef, useState } from 'react';
import ExecutiveCard from './ExecutiveCard';

interface Executive {
  id: string;
  role: string;
  name: string;
  major: string;
  image: string;
  favoriteColor: string;
  favoriteFood: string;
  extraQuestion: string;
  extraAnswer: string;
}

interface ExecutiveSectionProps {
  title: string;
  members: Executive[];
}

export default function ExecutiveSection({ title, members }: ExecutiveSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`mb-24 transition-all duration-700 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className={`mb-16 transition-all duration-700 delay-100 ${
        isInView ? 'opacity-100' : 'opacity-0'
      }`}>
        <h2 className="text-5xl font-bold text-gold mb-3">{title}</h2>
        <div className="w-12 h-2 bg-gold rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-8">
        {members.map((executive, index) => (
          <div
            key={executive.id}
            className={`transition-all duration-500 ${
              isInView
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
            style={{
              transitionDelay: isInView ? `${100 + index * 50}ms` : '0ms',
            }}
          >
            <ExecutiveCard executive={executive} />
          </div>
        ))}
      </div>
    </section>
  );
}
