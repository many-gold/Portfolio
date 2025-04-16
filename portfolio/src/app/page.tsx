import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaAngular,
  FaVuejs,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiTypescript,
  SiExpress,
  SiGraphql,
  SiDocker,
  
} from "react-icons/si";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-16">
      {/* Text Content */}
      <div className="w-full md:w-1/2 space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Full-Stack Web Developer
        </h1>
        <p className="text-lg text-gray-300 max-w-xl">
          I’m <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent font-medium">Bizuwork Jemaneh</span>, a software engineer
          specializing in building scalable, maintainable, and high-performance
          web applications using modern JavaScript frameworks and cloud-based
          architectures.
        </p>
        <div>
          <a
            href="/projects"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Explore Projects
          </a>
        </div>
      </div>

      {/* Profile + Tech Stack */}
      <div className="w-full lg:w-1/2 relative h-[500px] rounded-2xl shadow-2xl overflow-hidden group">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105">
          <img 
            src="/photo.jpg" 
            alt="Background" 
            className="w-full h-full object-fit"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent" />
        </div>

        {/* Floating React Icon */}
        <div className="absolute top-8 left-8 animate-float">
          <FaReact className="text-blue-400 text-5xl opacity-90" />
        </div>

        {/* Technologies Grid */}
        <div className="relative z-10 p-8 h-full flex items-end">
          <div className="w-full grid grid-cols-3 md:grid-cols-4 gap-4 text-center text-gray-200">
            <div className="tech-icon">
              <SiNextdotjs className="text-white text-3xl" />
              Next.js
            </div>
            <div className="tech-icon">
              <FaReact className="text-blue-400 text-3xl" />
              React
            </div>
            <div className="tech-icon">
              <SiTypescript className="text-blue-400 text-3xl" />
              TypeScript
            </div>
            <div className="tech-icon">
              <FaNodeJs className="text-green-500 text-3xl" />
              Node.js
            </div>
            <div className="tech-icon">
              <SiTailwindcss className="text-teal-400 text-3xl" />
              Tailwind
            </div>
            <div className="tech-icon">
              <SiMongodb className="text-green-400 text-3xl" />
              MongoDB
            </div>
            <div className="tech-icon">
              <FaGitAlt className="text-orange-500 text-3xl" />
              Git
            </div>
            <div className="tech-icon">
              <FaAngular className="text-red-500 text-3xl" />
              Angular
            </div>
            <div className="tech-icon">
              <FaVuejs className="text-green-500 text-3xl" />
              Vue.js
            </div>
            <div className="tech-icon">
              <SiExpress className="text-gray-300 text-3xl" />
              Express
            </div>
            <div className="tech-icon">
              <SiGraphql className="text-pink-500 text-3xl" />
              GraphQL
            </div>
            
          </div>
        </div>
      </div>
    </main>
  );
}