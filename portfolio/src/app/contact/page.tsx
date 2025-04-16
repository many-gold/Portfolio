// ContactPage.tsx
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-800">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-8">
            Get in Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <ContactItem 
                icon={<FaMapMarkerAlt className="text-red-400 text-2xl" />}
                title="Location"
                content="Addis Ababa, Ethiopia"
              />
              <ContactItem 
                icon={<FaPhone className="text-blue-400 text-2xl" />}
                title="Phone"
                content="+251 982 412 566"
              />
              <ContactItem 
                icon={<SiGmail className="text-orange-400 text-2xl" />}
                title="Email"
                content="your-email@example.com"
                link="mailto:your-email@example.com"
              />
              <ContactItem 
                icon={<FaLinkedin className="text-blue-300 text-2xl" />}
                title="LinkedIn"
                content="linkedin.com/in/your-link"
                link="https://linkedin.com/in/your-link"
              />
            </div>

            {/* Contact Form */}
            <form className="space-y-6">
              <div className="space-y-4">
                <InputField label="Name" type="text" id="name" />
                <InputField label="Email" type="email" id="email" />
                <div className="space-y-2">
                  <label className="text-gray-300" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:translate-y-[-2px]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, title, content, link }: { 
  icon: React.ReactNode;
  title: string;
  content: string;
  link?: string;
}) {
  return (
    <div className="flex items-start space-x-4">
      <div className="p-2 bg-gray-800 rounded-lg">{icon}</div>
      <div>
        <h3 className="text-gray-400 text-sm">{title}</h3>
        {link ? (
          <a
            href={link}
            className="text-gray-300 hover:text-indigo-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            {content}
          </a>
        ) : (
          <p className="text-gray-300">{content}</p>
        )}
      </div>
    </div>
  );
}

function InputField({ label, type, id }: { 
  label: string;
  type: string;
  id: string;
}) {
  return (
    <div className="space-y-2">
      <label className="text-gray-300" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="w-full bg-gray-800/50 border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      />
    </div>
  );
}