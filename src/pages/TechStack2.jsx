// TechStack.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Complete tech stack data with proper structure
const techStackData = {
  DevOps: {
    image: "/logos/tech/dd.png",
    technologies: [
      { name: "Docker", imgPath: "/logos/tech/docker.png" },
      { name: "Kubernetes", imgPath: "/logos/tech/kub.png" },
      { name: "Git & GitHub", imgPath: "/logos/tech/git.png" },
      { name: "Linux", imgPath: "/logos/tech/l.png" }
    ]
  },
  Frontend: {
    image: "/logos/tech/f.png",
    technologies: [
      { name: "React", imgPath: "/logos/tech/react.png" },
      { name: "Tailwind CSS", imgPath: "/logos/tech/tcss.png" },
      { name: "JavaScript", imgPath: "/logos/tech/js.png" },
      { name: "HTML5", imgPath: "/logos/tech/html.png" },
      { name: "CSS3", imgPath: "/logos/tech/css.png" }
    ]
  },
  Backend: {
    image: "/logos/tech/b.png",
    technologies: [
      { name: "Node.js", imgPath: "/logos/tech/node.png" },
      { name: "Express.js", imgPath: "/logos/tech/exp.png" },
      { name: "REST API", imgPath: "/logos/tech/rest.png" },
      { name: "GraphQL", imgPath: "/logos/tech/graphql.png" }
    ]
  },
  Databases: {
    image: "/logos/tech/datab.png",
    technologies: [
      { name: "MongoDB", imgPath: "/logos/tech/mongo.png" },
      { name: "MySQL", imgPath: "/logos/tech/msql.png" },
    ]
  },
  "AI/ML": {
    image: "/logos/tech/ai.png",
    technologies: [
      { name: "Python", imgPath: "/logos/tech/py.png" },
      { name: "Python Libraries", imgPath: "/logos/tech/pyl.png" },
      { name: "NLP & LLM Integration", imgPath: "/logos/tech/llm.png" }
    ]
  },
  // Mobile: {
  //   image: "/logos/tech/m.png",
  //   technologies: [
  //     { name: "React Native", imgPath: "/logos/tech/rn.png" },
  //   ]
  // },
  // "Emerging Tech": {
  //   image: "/logos/tech/e.png",
  //   technologies: [
  //     { name: "Three.js (3D Web & Interactive Experiences)", imgPath: "/logos/tech/three.png" },
  //     { name: "IoT & Gesture Control Systems", imgPath: "/logos/tech/iot.png" },
  //   ]
  // },
  Languages: {
    image: "/logos/tech/lang.png",
    technologies: [
      { name: "JavaScript", imgPath: "/logos/tech/js.png" },
      { name: "Python", imgPath: "/logos/tech/py.png" },
      { name: "Java", imgPath: "/logos/tech/java.png" },
      { name: "C / C++", imgPath: "/logos/tech/c.png" }
    ]
  },
  "Tools & Version Control": {
    image: "/logos/tech/tool.png",
    technologies: [
      { name: "GitHub", imgPath: "/logos/tech/github.png" },
      { name: "VS Code", imgPath: "/logos/tech/vs.png" },
      { name: "Postman", imgPath: "/logos/tech/postman.png" },
      { name: "Figma", imgPath: "/logos/tech/figma.png" }
    ]
  },
  "Soft Skills": {
    image: "/logos/tech/soft.png",
    technologies: [
      { name: "Leadership", imgPath: "/logos/tech/leadership.png" },
      { name: "Communication", imgPath: "/logos/tech/communication.png" },
      { name: "Problem Solving", imgPath: "/logos/tech/problem-solving.png" },
      { name: "Time Management", imgPath: "/logos/tech/time-management.png" },
      { name: "Teamwork & Collaboration", imgPath: "/logos/tech/teamwork.png" },
      { name: "Adaptability", imgPath: "/logos/tech/adaptability.png" },
      { name: "Critical Thinking", imgPath: "/logos/tech/critical-thinking.png" }
    ]
  }
};


const categories = Object.entries(techStackData).map(([category, data]) => ({
  name: category,
  image: data.image,
  technologies: data.technologies
}));

// Simple fallback icon component
const FallbackIcon = ({ name, size = 40 }) => (
  <div 
    className="flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold"
    style={{ width: size, height: size }}
  >
    {name.charAt(0)}
  </div>
);

// Category Card for the grid view
const CategoryCard = ({ name, image, isSelected, onSelect }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <motion.div
      onClick={onSelect}
      layout
      whileHover={{ 
        scale: 1.05, 
        boxShadow: "0 8px 32px rgba(59, 130, 246, 0.3)", 
        borderColor: "#3b82f6" 
      }}
      className={`
        rounded-xl overflow-hidden text-white bg-gradient-to-br
        from-gray-900 via-gray-800 to-gray-900 
        shadow-lg border-2 border-gray-700 relative cursor-pointer
        transition-all duration-300 ease-in-out
        ${isSelected ? 'ring-4 ring-blue-500 ring-opacity-70' : ''}
      `}
      style={{ minHeight: "200px" }}
    >
      <div className="flex flex-col items-center justify-center h-full">
        {/* Category Image */}
        <div className="mb-0">
          {imageError ? (
            <FallbackIcon name={name} size={60} />
          ) : (
            <motion.img 
              src={image} 
              alt={name}
              className="h-60 w-60 object-cover rounded-lg"
              onError={handleImageError}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          )}
        </div>

        {/* Category Name */}
        {/* <motion.h3 
          className="text-xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          {name}
        </motion.h3> */}
      </div>

      {/* Hover glow effect */}
      {isSelected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/20 to-blue-500/10 pointer-events-none rounded-xl"
        />
      )}
    </motion.div>
  );
};

// Technologies View Component (shows technologies within a category)
const TechnologiesView = ({ category, technologies, onClose }) => {
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (techName) => {
    setImageErrors(prev => ({ ...prev, [techName]: true }));
  };

  const getFallbackIcon = (techName) => {
    return <FallbackIcon name={techName} size={80} />;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", damping: 25 }}
        className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 max-w-4xl w-full border-2 border-gray-700 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-8">
          <motion.h2 
            className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            {category} Technologies
          </motion.h2>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl font-bold p-2 rounded-full hover:bg-gray-700 transition-colors"
          >
            ×
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 40px rgba(59, 130, 246, 0.3)"
              }}
              className="bg-gray-800 bg-opacity-50 rounded-xl p-6 flex flex-col items-center text-center backdrop-blur-sm border border-gray-700 hover:border-blue-500 transition-all duration-300"
            >
              {/* Large Technology Image */}
              <div className="mb-4">
                {imageErrors[tech.name] ? (
                  getFallbackIcon(tech.name)
                ) : (
                  <motion.img 
                    src={tech.imgPath} 
                    alt={tech.name}
                    className="h-24 w-24 object-cover rounded-xl mb-4"
                    onError={() => handleImageError(tech.name)}
                    loading="lazy"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                )}
              </div>

              {/* Technology Name */}
              <motion.h3 
                className="text-xl font-semibold text-white mb-2"
                whileHover={{ scale: 1.05 }}
              >
                {tech.name}
              </motion.h3>

              {/* Technology Description */}
              {/* <motion.p 
                className="text-gray-400 text-sm mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                {getTechDescription(tech.name)}
              </motion.p> */}

              {/* Skill level indicator */}
              {/* <motion.div 
                className="w-full bg-gray-700 rounded-full h-2 mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                  style={{ width: `${getProficiencyPercentage(tech.name)}%` }}
                ></div>
              </motion.div>
              <motion.span 
                className="text-xs text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.4 }}
              >
                {getProficiencyLevel(tech.name)} • {getProficiencyPercentage(tech.name)}%
              </motion.span> */}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-8"
        >
          <p className="text-gray-400 text-sm">
            Click outside or press × to close
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Helper functions for tech descriptions and proficiency
const getTechDescription = (techName) => {
  const descriptions = {
    "Docker": "Containerization platform for building, shipping, and running applications",
    "Kubernetes": "Container orchestration system for automating deployment and scaling",
    "Git & GitHub": "Version control and collaborative development platform",
    "React": "JavaScript library for building user interfaces",
    "Vue.js": "Progressive JavaScript framework for building UIs",
    "TypeScript": "Typed JavaScript for better developer experience",
    "Node.js": "JavaScript runtime for server-side development",
    "Python": "Versatile programming language for web, data, and AI",
    "PostgreSQL": "Powerful open-source relational database",
    "TensorFlow": "Machine learning framework for neural networks",
    "PyTorch": "Deep learning framework with dynamic computation graphs",
    "OpenCV": "Computer vision and image processing library",
    "AWS": "Amazon Web Services cloud computing platform",
    "Azure": "Microsoft's cloud computing services",
    "Google Cloud": "Google's suite of cloud computing services",
    "React Native": "Framework for building native mobile apps with React",
    "Flutter": "UI toolkit for natively compiled mobile apps",
    "iOS": "Apple's mobile operating system development",
    "MongoDB": "NoSQL document database for modern applications",
    "MySQL": "Popular open-source relational database",
    "Arduino": "Open-source electronics platform",
    "Raspberry Pi": "Small single-board computer for IoT projects",
    "Blockchain": "Distributed ledger technology for secure transactions",
    "Web3": "Decentralized web technologies and applications",
    "JavaScript": "Versatile programming language for web development"
  };
  return descriptions[techName] || "Advanced technology for modern development";
};

const getProficiencyLevel = (techName) => {
  const levels = {
    "Docker": "Expert",
    "Kubernetes": "Advanced",
    "Git & GitHub": "Expert",
    "React": "Expert",
    "Vue.js": "Advanced",
    "TypeScript": "Expert",
    "Node.js": "Expert",
    "Python": "Expert",
    "PostgreSQL": "Advanced",
    "TensorFlow": "Intermediate",
    "PyTorch": "Intermediate",
    "OpenCV": "Intermediate",
    "AWS": "Advanced",
    "Azure": "Intermediate",
    "Google Cloud": "Intermediate",
    "React Native": "Advanced",
    "Flutter": "Intermediate",
    "iOS": "Beginner",
    "MongoDB": "Advanced",
    "MySQL": "Expert",
    "Arduino": "Intermediate",
    "Raspberry Pi": "Intermediate",
    "Blockchain": "Beginner",
    "Web3": "Beginner",
    "JavaScript": "Expert"
  };
  return levels[techName] || "Advanced";
};

const getProficiencyPercentage = (techName) => {
  const percentages = {
    "Expert": 90,
    "Advanced": 75,
    "Intermediate": 60,
    "Beginner": 40
  };
  const level = getProficiencyLevel(techName);
  return percentages[level] || 70;
};

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  const handleCloseDetail = () => {
    setSelectedCategory(null);
  };

  const selectedCategoryData = selectedCategory 
    ? { 
        name: selectedCategory, 
        technologies: techStackData[selectedCategory]?.technologies || [] 
      }
    : null;

  return (
    <div 
      id="skills"
      className="py-20 px-4 flex flex-col items-center w-full bg-black min-h-screen relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10"></div>
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
      
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 mb-4">
            Tech Stack
          </h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Click on any category to explore the technologies I master
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {categories.map((cat, idx) => (
            <CategoryCard
              key={`${cat.name}-${idx}`}
              name={cat.name}
              image={cat.image}
              isSelected={selectedCategory === cat.name}
              onSelect={() => handleCategorySelect(cat.name)}
            />
          ))}
        </motion.div>

      </div>

      {/* Technologies View Modal */}
      <AnimatePresence>
        {selectedCategoryData && (
          <TechnologiesView
            category={selectedCategoryData.name}
            technologies={selectedCategoryData.technologies}
            onClose={handleCloseDetail}
          />
        )}
      </AnimatePresence>
    </div>
  );
}