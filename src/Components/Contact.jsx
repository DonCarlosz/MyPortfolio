import { Mail, Github, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 text-center">
      {/* Header with underline */}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative group w-fit mx-auto">
        Get in Touch
        <span className="block h-1 bg-indigo-500 w-1/2 mx-auto mt-2 transition-all duration-500 group-hover:w-full"></span>
      </h2>

      <p className="text-gray-400 mb-10 max-w-lg mx-auto">
        Always open to collaborations, hackathons, or just chatting Web3.
      </p>

      <div className="flex justify-center gap-8">
        {/* Email */}
        <a
          href="mailto:youremail@example.com"
          className="p-4 bg-gray-900 rounded-full shadow-lg hover:scale-110 hover:bg-purple-600 transition transform"
        >
          <Mail className="w-6 h-6 text-white" />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/DonCarlosz"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-gray-900 rounded-full shadow-lg hover:scale-110 hover:bg-gray-700 transition transform"
        >
          <Github className="w-6 h-6 text-white" />
        </a>

        {/* Twitter/X */}
        <a
          href="https://twitter.com/2d4rc"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-gray-900 rounded-full shadow-lg hover:scale-110 hover:bg-blue-500 transition transform"
        >
          <Twitter className="w-6 h-6 text-white" />
        </a>
      </div>

      <p className="mt-8 text-gray-500 text-sm">
        On-chain identity → <span className="font-mono">isaiah.eth</span>
      </p>
    </section>
  );
};

export default Contact;
