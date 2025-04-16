import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaAngular,
  FaVuejs,
  FaJava,
  FaCss3Alt,
  FaHtml5,
  FaBootstrap,
} from "react-icons/fa"
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiDocker,
  SiSharp,
  SiJirasoftware,
  // SiMaterialui,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiOracle,
  // SiMicrosoftsqlserver,
  SiSpring,
  SiMaterialdesign,
} from "react-icons/si"
import { TbSql } from "react-icons/tb"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-16">
      {/* Text Content */}
      <div className="w-full md:w-1/2 space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Full-Stack Software Engineer
        </h1>
        <p className="text-lg text-gray-300 max-w-xl">
          I’m <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent font-medium">Bizuwork Jemaneh</span>, an ERP and banking software engineer with 8+ years of experience. I build enterprise-grade systems with Java, C#, modern JS frameworks, and scalable cloud-first architecture.
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
      <div className="w-full lg:w-1/2 relative h-[650px] rounded-2xl shadow-2xl overflow-hidden group">
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105">
          <img 
            src="/photo.jpg" 
            alt="Bizuwork Jemaneh" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        </div>

        {/* Floating Tech */}
        <div className="absolute top-12 left-12 animate-float">
          <FaJava className="text-blue-400 text-4xl opacity-90" />
        </div>
        <div className="absolute top-12 right-12 animate-float delay-200">
          <SiSharp className="text-purple-400 text-4xl opacity-90" />
        </div>
        <div className="absolute bottom-20 left-1/4 animate-float delay-300">
          <FaReact className="text-teal-400 text-4xl opacity-90" />
        </div>

        <div className="relative z-10 p-6 h-full flex flex-col justify-end space-y-6">

          {/* Languages & Frameworks */}
          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-2">Languages & Frameworks</h3>
            <div className="grid grid-cols-4 gap-4 text-center text-gray-200 text-xs">
              {[ 
                { icon: <FaJava className="text-blue-400 text-2xl" />, label: "Java" },
                { icon: <SiSpring className="text-green-500 text-2xl" />, label: "Spring Boot" },
                { icon: <SiSharp className="text-purple-400 text-2xl" />, label: "C#" },
                { icon: <FaReact className="text-cyan-400 text-2xl" />, label: "React.js" },
                { icon: <FaVuejs className="text-green-400 text-2xl" />, label: "Vue.js" },
                { icon: <FaAngular className="text-red-400 text-2xl" />, label: "AngularJS" },
                { icon: <FaHtml5 className="text-orange-400 text-2xl" />, label: "HTML" },
                { icon: <FaCss3Alt className="text-blue-300 text-2xl" />, label: "CSS" },
                { icon: <FaBootstrap className="text-indigo-300 text-2xl" />, label: "Bootstrap" },
                { icon: <SiMaterialdesign className="text-indigo-400 text-2xl" />, label: "Material UI" },
              ].map((tech, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  {tech.icon}
                  <span>{tech.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & DevOps */}
          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-2">Tools & DevOps</h3>
            <div className="grid grid-cols-4 gap-4 text-center text-gray-200 text-xs">
              {[
                { icon: <FaGitAlt className="text-orange-400 text-2xl" />, label: "Git" },
                { icon: <SiDocker className="text-blue-400 text-2xl" />, label: "Docker" },
                { icon: <SiJirasoftware className="text-blue-400 text-2xl" />, label: "Jira" },
              ].map((tool, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  {tool.icon}
                  <span>{tool.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Databases */}
          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-2">Databases</h3>
            <div className="grid grid-cols-4 gap-4 text-center text-gray-200 text-xs">
              {[
                { icon: <TbSql className="text-indigo-300 text-2xl" />, label: "SQL Server" },
                { icon: <SiMysql className="text-blue-300 text-2xl" />, label: "MySQL" },
                { icon: <SiOracle className="text-red-300 text-2xl" />, label: "Oracle" },
                { icon: <SiPostgresql className="text-blue-500 text-2xl" />, label: "PostgreSQL" },
              ].map((db, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  {db.icon}
                  <span>{db.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}
