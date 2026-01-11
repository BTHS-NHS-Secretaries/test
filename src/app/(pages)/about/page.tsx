export default function About() {
  return (
    <div className="bg-darkBlue-900 text-white">
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold mb-8 text-center">About Us</h1>
        
        <p className="text-lg leading-relaxed max-w-4xl mx-auto mb-8 text-center">
          The BTHS National Honor Society (NHS) chapter is dedicated to serving our community through volunteerism 
          and leadership. As an organization of student leaders, NHS works to inspire academic excellence, build 
          character, and promote the spirit of service among our members.
        </p>

        <h2 className="text-4xl font-bold mb-6 text-center">Our Mission</h2>
        <p className="text-lg leading-relaxed max-w-4xl mx-auto mb-12 text-center">
          Our mission is to provide an outlet for students to grow academically, socially, and emotionally while 
          serving their community. We aim to promote scholarship, leadership, service, and character within BTHS 
          and beyond.
        </p>

        <h2 className="text-4xl font-bold mb-8 text-center">Our Pillars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-gray-200 text-darkBlue-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h4 className="font-bold text-lg mb-3">Scholarship</h4>
            <p className="text-sm leading-relaxed">
              Encouraging students to strive for academic excellence and intellectual curiosity.
            </p>
          </div>

          <div className="bg-gray-200 text-darkBlue-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h4 className="font-bold text-lg mb-3">Leadership</h4>
            <p className="text-sm leading-relaxed">
              Fostering an environment of leadership, service, and responsibility.
            </p>
          </div>

          <div className="bg-gray-200 text-darkBlue-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h4 className="font-bold text-lg mb-3">Service</h4>
            <p className="text-sm leading-relaxed">
              Engaging in activities that contribute to the betterment of our school and community.
            </p>
          </div>

          <div className="bg-gray-200 text-darkBlue-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h4 className="font-bold text-lg mb-3">Character</h4>
            <p className="text-sm leading-relaxed">
              Promoting strong personal character and ethical decision-making.
            </p>
          </div>
        </div>

        <p className="text-lg leading-relaxed max-w-4xl mx-auto mb-12 text-center">
          As a chapter of the National Honor Society, we are committed to maintaining the high standards set by 
          this prestigious organization while continuing to make a positive impact in our community.
        </p>

        <h2 className="text-4xl font-bold mb-6 text-center">Leaders</h2>
        <p className="text-lg leading-relaxed max-w-4xl mx-auto mb-12 text-center">
          Every year, NHS executives and members attend leadership conferences all over the country, representing 
          our school and organization. We've attended LEAD conferences in Chicago and DC, and the NHS Summit in 
          Stamford, CT.
        </p>

        <h2 className="text-4xl font-bold mb-6 text-center">Our Events</h2>
        <p className="text-lg leading-relaxed max-w-4xl mx-auto mb-8 text-center">
          Here are some moments from our recent events:
        </p>
        
        <div className="flex justify-center gap-6 flex-wrap mb-8">
          <div className="w-24 h-24 bg-gray-600 rounded-lg flex items-center justify-center">
            <p className="text-gray-400 text-center text-sm">[Event 1]</p>
          </div>
          <div className="w-24 h-24 bg-gray-600 rounded-lg flex items-center justify-center">
            <p className="text-gray-400 text-center text-sm">[Event 2]</p>
          </div>
          <div className="w-24 h-24 bg-gray-600 rounded-lg flex items-center justify-center">
            <p className="text-gray-400 text-center text-sm">[Event 3]</p>
          </div>
        </div>
      </section>

      <div className="pb-12" />
    </div>
  );
}
