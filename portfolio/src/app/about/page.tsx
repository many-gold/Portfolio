import { FaJava, FaReact, FaVuejs, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiSharp, SiSpringboot, SiAngular, SiJenkins } from "react-icons/si";

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-800">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-8">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Profile Text */}
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Seasoned Full-Stack Engineer with 🛠️ 8+ years expertise in enterprise solutions 
                and banking systems. Specialize in building robust HRMS, Payroll, and Procurement 
                platforms that handle millions in transactions.
              </p>

              <div className="bg-gray-800/50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Core Expertise</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <span className="text-indigo-400">▹</span>
                    <span>ERP Architecture & Development</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-indigo-400">▹</span>
                    <span>High-Volume System Optimization</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-indigo-400">▹</span>
                    <span>Cross-Functional Team Leadership</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-indigo-400">▹</span>
                    <span>CI/CD Pipeline Implementation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="grid grid-cols-2 gap-4">
              <TechCard icon={<FaJava className="text-red-500 text-3xl" />} 
                title="Java" 
                experience="8+ years" 
              />
              <TechCard icon={<SiSharp className="text-purple-500 text-3xl" />} 
                title="C#" 
                experience="5 years" 
              />
              <TechCard icon={<FaReact className="text-blue-400 text-3xl" />} 
                title="React" 
                experience="3 years" 
              />
              <TechCard icon={<FaVuejs className="text-green-500 text-3xl" />} 
                title="Vue.js" 
                experience="2 years" 
              />
              <TechCard icon={<SiSpringboot className="text-green-400 text-3xl" />} 
                title="Spring Boot" 
                experience="4 years" 
              />
              <TechCard icon={<FaDocker className="text-blue-300 text-3xl" />} 
                title="Docker" 
                experience="3 years" 
              />
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 border-t border-gray-800 pt-8 text-center">
            <a
              href="/contact"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:translate-y-[-2px]"
            >
              Let's Build Something Great
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechCard({ icon, title, experience }: { 
  icon: React.ReactNode;
  title: string;
  experience: string;
}) {
  return (
    <div className="bg-gray-800/30 p-4 rounded-lg hover:bg-gray-800/50 transition-all group">
      <div className="flex items-center space-x-4">
        <div className="p-3 bg-gray-900 rounded-lg">{icon}</div>
        <div>
          <h4 className="font-semibold text-lg">{title}</h4>
          <p className="text-gray-400 text-sm">{experience} experience</p>
        </div>
      </div>
    </div>
  );
}