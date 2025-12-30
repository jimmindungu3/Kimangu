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
} from "react-icons/fa";

const Departments = () => {
  const [activeTab, setActiveTab] = useState("academics");
  const [expandedDepartmentId, setExpandedDepartmentId] = useState(null);

  const academicDepartments = [
    {
      id: 1,
      title: "SCIENCES DEPARTMENT",
      icon: <FaAtom className="text-2xl" />,
      head: {
        name: "Dr. James Mwangi",
        qualification: "PhD in Chemical Engineering",
        experience: "18 years teaching experience",
      },
      description:
        "Where scientific curiosity meets practical application to solve real-world problems.",
      subjects: ["Physics", "Chemistry", "Biology", "Mathematics"],
      lifeAfterSchool:
        "Prepares students for careers in medicine, engineering, research, and technology innovation through hands-on laboratory experience and critical thinking development.",
    },
    {
      id: 2,
      title: "MATHEMATICS & TECHNOLOGY",
      icon: <FaCalculator className="text-2xl" />,
      head: {
        name: "Prof. John Kamau",
        qualification: "PhD in Pure Mathematics",
        experience: "20 years teaching experience",
      },
      description:
        "Developing analytical minds and computational skills for the digital age.",
      subjects: [
        "Pure Mathematics",
        "Statistics",
        "Computer Science",
        "Data Analysis",
      ],
      lifeAfterSchool:
        "Equips students with problem-solving abilities, logical reasoning, and data analysis skills essential for careers in finance, technology, engineering, and data science.",
    },
    {
      id: 3,
      title: "LANGUAGES & HUMANITIES",
      icon: <FaLanguage className="text-2xl" />,
      head: {
        name: "Dr. Grace Wambui",
        qualification: "PhD in Linguistics",
        experience: "15 years teaching experience",
      },
      description:
        "Mastering communication and understanding human societies across cultures.",
      subjects: ["English", "Kiswahili", "French", "History & Government"],
      lifeAfterSchool:
        "Develops effective communicators, critical thinkers, and cultural ambassadors prepared for careers in law, journalism, diplomacy, education, and international relations.",
    },
    {
      id: 4,
      title: "CREATIVE & APPLIED ARTS",
      icon: <FaPalette className="text-2xl" />,
      head: {
        name: "Ms. Angela Mbeki",
        qualification: "MFA in Fine Arts",
        experience: "12 years teaching experience",
      },
      description:
        "Nurturing creativity, innovation, and practical skills for artistic expression.",
      subjects: ["Art & Design", "Music", "Drama", "Media Studies"],
      lifeAfterSchool:
        "Fosters creative thinking, design skills, and artistic expression valuable in advertising, media production, architecture, entertainment, and creative entrepreneurship.",
    },
  ];

  const extracurricularDepartments = [
    {
      id: 5,
      title: "SPORTS & ATHLETICS",
      icon: <FaFutbol className="text-2xl" />,
      head: {
        name: "Mr. Victor Omondi",
        qualification: "BEd in Physical Education",
        experience: "10 years coaching experience",
      },
      description:
        "Building champions in sports and developing character through physical excellence.",
      programs: [
        "Competitive Sports",
        "Fitness Training",
        "Sports Science",
        "Leadership",
      ],
      lifeAfterSchool:
        "Instills discipline, teamwork, resilience, and leadership skills essential for success in any professional field, with opportunities in sports management and fitness industries.",
    },
    {
      id: 6,
      title: "CLUBS & SOCIETIES",
      icon: <FaUsers className="text-2xl" />,
      head: {
        name: "Ms. Jane Wanjiru",
        qualification: "MEd in Educational Psychology",
        experience: "10 years coordination experience",
      },
      description:
        "Exploring passions and building communities through diverse interest groups.",
      programs: [
        "Debate Society",
        "Science Club",
        "Environmental Club",
        "ICT Club",
      ],
      lifeAfterSchool:
        "Develops specialized skills, networking abilities, and project management experience that translate directly to professional organizations and community leadership roles.",
    },
    {
      id: 7,
      title: "GUIDANCE & COUNSELING",
      icon: <FaHandsHelping className="text-2xl" />,
      head: {
        name: "Dr. Faith Muthoni",
        qualification: "PhD in Counseling Psychology",
        experience: "15 years counseling experience",
      },
      description:
        "Supporting holistic development and career readiness for future success.",
      services: [
        "Career Guidance",
        "Academic Counseling",
        "Personal Development",
        "University Placement",
      ],
      lifeAfterSchool:
        "Provides essential life skills, emotional intelligence, and career planning tools that help students make informed decisions and navigate professional challenges effectively.",
    },
    {
      id: 8,
      title: "PERFORMING ARTS",
      icon: <FaMusic className="text-2xl" />,
      head: {
        name: "Mr. David Odhiambo",
        qualification: "MFA in Performing Arts",
        experience: "14 years arts education experience",
      },
      description:
        "Cultivating artistic expression and creative confidence through performance.",
      programs: [
        "School Choir",
        "Drama Productions",
        "Dance Troupe",
        "Instrumental Band",
      ],
      lifeAfterSchool:
        "Enhances presentation skills, creative confidence, and collaborative abilities that are invaluable in business, education, entertainment, and public speaking careers.",
    },
  ];

  const toggleDepartmentExpansion = (departmentId) => {
    setExpandedDepartmentId(
      expandedDepartmentId === departmentId ? null : departmentId
    );
  };

  const renderDepartmentCard = (dept, isAcademic) => {
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
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary text-white">
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
                  <div className="p-4 bg-primary/5 rounded-lg">
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

                  {/* Subjects/Programs */}
                  <div>
                    <h4 className="mb-3 text-lg font-bold text-gray-800 flex items-center">
                      <FaBook className="mr-3 text-primary" />
                      {isAcademic
                        ? "Subjects Offered"
                        : "Programs & Activities"}
                    </h4>
                    <div className="space-y-2">
                      {(dept.subjects || dept.programs || dept.services)?.map(
                        (item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center p-2 bg-gray-50 rounded"
                          >
                            <FaCheckCircle className="flex-shrink-0 mr-3 text-tertiary" />
                            <span className="text-gray-700">{item}</span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Column - Life After School */}
                <div>
                  <div className="p-4 bg-gradient-to-r from-primary/5 to-blue-50 rounded-lg border border-primary/10">
                    <h4 className="mb-3 text-lg font-bold text-gray-800 flex items-center">
                      <FaLightbulb className="mr-3 text-secondary" />
                      Preparing for Life After School
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {dept.lifeAfterSchool}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-white to-secondary/10">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative px-4 py-16 mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-800">
              Academic Excellence at{" "}
              <span className="text-primary">Kimangu</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Where classroom learning meets real-world preparation
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center my-12">
            <div className="inline-flex p-1 bg-white rounded-lg shadow border border-gray-200">
              <button
                onClick={() => setActiveTab("academics")}
                className={`px-8 py-3 rounded-md font-medium transition-all flex items-center ${
                  activeTab === "academics"
                    ? "bg-primary text-white shadow-sm"
                    : "text-gray-600 hover:text-primary"
                }`}
              >
                <FaGraduationCap className="mr-2" />
                Academic Departments
              </button>
              <button
                onClick={() => setActiveTab("extracurricular")}
                className={`px-8 py-3 rounded-md font-medium transition-all flex items-center ${
                  activeTab === "extracurricular"
                    ? "bg-primary text-white shadow-sm"
                    : "text-gray-600 hover:text-primary"
                }`}
              >
                <FaUsers className="mr-2" />
                Co-Curricular Departments
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Departments Section */}
      <div className="px-4 py-12 mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-800">
            {activeTab === "academics"
              ? "Academic Departments"
              : "Co-Curricular Departments"}
          </h2>
          <p className="text-gray-600">
            Click on any department to explore details
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {activeTab === "academics"
            ? academicDepartments.map((dept) =>
                renderDepartmentCard(dept, true)
              )
            : extracurricularDepartments.map((dept) =>
                renderDepartmentCard(dept, false)
              )}
        </div>
      </div>

      {/* Stats Section */}
      <div className="px-4 py-12 mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-6 text-center bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="text-3xl font-bold text-primary">8</div>
            <div className="mt-2 font-medium text-gray-800">
              Total Departments
            </div>
            <div className="text-sm text-gray-600">Comprehensive Coverage</div>
          </div>
          <div className="p-6 text-center bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="text-3xl font-bold text-primary">50+</div>
            <div className="mt-2 font-medium text-gray-800">
              Expert Educators
            </div>
            <div className="text-sm text-gray-600">Advanced Qualifications</div>
          </div>
          <div className="p-6 text-center bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="text-3xl font-bold text-primary">100%</div>
            <div className="mt-2 font-medium text-gray-800">
              University Ready
            </div>
            <div className="text-sm text-gray-600">Career Preparation</div>
          </div>
          <div className="p-6 text-center bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="text-3xl font-bold text-primary">87%</div>
            <div className="mt-2 font-medium text-gray-800">Participation</div>
            <div className="text-sm text-gray-600">In Co-Curricular</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Departments;
