import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  FaGraduationCap,
  FaBook,
  FaUsers,
  FaChevronDown,
  FaChevronUp,
  FaCheckCircle,
  FaUser,
  FaLightbulb,
  FaBriefcase,
  FaHandsHelping,
  FaLanguage,
  FaPalette,
  FaMicroscope,
  FaIndustry,
  FaChartLine,
} from "react-icons/fa";
import { GiMechanicGarage } from "react-icons/gi";

// Icon mapping object
const iconComponents = {
  FaGraduationCap,
  FaBook,
  FaUsers,
  FaChevronDown,
  FaChevronUp,
  FaCheckCircle,
  FaUser,
  FaLightbulb,
  FaBriefcase,
  FaHandsHelping,
  FaLanguage,
  FaPalette,
  FaMicroscope,
  FaIndustry,
  FaChartLine,
  GiMechanicGarage,
};

const Departments = () => {
  const [activeTab, setActiveTab] = useState("stem");
  const [expandedDepartmentId, setExpandedDepartmentId] = useState(null);
  const [departmentsData, setDepartmentsData] = useState({
    stemDepartments: [],
    socialSciencesDepartments: [],
    technicalDepartments: [],
    careerDepartments: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/data/departmentsData.json");
        setDepartmentsData(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load departments data");
        setLoading(false);
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  const toggleDepartmentExpansion = (departmentId) => {
    setExpandedDepartmentId(
      expandedDepartmentId === departmentId ? null : departmentId,
    );
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl text-primary">Loading Departments...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="p-4 text-red-600 bg-red-100 rounded-lg">{error}</div>
      </div>
    );
  }

  const {
    stemDepartments,
    socialSciencesDepartments,
    technicalDepartments,
    careerDepartments,
  } = departmentsData;

  const renderDepartmentCard = (dept, pathwayType) => {
    const isExpanded = expandedDepartmentId === dept.id;
    const DeptIcon = iconComponents[dept.icon];

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
              <div
                className={`flex items-center justify-center w-12 h-12 rounded-lg text-white ${
                  pathwayType === "stem"
                    ? "bg-primary"
                    : pathwayType === "social"
                      ? "bg-secondary"
                      : pathwayType === "technical"
                        ? "bg-tertiary"
                        : "bg-primary"
                }`}
              >
                <DeptIcon className="text-2xl" />
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
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white">
        <div className="px-4 py-16 mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-800">
              Departments
            </h1>
            <p className="max-w-2xl mx-auto mb-6 text-lg text-gray-600">
              Aligned with Kenya's Competency-Based Curriculum: STEM, Social
              Sciences, Arts & Sports, and Career Pathways
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
            Click on any department to explore learning areas, competencies, and
            career pathways
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {getCurrentDepartments().map((dept) =>
            renderDepartmentCard(dept, getPathwayType()),
          )}
        </div>
      </div>
    </div>
  );
};

export default Departments;