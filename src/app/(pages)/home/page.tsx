export default function Home() {
  return (
    <div className="bg-darkBlue-900 text-white">
      <section className="text-center py-12 px-4">
        <h1 className="text-5xl font-bold mb-6 animate-slideIn">
          BROOKLYN TECHNICAL HIGH SCHOOL NATIONAL HONOR SOCIETY
        </h1>
        <h3 className="text-lg italic max-w-4xl mx-auto mb-10 leading-relaxed">
          The Brooklyn Technical High School National Honor Society serves to recognize those students who have 
          demonstrated excellence that upholds the four pillars of character, leadership, scholarship, and service. 
          Our purpose is to provide services to the school community and New York City, whether it is through 
          volunteering, tutoring students, mentoring, assisting school faculty, or helping out during major school events.
        </h3>

        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-3xl h-80 rounded-2xl overflow-hidden border-4 border-gold animate-slideIn">
            <div className="w-full h-full bg-gradient-to-r from-darkBlue-700 to-darkBlue-800 flex items-center justify-center">
              <p className="text-gray-400">[Executive Photo Placeholder]</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center mb-12">Our Pillars</h2>
        <div className="space-y-8">
          <div className="bg-darkBlue-800 p-8 rounded-lg shadow-lg hover:bg-darkBlue-700 transition-colors">
            <h3 className="text-2xl font-bold text-gold mb-4">Character</h3>
            <p className="text-lg leading-relaxed">
              Valuing diverse cultures and building relationships that reflect love of self but also concern for others. 
              There are endless attributes to good character: perseverance, respect, integrity, honesty, sacrifice—the list goes on.
            </p>
          </div>

          <div className="bg-darkBlue-800 p-8 rounded-lg shadow-lg hover:bg-darkBlue-700 transition-colors">
            <h3 className="text-2xl font-bold text-gold mb-4">Leadership</h3>
            <p className="text-lg leading-relaxed">
              Carrying oneself with dignity and taking ownership and responsibility for one's own actions and participation. 
              Leadership means being an agent—someone who takes action and responsibility—of your own pathway.
            </p>
          </div>

          <div className="bg-darkBlue-800 p-8 rounded-lg shadow-lg hover:bg-darkBlue-700 transition-colors">
            <h3 className="text-2xl font-bold text-gold mb-4">Scholarship</h3>
            <p className="text-lg leading-relaxed">
              A commitment to learning and growing on an educational path. It means making the most of the educational 
              opportunities provided and seeking out learning, not only in school or similar settings, but also personally.
            </p>
          </div>

          <div className="bg-darkBlue-800 p-8 rounded-lg shadow-lg hover:bg-darkBlue-700 transition-colors">
            <h3 className="text-2xl font-bold text-gold mb-4">Service</h3>
            <p className="text-lg leading-relaxed">
              Seeking out and engaging in meaningful service. It calls for a service mindset, the desire to seek opportunities 
              to help others as well as acts of service.
            </p>
          </div>
        </div>
      </section>

      <div className="pb-12" />
    </div>
  );
}
