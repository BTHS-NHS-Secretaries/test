'use client';

import { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import PillarModal from './PillarModal';

interface PillarCardProps {
  title: string;
  description: string;
  details: string;
}

export default function PillarCard({ title, description, details }: PillarCardProps) {
  const [isHovering, setIsHovering] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [mounted, setMounted] = useState(false);
  const columnRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const updateModalPosition = () => {
    if (!columnRef.current || !isHovering) return;

    const rect = columnRef.current.getBoundingClientRect();
    const modalWidth = 384; // Max width of modal (max-w-sm = 28rem)
    const viewportWidth = window.innerWidth;
    
    // Try to position to the right first
    let left = rect.right + 20;
    
    // If it would go off-screen, position to the left instead
    if (left + modalWidth > viewportWidth) {
      left = rect.left - modalWidth - 20;
    }

    const top = rect.top + rect.height / 2;

    setModalPosition({ top, left });
  };

  const handleMouseEnter = () => {
    if (columnRef.current) {
      const rect = columnRef.current.getBoundingClientRect();
      const modalWidth = 384;
      const viewportWidth = window.innerWidth;
      
      let left = rect.right + 20;
      if (left + modalWidth > viewportWidth) {
        left = rect.left - modalWidth - 20;
      }

      setModalPosition({
        top: rect.top + rect.height / 2,
        left,
      });
      setIsHovering(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  // Update position on scroll
  useEffect(() => {
    if (!isHovering) return;

    const handleScroll = () => {
      updateModalPosition();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHovering]);

  return (
    <>
      <div
        ref={columnRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="group relative cursor-pointer flex justify-center items-end h-96"
      >
        <Image
          src="/data/images/column.png"
          alt={title}
          width={150}
          height={400}
          className="object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-lg"
        />
      </div>

      {mounted &&
        createPortal(
          <PillarModal
            title={title}
            description={description}
            details={details}
            isVisible={isHovering}
            position={modalPosition}
          />,
          document.body
        )}
    </>
  );
}
