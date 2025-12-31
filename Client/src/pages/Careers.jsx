import React, { useState } from "react";
import {
  FaUsers,
  FaCheck,
  FaBriefcase,
  FaChevronDown,
  FaChevronUp,
  FaPaperPlane,
  FaFileAlt,
  FaSearch,
  FaComments,
  FaRocket,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaSpinner,
} from "react-icons/fa";
import { MdSchool, MdWork, MdGroups, MdClose } from "react-icons/md";

const Careers = () => {
  const [expandedJobId, setExpandedJobId] = useState(null);
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({
    show: false,
    message: "",
    type: "",
  });

  const jobOpenings = [
    {
      id: 1,
      title: "Mathematics/Business Teacher",
      department: "Academic Department",
      type: "Full-time",
      experience: "2+ years",
      icon: <MdSchool className="text-3xl" />,
      gradient: "from-primary to-primary-light",
      requirements: [
        "Bachelor's degree in Education (Mathematics/Business)",
        "TSC registration mandatory",
        "2+ years teaching experience",
        "Strong classroom management skills",
      ],
      description:
        "Teach mathematics and business studies to form 1-4 students, develop lesson plans, and contribute to academic excellence.",
      responsibilities: [
        "Prepare and deliver engaging lessons in Mathematics and Business Studies",
        "Develop curriculum materials and assessment tools",
        "Monitor and evaluate student progress",
        "Participate in departmental meetings and professional development",
        "Provide academic guidance and support to students",
      ],
      qualifications: [
        "Bachelor's degree in Education with specialization in Mathematics and Business Studies",
        "Valid TSC registration",
        "Minimum 2 years teaching experience in a secondary school",
        "Strong knowledge of CBC curriculum",
        "Excellent communication and interpersonal skills",
      ],
      additionalInfo:
        "We are looking for a passionate educator who can inspire students and contribute to our academic excellence culture.",
    },
    {
      id: 2,
      title: "Administrative Assistant",
      department: "Administration",
      type: "Full-time",
      experience: "1+ years",
      icon: <MdWork className="text-3xl" />,
      gradient: "from-secondary to-secondary-light",
      requirements: [
        "Diploma in Business Administration",
        "Proficient in MS Office Suite",
        "Excellent communication skills",
        "Attention to detail",
      ],
      description:
        "Support administrative operations, manage records, and assist in daily school activities.",
      responsibilities: [
        "Manage front office operations and reception",
        "Handle correspondence and documentation",
        "Maintain student and staff records",
        "Assist in scheduling and calendar management",
        "Support event planning and coordination",
      ],
      qualifications: [
        "Diploma in Business Administration or related field",
        "Proficiency in Microsoft Office Suite",
        "Excellent organizational and multitasking skills",
        "Strong written and verbal communication",
        "Ability to maintain confidentiality",
      ],
      additionalInfo:
        "Ideal candidate should be organized, proactive, and able to work in a fast-paced educational environment.",
    },
    {
      id: 3,
      title: "School Counselor",
      department: "Student Welfare",
      type: "Full-time",
      experience: "3+ years",
      icon: <MdGroups className="text-3xl" />,
      gradient: "from-tertiary to-tertiary-light",
      requirements: [
        "Degree in Psychology/Counseling",
        "Experience working with teenagers",
        "Strong empathy skills",
        "Crisis intervention training",
      ],
      description:
        "Provide guidance to students on academic and personal matters, promoting mental health and wellbeing.",
      responsibilities: [
        "Provide individual and group counseling sessions",
        "Develop and implement student wellness programs",
        "Collaborate with teachers and parents on student support",
        "Conduct career guidance and academic advising",
        "Maintain confidential student counseling records",
      ],
      qualifications: [
        "Bachelor's degree in Psychology, Counseling, or related field",
        "Professional counseling certification",
        "Minimum 3 years experience working with adolescents",
        "Knowledge of child development and adolescent psychology",
        "Excellent listening and empathy skills",
      ],
      additionalInfo:
        "This role requires compassion, discretion, and a genuine interest in supporting student development.",
    },
  ];

  const applicationSteps = [
    {
      step: 1,
      title: "Apply Online",
      desc: "Submit your application with resume and cover letter",
      icon: <FaFileAlt className="text-2xl" />,
    },
    {
      step: 2,
      title: "Screening",
      desc: "Initial review by our HR team",
      icon: <FaSearch className="text-2xl" />,
    },
    {
      step: 3,
      title: "Interview",
      desc: "Meet with department heads and leadership",
      icon: <FaComments className="text-2xl" />,
    },
    {
      step: 4,
      title: "Onboarding",
      desc: "Welcome to the Kimangu family!",
      icon: <FaRocket className="text-2xl" />,
    },
  ];

  const toggleJobExpansion = (jobId) => {
    setExpandedJobId(expandedJobId === jobId ? null : jobId);
  };

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setShowApplicationModal(true);
  };

  const showNotification = (message, type) => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ show: false, message: "", type: "" });
    }, 5000);
  };

  const ApplicationModal = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      coverLetter: "",
      resume: null,
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);

      // Simulate API call
      setTimeout(() => {
        console.log("Application submitted:", {
          ...formData,
          job: selectedJob.title,
        });
        showNotification("✅ Application submitted successfully!", "success");
        setShowApplicationModal(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          coverLetter: "",
          resume: null,
        });
        setLoading(false);
      }, 1500);
    };

    const handleFileChange = (e) => {
      setFormData({ ...formData, resume: e.target.files[0] });
    };

    if (!showApplicationModal) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl">
          {/* Header */}
          <div className="sticky top-0 z-10 p-6 bg-gradient-to-r from-primary to-primary-light">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Apply for {selectedJob?.title}
                </h2>
                <p className="text-white/90">{selectedJob?.department}</p>
              </div>
              <button
                onClick={() => setShowApplicationModal(false)}
                className="p-2 text-white transition-colors rounded-full hover:bg-white/20"
              >
                <MdClose className="text-2xl" />
              </button>
            </div>
          </div>

          {/* Form - Updated to match ContactUs styling */}
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Full Name *
                </label>
                <div className="relative">
                  <div className="absolute transform -translate-y-1/2 left-3 top-1/2">
                    <FaUser className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 pl-10 border border-gray-200 rounded-lg focus:outline-none focus:border-primary form-input"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Email Address *
                </label>
                <div className="relative">
                  <div className="absolute transform -translate-y-1/2 left-3 top-1/2">
                    <FaEnvelope className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 pl-10 border border-gray-200 rounded-lg focus:outline-none focus:border-primary form-input"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Phone Number *
              </label>
              <div className="relative">
                <div className="absolute transform -translate-y-1/2 left-3 top-1/2">
                  <FaPhone className="text-gray-400" />
                </div>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 pl-10 border border-gray-200 rounded-lg focus:outline-none focus:border-primary form-input"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Cover Letter *
              </label>
              <textarea
                required
                value={formData.coverLetter}
                onChange={(e) =>
                  setFormData({ ...formData, coverLetter: e.target.value })
                }
                rows="4"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:border-primary form-input"
                placeholder="Tell us why you're interested in this position..."
              />
            </div>

<div>
  <label className="block mb-2 text-sm font-medium text-gray-700">
    Resume/CV + Other testimanials all in one PDF *
  </label>
  <div className="flex items-center justify-center w-full">
    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-colors duration-200">
      <div className="flex flex-col items-center justify-center w-full h-full p-4">
        {!formData.resume ? (
          // Default state - no file selected
          <>
            <FaPaperPlane className="w-8 h-8 mb-3 text-gray-400" />
            <p className="mb-2 text-sm text-gray-500">
              <span className="font-semibold">Click to upload</span>{" "}
              or drag and drop
            </p>
            <p className="text-xs text-gray-500">
              PDF, DOC, DOCX (Max. 8MB)
            </p>
          </>
        ) : (
          // File selected state
          <>
            <div className="flex items-center justify-center w-12 h-12 mb-3">
              <FaFileAlt className="w-6 h-6 text-red-700" />
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-gray-700 truncate max-w-[200px]">
                {formData.resume.name}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {/* FIXED: Proper file size calculation */}
                {formData.resume.size < 1024 * 1024 
                  ? `${(formData.resume.size / 1024).toFixed(1)} KB`
                  : `${(formData.resume.size / (1024 * 1024)).toFixed(2)} MB`
                }
              </p>
              <p className="text-xs text-primary mt-2 font-medium">
                Click to change file
              </p>
            </div>
          </>
        )}
        <input
          type="file"
          required
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
    </label>
  </div>
</div>

            <div className="pt-4 border-t">
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setShowApplicationModal(false)}
                  className="px-6 py-3 font-medium text-gray-700 transition-colors bg-gray-100 rounded-lg hover:bg-gray-200 focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center px-6 py-3 font-medium text-white transition-all duration-200 rounded-lg bg-gradient-to-r from-primary to-primary-light hover:shadow-lg focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <FaSpinner className="mr-2 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2" />
                      <span>Submit Application</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="text-gray-600">
      {/* Current Openings */}
      <section
        id="openings"
        className="py-16 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="px-4 mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
              Current <span className="text-primary">Openings</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Explore exciting career opportunities and join our mission to
              transform education
            </p>
          </div>

          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className="overflow-hidden transition-all duration-300 bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-100"
              >
                {/* Job Summary - Always Visible */}
                <div
                  onClick={() => toggleJobExpansion(job.id)}
                  className="p-6 cursor-pointer"
                  title="Click to expand"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-r ${job.gradient}`}
                      >
                        <div className="text-white">{job.icon}</div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">
                          {job.title}
                        </h3>
                        <p className="text-gray-600">{job.department}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="px-3 py-1 text-sm font-semibold rounded-full bg-primary/10 text-primary">
                        {job.type}
                      </span>
                      <span className="px-3 py-1 text-sm font-medium rounded-full bg-gray-100 text-gray-700">
                        {job.experience}
                      </span>
                      {expandedJobId === job.id ? (
                        <FaChevronUp className="text-gray-400" />
                      ) : (
                        <FaChevronDown className="text-gray-400" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Expanded Details - Shown when clicked */}
                {expandedJobId === job.id && (
                  <div className="p-6 border-t border-gray-100">
                    <div className="grid gap-8 md:grid-cols-3">
                      {/* Job Description */}
                      <div className="md:col-span-2">
                        <div className="mb-8">
                          <h4 className="mb-3 text-lg font-bold text-gray-800">
                            Job Description
                          </h4>
                          <p className="text-gray-600">{job.description}</p>
                        </div>

                        <div className="mb-8">
                          <h4 className="mb-3 text-lg font-bold text-gray-800">
                            Key Responsibilities
                          </h4>
                          <ul className="space-y-2">
                            {job.responsibilities.map((resp, idx) => (
                              <li key={idx} className="flex items-start">
                                <FaCheck className="flex-shrink-0 mt-1 mr-3 text-tertiary" />
                                <span className="text-gray-600">{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mb-8">
                          <h4 className="mb-3 text-lg font-bold text-gray-800">
                            Required Qualifications
                          </h4>
                          <ul className="space-y-2">
                            {job.qualifications.map((qual, idx) => (
                              <li key={idx} className="flex items-start">
                                <FaCheck className="flex-shrink-0 mt-1 mr-3 text-primary" />
                                <span className="text-gray-600">{qual}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {job.additionalInfo && (
                          <div>
                            <h4 className="mb-3 text-lg font-bold text-gray-800">
                              Additional Information
                            </h4>
                            <p className="text-gray-600">
                              {job.additionalInfo}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Quick Apply Sidebar */}
                      <div className="md:col-span-1">
                        <div className="p-6 rounded-xl bg-gradient-to-b from-primary/5 to-primary/10 border border-primary/20">
                          <h4 className="mb-4 text-lg font-bold text-gray-800">
                            Ready to Apply?
                          </h4>

                          <div className="mb-6">
                            <h5 className="mb-2 font-medium text-gray-700">
                              Requirements Summary:
                            </h5>
                            <ul className="space-y-2">
                              {job.requirements.map((req, idx) => (
                                <li key={idx} className="flex items-start">
                                  <FaCheck className="flex-shrink-0 mt-1 mr-2 text-sm text-tertiary" />
                                  <span className="text-sm text-gray-600">
                                    {req}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="mb-6">
                            <h5 className="mb-2 font-medium text-gray-700">
                              Position Details:
                            </h5>
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span className="text-gray-600">
                                  Department:
                                </span>
                                <span className="font-medium">
                                  {job.department}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">
                                  Employment Type:
                                </span>
                                <span className="font-medium">{job.type}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">
                                  Experience Required:
                                </span>
                                <span className="font-medium">
                                  {job.experience}
                                </span>
                              </div>
                            </div>
                          </div>

                          <button
                            onClick={() => handleApplyClick(job)}
                            className="w-full py-3 font-medium text-white transition-all duration-200 rounded-lg bg-gradient-to-r from-primary to-primary-light hover:shadow-lg hover:scale-105 flex items-center justify-center focus:ring-2 focus:ring-primary focus:ring-offset-2"
                          >
                            <FaPaperPlane className="mr-2" />
                            Apply Now
                          </button>

                          <p className="mt-4 text-sm text-center text-gray-500">
                            Application deadline: Open until filled
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
              Simple <span className="text-primary">Application</span> Process
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Join our team in just four easy steps
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-0 right-0 hidden h-1 transform -translate-y-1/2 bg-gradient-to-r from-primary via-secondary to-tertiary top-1/2 md:block"></div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              {applicationSteps.map((item) => (
                <div key={item.step} className="relative text-center">
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="flex items-center justify-center w-20 h-20 mb-4 text-2xl font-bold text-white rounded-full bg-gradient-to-r from-primary to-primary-light shadow-lg">
                      {item.icon}
                    </div>
                    <div className="absolute top-10 -z-10 w-1 h-16 bg-gradient-to-b from-primary/20 to-transparent md:hidden"></div>
                    <h3 className="mb-2 text-xl font-bold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <ApplicationModal />

      {/* Notification */}
      {notification.show && (
        <div
          className={`fixed top-4 right-4 z-50 max-w-sm p-4 rounded-lg shadow-lg transition-all duration-300 transform translate-x-0 ${
            notification.type === "success"
              ? "bg-tertiary text-white border-l-4 border-tertiary-dark"
              : "bg-red-500 text-white border-l-4 border-red-700"
          }`}
        >
          <div className="flex items-start justify-between">
            <div className="flex-1 mr-3">
              <p className="text-sm font-medium">{notification.message}</p>
            </div>
            <button
              onClick={() =>
                setNotification({ show: false, message: "", type: "" })
              }
              className="text-white hover:text-gray-200 focus:outline-none"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Careers;
