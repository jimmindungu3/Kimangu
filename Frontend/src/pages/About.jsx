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
  FaHome,
  FaChevronRight,
} from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { MdSchool, MdGroups } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";

const About = () => {
  return (
    <div className="text-gray-600">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[25vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(
      rgba(59, 130, 246, 0.2),
      rgba(30, 64, 175, 0.3)
    ),
    url('/src/assets/images/school-bus.png')`,
        }}
      >
        <div className="px-4 text-center text-gray-100">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            About Our School
          </h1>
          <p className="max-w-2xl mb-8 text-xl text-blue-100">
            Discover our story, values, and commitment to excellence in
            education
          </p>
          <nav className="text-sm">
            <ol className="flex items-center justify-center space-x-2">
              <li>
                <a href="/" className="hover:text-white/80 flex items-center">
                  <FaHome className="mr-1" />
                  Home
                </a>
              </li>
              <li>
                <FaChevronRight className="mx-2 text-white/50" />
              </li>
              <li className="font-medium text-white">About Us</li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="py-16">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="grid grid-cols-12 gap-12">
            {/* LEFT */}
            <div className="col-span-12 lg:col-span-8">
              <h2 className="mb-6 text-3xl font-bold text-gray-800">
                Our Story
              </h2>

              <div className="space-y-4">
                <p className="text-lg text-gray-600">
                  Founded in 2016, Kimangu Day Secondary School began its
                  journey from modest origins, starting with just 33 students
                  and 4 dedicated teachers. Since then, it has steadily grown to
                  become one of the most respected and high-performing academic
                  institutions in Rongai Sub County, Nakuru.
                </p>

                <p className="text-lg text-gray-600">
                  The school was established with a clear and compelling vision:
                  to offer quality education to the youth of Rongai and its
                  neighboring communities, equipping them with the knowledge,
                  skills, and values needed to become responsible citizens and
                  capable future leaders of our country.
                </p>

                <p className="text-lg text-gray-600">
                  Throughout the years, Kimangu Day has consistently upheld
                  strong academic standards, while placing equal emphasis on the
                  holistic development of each learner. We are deeply committed
                  to fostering character, encouraging leadership potential, and
                  nurturing the unique talents of our students.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                <div className="p-6 border border-blue-100 rounded-lg bg-blue-50">
                  <h3 className="flex items-center mb-3 text-lg font-semibold text-blue-800">
                    <FaEye className="mr-3 text-xl text-primary" />
                    Our Vision
                  </h3>
                  <p className="text-blue-600">
                    To be a center of academic excellence and moral integrity in
                    Kenya and beyond, producing well-rounded graduates who will
                    positively impact their communities.
                  </p>
                </div>

                <div className="p-6 border border-blue-100 rounded-lg bg-blue-50">
                  <h3 className="flex items-center mb-3 text-lg font-semibold text-blue-800">
                    <FaBullseye className="mr-3 text-xl text-primary" />
                    Our Mission
                  </h3>
                  <p className="text-blue-600">
                    To nurture responsible and disciplined students through
                    quality education, fostering critical thinking skills, and
                    promoting holistic development to prepare them for future
                    challenges.
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

              <div className="absolute bottom-0 left-0 max-w-xs p-6 -mb-8 -ml-4 bg-white rounded-lg shadow-lg border border-blue-100">
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-12 h-12 mr-4 text-white rounded-full bg-gradient-to-r from-primary to-blue-500">
                    <FaTrophy className="text-xl" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-widest text-primary">
                      RECOGNIZED EXCELLENCE
                    </p>
                    <h3 className="text-lg font-bold text-gray-800">
                      Top Performing School
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section id="leadership" className="py-16 bg-blue-50">
        <div className="px-4 mx-auto max-w-7xl">
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-800">
            Our Leadership Team
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Principal */}
            <div className="overflow-hidden bg-white rounded-lg shadow-md transition-transform duration-300 hover:transform hover:scale-[1.02] border border-blue-100">
              <img
                src="/src/assets/images/principal.jpg"
                alt="Principal"
                className="object-cover w-full h-64"
              />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-gray-800">
                  Mr. Maigwa Julius
                </h3>
                <p className="mb-3 text-sm font-medium text-primary">
                  Founding Principal
                </p>
                <p className="text-gray-600">
                  Visionary leader with 30+ years in education, founding the
                  school and leading it to national recognition.
                </p>
              </div>
            </div>

            {/* BOM Chair */}
            <div className="overflow-hidden bg-white rounded-lg shadow-md transition-transform duration-300 hover:transform hover:scale-[1.02] border border-blue-100">
              <img
                src="/src/assets/images/bom-chair.jpg"
                alt="BOM Chair"
                className="object-cover w-full h-64"
              />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-gray-800">
                  Mr. Gathenya Paul
                </h3>
                <p className="mb-3 text-sm font-medium text-primary">
                  BOM Chair
                </p>
                <p className="text-gray-600">
                  Strategic governance leader who has strengthened our community
                  ties and secured key funding initiatives.
                </p>
              </div>
            </div>

            {/* Deputy Principal */}
            <div className="overflow-hidden bg-white rounded-lg shadow-md transition-transform duration-300 hover:transform hover:scale-[1.02] border border-blue-100">
              <img
                src="/src/assets/images/deputy-principal.jpg"
                alt="Deputy Principal"
                className="object-cover w-full h-64"
              />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-gray-800">
                  Md. Deputy Principal
                </h3>
                <p className="mb-3 text-sm font-medium text-primary">
                  Deputy Principal
                </p>
                <p className="text-gray-600">
                  Mathematics specialist with expertise in curriculum
                  development and strong disciplinary leadership.
                </p>
              </div>
            </div>

            {/* Head of Studies */}
            <div className="overflow-hidden bg-white rounded-lg shadow-md transition-transform duration-300 hover:transform hover:scale-[1.02] border border-blue-100">
              <img
                src="/src/assets/images/head-of-studies.jpg"
                alt="Head of Studies"
                className="object-cover w-full h-64"
              />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-gray-800">
                  Mr. Ombogo Isaac
                </h3>
                <p className="mb-3 text-sm font-medium text-primary">
                  Head of Studies
                </p>
                <p className="text-gray-600">
                  Academic programs coordinator ensuring quality teaching and
                  continuous curriculum improvement.
                </p>
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
            <div className="p-4 text-center transition-all duration-300 rounded-lg hover:bg-blue-50">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 text-white rounded-full bg-gradient-to-r from-primary to-blue-500">
                <FaTrophy className="text-xl" />
              </div>
              <h4 className="mb-2 text-lg font-bold text-gray-800">
                Excellence
              </h4>
              <p className="text-sm text-gray-600">
                Striving for the highest standards in everything we do
              </p>
            </div>
            <div className="p-4 text-center transition-all duration-300 rounded-lg hover:bg-blue-50">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 text-white rounded-full bg-gradient-to-r from-primary to-blue-500">
                <FaShieldAlt className="text-xl" />
              </div>
              <h4 className="mb-2 text-lg font-bold text-gray-800">
                Integrity
              </h4>
              <p className="text-sm text-gray-600">
                Honesty and ethical conduct in all our dealings
              </p>
            </div>
            <div className="p-4 text-center transition-all duration-300 rounded-lg hover:bg-blue-50">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 text-white rounded-full bg-gradient-to-r from-primary to-blue-500">
                <FaBalanceScale className="text-xl" />
              </div>
              <h4 className="mb-2 text-lg font-bold text-gray-800">
                Discipline
              </h4>
              <p className="text-sm text-gray-600">
                Self-control and order in our daily operations
              </p>
            </div>
            <div className="p-4 text-center transition-all duration-300 rounded-lg hover:bg-blue-50">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 text-white rounded-full bg-gradient-to-r from-primary to-blue-500">
                <FaHandshake className="text-xl" />
              </div>
              <h4 className="mb-2 text-lg font-bold text-gray-800">
                Responsibility
              </h4>
              <p className="text-sm text-gray-600">
                Owning our actions and decisions
              </p>
            </div>
            <div className="p-4 text-center transition-all duration-300 rounded-lg hover:bg-blue-50">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 text-white rounded-full bg-gradient-to-r from-primary to-blue-500">
                <FaLightbulb className="text-xl" />
              </div>
              <h4 className="mb-2 text-lg font-bold text-gray-800">
                Innovation
              </h4>
              <p className="text-sm text-gray-600">
                Embracing creativity and new ideas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 text-white bg-gradient-to-r from-primary to-blue-600">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <MdGroups className="mr-2 text-3xl" />
                <p className="text-4xl font-bold">500+</p>
              </div>
              <p className="text-lg">Students</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <GiTeacher className="mr-2 text-3xl" />
                <p className="text-4xl font-bold">30+</p>
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
                <MdSchool className="mr-2 text-3xl" />
                <p className="text-4xl font-bold">100%</p>
              </div>
              <p className="text-lg">Commitment to Quality</p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 bg-blue-50">
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
            <div className="p-6 bg-white rounded-lg shadow-md border border-blue-100 transition-transform duration-300 hover:transform hover:translate-y-[-4px]">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 mr-4 text-white rounded-full bg-gradient-to-r from-primary to-blue-500">
                  <FaChalkboardTeacher className="text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Academic</h3>
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
              </ul>
            </div>

            {/* Sports Facilities */}
            <div className="p-6 bg-white rounded-lg shadow-md border border-blue-100 transition-transform duration-300 hover:transform hover:translate-y-[-4px]">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 mr-4 text-white rounded-full bg-gradient-to-r from-secondary to-yellow-500">
                  <FaRunning className="text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Sports</h3>
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
              </ul>
            </div>

            {/* Entertainment Facilities */}
            <div className="p-6 bg-white rounded-lg shadow-md border border-blue-100 transition-transform duration-300 hover:transform hover:translate-y-[-4px]">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 mr-4 text-white rounded-full bg-gradient-to-r from-tertiary to-green-500">
                  <FaFilm className="text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Entertainment
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
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
