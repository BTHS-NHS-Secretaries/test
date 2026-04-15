'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface CommitteeModalProps {
  committee: {
    name: string;
    description: string;
    imagePath?: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function CommitteeModal({ committee, isOpen, onClose }: CommitteeModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!committee || !isOpen) return null;

  return createPortal(
    <>
      {/* Backdrop - covers entire viewport */}
      <div
        className="fixed inset-0 bg-black bg-opacity-30 z-[999] transition-opacity duration-300 backdrop-blur-sm animate-fadeIn"
        onClick={onClose}
      />

      {/* Modal Container - covers entire viewport with flex centering */}
      <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-8 overflow-hidden">
        {/* Modal Content */}
        <div 
          className="bg-darkBlue-800 rounded-2xl border-2 border-gold border-opacity-40 shadow-2xl w-full h-[85vh] max-w-5xl overflow-y-auto relative animate-slideIn"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button (X in top right) */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-20 bg-gold text-darkBlue-900 w-10 h-10 rounded-full flex items-center justify-center font-bold text-2xl hover:bg-opacity-90 hover:scale-110 transition-all duration-200 shadow-lg"
          >
            ×
          </button>

          {/* Image Container */}
          <div className="w-full h-80 relative bg-darkBlue-900 flex items-center justify-center border-b-2 border-gold border-opacity-20">
            {committee.imagePath ? (
              <Image
                src={committee.imagePath}
                alt={committee.name}
                fill
                className="object-cover"
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-center">
                <div className="text-8xl mb-4">📋</div>
                <p className="text-gray-400 text-lg">Committee Image</p>
              </div>
            )}
          </div>

          {/* Content Container */}
          <div className="p-10 sm:p-12">
            <h2 className="text-5xl font-bold text-gold mb-6">{committee.name}</h2>
            <div className="w-20 h-1 bg-gold rounded-full mb-8 opacity-70"></div>
            <p className="text-gray-200 text-xl leading-relaxed">{committee.description}</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        :global(.animate-slideIn) {
          animation: slideIn 0.3s ease-out;
        }

        :global(.animate-fadeIn) {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>,
    document.body
  );
}
