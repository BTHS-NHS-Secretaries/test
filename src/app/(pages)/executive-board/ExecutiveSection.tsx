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
  return (
    <section className="mb-20">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-gold mb-2">{title}</h2>
        <div className="w-16 h-1 bg-gold rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {members.map((executive) => (
          <ExecutiveCard key={executive.id} executive={executive} />
        ))}
      </div>
    </section>
  );
}
