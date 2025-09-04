import { Mail, Github, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-16 bg-black text-center">
      <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
      <p className="text-gray-400 mb-10">
        Always open to collaborations, hackathons, or just chatting Web3.
      </p>

      <div className="flex justify-center gap-8">
        {/* Email */}
        <a
          href="mailto:youremail@example.com"
          className="p-4 bg-gray-900 rounded-full shadow-lg hover:scale-110 hover:bg-purple-600 transition"
        >
          <Mail className="w-6 h-6 text-white" />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/yourprofile"
          target="_blank"
          className="p-4 bg-gray-900 rounded-full shadow-lg hover:scale-110 hover:bg-gray-700 transition"
        >
          <Github className="w-6 h-6 text-white" />
        </a>

        {/* Twitter/X */}
        <a
          href="https://twitter.com/yourprofile"
          target="_blank"
          className="p-4 bg-gray-900 rounded-full shadow-lg hover:scale-110 hover:bg-blue-500 transition"
        >
          <Twitter className="w-6 h-6 text-white" />
        </a>
      </div>

      <p className="mt-8 text-gray-500 text-sm">
        On-chain identity → <span className="font-mono">isaiah.eth</span>
      </p>
    </section>
  );
}
export default Contact;