// SkillsSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const engineeringDomains = [
  {
    title: "Frontend Architecture",
    description: "Building performant, scalable UI systems",
    expertise: [
      {
        category: "Core Frameworks",
        items: [
          { name: "React", level: "production" },
          { name: "TypeScript", level: "production" },
          { name: "React Native", level: "production" }
        ]
      },
      {
        category: "Advanced UI/UX",
        items: [
          { name: "WebGL/Three.js", context: "Interactive 3D experiences" },
          { name: "Animation Systems", context: "GSAP, Framer Motion" },
          { name: "Design Systems", context: "Component architecture" }
        ]
      },
      {
        category: "Performance & Optimization",
        items: [
          { name: "Bundle Optimization" },
          { name: "Core Web Vitals" },
          { name: "PWA & Offline-first" }
        ]
      }
    ]
  },
  {
    title: "Backend & Distributed Systems",
    description: "Designing resilient, scalable services",
    expertise: [
      {
        category: "Service Development",
        items: [
          { name: "Node.js", level: "expert" },
          { name: "Java/Spring Boot", level: "advanced" },
          { name: "Python/FastAPI", context: "API development" }
        ]
      },
      {
        category: "API Architecture",
        items: [
          { name: "RESTful APIs", context: "10+ microservices" },
          { name: "GraphQL", context: "Federated schemas" },
          { name: "gRPC", context: "Internal services" }
        ]
      },
      {
        category: "System Patterns",
        items: [
          { name: "Microservices", context: "Production experience" },
          { name: "Event-Driven", context: "Kafka, RabbitMQ" },
          { name: "CQRS & Saga" }
        ]
      }
    ]
  },
  {
    title: "Infrastructure & DevOps",
    description: "Cloud-native deployment & observability",
    expertise: [
      {
        category: "Containerization & Orchestration",
        items: [
          { name: "Docker", level: "production" },
          { name: "Kubernetes", level: "advanced" },
          { name: "Service Mesh", context: "Istio, Linkerd" }
        ]
      },
      {
        category: "Cloud & IaC",
        items: [
          { name: "AWS/Azure/GCP", context: "Multi-cloud" },
          { name: "Terraform", context: "Infrastructure as Code" },
          { name: "CI/CD", context: "GitHub Actions, Jenkins" }
        ]
      },
      {
        category: "Observability",
        items: [
          { name: "Monitoring", context: "Prometheus, Grafana" },
          { name: "Logging", context: "ELK Stack" },
          { name: "Distributed Tracing" }
        ]
      }
    ]
  },
  {
    title: "Data Layer & Storage",
    description: "Designing scalable data architectures",
    expertise: [
      {
        category: "Databases",
        items: [
          { name: "PostgreSQL", context: "Primary RDBMS" },
          { name: "MongoDB", context: "Document store" },
          { name: "Redis", context: "Caching & sessions" }
        ]
      },
      {
        category: "Performance & Scale",
        items: [
          { name: "Database Sharding" },
          { name: "Replication & HA" },
          { name: "Query Optimization" }
        ]
      },
      {
        category: "Message Brokers",
        items: [
          { name: "Kafka", context: "Event streaming" },
          { name: "RabbitMQ", context: "Message queues" }
        ]
      }
    ]
  }
];

// Domain Card Component
const DomainCard = ({ domain, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-colors"
  >
    <h3 className="text-xl font-bold text-white mb-2">{domain.title}</h3>
    <p className="text-gray-400 text-sm mb-6">{domain.description}</p>
    
    <div className="space-y-6">
      {domain.expertise.map((group, idx) => (
        <div key={idx}>
          <h4 className="text-sm font-semibold text-blue-400 mb-3">
            {group.category}
          </h4>
          <div className="flex flex-wrap gap-2 mb-4">
            {group.items.map((item, itemIdx) => (
              <span
                key={itemIdx}
                className="px-3 py-1.5 bg-gray-800/50 rounded-lg text-sm text-gray-300 border border-gray-700 hover:border-blue-500/30 hover:bg-gray-800 transition-colors"
                title={item.context || ''}
              >
                {item.name}
                {item.level && (
                  <span className="ml-1.5 text-xs text-green-400">
                    • {item.level}
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

// Proficiency Indicator (Subtle)
const ProficiencyIndicator = ({ level }) => {
  const getColor = () => {
    switch(level) {
      case 'expert': return 'bg-green-500';
      case 'advanced': return 'bg-blue-500';
      case 'production': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };
  
  return (
    <div className="flex items-center gap-1.5">
      <div className="w-2 h-2 rounded-full bg-gray-700"></div>
      <div className={`w-2 h-2 rounded-full ${getColor()}`}></div>
      <div className={`w-2 h-2 rounded-full ${level === 'expert' ? getColor() : 'bg-gray-700'}`}></div>
    </div>
  );
};

export default function SkillsSection() {
  return (
    <section id="expertise" className="py-24 px-4 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-transparent to-purple-900/5"></div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Engineering Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto"
          >
            Full-spectrum systems engineering with production experience across the stack
          </motion.p>
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center items-center gap-6 mb-12 text-sm text-gray-400"
        >
          <div className="flex items-center gap-2">
            <ProficiencyIndicator level="expert" />
            <span>Deep expertise</span>
          </div>
          <div className="flex items-center gap-2">
            <ProficiencyIndicator level="advanced" />
            <span>Advanced production experience</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-px bg-gray-700"></div>
            <span>Concept mastery</span>
          </div>
        </motion.div>

        {/* Domain Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {engineeringDomains.map((domain, index) => (
            <DomainCard key={index} domain={domain} index={index} />
          ))}
        </div>

        {/* Languages Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 pt-8 border-t border-gray-800"
        >
          <div className="text-center">
            <h4 className="text-lg font-semibold text-gray-300 mb-4">
              Primary Development Languages
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              {['JavaScript/TypeScript', 'Java', 'Python', 'Go', 'Bash'].map((lang) => (
                <span
                  key={lang}
                  className="px-4 py-2 bg-gray-900/30 rounded-lg text-gray-300 border border-gray-700 hover:border-blue-500/50 transition-colors"
                >
                  {lang}
                </span>
              ))}
            </div>
            <p className="text-gray-500 text-sm mt-4">
              Additional experience with C/C++, Rust, and domain-specific languages
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}