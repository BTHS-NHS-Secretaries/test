'use client';

interface PillarModalProps {
  title: string;
  description: string;
  details: string;
  isVisible: boolean;
  position: { top: number; left: number };
}

export default function PillarModal({
  title,
  description,
  details,
  isVisible,
  position,
}: PillarModalProps) {
  return (
    <div
      className={`fixed bg-gradient-to-br from-darkBlue-900 to-black bg-opacity-98 backdrop-blur-md rounded-xl shadow-2xl p-6 z-50 transition-all duration-300 max-w-sm ${
        isVisible ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        transform: 'translateY(-50%)',
      }}
    >
      <div className="mb-4 pb-4 border-b border-opacity-40">
        <h3 className="text-2xl font-bold text-gold mb-2">{title}</h3>
        <p className="text-yellow-300 text-sm font-semibold">{description}</p>
      </div>

      <div>
        <p className="text-gray-100 text-sm leading-relaxed">{details}</p>
      </div>

      <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-gold border-opacity-40 rounded-tr-xl"></div>
      <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-gold border-opacity-40 rounded-bl-xl"></div>
    </div>
  );
}
