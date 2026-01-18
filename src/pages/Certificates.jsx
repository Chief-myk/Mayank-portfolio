import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Award,
  Code2,
  Cloud,
  Cpu,
  Database,
  GitBranch,
  Shield,
  Zap,
  ExternalLink,
  ChevronRight,
  X,
  Download,
  Maximize2,
  Lock,
  CheckCircle
} from 'lucide-react';
import Titleheader from "../assets/Titleheader"


// Register plugins
gsap.registerPlugin(ScrollTrigger);

const Certificates = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const containerRef = useRef(null);
  const [selectedCert, setSelectedCert] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

const certifications = [
  {
    id: 7,
    title: "JPMorgan Chase – Software Engineering Virtual Experience",
    issuer: "JPMorgan Chase & Co. (Forage)",
    year: "2024",
    icon: Shield,
    skills: ["Backend Engineering", "Financial Systems", "Code Optimization"],
    level: "Professional",
    color: "from-slate-700 to-gray-900",
    description: "Hands-on experience building and optimizing real-world financial software used in enterprise-scale systems",
    credential: "#",
    fullCertificate: "/certificates/jp.png",
    verificationLink: "https://forage-verify.example.com/jpmorgan"
  },
  {
    id: 8,
    title: "AI Agents Intensive Program",
    issuer: "Google × Kaggle",
    year: "2024",
    icon: Cpu,
    skills: ["AI Agents", "LLM Integration", "Automation"],
    level: "Advanced",
    color: "from-cyan-500 to-blue-600",
    description: "Designed and deployed autonomous AI agents using modern LLM workflows and real-world use cases",
    credential: "#",
    fullCertificate: "/certificates/kaggle.png",
    verificationLink: "https://kaggle-verify.example.com/aiagents"
  },
  {
    id: 9,
    title: "NexHack National Hackathon – Finalist",
    issuer: "IIT Madras (IITM)",
    year: "2024",
    icon: GitBranch,
    skills: ["Problem Solving", "System Design", "Team Collaboration"],
    level: "Elite",
    color: "from-orange-500 to-red-600",
    description: "Finalist among 6,000+ participants nationwide, selected in the top 1% for solution impact and technical depth",
    credential: "#",
    fullCertificate: "/certificates/iitm.jpeg",
    verificationLink: "https://verify.example.com/nexhack"
  },
  {
    id: 10,
    title: "VytoBlitz Hackathon – Final Round",
    issuer: "ITS Engineering College",
    year: "2024",
    icon: Database,
    skills: ["Full-Stack Development", "API Design", "Rapid Prototyping"],
    level: "Advanced",
    color: "from-green-500 to-emerald-600",
    description: "Final-round qualifier selected from 400+ teams for building a production-grade, scalable solution under time constraints",
    credential: "#",
    fullCertificate: "/certificates/vyto.png",
    verificationLink: "https://verify.example.com/vytoblitz"
  },
  {
    id: 11,
    title: "Microsoft × HackWithIndia Hackathon – Final Round",
    issuer: "Microsoft",
    year: "2024",
    icon: Cloud,
    skills: ["Cloud Architecture", "Scalable Systems", "Production Readiness"],
    level: "Elite",
    color: "from-blue-500 to-sky-600",
    description: "Final-round participant hosted at Microsoft Office, recognized for building cloud-native and scalable solutions",
    credential: "#",
    fullCertificate: "/certificates/dev.png",
    verificationLink: "https://verify.example.com/microsoft-hwi"
  },
  {
    id: 12,
    title: "HackFest Delhi – Semi-Finalist",
    issuer: "Google Developer Group (GDG)",
    year: "2023",
    icon: Code2,
    skills: ["Innovation", "System Thinking", "Execution"],
    level: "Competitive",
    color: "from-purple-500 to-pink-600",
    description: "Semi-finalist selected from 6,000+ participants, ranked among the top teams for innovation and execution quality",
    credential: "#",
    fullCertificate: "/certificates/hack.png",
    verificationLink: "https://verify.example.com/gdg-hackfest"
  }
];


  const openCertificateModal = (cert) => {
    setSelectedCert(cert);
    setModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  };

  const closeCertificateModal = () => {
    setModalOpen(false);
    setTimeout(() => {
      setSelectedCert(null);
      document.body.style.overflow = 'auto';
    }, 300);
  };

  const downloadCertificate = () => {
    if (selectedCert?.fullCertificate) {
      const link = document.createElement('a');
      link.href = selectedCert.fullCertificate;
      link.download = `${selectedCert.title.replace(/\s+/g, '-').toLowerCase()}-certificate.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const verifyCertificate = () => {
    if (selectedCert?.verificationLink) {
      window.open(selectedCert.verificationLink, '_blank', 'noopener,noreferrer');
    }
  };

  useGSAP(() => {
    if (!sectionRef.current) return;

    // Animate cards on scroll
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      
      gsap.fromTo(card,
        {
          y: 60,
          opacity: 0,
          scale: 0.92
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          },
          delay: index * 0.15
        }
      );
    });

    // Animate section title
    gsap.fromTo(".section-title",
      {
        opacity: 0,
        y: -30
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%"
        }
      }
    );

    // Animate badge icons
    gsap.to(".badge-glow", {
      y: -5,
      scale: 1.05,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

  }, { scope: sectionRef });

  // Modal animation
  useGSAP(() => {
    if (modalOpen && selectedCert) {
      gsap.fromTo(".certificate-modal",
        {
          opacity: 0,
          scale: 0.9
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: "power2.out"
        }
      );

      gsap.fromTo(".certificate-backdrop",
        {
          opacity: 0
        },
        {
          opacity: 1,
          duration: 0.3
        }
      );

      gsap.fromTo(".certificate-image",
        {
          opacity: 0,
          y: 20
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.2
        }
      );
    }
  }, [modalOpen, selectedCert]);

  return (
    <>
      <section 
        ref={sectionRef}
        className="relative min-h-screen bg-black  py-20 px-4 overflow-hidden"
        id="certificates"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-900/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-900/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/10 to-transparent"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            {/* <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-cyan-400"></div>
              <Award className="w-6 h-6 text-cyan-400 badge-glow" />
              <div className="w-12 h-px bg-gradient-to-r from-cyan-400 to-transparent"></div>
            </div> */}

             <Titleheader title={"Industry-recognized certifications"} sub={"📩  Validated Expertise"} />
        
            {/* <div className="mt-8 inline-flex items-center gap-2 text-cyan-400/80 text-sm font-mono">
              <CheckCircle className="w-4 h-4" />
              <span>Verified credentials</span>
              <Lock className="w-4 h-4 ml-4" />
              <span>Click to view full certificates</span>
            </div> */}
          </div>

          {/* Certifications Grid */}
          <div 
            ref={containerRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <div
                  key={cert.id}
                  ref={el => cardsRef.current[index] = el}
                  onClick={() => openCertificateModal(cert)}
                  className="group relative bg-gradient-to-br from-gray-900/40 to-black/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1"
                >
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  
                  {/* Certificate Badge */}
                  <div className="absolute -top-3 -right-3">
                    <div className={`p-3 rounded-full bg-gradient-to-br ${cert.color} shadow-lg shadow-cyan-500/20`}>
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="mb-4">
                    <span className="text-xs font-mono text-gray-500 mb-2">
                      {cert.year} • {cert.level}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-100 transition-colors line-clamp-2">
                      {cert.title}
                    </h3>
                    <p className="text-cyan-400 text-sm font-medium mb-3">
                      {cert.issuer}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-5 line-clamp-2">
                    {cert.description}
                  </p>

                  {/* Skills Tags */}
                  {/* <div className="flex flex-wrap gap-2 mb-6">
                    {cert.skills.slice(0, 3).map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-mono bg-gray-900/50 text-cyan-300/90 rounded-lg border border-gray-700"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="px-3 py-1 text-xs font-mono bg-gray-900/50 text-gray-400 rounded-lg border border-gray-700">
                        +{cert.skills.length - 3} more
                      </span>
                    )}
                  </div> */}

                  {/* Action Indicator */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                    <div className="flex items-center gap-2 text-cyan-400/70 text-sm">
                      <Maximize2 className="w-4 h-4" />
                      <span>View Certificate</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              );
            })}
          </div>

          {/* Footer Note */}
          <div className="mt-16 text-center">
            <p className="text-gray-500 text-sm font-mono">
              All certifications are verifiable and include full credential details
            </p>
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="certificate-backdrop absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={closeCertificateModal}
          ></div>

          {/* Modal Content */}
          <div className="certificate-modal relative w-full max-w-6xl max-h-[90vh] bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-gray-800 shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-800">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${selectedCert.color}`}>
                  <selectedCert.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedCert.title}</h3>
                  <p className="text-gray-400">{selectedCert.issuer} • {selectedCert.year}</p>
                </div>
              </div>
              <button
                onClick={closeCertificateModal}
                className="p-2 rounded-full hover:bg-gray-800 transition-colors group"
              >
                <X className="w-6 h-6 text-gray-400 group-hover:text-white" />
              </button>
            </div>

            {/* Certificate Image Container */}
            <div className="relative p-8">
              <div className="relative rounded-xl overflow-hidden border-2 border-gray-800 bg-gray-900/50">
                {/* Certificate Image */}
                <div className="certificate-image overflow-y-auto max-h-[50vh]">
                  <img
                    src={selectedCert.fullCertificate}
                    alt={selectedCert.title}
                    className="w-full h-auto object-contain"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/800x600/0f172a/0ea5e9?text=${encodeURIComponent(selectedCert.title)}`;
                    }}
                  />
                </div>

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>

              {/* Certificate Details */}
              <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Details */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Certificate Details</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Issued By</p>
                      <p className="text-cyan-400 font-medium">{selectedCert.issuer}</p>
                    </div>
                    {/* <div>
                      <p className="text-sm text-gray-500 mb-1">Completion Date</p>
                      <p className="text-gray-300">{selectedCert.year}</p>
                    </div> */}
                    {/* <div>
                      <p className="text-sm text-gray-500 mb-1">Credential Level</p>
                      <p className="text-gray-300">{selectedCert.level}</p>
                    </div> */}
                    {/* <div>
                      <p className="text-sm text-gray-500 mb-1">Description</p>
                      <p className="text-gray-300">{selectedCert.description}</p>
                    </div> */}
                  </div>
                </div>

                {/* Right Column - Skills */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Validated Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-gray-800/50 text-cyan-300 rounded-lg border border-gray-700 hover:border-cyan-500 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            {/* <div className="p-6 border-t border-gray-800 bg-gray-900/50">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Lock className="w-4 h-4" />
                  <span>This credential is officially verified</span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={verifyCertificate}
                    className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Verify Online
                  </button>
                  <button
                    onClick={downloadCertificate}
                    className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-lg transition-all flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF
                  </button>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default Certificates;