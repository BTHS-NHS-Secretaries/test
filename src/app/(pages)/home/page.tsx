'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Carousel from '@/components/Carousel';
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

export default function Home() {
  return (
    <div className="bg-darkBlue-900 text-white relative">
      <SpaceBackground />
      <div className="relative z-10">
        <Carousel />

      <FadeInSection className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-12">
          <h2 className="text-5xl font-bold mb-4 text-center">
            <span className="text-gold">About</span> BTHS NHS
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full mb-6"></div>
          
          <p className="text-xl leading-relaxed text-center max-w-4xl mx-auto mb-10 text-gray-100">
            Brooklyn Technical High School National Honor Society is a prestigious organization of <span className="font-bold text-gold">600+ members</span> dedicated to serving our school and community. We foster excellence in scholarship, leadership, character, and service. Our purpose is to provide services to the school community and New York City, whether it is through volunteering, tutoring students, mentoring, assisting school faculty, or helping out during major school events.
          </p>

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-gradient-to-br from-darkBlue-800 to-darkBlue-700 p-8 rounded-xl shadow-lg border border-gold border-opacity-30 hover:border-opacity-100 transition-all">
              <div className="text-4xl font-bold text-gold mb-3">12</div>
              <h3 className="text-2xl font-bold mb-3">Active Committees</h3>
              <p className="text-gray-200">Each committee dedicates itself to making meaningful contributions across different aspects of school and community life.</p>
            </div>

            <div className="bg-gradient-to-br from-darkBlue-800 to-darkBlue-700 p-8 rounded-xl shadow-lg border border-gold border-opacity-30 hover:border-opacity-100 transition-all">
              <div className="text-4xl font-bold text-gold mb-3">300+</div>
              <h3 className="text-2xl font-bold mb-3">Annual Volunteer Hours</h3>
              <p className="text-gray-200">Members contribute countless hours of service through volunteering, tutoring, mentoring, and event assistance.</p>
            </div>

            <div className="bg-gradient-to-br from-darkBlue-800 to-darkBlue-700 p-8 rounded-xl shadow-lg border border-gold border-opacity-30 hover:border-opacity-100 transition-all">
              <div className="text-4xl font-bold text-gold mb-3">NYC</div>
              <h3 className="text-2xl font-bold mb-3">Community Impact</h3>
              <p className="text-gray-200">Serving beyond BTHS to make a positive impact on Brooklyn and New York City communities.</p>
            </div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-darkBlue-800 rounded-xl p-10 border-l-4 border-gold">
          <h3 className="text-4xl font-bold mb-4 text-gold">Get Involved</h3>
          <p className="text-lg text-gray-200 mb-6 leading-relaxed">
            Learn how to get involved in this organization by donating or applying as a student. Whether you're looking to volunteer your time, contribute resources, or join as an active member, BTHS NHS welcomes you to be part of our mission to create positive change in our community.
          </p>
          <Link
            href="/about"
            className="inline-block bg-gold text-darkBlue-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors duration-300"
          >
            Learn More
          </Link>
        </div>
      </FadeInSection>

      {/* Events Section */}
      <FadeInSection className="py-16">
        <div className="max-w-7xl mx-auto px-4 mb-6">
          <h2 className="text-5xl font-bold mb-4 text-center">
            <span className="text-gold">Featured</span> Events
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
        </div>

        {/* Event 1 - Full Width Banner with centered image fade */}
        <div className="w-full mb-8 overflow-hidden rounded-xl">
          <div className="flex h-80 group">
            {/* Image Section (Left) - with fade to middle */}
            <div className="w-3/5 relative overflow-hidden">
              <img
                src="/data/images/logo.png"
                alt="Freshman Orientation"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
              {/* Fade overlay from image to color */}
              <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-r from-transparent to-darkBlue-700"></div>
            </div>

            {/* Content Section (Right) - Solid Color */}
            <div className="w-1.5/5 bg-darkBlue-700 p-12 flex flex-col justify-center">
              <h3 className="text-4xl font-bold mb-4 text-gold">Freshman Orientation</h3>
              <p className="text-lg text-gray-200 leading-relaxed">
                Welcome new students to the BTHS community with an engaging orientation event. Learn about NHS, our mission, and how to get involved in making a difference.
              </p>
            </div>
          </div>
        </div>

        {/* Event 2 - Full Width Banner */}
        <div className="w-full mb-8 overflow-hidden rounded-xl">
          <div className="flex h-80 group">
            {/* Image Section (Left) - with fade */}
            <div className="w-3/5 relative overflow-hidden">
              <img
                src="/data/images/logo.png"
                alt="Fall Open House"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
              {/* Fade overlay from image to color */}
              <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-r from-transparent to-darkBlue-800"></div>
            </div>

            {/* Content Section (Right) - Solid Color */}
            <div className="w-1.5/5 bg-darkBlue-800 p-12 flex flex-col justify-center">
              <h3 className="text-4xl font-bold mb-4 text-gold">Fall Open House</h3>
              <p className="text-lg text-gray-200 leading-relaxed">
                Join us for an exciting open house where you can learn more about NHS, meet our executive board, and discover the many ways you can get involved in our community.
              </p>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Our Pillars Section */}
      <FadeInSection className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-5xl font-bold mb-4 text-center">
          <span className="text-gold">Our</span> Pillars
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto rounded-full mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Character */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-gold to-yellow-400 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
            <div className="relative bg-darkBlue-800 p-8 rounded-xl border-2 border-darkBlue-700 group-hover:border-gold transition-colors duration-300 h-full">
              <h3 className="text-2xl font-bold text-gold mb-4">Character</h3>
              <p className="text-gray-200 leading-relaxed">
                Valuing diverse cultures and building relationships with integrity, honesty, and perseverance.
              </p>
            </div>
          </div>

          {/* Leadership */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-gold to-yellow-400 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
            <div className="relative bg-darkBlue-800 p-8 rounded-xl border-2 border-darkBlue-700 group-hover:border-gold transition-colors duration-300 h-full">
              <h3 className="text-2xl font-bold text-gold mb-4">Leadership</h3>
              <p className="text-gray-200 leading-relaxed">
                Taking ownership and responsibility, being an agent of change and action in our communities.
              </p>
            </div>
          </div>

          {/* Scholarship */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-gold to-yellow-400 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
            <div className="relative bg-darkBlue-800 p-8 rounded-xl border-2 border-darkBlue-700 group-hover:border-gold transition-colors duration-300 h-full">
              <h3 className="text-2xl font-bold text-gold mb-4">Scholarship</h3>
              <p className="text-gray-200 leading-relaxed">
                Commitment to learning and growth through educational excellence and intellectual curiosity.
              </p>
            </div>
          </div>

          {/* Service */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-gold to-yellow-400 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
            <div className="relative bg-darkBlue-800 p-8 rounded-xl border-2 border-darkBlue-700 group-hover:border-gold transition-colors duration-300 h-full">
              <h3 className="text-2xl font-bold text-gold mb-4">Service</h3>
              <p className="text-gray-200 leading-relaxed">
                Engaging in meaningful service with a desire to help others and make lasting positive impact.
              </p>
            </div>
          </div>
        </div>
      </FadeInSection>

      <div className="pb-8" />
      </div>
    </div>
  );
}
