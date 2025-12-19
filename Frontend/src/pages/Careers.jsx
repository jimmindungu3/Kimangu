import React, { useState } from "react";
import {
  FaTrophy,
  FaUsers,
  FaSeedling,
  FaBalanceScale,
  FaStar,
  FaStarHalfAlt,
  FaCheck,
  FaBriefcase,
  FaCalendarAlt,
  FaUserGraduate,
  FaHandshake,
  FaLightbulb,
  FaChartLine,
  FaHeart,
  FaShieldAlt,
  FaChevronDown,
  FaChevronUp,
  FaPaperPlane,
  FaFileAlt,
  FaSearch,
  FaComments,
  FaRocket,
} from "react-icons/fa";
import { MdSchool, MdWork, MdGroups, MdClose } from "react-icons/md";

const Careers = () => {
  const [expandedJobId, setExpandedJobId] = useState(null);
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

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

  const benefits = [
    {
      icon: <FaTrophy className="text-2xl" />,
      title: "Competitive Salary",
      description: "Attractive remuneration package with regular reviews",
      color: "text-primary",
      bg: "bg-gradient-to-r from-primary-light/20 to-primary/10",
    },
    {
      icon: <FaSeedling className="text-2xl" />,
      title: "Professional Development",
      description: "Continuous training and career advancement opportunities",
      color: "text-tertiary",
      bg: "bg-gradient-to-r from-tertiary-light/20 to-tertiary/10",
    },
    {
      icon: <FaHeart className="text-2xl" />,
      title: "Health Benefits",
      description: "Comprehensive medical cover for you and your family",
      color: "text-secondary",
      bg: "bg-gradient-to-r from-secondary-light/20 to-secondary/10",
    },
    {
      icon: <FaCalendarAlt className="text-2xl" />,
      title: "Work-Life Balance",
      description: "Flexible working hours and generous leave policy",
      color: "text-secondary",
      bg: "bg-gradient-to-r from-secondary-light/20 to-secondary/10",
    },
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "Job Security",
      description: "Stable employment with permanent & pensionable terms",
      color: "text-primary",
      bg: "bg-gradient-to-r from-primary-light/20 to-primary/10",
    },
    {
      icon: <FaChartLine className="text-2xl" />,
      title: "Growth Opportunities",
      description: "Clear career progression pathways and mentorship",
      color: "text-tertiary",
      bg: "bg-gradient-to-r from-tertiary-light/20 to-tertiary/10",
    },
  ];

  const testimonials = [
    {
      name: "James Maina",
      role: "Science Teacher",
      tenure: "5 years",
      quote:
        "The collaborative environment and supportive leadership have made my teaching career incredibly fulfilling.",
      avatar: "JM",
      rating: 5,
    },
    {
      name: "Grace Wanjiku",
      role: "English Teacher",
      tenure: "3 years",
      quote:
        "Kimangu values both academic excellence and character development. Teachers are respected and empowered here.",
      avatar: "GW",
      rating: 4.5,
    },
    {
      name: "David Kimani",
      role: "Administrative Officer",
      tenure: "4 years",
      quote:
        "We're like a family here, working together towards educational excellence for our students.",
      avatar: "DK",
      rating: 5,
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
      // Handle form submission here
      console.log("Application submitted:", {
        ...formData,
        job: selectedJob.title,
      });
      alert("Application submitted successfully!");
      setShowApplicationModal(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        coverLetter: "",
        resume: null,
      });
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

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6">
            <div className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block mb-2 font-medium text-gray-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium text-gray-700">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Cover Letter *
                </label>
                <textarea
                  required
                  value={formData.coverLetter}
                  onChange={(e) =>
                    setFormData({ ...formData, coverLetter: e.target.value })
                  }
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Tell us why you're interested in this position..."
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Upload Resume/CV *
                </label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <FaPaperPlane className="w-8 h-8 mb-3 text-gray-400" />
                      <p className="mb-2 text-sm text-gray-500">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">
                        PDF, DOC, DOCX (Max. 5MB)
                      </p>
                    </div>
                    <input
                      type="file"
                      required
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                </div>
                {formData.resume && (
                  <p className="mt-2 text-sm text-gray-600">
                    Selected: {formData.resume.name}
                  </p>
                )}
              </div>

              <div className="pt-4 border-t">
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setShowApplicationModal(false)}
                    className="px-6 py-3 font-medium text-gray-700 transition-colors bg-gray-100 rounded-lg hover:bg-gray-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex items-center px-6 py-3 font-medium text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-primary to-primary-light hover:shadow-lg hover:scale-105"
                  >
                    <FaPaperPlane className="mr-2" />
                    Submit Application
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="text-gray-600">
      {/* Subtle Hero Section (100% similar to Tenders page) */}
      <section className="relative py-12 bg-gradient-to-br from-gray-50 to-gray-100 border-b border-gray-200">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="relative px-4 mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">
              Careers at <span className="text-primary">Kimangu</span>
            </h1>
            <p className="max-w-3xl mx-auto mb-6 text-lg text-gray-600 md:text-xl">
              Join our dedicated team shaping future leaders through excellence in education, innovation, and character development
            </p>
            <div className="inline-flex items-center px-6 py-3 space-x-4 text-gray-700 bg-white rounded-full shadow-sm">
              <div className="flex items-center">
                <FaBriefcase className="mr-2 text-primary" />
                <span className="font-medium">{jobOpenings.length} Current Openings</span>
              </div>
              <div className="w-px h-6 bg-gray-300"></div>
              <div className="flex items-center">
                <FaUsers className="mr-2 text-secondary" />
                <span className="font-medium">Join Our Team</span>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                            className="w-full py-3 font-medium text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-primary to-primary-light hover:shadow-lg hover:scale-105 flex items-center justify-center"
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

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-secondary-light/5 via-white to-tertiary-light/5">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
              Why <span className="text-primary">Choose</span> Kimangu?
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              We invest in our team with comprehensive benefits and a supportive
              work environment
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl ${benefit.bg} border border-gray-100 transition-all duration-300 hover:shadow-lg hover:border-transparent`}
              >
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 mb-4 rounded-xl ${benefit.color} bg-white shadow-sm`}
                >
                  {benefit.icon}
                </div>
                <h3 className={`mb-3 text-xl font-bold ${benefit.color}`}>
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
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

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-white to-tertiary/5">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
              Voices from Our <span className="text-primary">Team</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Hear from our staff about their experience working at Kimangu
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative p-6 bg-white rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="absolute -top-5 left-6">
                  <div className="flex items-center justify-center w-12 h-12 text-xl font-bold text-white rounded-full bg-gradient-to-r from-primary to-primary-light">
                    {testimonial.avatar}
                  </div>
                </div>

                <div className="pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-gray-800">
                        {testimonial.name}
                      </h4>
                      <p className="text-primary">{testimonial.role}</p>
                    </div>
                    <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary">
                      {testimonial.tenure}
                    </span>
                  </div>

                  <p className="mb-6 italic text-gray-600">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex text-secondary">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={
                          i < Math.floor(testimonial.rating)
                            ? "text-secondary"
                            : i < testimonial.rating
                            ? "text-secondary"
                            : "text-gray-300"
                        }
                        fill={i < testimonial.rating ? "currentColor" : "none"}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <ApplicationModal />
    </div>
  );
};

export default Careers;