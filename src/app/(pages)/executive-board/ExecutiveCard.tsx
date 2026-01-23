'use client';

import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import ExecutiveModal from './ExecutiveModal';

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

interface ExecutiveCardProps {
  executive: Executive;
}

export default function ExecutiveCard({ executive }: ExecutiveCardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [mounted, setMounted] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const updateModalPosition = () => {
    if (!cardRef.current || !isModalVisible) return;

    const rect = cardRef.current.getBoundingClientRect();
    // Simple viewport-relative positioning
    const top = rect.top + rect.height / 2;
    const left = rect.right + 20;

    setModalPosition({ top, left });
  };

  const handleMouseEnter = () => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setModalPosition({
        top: rect.top + rect.height / 2,
        left: rect.right + 20,
      });
      setIsModalVisible(true);
    }
  };

  const handleMouseLeave = () => {
    setIsModalVisible(false);
  };

  // Update position on scroll
  useEffect(() => {
    if (!isModalVisible) return;

    const handleScroll = () => {
      updateModalPosition();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isModalVisible]);

  return (
    <>
      <div
        ref={cardRef}
        className="relative cursor-pointer group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="bg-darkBlue-800 rounded-xl overflow-hidden border-2 border-gold border-opacity-30 hover:border-opacity-100 transition-all duration-300 shadow-lg h-full hover:shadow-2xl group-hover:-translate-y-2">
          <div className="relative overflow-hidden bg-darkBlue-700 h-73   flex items-center justify-center">
            <img
              src={executive.image}
              alt={executive.name}
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>

          <div className="p-7 text-center">
            <h3 className="text-xl font-bold text-gold mb-2">{executive.role}</h3>
            <p className="text-lg font-semibold text-white mb-1">{executive.name}</p>
            <p className="text-gray-300 text-sm">{executive.major}</p>
          </div>
        </div>
      </div>

      {mounted &&
        createPortal(
          <ExecutiveModal
            executive={executive}
            isVisible={isModalVisible}
            position={modalPosition}
          />,
          document.body
        )}
    </>
  );
}
