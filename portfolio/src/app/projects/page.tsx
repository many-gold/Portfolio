// ProjectsPage.tsx
import { FaBan, FaUniversity, FaCode, FaGitlab } from "react-icons/fa";
import { SiSpringboot, SiReact, SiJira } from "react-icons/si";

export default function ProjectsPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-12 text-center">
          Projects & Experience
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Tsehay Bank Card */}
          <ProjectCard
            icon={<FaUniversity className="text-blue-400 text-3xl" />}
            title="Tsehay Bank"
            duration="2023 - Present"
            tech={["React", "Spring Boot", "Docker", "GitLab CI/CD"]}
          >
            <ul className="space-y-3">
              <ProjectBullet>Developed modern banking portal with responsive UI</ProjectBullet>
              <ProjectBullet>Built HR & Payroll system handling 5,000+ employees</ProjectBullet>
              <ProjectBullet>Implemented secure mobile banking features</ProjectBullet>
              <ProjectBullet>Established CI/CD pipelines with 90% test coverage</ProjectBullet>
            </ul>
          </ProjectCard>

          {/* INSA Card */}
          <ProjectCard
            icon={<FaUniversity className="text-purple-400 text-3xl" />}
            title="INSA"
            duration="2017 - 2023"
            tech={["Java MVC", "Angular", "Oracle DB", "REST APIs"]}
          >
            <ul className="space-y-3">
              <ProjectBullet>Led 10-member team in ERP system integration</ProjectBullet>
              <ProjectBullet>Developed HRMS with dynamic payroll rules engine</ProjectBullet>
              <ProjectBullet>Created internal portals with 50+ microservices</ProjectBullet>
              <ProjectBullet>Implemented JWT-based authentication system</ProjectBullet>
            </ul>
          </ProjectCard>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ icon, title, duration, tech, children }: { 
  icon: React.ReactNode;
  title: string;
  duration: string;
  tech: string[];
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-800 hover:border-indigo-500/30 transition-all">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-gray-800 rounded-xl">{icon}</div>
          <div>
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="text-gray-400 text-sm">{duration}</p>
          </div>
        </div>
      </div>
      
      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tech.map((item) => (
          <span 
            key={item}
            className="px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-full text-sm"
          >
            {item}
          </span>
        ))}
      </div>

      {children}
    </div>
  );
}

function ProjectBullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex space-x-2">
      <span className="text-indigo-400 pt-1">▹</span>
      <span className="text-gray-300">{children}</span>
    </li>
  );
}