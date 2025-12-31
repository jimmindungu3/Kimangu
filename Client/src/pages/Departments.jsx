import React, { useState } from "react";
import {
  FaGraduationCap,
  FaTrophy,
  FaBook,
  FaUsers,
  FaChevronDown,
  FaChevronUp,
  FaCheckCircle,
  FaUser,
  FaUniversity,
  FaLightbulb,
  FaBriefcase,
  FaHandsHelping,
  FaAtom,
  FaCalculator,
  FaLanguage,
  FaHistory,
  FaCogs,
  FaPalette,
  FaFutbol,
  FaMusic,
  FaBookOpen,
  FaMicroscope,
  FaCode,
  FaRobot,
  FaIndustry,
  FaHeartbeat,
  FaLandmark,
  FaBalanceScale,
  FaPaintBrush,
  FaChartLine,
  FaShieldAlt,
} from "react-icons/fa";
import { GiMechanicGarage, GiChefToque, GiFarmTractor } from "react-icons/gi";

const Departments = () => {
  const [activeTab, setActiveTab] = useState("stem");
  const [expandedDepartmentId, setExpandedDepartmentId] = useState(null);

  const stemDepartments = [
    {
      id: 1,
      title: "PURE SCIENCES",
      icon: <FaMicroscope className="text-2xl" />,
      head: {
        name: "Dr. James Mwangi",
        qualification: "PhD in Chemical Engineering",
        experience: "18 years teaching experience",
      },
      description:
        "Building scientific thinkers for medical, research, and environmental careers.",
      subjects: ["Physics", "Chemistry", "Biology", "Mathematics"],
      pathways: ["Medical Sciences", "Engineering", "Research & Development", "Environmental Science"],
      coreCompetencies: [
        "Scientific Inquiry & Investigation",
        "Critical Thinking & Problem Solving",
        "Laboratory Skills & Safety",
        "Data Analysis & Interpretation"
      ],
      lifeAfterSchool:
        "Prepares students for university programs in Medicine, Pharmacy, Engineering, Pure Sciences, and Research. Leads to careers as doctors, engineers, scientists, and researchers.",
    },
    {
      id: 2,
      title: "APPLIED SCIENCES",
      icon: <FaIndustry className="text-2xl" />,
      head: {
        name: "Prof. John Kamau",
        qualification: "PhD in Applied Physics",
        experience: "15 years teaching experience",
      },
      description:
        "Practical application of scientific principles to solve real-world problems.",
      subjects: ["Applied Physics", "Applied Chemistry", "Agriculture", "Computer Science"],
      pathways: ["Agricultural Technology", "Food Science", "Materials Science", "Computer Technology"],
      coreCompetencies: [
        "Practical Application of Concepts",
        "Technical Problem Solving",
        "Innovation & Design Thinking",
        "Project Management"
      ],
      lifeAfterSchool:
        "Leads to technical institutes, polytechnics, and university programs in Agriculture, Food Science, Materials Engineering, and Computer Technology. Careers include agricultural officers, food technologists, and IT specialists.",
    },
  ];

  const socialSciencesDepartments = [
    {
      id: 3,
      title: "HUMANITIES & LANGUAGES",
      icon: <FaLanguage className="text-2xl" />,
      head: {
        name: "Dr. Grace Wambui",
        qualification: "PhD in Linguistics",
        experience: "15 years teaching experience",
      },
      description:
        "Mastering communication and understanding human societies across cultures.",
      subjects: ["English", "Kiswahili", "French", "History & Government"],
      pathways: ["Journalism", "Law", "International Relations", "Education"],
      coreCompetencies: [
        "Effective Communication",
        "Critical Analysis",
        "Cultural Awareness",
        "Research & Documentation"
      ],
      lifeAfterSchool:
        "Prepares for careers in law, journalism, diplomacy, education, and public administration. University pathways include Law, International Relations, Education, and Communications.",
    },
    {
      id: 4,
      title: "ARTS & SPORTS",
      icon: <FaPalette className="text-2xl" />,
      head: {
        name: "Ms. Angela Mbeki",
        qualification: "MFA in Fine Arts",
        experience: "12 years teaching experience",
      },
      description:
        "Nurturing creativity, artistic expression, and athletic excellence.",
      subjects: ["Art & Design", "Music", "Physical Education", "Drama"],
      pathways: ["Creative Arts", "Sports Science", "Performing Arts", "Design"],
      coreCompetencies: [
        "Creative Expression",
        "Performance Skills",
        "Physical Fitness",
        "Team Collaboration"
      ],
      lifeAfterSchool:
        "Leads to careers in creative industries, sports management, entertainment, and design. Further studies in Fine Arts, Sports Science, Music, and Media Studies.",
    },
  ];

  const technicalDepartments = [
    {
      id: 5,
      title: "TECHNICAL STUDIES",
      icon: <GiMechanicGarage className="text-2xl" />,
      head: {
        name: "Mr. Victor Omondi",
        qualification: "MSc in Technical Education",
        experience: "10 years technical training",
      },
      description:
        "Hands-on technical skills for industrial and technological careers.",
      subjects: ["Engineering Drawing", "Workshop Technology", "Electricity", "Metalwork"],
      pathways: ["Mechanical Engineering", "Electrical Engineering", "Automotive Technology", "Construction"],
      coreCompetencies: [
        "Technical Drawing",
        "Workshop Safety",
        "Equipment Operation",
        "Repair & Maintenance"
      ],
      lifeAfterSchool:
        "Direct entry to technical institutes, TVET colleges, or apprenticeships. Careers as technicians, mechanics, electricians, and engineering assistants.",
    },
    {
      id: 6,
      title: "BUSINESS STUDIES",
      icon: <FaChartLine className="text-2xl" />,
      head: {
        name: "Ms. Jane Wanjiru",
        qualification: "MBA in Finance",
        experience: "10 years business education",
      },
      description:
        "Developing entrepreneurial minds and business management skills.",
      subjects: ["Business Studies", "Economics", "Accounting", "Entrepreneurship"],
      pathways: ["Business Management", "Finance", "Marketing", "Entrepreneurship"],
      coreCompetencies: [
        "Financial Literacy",
        "Business Planning",
        "Marketing Strategies",
        "Entrepreneurial Thinking"
      ],
      lifeAfterSchool:
        "Prepares for careers in banking, finance, marketing, and entrepreneurship. University pathways include Business Administration, Economics, and Commerce.",
    },
  ];

  const careerDepartments = [
    {
      id: 7,
      title: "TVET & CAREER PATHWAYS",
      icon: <FaBriefcase className="text-2xl" />,
      head: {
        name: "Mr. David Odhiambo",
        qualification: "PhD in Career Guidance",
        experience: "14 years career counseling",
      },
      description:
        "Guiding students toward vocational training and career readiness.",
      programs: [
        "Career Assessment & Guidance",
        "TVET Program Selection",
        "Apprenticeship Preparation",
        "Job Readiness Skills"
      ],
      pathways: ["Hospitality", "ICT", "Agriculture", "Beauty & Cosmetology"],
      coreCompetencies: [
        "Career Exploration",
        "Skill Assessment",
        "Workplace Readiness",
        "Vocational Training Preparation"
      ],
      lifeAfterSchool:
        "Direct placement into TVET institutions, polytechnics, or apprenticeships in various trades. Leads to skilled careers with certification.",
    },
    {
      id: 8,
      title: "GUIDANCE & COUNSELING",
      icon: <FaHandsHelping className="text-2xl" />,
      head: {
        name: "Dr. Faith Muthoni",
        qualification: "PhD in Counseling Psychology",
        experience: "15 years counseling experience",
      },
      description:
        "Supporting holistic development and personal growth for future success.",
      services: [
        "Academic Counseling",
        "Personal Development",
        "University Placement",
        "Psychosocial Support"
      ],
      coreCompetencies: [
        "Emotional Intelligence",
        "Decision Making",
        "Goal Setting",
        "Stress Management"
      ],
      lifeAfterSchool:
        "Provides essential life skills, emotional intelligence, and career planning tools that help students make informed decisions and navigate professional challenges effectively.",
    },
  ];

  const toggleDepartmentExpansion = (departmentId) => {
    setExpandedDepartmentId(
      expandedDepartmentId === departmentId ? null : departmentId
    );
  };

  const renderDepartmentCard = (dept, pathwayType) => {
    const isExpanded = expandedDepartmentId === dept.id;

    return (
      <div
        key={dept.id}
        className="overflow-hidden transition-all duration-300 bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-200"
      >
        {/* Department Header */}
        <div
          onClick={() => toggleDepartmentExpansion(dept.id)}
          className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className={`flex items-center justify-center w-12 h-12 rounded-lg text-white ${
                pathwayType === "stem" ? "bg-primary" :
                pathwayType === "social" ? "bg-secondary" :
                pathwayType === "technical" ? "bg-tertiary" : "bg-primary"
              }`}>
                {dept.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800">
                  {dept.title}
                </h3>
                <p className="text-gray-600">{dept.description}</p>
              </div>
            </div>
            <div>
              {isExpanded ? (
                <FaChevronUp className="text-primary" />
              ) : (
                <FaChevronDown className="text-primary" />
              )}
            </div>
          </div>
        </div>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="border-t border-gray-200">
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* Head of Department */}
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <h4 className="mb-3 text-lg font-bold text-gray-800 flex items-center">
                      <FaUser className="mr-3 text-primary" />
                      Head of Department
                    </h4>
                    <div className="space-y-2">
                      <div className="font-semibold text-gray-800">
                        {dept.head.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {dept.head.qualification}
                      </div>
                      <div className="text-sm text-gray-600">
                        {dept.head.experience}
                      </div>
                    </div>
                  </div>

                  {/* Subjects Offered */}
                  {dept.subjects && (
                    <div>
                      <h4 className="mb-3 text-lg font-bold text-gray-800 flex items-center">
                        <FaBook className="mr-3 text-primary" />
                        Subjects Offered
                      </h4>
                      <div className="space-y-2">
                        {dept.subjects.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center p-2 bg-gray-50 rounded border border-gray-200"
                          >
                            <FaCheckCircle className="flex-shrink-0 mr-3 text-tertiary" />
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Programs/Services for Career Departments */}
                  {(dept.programs || dept.services) && (
                    <div>
                      <h4 className="mb-3 text-lg font-bold text-gray-800 flex items-center">
                        <FaUsers className="mr-3 text-primary" />
                        {dept.programs ? "Programs" : "Services"}
                      </h4>
                      <div className="space-y-2">
                        {(dept.programs || dept.services)?.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center p-2 bg-gray-50 rounded border border-gray-200"
                          >
                            <FaCheckCircle className="flex-shrink-0 mr-3 text-tertiary" />
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Core Competencies */}
                  <div>
                    <h4 className="mb-3 text-lg font-bold text-gray-800 flex items-center">
                      <FaLightbulb className="mr-3 text-secondary" />
                      Core Competencies Developed
                    </h4>
                    <div className="space-y-2">
                      {dept.coreCompetencies?.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-2 bg-gray-50 rounded border border-gray-200"
                        >
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Career Pathways */}
                  {dept.pathways && (
                    <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                      <h4 className="mb-3 text-lg font-bold text-gray-800">
                        Career Pathways
                      </h4>
                      <div className="space-y-2">
                        {dept.pathways.map((pathway, idx) => (
                          <div key={idx} className="text-gray-700">
                            • {pathway}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Life After School - Full Width */}
              <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-blue-50 rounded-lg border border-primary/10">
                <h4 className="mb-3 text-lg font-bold text-gray-800 flex items-center">
                  <FaGraduationCap className="mr-3 text-primary" />
                  Life After Senior School
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {dept.lifeAfterSchool}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  const getCurrentDepartments = () => {
    switch (activeTab) {
      case "stem":
        return stemDepartments;
      case "social":
        return socialSciencesDepartments;
      case "technical":
        return technicalDepartments;
      case "career":
        return careerDepartments;
      default:
        return stemDepartments;
    }
  };

  const getPathwayType = () => {
    switch (activeTab) {
      case "stem":
        return "stem";
      case "social":
        return "social";
      case "technical":
        return "technical";
      case "career":
        return "career";
      default:
        return "stem";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white">
        <div className="px-4 py-16 mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-800">
              Departments
            </h1>
            <p className="max-w-2xl mx-auto mb-6 text-lg text-gray-600">
              Aligned with Kenya's Competency-Based Curriculum: STEM, Social Sciences, 
              Arts & Sports, and Career Pathways
            </p>
            <div className="inline-flex items-center px-4 py-2 text-sm font-medium text-white rounded-full bg-primary">
              Preparing Learners for University, TVET, and Workplace
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center my-12 gap-4">
            <button
              onClick={() => setActiveTab("stem")}
              className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center border ${
                activeTab === "stem"
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-gray-700 border-gray-300 hover:border-primary hover:text-primary"
              }`}
            >
              <FaMicroscope className="mr-2" />
              STEM Pathway
            </button>
            <button
              onClick={() => setActiveTab("social")}
              className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center border ${
                activeTab === "social"
                  ? "bg-secondary text-white border-secondary"
                  : "bg-white text-gray-700 border-gray-300 hover:border-secondary hover:text-secondary"
              }`}
            >
              <FaLanguage className="mr-2" />
              Social Sciences
            </button>
            <button
              onClick={() => setActiveTab("technical")}
              className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center border ${
                activeTab === "technical"
                  ? "bg-tertiary text-white border-tertiary"
                  : "bg-white text-gray-700 border-gray-300 hover:border-tertiary hover:text-tertiary"
              }`}
            >
              <GiMechanicGarage className="mr-2" />
              Technical & Business
            </button>
            <button
              onClick={() => setActiveTab("career")}
              className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center border ${
                activeTab === "career"
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-gray-700 border-gray-300 hover:border-primary hover:text-primary"
              }`}
            >
              <FaBriefcase className="mr-2" />
              Career & Guidance
            </button>
          </div>
        </div>
      </div>

      {/* Departments Section */}
      <div className="px-4 py-12 mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-800">
            {activeTab === "stem" && "STEM Pathway Departments"}
            {activeTab === "social" && "Social Sciences & Arts Departments"}
            {activeTab === "technical" && "Technical & Business Departments"}
            {activeTab === "career" && "Career Guidance Departments"}
          </h2>
          <p className="text-gray-600">
            Click on any department to explore learning areas, competencies, and career pathways
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {getCurrentDepartments().map((dept) =>
            renderDepartmentCard(dept, getPathwayType())
          )}
        </div>
      </div>

      {/* CBC Pathways Information */}
      <div className="px-4 py-12 mx-auto max-w-6xl">
        <div className="p-4">
          <div className="text-center mb-8">
            <h2 className="mb-4 text-3xl font-bold text-gray-800">
              CBC Senior School Pathways
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The Competency-Based Curriculum organizes Senior School into three main pathways
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border-l-4 border-primary bg-primary/5 rounded-r-lg">
              <h3 className="mb-3 text-xl font-bold text-gray-800">
                STEM Pathway
              </h3>
              <p className="text-gray-700">
                Science, Technology, Engineering & Mathematics. Prepares students for 
                university programs in medicine, engineering, and pure sciences.
              </p>
            </div>
            <div className="p-6 border-l-4 border-secondary bg-secondary/5 rounded-r-lg">
              <h3 className="mb-3 text-xl font-bold text-gray-800">
                Social Sciences Pathway
              </h3>
              <p className="text-gray-700">
                Languages, Humanities, Arts & Sports. Develops communicators, 
                artists, and social scientists for diverse careers.
              </p>
            </div>
            <div className="p-6 border-l-4 border-tertiary bg-tertiary/5 rounded-r-lg">
              <h3 className="mb-3 text-xl font-bold text-gray-800">
                Technical Pathway
              </h3>
              <p className="text-gray-700">
                Technical skills and Business studies. Leads to TVET institutions, 
                polytechnics, or direct entry into skilled trades.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Departments;