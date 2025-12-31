import React from "react";
import {
  FaTrophy,
  FaEye,
  FaBullseye,
  FaShieldAlt,
  FaBalanceScale,
  FaHandshake,
  FaLightbulb,
  FaChalkboardTeacher,
  FaRunning,
  FaFilm,
  FaCheckCircle,
  FaBook,
  FaUserFriends,
  FaAward,
  FaGreaterThan,
  FaGraduationCap,
  FaMicroscope,
} from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { MdGroups } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";

// Import images
import principalImage from "/src/assets/images/principal.jpg";
import bomChairImage from "/src/assets/images/bom-chair.jpg";
import deputyPrincipalImage from "/src/assets/images/deputy-principal.jpg";
import headOfStudiesImage from "/src/assets/images/head-of-studies.jpg";

const About = () => {
  return (
    <div className="overflow-x-hidden text-gray-600 text-md md:text-base">
      {/* Our Story Section */}
      <section className="py-8 px-4 bg-gradient-to-br from-blue-50/30 via-green-50/30 to-yellow-50/30">
        <div className="mx-auto max-w-7xl">
          <div className="">
            {/* LEFT */}
            <div className="">
              <h2 className="mb-6 text-3xl font-bold text-gray-800">
                Our Story & Heritage
              </h2>

              <div className="space-y-4">
                <p className="text-lgtext-gray-600">
                  Founded in 2016, Kimangu Day Secondary School began its
                  journey from humble beginnings, starting with just 33 students
                  and 4 dedicated teachers. What started as a small community
                  initiative has steadily grown to become one of the most
                  respected and high-performing academic institutions in Rongai
                  Sub County, Nakuru.
                </p>

                <p className="text-gray-600">
                  The school was established with a clear vision: to offer
                  quality, affordable education to the youth of Rongai and
                  neighboring communities, equipping them with knowledge,
                  skills, and values needed to become responsible citizens and
                  future leaders.
                </p>

                <p className="text-gray-600">
                  Over the years, Kimangu Day has consistently upheld strong
                  academic standards while emphasizing holistic development. We
                  believe education extends beyond classrooms to include
                  character formation, leadership skills, and social
                  responsibility.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                <div className="p-6 bg-white border rounded-lg shadow-sm border-primary-light">
                  <h3 className="flex items-center mb-3 text-lg font-semibold text-primary">
                    <FaEye className="mr-3 text-xl text-primary-light" />
                    Our Vision
                  </h3>
                  <p className="text-gray-700">
                    To be a premier center of academic excellence and moral
                    integrity in Kenya, producing innovative, ethical, and
                    globally competitive graduates who positively transform
                    their communities.
                  </p>
                </div>

                <div className="p-6 bg-white border rounded-lg shadow-sm border-tertiary-light">
                  <h3 className="flex items-center mb-3 text-lg font-semibold text-tertiary">
                    <FaBullseye className="mr-3 text-xl text-tertiary-light" />
                    Our Mission
                  </h3>
                  <p className="text-gray-700">
                    To provide holistic education that nurtures responsible,
                    disciplined, and innovative students through quality
                    teaching, fostering critical thinking, and promoting
                    character development for lifelong success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section id="leadership" className="py-16 bg-primary/10">
        <div className="px-4 mx-auto max-w-7xl">
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-800">
            Our Leadership Team
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Principal */}
            <div className="overflow-hidden bg-white rounded-lg shadow-md transition-transform duration-300 hover:transform hover:scale-[1.02] border">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={principalImage}
                  alt="Principal"
                  className="object-cover w-full h-full"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-lg font-bold text-white">
                    Mr. Maigwa Julius
                  </h3>
                  <p className="text-sm text-white/90">Founding Principal</p>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-3 text-gray-600">
                  Visionary leader with 30+ years in education, founding the
                  school and leading it to national recognition. Expert in
                  educational administration and community development.
                </p>
                <div className="pt-3 border-t border-gray-100">
                  <p className="text-xs font-medium text-primary">
                    Qualifications
                  </p>
                  <p className="text-xs text-gray-500">
                    M.Ed Educational Administration, B.Ed Sciences
                  </p>
                </div>
              </div>
            </div>

            {/* BOM Chair */}
            <div className="overflow-hidden bg-white rounded-lg shadow-md transition-transform duration-300 hover:transform hover:scale-[1.02] border">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={bomChairImage}
                  alt="BOM Chair"
                  className="object-cover w-full h-full"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-lg font-bold text-white">
                    Mr. Gathenya Paul
                  </h3>
                  <p className="text-sm text-white/90">BOM Chair</p>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-3 text-gray-600">
                  Strategic governance leader who has strengthened community
                  ties and secured key funding initiatives. Strong advocate for
                  quality education and student welfare.
                </p>
                <div className="pt-3 border-t border-gray-100">
                  <p className="text-xs font-medium text-primary">
                    Qualifications
                  </p>
                  <p className="text-xs text-gray-500">
                    MBA, CPA-K, Education Management
                  </p>
                </div>
              </div>
            </div>

            {/* Deputy Principal */}
            <div className="overflow-hidden bg-white rounded-lg shadow-md transition-transform duration-300 hover:transform hover:scale-[1.02] border">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={deputyPrincipalImage}
                  alt="Deputy Principal"
                  className="object-cover w-full h-full"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-lg font-bold text-white">
                    Ms. Deputy Principal
                  </h3>
                  <p className="text-sm text-white/90">Deputy Principal</p>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-3 text-gray-600">
                  Mathematics specialist with expertise in curriculum
                  development and strong disciplinary leadership. Focuses on
                  academic excellence and student development programs.
                </p>
                <div className="pt-3 border-t border-gray-100">
                  <p className="text-xs font-medium text-primary">
                    Qualifications
                  </p>
                  <p className="text-xs text-gray-500">
                    M.Ed Mathematics, B.Ed Mathematics
                  </p>
                </div>
              </div>
            </div>

            {/* Head of Studies */}
            <div className="overflow-hidden bg-white rounded-lg shadow-md transition-transform duration-300 hover:transform hover:scale-[1.02] border">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={headOfStudiesImage}
                  alt="Head of Studies"
                  className="object-cover w-full h-full"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-lg font-bold text-white">
                    Mr. Ombogo Isaac
                  </h3>
                  <p className="text-sm text-white/90">Head of Studies</p>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-3 text-gray-600">
                  Academic programs coordinator ensuring quality teaching and
                  continuous curriculum improvement. Expert in pedagogical
                  strategies and performance analysis.
                </p>
                <div className="pt-3 border-t border-gray-100">
                  <p className="text-xs font-medium text-primary">
                    Qualifications
                  </p>
                  <p className="text-xs text-gray-500">
                    M.Ed Curriculum Development, B.Ed Arts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl">
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-800">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
            <div className="p-4 text-center transition-all duration-300 rounded-lg hover:bg-primary/10">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 text-white rounded-full bg-gradient-to-r from-primary to-primary-light">
                <FaTrophy className="text-xl" />
              </div>
              <h4 className="mb-2 text-lg font-bold text-gray-800">
                Excellence
              </h4>
              <p className="text-sm text-gray-600">
                Striving for the highest standards in academic performance,
                character, and service
              </p>
            </div>
            <div className="p-4 text-center transition-all duration-300 rounded-lg hover:bg-primary/10">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 text-white rounded-full bg-gradient-to-r from-primary to-primary-light">
                <FaShieldAlt className="text-xl" />
              </div>
              <h4 className="mb-2 text-lg font-bold text-gray-800">
                Integrity
              </h4>
              <p className="text-sm text-gray-600">
                Honesty, transparency, and ethical conduct in all our dealings
              </p>
            </div>
            <div className="p-4 text-center transition-all duration-300 rounded-lg hover:bg-primary/10">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 text-white rounded-full bg-gradient-to-r from-primary to-primary-light">
                <FaBalanceScale className="text-xl" />
              </div>
              <h4 className="mb-2 text-lg font-bold text-gray-800">
                Discipline
              </h4>
              <p className="text-sm text-gray-600">
                Self-control, order, and respect for rules and authority
              </p>
            </div>
            <div className="p-4 text-center transition-all duration-300 rounded-lg hover:bg-primary/10">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 text-white rounded-full bg-gradient-to-r from-primary to-primary-light">
                <FaHandshake className="text-xl" />
              </div>
              <h4 className="mb-2 text-lg font-bold text-gray-800">
                Responsibility
              </h4>
              <p className="text-sm text-gray-600">
                Owning our actions, decisions, and their consequences
              </p>
            </div>
            <div className="p-4 text-center transition-all duration-300 rounded-lg hover:bg-primary/10">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 text-white rounded-full bg-gradient-to-r from-primary to-primary-light">
                <FaLightbulb className="text-xl" />
              </div>
              <h4 className="mb-2 text-lg font-bold text-gray-800">
                Innovation
              </h4>
              <p className="text-sm text-gray-600">
                Embracing creativity, adaptability, and continuous improvement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section>
        <div className="px-4 py-12 mx-auto mb-12 text-white max-w-7xl bg-gradient-to-r from-primary to-primary-light">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            <div className="text-center">
              <div className="flex flex-col items-center justify-center mb-2 sm:flex-row">
                <MdGroups className="mb-2 text-3xl sm:mr-2 sm:mb-0" />
                <p className="text-3xl font-bold sm:text-4xl">500+</p>
              </div>
              <p className="text-base sm:text-lg">Student Enrollment</p>
            </div>
            <div className="text-center">
              <div className="flex flex-col items-center justify-center mb-2 sm:flex-row">
                <GiTeacher className="mb-2 text-3xl sm:mr-2 sm:mb-0" />
                <p className="text-3xl font-bold sm:text-4xl">25+</p>
              </div>
              <p className="text-base sm:text-lg">Dedicated Staff</p>
            </div>
            <div className="text-center">
              <div className="flex flex-col items-center justify-center mb-2 sm:flex-row">
                <IoTimeOutline className="mb-2 text-3xl sm:mr-2 sm:mb-0" />
                <p className="text-3xl font-bold sm:text-4xl">10+</p>
              </div>
              <p className="text-base sm:text-lg">Years of Excellence</p>
            </div>
            <div className="text-center">
              <div className="flex flex-col items-center justify-center mb-2 sm:flex-row">
                <FaGreaterThan className="mb-2 text-3xl sm:mr-2 sm:mb-0" />
                <p className="text-3xl font-bold sm:text-4xl"> 50%</p>
              </div>
              <p className="text-base sm:text-lg">Transition Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Programs Section */}
      <section className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl">
          <h2 className="mb-4 text-3xl font-bold text-center text-gray-800">
            CBC-Aligned Academic Programs
          </h2>
          <p className="max-w-3xl mx-auto mb-12 text-center text-gray-600">
            Following the Competency-Based Curriculum framework, we offer
            specialized pathways that equip students with practical skills,
            knowledge, and values for higher education and the world of work.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {/* STEM Pathway */}
            <div className="p-6 rounded-lg bg-primary/10">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 p-3 mr-4 text-white rounded-lg bg-primary">
                  <FaMicroscope className="text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  STEM Pathway
                </h3>
              </div>
              <p className="mb-4 text-gray-600">
                Science, Technology, Engineering & Mathematics
              </p>
              <ul className="space-y-2">
                <li className="flex items-start text-sm">
                  <FaCheckCircle className="flex-shrink-0 mt-1 mr-2 text-sm text-primary" />
                  <span>Pure Sciences (Physics, Chemistry, Biology)</span>
                </li>
                <li className="flex items-start text-sm">
                  <FaCheckCircle className="flex-shrink-0 mt-1 mr-2 text-sm text-primary" />
                  <span>Technical & Engineering Sciences</span>
                </li>
                <li className="flex items-start text-sm">
                  <FaCheckCircle className="flex-shrink-0 mt-1 mr-2 text-sm text-primary" />
                  <span>Computer Studies & ICT Integration</span>
                </li>
                <li className="flex items-start text-sm">
                  <FaCheckCircle className="flex-shrink-0 mt-1 mr-2 text-sm text-primary" />
                  <span>Applied Mathematics & Statistics</span>
                </li>
                <li className="flex items-start text-sm">
                  <FaCheckCircle className="flex-shrink-0 mt-1 mr-2 text-sm text-primary" />
                  <span>Project-Based Learning & Research</span>
                </li>
              </ul>
            </div>

            {/* Humanities & Social Sciences Pathway */}
            <div className="p-6 rounded-lg bg-secondary/10">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 p-3 mr-4 text-white rounded-lg bg-secondary">
                  <FaBook className="text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Humanities & Social Sciences
                </h3>
              </div>
              <p className="mb-4 text-gray-600">
                Languages, Arts & Social Studies
              </p>
              <ul className="space-y-2">
                <li className="flex items-start text-sm">
                  <FaCheckCircle className="flex-shrink-0 mt-1 mr-2 text-sm text-secondary" />
                  <span>Languages (English, Kiswahili, Foreign)</span>
                </li>
                <li className="flex items-start text-sm">
                  <FaCheckCircle className="flex-shrink-0 mt-1 mr-2 text-sm text-secondary" />
                  <span>History & Government</span>
                </li>
                <li className="flex items-start text-sm">
                  <FaCheckCircle className="flex-shrink-0 mt-1 mr-2 text-sm text-secondary" />
                  <span>Geography & Environmental Studies</span>
                </li>
                <li className="flex items-start text-sm">
                  <FaCheckCircle className="flex-shrink-0 mt-1 mr-2 text-sm text-secondary" />
                  <span>Business Studies & Economics</span>
                </li>
                <li className="flex items-start text-sm">
                  <FaCheckCircle className="flex-shrink-0 mt-1 mr-2 text-sm text-secondary" />
                  <span>Creative Arts & Performance</span>
                </li>
              </ul>
            </div>

            {/* Technical & Vocational Pathway */}
            <div className="p-6 rounded-lg bg-tertiary/10">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 p-3 mr-4 text-white rounded-lg bg-tertiary">
                  <FaUserFriends className="text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Technical & Vocational (TVET)
                </h3>
              </div>
              <p className="mb-4 text-gray-600">
                Skills-Based & Career-Oriented
              </p>
              <ul className="space-y-2">
                <li className="flex items-start text-sm">
                  <FaCheckCircle className="flex-shrink-0 mt-1 mr-2 text-sm text-tertiary" />
                  <span>Agriculture & Environmental Technology</span>
                </li>
                <li className="flex items-start text-sm">
                  <FaCheckCircle className="flex-shrink-0 mt-1 mr-2 text-sm text-tertiary" />
                  <span>Home Science & Hospitality</span>
                </li>
                <li className="flex items-start text-sm">
                  <FaCheckCircle className="flex-shrink-0 mt-1 mr-2 text-sm text-tertiary" />
                  <span>Entrepreneurship & Business Skills</span>
                </li>
                <li className="flex items-start text-sm">
                  <FaCheckCircle className="flex-shrink-0 mt-1 mr-2 text-sm text-tertiary" />
                  <span>ICT & Digital Skills</span>
                </li>
                <li className="flex items-start text-sm">
                  <FaCheckCircle className="flex-shrink-0 mt-1 mr-2 text-sm text-tertiary" />
                  <span>Industrial Arts & Technical Drawing</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CBC Core Competencies */}
          <div className="p-6 mt-12 rounded-lg bg-gradient-to-r from-blue-50 to-green-50">
            <h3 className="mb-6 text-2xl font-bold text-center text-gray-800">
              CBC Core Competencies Development
            </h3>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="p-4 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-3 text-blue-600 bg-blue-100 rounded-full">
                  <FaLightbulb className="text-lg" />
                </div>
                <h4 className="font-semibold text-gray-800">Communication</h4>
              </div>
              <div className="p-4 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-3 text-green-600 bg-green-100 rounded-full">
                  <FaHandshake className="text-lg" />
                </div>
                <h4 className="font-semibold text-gray-800">Collaboration</h4>
              </div>
              <div className="p-4 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-3 text-purple-600 bg-purple-100 rounded-full">
                  <FaBalanceScale className="text-lg" />
                </div>
                <h4 className="font-semibold text-gray-800">
                  Critical Thinking
                </h4>
              </div>
              <div className="p-4 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-3 text-red-600 bg-red-100 rounded-full">
                  <FaRunning className="text-lg" />
                </div>
                <h4 className="font-semibold text-gray-800">Creativity</h4>
              </div>
            </div>
            <p className="mt-6 text-center text-gray-600">
              All pathways integrate CBC's 7 core competencies: Communication,
              Collaboration, Critical Thinking, Creativity, Citizenship, Digital
              Literacy, and Learning to Learn.
            </p>
          </div>
        </div>
      </section>

{/* Facilities Section - CBC Aligned */}
<section className="py-16 bg-primary/10">
  <div className="px-4 mx-auto max-w-7xl">
    <h2 className="mb-4 text-3xl font-bold text-center text-gray-800">
      CBC-Aligned Learning Facilities
    </h2>
    <p className="max-w-3xl mx-auto mb-12 text-center text-gray-600">
      Our facilities are designed to support CBC's competency-based approach, providing hands-on learning experiences, digital integration, and spaces that foster creativity, collaboration, and practical skill development.
    </p>

    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {/* STEM & Technical Facilities */}
      <div className="p-6 bg-white rounded-lg shadow-md transition-transform duration-300 hover:transform hover:translate-y-[-4px]">
        <div className="flex items-center mb-6">
          <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 text-white rounded-full bg-gradient-to-r from-primary to-primary-light">
            <FaMicroscope className="text-xl" />
          </div>
          <h3 className="text-xl font-bold text-gray-800">
            STEM & Technical Facilities
          </h3>
        </div>
        <ul className="space-y-3 text-gray-600">
          <li className="flex items-start">
            <FaCheckCircle className="flex-shrink-0 mt-1 mr-3 text-primary" />
            <span>Integrated Science Laboratories (Physics, Chemistry, Biology)</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="flex-shrink-0 mt-1 mr-3 text-primary" />
            <span>Digital STEM Lab with Robotics & Coding Equipment</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="flex-shrink-0 mt-1 mr-3 text-primary" />
            <span>Computer Labs with Programming Software</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="flex-shrink-0 mt-1 mr-3 text-primary" />
            <span>Agriculture & Environmental Science Demonstration Farm</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="flex-shrink-0 mt-1 mr-3 text-primary" />
            <span>Technical Workshop for Engineering & Construction</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="flex-shrink-0 mt-1 mr-3 text-primary" />
            <span>Home Science & Hospitality Practical Kitchen</span>
          </li>
        </ul>
      </div>

      {/* Digital & Collaborative Learning */}
      <div className="p-6 bg-white rounded-lg shadow-md transition-transform duration-300 hover:transform hover:translate-y-[-4px]">
        <div className="flex items-center mb-6">
          <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 text-white rounded-full bg-gradient-to-r from-secondary to-secondary-light">
            <FaLightbulb className="text-xl" />
          </div>
          <h3 className="text-xl font-bold text-gray-800">
            Digital & Collaborative Spaces
          </h3>
        </div>
        <ul className="space-y-3 text-gray-600">
          <li className="flex items-start">
            <FaCheckCircle className="flex-shrink-0 mt-1 mr-3 text-secondary" />
            <span>Smart Classrooms with Interactive Whiteboards</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="flex-shrink-0 mt-1 mr-3 text-secondary" />
            <span>High-Speed WiFi Campus with Digital Learning Portal</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="flex-shrink-0 mt-1 mr-3 text-secondary" />
            <span>Collaborative Learning Hubs with Flexible Seating</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="flex-shrink-0 mt-1 mr-3 text-secondary" />
            <span>Digital Resource Center with E-Learning Materials</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="flex-shrink-0 mt-1 mr-3 text-secondary" />
            <span>Project-Based Learning Studios</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="flex-shrink-0 mt-1 mr-3 text-secondary" />
            <span>Career Guidance & University Counseling Center</span>
          </li>
        </ul>
      </div>

      {/* Creative & Wellness Facilities */}
      <div className="p-6 bg-white rounded-lg shadow-md transition-transform duration-300 hover:transform hover:translate-y-[-4px]">
        <div className="flex items-center mb-6">
          <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 text-white rounded-full bg-gradient-to-r from-tertiary to-tertiary-light">
            <FaUserFriends className="text-xl" />
          </div>
          <h3 className="text-xl font-bold text-gray-800">
            Creative & Wellness Facilities
          </h3>
        </div>
        <ul className="space-y-3 text-gray-600">
          <li className="flex items-start">
            <FaCheckCircle className="flex-shrink-0 mt-1 mr-3 text-tertiary" />
            <span>Multipurpose Hall for Performing Arts & Exhibitions</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="flex-shrink-0 mt-1 mr-3 text-tertiary" />
            <span>Music & Drama Studio with Recording Equipment</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="flex-shrink-0 mt-1 mr-3 text-tertiary" />
            <span>Sports Complex (Football, Basketball, Volleyball, Athletics)</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="flex-shrink-0 mt-1 mr-3 text-tertiary" />
            <span>Guidance & Counseling Department</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="flex-shrink-0 mt-1 mr-3 text-tertiary" />
            <span>Green Spaces for Environmental Education</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="flex-shrink-0 mt-1 mr-3 text-tertiary" />
            <span>Entrepreneurship & Business Skills Incubator</span>
          </li>
        </ul>
      </div>
    </div>

    {/* CBC Integration Note */}
    <div className="p-6 mt-12 bg-white rounded-lg shadow-sm">
      <div className="flex items-start">
        <div className="flex-shrink-0 p-2 mt-1 mr-4 text-white rounded-full bg-gradient-to-r from-green-500 to-blue-500">
          <FaBook className="text-sm" />
        </div>
        <div>
          <h4 className="mb-2 text-lg font-semibold text-gray-800">
            CBC Learning Environment Features
          </h4>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-2 h-2 mr-3 rounded-full bg-primary"></div>
              <span className="text-sm text-gray-600">Learner-centered classroom setups</span>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0 w-2 h-2 mr-3 rounded-full bg-secondary"></div>
              <span className="text-sm text-gray-600">Digital literacy integration in all subjects</span>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0 w-2 h-2 mr-3 rounded-full bg-tertiary"></div>
              <span className="text-sm text-gray-600">Practical assessment areas for CBC projects</span>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0 w-2 h-2 mr-3 rounded-full bg-green-500"></div>
              <span className="text-sm text-gray-600">Inclusive facilities for diverse learning needs</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Accreditation & Partnerships */}
      <section className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl">
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-800">
            Accreditation & Partnerships
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="p-6 rounded-lg bg-primary/10">
              <h3 className="mb-4 text-xl font-bold text-primary">
                Accreditations
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 mt-1 mr-3 text-white rounded bg-primary">
                    <FaAward className="text-sm" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-medium text-gray-800">
                      Ministry of Education
                    </h4>
                    <p className="text-sm text-gray-600 break-words">
                      Fully Registered Secondary School - Code: 456789
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 mt-1 mr-3 text-white rounded bg-secondary">
                    <FaCheckCircle className="text-sm" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-medium text-gray-800">
                      KNEC Examination Center
                    </h4>
                    <p className="text-sm text-gray-600 break-words">
                      Approved National Examination Center - Code: 5678
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 mt-1 mr-3 text-white rounded bg-tertiary">
                    <FaShieldAlt className="text-sm" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-medium text-gray-800">
                      Quality Assurance
                    </h4>
                    <p className="text-sm text-gray-600 break-words">
                      Compliant with All Education Standards & Regulations
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-primary/10">
              <h3 className="mb-4 text-xl font-bold text-primary">
                Key Partners
              </h3>
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-white rounded">
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 rounded bg-primary/10">
                    <FaRunning className="text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-gray-800 break-words">
                      Kenya Secondary Schools Sports Association
                    </p>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-white rounded">
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 rounded bg-secondary/10">
                    <FaMicroscope className="text-secondary" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-gray-800 break-words">
                      Kenya Science & Engineering Fair
                    </p>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-white rounded">
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 rounded bg-tertiary/10">
                    <FaHandshake className="text-tertiary" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-gray-800 break-words">
                      Community Development Partners
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
