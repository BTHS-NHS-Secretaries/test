import ExecutiveSection from './ExecutiveSection';
import fs from 'fs';
import path from 'path';

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
    const filePath = path.join(process.cwd(), 'public', 'data', 'executives.json');
    const data = fs.readFileSync(filePath, 'utf-8');
    const parsed = JSON.parse(data);
    return parsed.sections;
  } catch (error) {
    console.error('Error loading executives:', error);
    return [];
  }
}

export default async function ExecutiveBoard() {
  const executiveData = await getExecutiveData();

  return (
    <div className="bg-darkBlue-900 text-white">
      <section className="max-w-8xl mx-auto px-4 pt-28">
        <h1 className="text-6xl font-bold mb-4 text-center">
          <span className="text-gold">2025-2026</span> Executive Board
        </h1>
        <div className="w-24 h-2 bg-gold mx-auto rounded-full mb-8"></div>
        <p className="text-2xl text-center max-w-4xl mx-auto text-gray-100 mb-8">
          Meet the dedicated executives who lead BTHS NHS and work to improve our community.
        </p>
      </section>

      <section className="max-w-9xl mx-auto px-4 pyt-16">
        {executiveData.map((section) => (
          <ExecutiveSection key={section.title} title={section.title} members={section.members} />
        ))}
      </section>

      <div className="pb-12" />
    </div>
  );
}
