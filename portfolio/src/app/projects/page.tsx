// ProjectsPage.tsx
import { FaWordpress, FaJava, FaReact, FaNodeJs, FaDocker,FaUniversity } from "react-icons/fa";
import { SiSpringboot, SiVuedotjs, SiSharp } from "react-icons/si";

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
            tech={["React", "Spring Boot", "Docker", "GitLab CI/CD", "MySQL"]}
          >
            <ul className="space-y-3">
            <ProjectBullet>Developed Human Resource Management system handling employees</ProjectBullet>
            <ProjectBullet>Developed Payroll Management system handling employees</ProjectBullet>
            <ProjectBullet>Developed banking information portal with responsive UI</ProjectBullet>
            <ProjectBullet>Developed banking Discussion Forum system with responsive UI</ProjectBullet>
            <ProjectBullet>Installed and configured Git for version control</ProjectBullet>
              <ProjectBullet>Optimized high-volume transaction processing systems</ProjectBullet>
            </ul>
          </ProjectCard>

          {/* INSA Card */}
          <ProjectCard
            icon={<FaUniversity className="text-purple-400 text-3xl" />}
            title="Information Network Security Administrator(INSA)"
            duration="2017 - 2023"
            tech={["Java MVC", "Angular", "Oracle DB", "REST APIs", "Docker"]}
          >
            <ul className="space-y-3">
              <ProjectBullet>Led 10-member team in ERP system integration</ProjectBullet>
              <ProjectBullet>Developed Human Resource Management system handling employees</ProjectBullet>
              <ProjectBullet>Developed Payroll Management system handling employees</ProjectBullet>
              <ProjectBullet>Developed Inventory Management system handling employees</ProjectBullet>
              <ProjectBullet>Developed Procurement Management system handling employees</ProjectBullet>
              <ProjectBullet>Created internal portals information system</ProjectBullet>
              <ProjectBullet>Implemented JWT-based authentication system</ProjectBullet>
              <ProjectBullet>Designed and integrated procurement management systems</ProjectBullet>
              <ProjectBullet>Established CI/CD pipelines with 90% test coverage</ProjectBullet>
            </ul>
          </ProjectCard>
          

          {/* HR & Payroll System (Java MVC) */}
          <ProjectCard
            icon={<FaJava className="text-red-500 text-3xl" />}
            title="Human Resource & Payroll System "
            duration="2018 - 2022"
            tech={["Java MVC", "Spring Boot", "MySQL", "JSP"]}
          >
            <ul className="space-y-3">
              <ProjectBullet>Developed Human Resource Management system with automated payroll processing and tax calculations.</ProjectBullet>
              <ProjectBullet>Integrated employee attendance, leave management, and payroll features.</ProjectBullet>
              <ProjectBullet>Built a user role management system for secure access to sensitive data.</ProjectBullet>
              <ProjectBullet>Implemented dynamic reporting and employee data analytics.</ProjectBullet>
            </ul>
          </ProjectCard>

          {/* Procurement & Inventory System (C# MVC) */}
          <ProjectCard
            icon={<SiSharp className="text-green-500 text-3xl" />}
            title="Procurement & Inventory System "
            duration="2019 - 2021"
            tech={["C# MVC", "SQL Server", "Entity Framework", "REST APIs"]}
          >
            <ul className="space-y-3">
              <ProjectBullet>Built an automated procurement system for efficient order management.</ProjectBullet>
              <ProjectBullet>Developed inventory tracking for real-time stock monitoring.</ProjectBullet>
              <ProjectBullet>Designed an intuitive dashboard for admins and managers.</ProjectBullet>
              <ProjectBullet>Integrated with financial systems for seamless order-to-cash cycles.</ProjectBullet>
            </ul>
          </ProjectCard>

          {/* Information Portal System (Vue.js & Node.js) */}
          <ProjectCard
            icon={<SiVuedotjs className="text-green-400 text-3xl" />}
            title="Information Portal System (Vue.js & Node.js)"
            duration="2021 - 2022"
            tech={["Vue.js", "Node.js", "MongoDB", "WebSocket"]}
          >
            <ul className="space-y-3">
              <ProjectBullet>Developed an information portal with real-time data updates.</ProjectBullet>
              <ProjectBullet>Built API endpoints in Node.js for handling data requests and updates.</ProjectBullet>
              <ProjectBullet>Implemented WebSocket communication for real-time notifications and data sync.</ProjectBullet>
              <ProjectBullet>Designed user-friendly front-end with Vue.js for dynamic content management.</ProjectBullet>
            </ul>
          </ProjectCard>
          {/* WordPress Website Development */}
          <ProjectCard
            icon={<FaWordpress className="text-blue-500 text-3xl" />}
            title="WordPress Website Development"
            duration="2017 - Present"
            tech={["WordPress", "PHP", "CSS", "JavaScript"]}
          >
            <ul className="space-y-3">
              <ProjectBullet>Developed and maintained custom websites and e-commerce platforms.</ProjectBullet>
              <ProjectBullet>Customized WordPress themes using PHP, HTML, CSS, and JavaScript.</ProjectBullet>
            
              <ProjectBullet>Optimized websites for SEO, performance, and security.</ProjectBullet>
            </ul>
          </ProjectCard>

          {/* Discussion Forum (React.js & Socket.IO) */}
          <ProjectCard
            icon={<FaReact className="text-blue-400 text-3xl" />}
            title="Discussion Forum (React.js & Socket.IO)"
            duration="2022 - Present"
            tech={["React.js", "Socket.IO", "Node.js", "MongoDB"]}
          >
            <ul className="space-y-3">
              <ProjectBullet>Built an interactive discussion forum with real-time messaging.</ProjectBullet>
              <ProjectBullet>Implemented user authentication and role-based access control.</ProjectBullet>
              <ProjectBullet>Used Socket.IO to enable real-time chat and notifications for users.</ProjectBullet>
              <ProjectBullet>Developed a moderation system to handle user-generated content and feedback.</ProjectBullet>
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
