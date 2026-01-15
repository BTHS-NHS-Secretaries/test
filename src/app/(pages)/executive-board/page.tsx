import ExecutiveSection from './ExecutiveSection';

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

interface ExecutiveSection {
  title: string;
  members: Executive[];
}

async function getExecutiveData(): Promise<ExecutiveSection[]> {
  try {
    const res = await fetch('http://localhost:3000/data/executives.json', {
      cache: 'no-store',
    });
    if (!res.ok) throw new Error('Failed to fetch');
    const data = await res.json();
    return data.sections;
  } catch (error) {
    console.error('Error loading executives:', error);
    return [];
  }
}

export default async function ExecutiveBoard() {
  const executiveData = await getExecutiveData();

  return (
    <div className="bg-darkBlue-900 text-white">
      <section className="max-w-7xl mx-auto px-4 pt-24">
        <h1 className="text-6xl font-bold mb-4 text-center">
          <span className="text-gold">2025-2026</span> Executive Board
        </h1>
        <div className="w-24 h-1 bg-gold mx-auto rounded-full mb-8"></div>
        <p className="text-xl text-center max-w-3xl mx-auto text-gray-100">
          Meet the dedicated executives who lead BTHS NHS and work to improve our community.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        {executiveData.map((section) => (
          <ExecutiveSection key={section.title} title={section.title} members={section.members} />
        ))}
      </section>

      <div className="pb-12" />
    </div>
  );
}
