'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'How do I join NHS?',
    answer: 'Visit the details page, applications come every summer and fall'
  },
  {
    question: 'When are your meetings?',
    answer: 'We hold monthly meetings general meetings through the year, as well as your commitee specific meetings.'
  },
  {
    question: 'placeholder',
    answer: 'placeholder'
  }
];

function FAQAccordion() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      {faqItems.map((item, index) => (
        <motion.div
          key={index}
          className="overflow-hidden rounded-lg bg-darkBlue-800 border-2 border-gold border-opacity-30 hover:border-opacity-60 transition-all duration-300"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full px-8 py-6 flex items-center justify-center hover:bg-darkBlue-700 transition-all duration-300 group"
          >
            <div className="flex-1 flex items-center justify-center gap-4">
              <h3 className="text-2xl font-semibold text-gold text-center">{item.question}</h3>
              <motion.div
                animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown
                  size={28}
                  className="text-gold flex-shrink-0 group-hover:scale-110 transition-transform"
                />
              </motion.div>
            </div>
          </button>
          
          <AnimatePresence>
            {expandedIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="px-8 bg-darkBlue-900 border-t-2 border-gold border-opacity-30 overflow-hidden"
              >
                <motion.div
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="py-8"
                >
                  <p className="text-gray-300 text-center text-lg leading-relaxed">{item.answer}</p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}

export default function Contact() {
  return (
    <div className="bg-darkBlue-900 text-white">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        {/* Contact Us Section */}
        <div className="mb-24 space-y-12">
          {/* Email Section */}
          <div>
            <h2 className="text-4xl font-bold text-gold mb-2 text-center">Contact Us</h2>
            <div className="w-16 h-1 bg-gold mx-auto rounded-full opacity-50 mb-8" />
            <p className="text-center text-lg text-gray-300 mb-8">
              Reach out to our leadership team directly
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="text-center p-6 bg-darkBlue-800 bg-opacity-50 rounded-lg border border-gold border-opacity-20 hover:border-opacity-40 transition-all duration-300">
                <p className="text-gray-400 text-sm mb-2 uppercase tracking-wider">Upper Leadership</p>
                <a href="mailto:leadership@bthsnhs.org" className="text-gold text-lg hover:text-yellow-300 transition-colors break-all font-semibold">
                  leadership@bthsnhs.org
                </a>
              </div>
              <div className="text-center p-6 bg-darkBlue-800 bg-opacity-50 rounded-lg border border-gold border-opacity-20 hover:border-opacity-40 transition-all duration-300">
                <p className="text-gray-400 text-sm mb-2 uppercase tracking-wider">Secretaries</p>
                <a href="mailto:secretaries@bthsnhs.org" className="text-gold text-lg hover:text-yellow-300 transition-colors break-all font-semibold">
                  secretaries@bthsnhs.org
                </a>
              </div>
            </div>
          </div>

          {/* Location Section */}
          <div>
            <h2 className="text-4xl font-bold text-gold mb-2 text-center">Location</h2>
            <div className="w-16 h-1 bg-gold mx-auto rounded-full opacity-50 mb-8" />
            <p className="text-center text-lg text-gray-300 mb-8">
              Visit us at Brooklyn Technical High School
            </p>
            <div className="max-w-2xl mx-auto text-center p-8 bg-darkBlue-800 bg-opacity-50 rounded-lg border border-gold border-opacity-20 hover:border-opacity-40 transition-all duration-300">
              <p className="text-white text-xl leading-relaxed">
                Brooklyn Technical High School<br />
                <span className="text-gold">29 Fort Greene Place</span><br />
                <span className="text-gold">Brooklyn, NY 11217</span>
              </p>
            </div>
          </div>

          {/* Social Section */}
          <div>
            <h2 className="text-4xl font-bold text-gold mb-2 text-center">Follow Us</h2>
            <div className="w-16 h-1 bg-gold mx-auto rounded-full opacity-50 mb-8" />
            <p className="text-center text-lg text-gray-300 mb-8">
              Stay updated with our latest news and events
            </p>
            <div className="flex flex-wrap justify-center gap-6 max-w-2xl mx-auto">
              <a href="https://discord.gg/Nk8JSy5uqK" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-darkBlue-800 bg-opacity-50 rounded-lg border border-gold border-opacity-20 hover:border-opacity-100 transition-all duration-300 text-gold text-lg font-semibold hover:shadow-lg hover:shadow-gold/50">
                Discord
              </a>
              <a href="https://bthsnhs.carrd.co/" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-darkBlue-800 bg-opacity-50 rounded-lg border border-gold border-opacity-20 hover:border-opacity-100 transition-all duration-300 text-gold text-lg font-semibold hover:shadow-lg hover:shadow-gold/50">
                Carrd
              </a>
              <a href="https://instagram.com/BTHSNHS" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-darkBlue-800 bg-opacity-50 rounded-lg border border-gold border-opacity-20 hover:border-opacity-100 transition-all duration-300 text-gold text-lg font-semibold hover:shadow-lg hover:shadow-gold/50">
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="border-t-2 border-gold border-opacity-20 pt-24">
          <h2 className="text-5xl font-bold text-gold mb-2 text-center">FAQ</h2>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full opacity-50 mb-12" />
          <FAQAccordion />
        </div>
      </section>
    </div>
  );
}
