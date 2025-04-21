import Image from "next/image";
import Link from "next/link";
import certificates from "@/data/certificates.json";

type Certificate = {
  title: string;
  image: string;
  file: string;
  issuer?: string;
  date?: string;
};

export default function CertificatesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-indigo-500">Certificates</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {(certificates as Certificate[]).map((cert, idx) => (
            <Link
              key={idx}
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="relative w-full h-52">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                  {cert.title}
                </h2>
                {cert.issuer && (
                  <p className="text-sm text-gray-500 dark:text-gray-400">{cert.issuer}</p>
                )}
                {cert.date && (
                  <p className="text-xs mt-1 text-gray-400">{cert.date}</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
