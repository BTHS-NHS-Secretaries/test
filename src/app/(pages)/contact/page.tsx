export default function Contact() {
  return (
    <div className="bg-darkBlue-900 text-white">
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold mb-8 text-center">Contact Us</h1>
        
        <p className="text-lg leading-relaxed text-center mb-12">
          We'd love to hear from you! If you have any questions or suggestions, feel free to reach out to us 
          through the following methods:
        </p>

        <h2 className="text-3xl font-bold mb-6">Email</h2>
        <div className="bg-darkBlue-800 p-6 rounded-lg mb-8">
          <p className="text-lg mb-3">
            <strong>Upper Leadership:</strong>{" "}
            <a href="mailto:leadership@bthsnhs.org" className="text-gold hover:text-yellow-300">
              leadership@bthsnhs.org
            </a>
          </p>
          <p className="text-lg">
            <strong>Secretaries:</strong>{" "}
            <a href="mailto:secretaries@bthsnhs.org" className="text-gold hover:text-yellow-300">
              secretaries@bthsnhs.org
            </a>
          </p>
        </div>

        <h2 className="text-3xl font-bold mb-6">Social Media</h2>
        <p className="text-lg leading-relaxed mb-6">
          Follow us on social media to stay updated on upcoming events and opportunities:
        </p>
        <div className="bg-darkBlue-800 p-6 rounded-lg mb-8 space-y-3">
          <p>
            <a 
              href="https://discord.gg/Nk8JSy5uqK" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-yellow-300 underline text-lg"
            >
              Discord
            </a>
          </p>
          <p>
            <a 
              href="https://bthsnhs.carrd.co/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-yellow-300 underline text-lg"
            >
              Carrd
            </a>
          </p>
          <p>
            <a 
              href="https://instagram.com/BTHSNHS" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-yellow-300 underline text-lg"
            >
              Instagram
            </a>
          </p>
        </div>

        <h2 className="text-3xl font-bold mb-6">Address</h2>
        <div className="bg-darkBlue-800 p-6 rounded-lg">
          <p className="text-lg leading-relaxed">
            Brooklyn Technical High School<br />
            29 Fort Greene Place, Brooklyn, NY 11217
          </p>
        </div>
      </section>

      <div className="pb-12" />
    </div>
  );
}
