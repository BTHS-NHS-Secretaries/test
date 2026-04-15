'use client';

import { useState, useEffect } from 'react';
import CommitteeModal from './CommitteeModal';

interface Committee {
  name: string;
  description: string;
  imagePath?: string;
}

export default function CommitteeGrid() {
  const [committees, setCommittees] = useState<Committee[]>([]);
  const [selectedCommittee, setSelectedCommittee] = useState<Committee | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const loadCommittees = async () => {
      try {
        const response = await fetch('/data/committees.json');
        const data = await response.json();
        setCommittees(data);
      } catch (error) {
        console.error('Error loading committees:', error);
      }
    };

    loadCommittees();
  }, []);

  const handleBoxClick = (committee: Committee) => {
    setSelectedCommittee(committee);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedCommittee(null), 300);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {committees.map((committee) => (
          <button
            key={committee.name}
            onClick={() => handleBoxClick(committee)}
            className="group relative bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg p-6 min-h-48 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:from-gray-600 hover:to-gray-800 border border-gray-600 hover:border-gold border-opacity-30 hover:border-opacity-100"
          >
            <div className="absolute inset-0 bg-gold opacity-0 group-hover:opacity-5 rounded-lg transition-opacity duration-300"></div>
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white group-hover:text-gold transition-colors duration-300">
                  {committee.name}
                </h3>
              </div>
            </div>
          </button>
        ))}
      </div>

      <CommitteeModal
        committee={selectedCommittee}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
