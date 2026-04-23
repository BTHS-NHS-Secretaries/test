'use client';

import Image from 'next/image';

interface CommitteeCardProps {
  name: string;
  description: string;
  imagePath?: string;
}

export default function CommitteeCard({ name, description, imagePath }: CommitteeCardProps) {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
      <div className="md:w-2/5">
        <h3 className="text-3xl font-bold text-gold mb-4">{name}</h3>
        <p className="text-gray-200 text-lg leading-relaxed">{description}</p>
      </div>

      <div className="md:w-2/5">
        {imagePath ? (
          <Image
            src={imagePath}
            alt={name}
            width={300}
            height={300}
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        ) : (
          <div className="w-full aspect-square bg-darkBlue-800 rounded-xl flex items-center justify-center border-2 border-darkBlue-700">
            <div className="text-center">
              <div className="text-5xl mb-2">📋</div>
              <p className="text-gray-400">Image placeholder</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
