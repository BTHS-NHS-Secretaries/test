'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import CommitteeCard from '@/components/CommitteeCard';
import SpaceBackground from '@/components/SpaceBackground';

function FadeInSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
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
    <div
      ref={sectionRef}
      className={`transition-all duration-700 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function About() {
  return (
    <div className="bg-darkBlue-900 text-white relative">
      <SpaceBackground />
      <div className="relative z-10">
        <FadeInSection className="max-w-7xl mx-auto px-4 py-16 pt-32">
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4 text-center">
              About <span className="text-gold">NHS</span>
            </h1>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full mb-8"></div>

            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-lg leading-relaxed text-gray-100">
                The Brooklyn Technical High School National Honor Society is a prestigious organization dedicated to fostering excellence in scholarship, leadership, character, and service. With over 600+ active members, we create meaningful opportunities for students to grow academically and make a positive impact on our school and community.
              </p>

              <p className="text-lg leading-relaxed text-gray-100">
                As a member of NHS, you gain access to exclusive volunteer opportunities that allow you to contribute to our community while developing valuable leadership skills. Whether it's tutoring younger students, organizing school events, or participating in community service projects, every member plays a vital role in our mission.
              </p>

              <p className="text-lg leading-relaxed text-gray-100">
                NHS members participate in two types of events: general organization-wide events where the entire membership comes together to celebrate and serve, and specialized committee events where smaller groups focus on specific initiatives and causes. This allows you to engage at the level that best suits your interests and schedule.
              </p>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection className="max-w-7xl mx-auto px-4 py-16">
          <div className="mb-12">
            <h2 className="text-5xl font-bold mb-4 text-center">
              Our <span className="text-gold">Committees</span>
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
          </div>

          <CommitteeCard name="Committee 1" description="eeee" />

          <CommitteeCard name="Committee 2" description="eeee" />

          <CommitteeCard name="Committee 3" description="eeeeee" />
        </FadeInSection>

        <FadeInSection className="max-w-7xl mx-auto px-4 py-16">
          <div className="mb-12">
            <h2 className="text-5xl font-bold mb-4 text-center">
              Get <span className="text-gold">Involved</span>
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg leading-relaxed text-gray-100 mb-6">
                Ready to join BTHS NHS? Our application process is straightforward and designed to identify students who are committed to our core values of scholarship, leadership, character, and service.
              </p>
              <p className="text-lg leading-relaxed text-gray-100">
                Follow our application workflow to understand the process, requirements, and next steps. We're excited to welcome passionate students who want to make a difference!
              </p>
            </div>

            <div className="flex justify-center">
              <Image
                src="/data/images/flowchart.jpg"
                alt="NHS Application Process"
                width={400}
                height={500}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </FadeInSection>

        <div className="pb-12" />
      </div>
    </div>
  );
}
