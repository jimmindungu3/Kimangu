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
  FaGraduationCap,
  FaMicroscope,
} from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { MdGroups } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";

const About = () => {
  return (
    <div className="text-gray-600">
      {/* Our Story Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50/30 via-green-50/30 to-yellow-50/30">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="grid grid-cols-12 gap-12">
            {/* LEFT */}
            <div className="col-span-12 lg:col-span-8">
              <h2 className="mb-6 text-3xl font-bold text-gray-800">
                Our Story & Heritage
              </h2>

              <div className="space-y-4">
                <p className="text-lg text-gray-600">
                  Founded in 2016, Kimangu Day Secondary School began its
                  journey from humble beginnings, starting with just 33 students
                  and 4 dedicated teachers. What started as a small community
                  initiative has steadily grown to become one of the most
                  respected and high-performing academic institutions in Rongai
                  Sub County, Nakuru.
                </p>

                <p className="text-lg text-gray-600">
                  The school was established with a clear vision: to offer
                  quality, affordable education to the youth of Rongai and
                  neighboring communities, equipping them with knowledge,
                  skills, and values needed to become responsible citizens and
                  future leaders.
                </p>

                <p className="text-lg text-gray-600">
                  Over the years, Kimangu Day has consistently upheld strong
                  academic standards while emphasizing holistic development. We
                  believe education extends beyond classrooms to include
                  character formation, leadership skills, and social
                  responsibility.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                <div className="p-6 bg-white border border-primary-light rounded-lg shadow-sm">
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

                <div className="p-6 bg-white border border-secondary-light rounded-lg shadow-sm">
                  <h3 className="flex items-center mb-3 text-lg font-semibold text-secondary">
                    <FaBullseye className="mr-3 text-xl text-secondary-light" />
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

            {/* RIGHT */}
            <div className="relative col-span-12 lg:col-span-4">
              <img
                src="/src/assets/images/growth.svg"
                alt="Kimangu Day Secondary School"
                className="object-contain w-full h-full rounded-lg shadow-lg"
              />

              <div className="absolute bottom-0 left-0 max-w-xs p-6 -mb-8 -ml-4 bg-white border rounded-lg shadow-lg">
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-12 h-12 mr-4 text-white rounded-full bg-gradient-to-r from-secondary-light to-secondary">
                    <FaTrophy className="text-xl" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-widest text-secondary">
                      RECOGNIZED EXCELLENCE
                    </p>
                    <h3 className="text-lg font-bold text-gray-800">
                      Top Performing School
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">Since 2018</p>
                  </div>
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
                  src="/src/assets/images/principal.jpg"
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
                  src="/src/assets/images/bom-chair.jpg"
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
                  src="/src/assets/images/deputy-principal.jpg"
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
                  src="/src/assets/images/head-of-studies.jpg"
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
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <MdGroups className="mr-2 text-3xl" />
                <p className="text-4xl font-bold">580+</p>
              </div>
              <p className="text-lg">Students Enrolled</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <GiTeacher className="mr-2 text-3xl" />
                <p className="text-4xl font-bold">35+</p>
              </div>
              <p className="text-lg">Dedicated Staff</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <IoTimeOutline className="mr-2 text-3xl" />
                <p className="text-4xl font-bold">9</p>
              </div>
              <p className="text-lg">Years of Excellence</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <FaAward className="mr-2 text-3xl" />
                <p className="text-4xl font-bold">98%</p>
              </div>
              <p className="text-lg">Transition Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Programs Section */}
      <section className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl">
          <h2 className="mb-4 text-3xl font-bold text-center text-gray-800">
            Academic Programs
          </h2>
          <p className="max-w-3xl mx-auto mb-12 text-center text-gray-600">
            We offer a comprehensive curriculum designed to cater to diverse
            learning needs and prepare students for future challenges
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Lower Secondary */}
            <div className="p-6 rounded-lg bg-primary/10">
              <div className="flex items-center mb-4">
                <div className="p-3 mr-4 text-white rounded-lg bg-primary">
                  <FaBook className="text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Lower Secondary
                </h3>
              </div>
              <p className="mb-4 text-gray-600">Forms 1 & 2</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <FaCheckCircle className="mr-2 text-sm text-primary" />
                  Broad-based 14-subject curriculum
                </li>
                <li className="flex items-center text-sm">
                  <FaCheckCircle className="mr-2 text-sm text-primary" />
                  Career guidance sessions
                </li>
                <li className="flex items-center text-sm">
                  <FaCheckCircle className="mr-2 text-sm text-primary" />
                  Computer literacy training
                </li>
                <li className="flex items-center text-sm">
                  <FaCheckCircle className="mr-2 text-sm text-primary" />
                  Study skills workshops
                </li>
              </ul>
            </div>

            {/* Upper Secondary */}
            <div className="p-6 rounded-lg bg-secondary/10">
              <div className="flex items-center mb-4">
                <div className="p-3 mr-4 text-white rounded-lg bg-secondary">
                  <FaGraduationCap className="text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Upper Secondary
                </h3>
              </div>
              <p className="mb-4 text-gray-600">Forms 3 & 4</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <FaCheckCircle className="mr-2 text-sm text-secondary" />
                  Specialized subject combinations
                </li>
                <li className="flex items-center text-sm">
                  <FaCheckCircle className="mr-2 text-sm text-secondary" />
                  Intensive KCSE preparation
                </li>
                <li className="flex items-center text-sm">
                  <FaCheckCircle className="mr-2 text-sm text-secondary" />
                  Mock examinations & analysis
                </li>
                <li className="flex items-center text-sm">
                  <FaCheckCircle className="mr-2 text-sm text-secondary" />
                  University guidance
                </li>
              </ul>
            </div>

            {/* Co-curricular */}
            <div className="p-6 rounded-lg bg-tertiary/10">
              <div className="flex items-center mb-4">
                <div className="p-3 mr-4 text-white rounded-lg bg-tertiary">
                  <FaUserFriends className="text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Co-curricular
                </h3>
              </div>
              <p className="mb-4 text-gray-600">Beyond Classroom</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <FaCheckCircle className="mr-2 text-sm text-tertiary" />
                  Sports & athletics
                </li>
                <li className="flex items-center text-sm">
                  <FaCheckCircle className="mr-2 text-sm text-tertiary" />
                  Clubs & societies
                </li>
                <li className="flex items-center text-sm">
                  <FaCheckCircle className="mr-2 text-sm text-tertiary" />
                  Music & drama
                </li>
                <li className="flex items-center text-sm">
                  <FaCheckCircle className="mr-2 text-sm text-tertiary" />
                  Leadership training
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 bg-primary/10">
        <div className="px-4 mx-auto max-w-7xl">
          <h2 className="mb-4 text-3xl font-bold text-center text-gray-800">
            Our Facilities
          </h2>
          <p className="max-w-3xl mx-auto mb-12 text-center">
            We are equipped with modern facilities designed to enhance the
            learning experience and provide a conducive environment for academic
            and personal growth.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Academic Facilities */}
            <div className="p-6 bg-white rounded-lg shadow-md transition-transform duration-300 hover:transform hover:translate-y-[-4px]">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 mr-4 text-white rounded-full bg-gradient-to-r from-primary to-primary-light">
                  <FaChalkboardTeacher className="text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Academic Facilities
                </h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <FaCheckCircle className="mt-1 mr-3 text-primary" />
                  <span>Modern classrooms with digital projectors</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mt-1 mr-3 text-primary" />
                  <span>Fully equipped science laboratories</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mt-1 mr-3 text-primary" />
                  <span>Computer lab with high-speed internet</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mt-1 mr-3 text-primary" />
                  <span>Extensive library resources</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mt-1 mr-3 text-primary" />
                  <span>Interactive learning materials</span>
                </li>
              </ul>
            </div>

            {/* Sports Facilities */}
            <div className="p-6 bg-white rounded-lg shadow-md transition-transform duration-300 hover:transform hover:translate-y-[-4px]">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 mr-4 text-white rounded-full bg-gradient-to-r from-secondary to-secondary-light">
                  <FaRunning className="text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Sports & Recreation
                </h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <FaCheckCircle className="mt-1 mr-3 text-secondary" />
                  <span>Standard football pitch</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mt-1 mr-3 text-secondary" />
                  <span>Basketball and volleyball courts</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mt-1 mr-3 text-secondary" />
                  <span>Athletics track</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mt-1 mr-3 text-secondary" />
                  <span>Indoor games facilities</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mt-1 mr-3 text-secondary" />
                  <span>Sports equipment store</span>
                </li>
              </ul>
            </div>

            {/* Entertainment Facilities */}
            <div className="p-6 bg-white rounded-lg shadow-md transition-transform duration-300 hover:transform hover:translate-y-[-4px]">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 mr-4 text-white rounded-full bg-gradient-to-r from-tertiary to-tertiary-light">
                  <FaFilm className="text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Entertainment & Culture
                </h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <FaCheckCircle className="mt-1 mr-3 text-tertiary" />
                  <span>Spacious hall for events and screenings</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mt-1 mr-3 text-tertiary" />
                  <span>Outdoor stage for performances</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mt-1 mr-3 text-tertiary" />
                  <span>Recreational activities area</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mt-1 mr-3 text-tertiary" />
                  <span>Music and PA systems</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mt-1 mr-3 text-tertiary" />
                  <span>Cultural display areas</span>
                </li>
              </ul>
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
                  <div className="p-2 mt-1 mr-3 text-white rounded bg-primary">
                    <FaAward className="text-sm" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">
                      Ministry of Education
                    </h4>
                    <p className="text-sm text-gray-600">
                      Fully Registered Secondary School - Code: 456789
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-2 mt-1 mr-3 text-white rounded bg-secondary">
                    <FaCheckCircle className="text-sm" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">
                      KNEC Examination Center
                    </h4>
                    <p className="text-sm text-gray-600">
                      Approved National Examination Center - Code: 5678
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-2 mt-1 mr-3 text-white rounded bg-tertiary">
                    <FaShieldAlt className="text-sm" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">
                      Quality Assurance
                    </h4>
                    <p className="text-sm text-gray-600">
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
                  <div className="flex items-center justify-center w-10 h-10 mr-3 rounded bg-primary/10">
                    <FaRunning className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">
                      Kenya Secondary Schools Sports Association
                    </p>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-white rounded">
                  <div className="flex items-center justify-center w-10 h-10 mr-3 rounded bg-secondary/10">
                    <FaMicroscope className="text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">
                      Kenya Science & Engineering Fair
                    </p>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-white rounded">
                  <div className="flex items-center justify-center w-10 h-10 mr-3 rounded bg-tertiary/10">
                    <FaHandshake className="text-tertiary" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">
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