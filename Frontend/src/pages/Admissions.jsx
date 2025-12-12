import React from "react";
import { Link } from "react-router-dom";
import { 
  FaHome, FaGraduationCap, FaCalendarAlt, FaSchool, 
  FaMoneyBillWave, FaCertificate, FaIdCard, FaExclamationTriangle, 
  FaUserGraduate, FaUsers, FaCheck, FaCheckCircle, FaClock, 
  FaFileAlt, FaEnvelope, FaPhone, FaWheelchair, FaHeartbeat,
  FaUser, FaBook, FaBuilding, FaListOl, FaHandshake, FaClipboardList
} from "react-icons/fa";
import { MdGroups, MdSchool, MdDescription } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";

const Admissions = () => {
  return (
    <div className="text-gray-600">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[35vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(
            rgba(59, 130, 246, 0.7),
            rgba(37, 99, 235, 0.8)
          ),
          url('/src/assets/images/admissions-hero.jpg')`,
        }}
      >
        <div className="px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl text-white">
            Join Our Academic Community
          </h1>
          <p className="max-w-2xl mb-8 text-xl text-blue-100">
            Begin your journey towards academic excellence and personal growth
          </p>
          <nav className="text-sm">
            <ol className="flex items-center justify-center space-x-2">
              <li>
                <Link to="/" className="hover:text-white/80 flex items-center text-blue-100">
                  <FaHome className="mr-1" />
                  Home
                </Link>
              </li>
              <li>
                <span className="mx-2 text-blue-200/50">•</span>
              </li>
              <li className="font-medium text-white">Admissions</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Quick Overview Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-800">
              Admissions Overview
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-blue-600">
              Everything you need to know about joining our esteemed institution
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-6 text-center transition-all duration-300 bg-white rounded-lg shadow-lg border border-blue-100 hover:transform hover:scale-105 hover:shadow-xl">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white rounded-full bg-gradient-to-r from-primary to-blue-500">
                <FaGraduationCap className="text-2xl" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-800">
                KCPE Score
              </h3>
              <p className="text-2xl font-bold text-primary">200+</p>
              <p className="mt-2 text-sm text-gray-600">
                Minimum marks required
              </p>
            </div>

            <div className="p-6 text-center transition-all duration-300 bg-white rounded-lg shadow-lg border border-blue-100 hover:transform hover:scale-105 hover:shadow-xl">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white rounded-full bg-gradient-to-r from-primary to-blue-500">
                <FaCalendarAlt className="text-2xl" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-800">
                Age Range
              </h3>
              <p className="text-2xl font-bold text-primary">14-22</p>
              <p className="mt-2 text-sm text-gray-600">
                Years (2003-2011 birth)
              </p>
            </div>

            <div className="p-6 text-center transition-all duration-300 bg-white rounded-lg shadow-lg border border-blue-100 hover:transform hover:scale-105 hover:shadow-xl">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white rounded-full bg-gradient-to-r from-primary to-blue-500">
                <FaSchool className="text-2xl" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-800">
                School Type
              </h3>
              <p className="text-xl font-bold text-primary">Day School</p>
              <p className="mt-2 text-sm text-gray-600">
                No boarding facilities
              </p>
            </div>

            <div className="p-6 text-center transition-all duration-300 bg-white rounded-lg shadow-lg border border-blue-100 hover:transform hover:scale-105 hover:shadow-xl">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white rounded-full bg-gradient-to-r from-primary to-blue-500">
                <FaMoneyBillWave className="text-2xl" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-800">
                Termly Fees
              </h3>
              <p className="text-2xl font-bold text-primary">KES 3,000</p>
              <p className="mt-2 text-sm text-gray-600">Average per term</p>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Requirements */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-800">
              Academic Requirements
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-blue-600">
              Essential criteria for admission to ensure academic readiness
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="p-8 bg-white rounded-lg shadow-lg border border-blue-100">
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center flex-shrink-0 w-14 h-14 rounded-full bg-primary/10">
                  <FaCertificate className="text-xl text-primary" />
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold text-gray-800">
                    KCPE Results
                  </h3>
                  <p className="mb-4 text-gray-600">
                    Completion of Kenya Certificate of Primary Education (KCPE)
                    with a minimum score of
                    <strong className="text-primary"> 200 marks</strong>. Higher
                    scores receive priority consideration.
                  </p>
                  <div className="inline-flex items-center px-4 py-2 text-sm rounded-full bg-primary/10 text-primary">
                    <FaClock className="mr-2" />
                    Accepts results from 2019-2024
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white rounded-lg shadow-lg border border-blue-100">
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center flex-shrink-0 w-14 h-14 rounded-full bg-primary/10">
                  <FaIdCard className="text-xl text-primary" />
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold text-gray-800">
                    Documentation
                  </h3>
                  <p className="mb-4 text-gray-600">
                    Valid KCPE index number, birth certificate for age
                    verification, and NEMIS number from previous school are
                    mandatory for enrollment.
                  </p>
                  <div className="inline-flex items-center px-4 py-2 text-sm rounded-full bg-primary/10 text-primary">
                    <FaCheckCircle className="mr-2" />
                    All documents must be original
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-800">
              Required Documents
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-blue-600">
              Complete documentation ensures smooth admission process
            </p>
          </div>

          <div className="p-8 rounded-lg shadow-lg bg-blue-50 border border-blue-100">
            <div className="p-6 mb-8 bg-white rounded-lg border border-amber-200 bg-amber-50">
              <div className="flex items-center mb-4">
                <FaExclamationTriangle className="mr-3 text-xl text-amber-500" />
                <h3 className="text-xl font-bold text-gray-800">
                  Important Note
                </h3>
              </div>
              <p className="text-gray-700">
                All documents must be submitted physically at our school office
                for verification. Online application serves as initial
                registration only. Admission is confirmed after complete
                document verification and interview.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Student Documents */}
              <div className="p-6 bg-white rounded-lg border border-blue-100">
                <h4 className="flex items-center mb-6 text-xl font-bold text-gray-800">
                  <FaUserGraduate className="mr-3 text-primary" />
                  Student Documents
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex items-center justify-center w-8 h-8 mr-3 text-white rounded-full bg-primary">
                      <FaCheck className="text-sm" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">
                        KCPE Result Slip
                      </p>
                      <p className="text-sm text-gray-600">
                        Original copy for verification
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex items-center justify-center w-8 h-8 mr-3 text-white rounded-full bg-primary">
                      <FaCheck className="text-sm" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">
                        Birth Certificate
                      </p>
                      <p className="text-sm text-gray-600">
                        Certified copy acceptable
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex items-center justify-center w-8 h-8 mr-3 text-white rounded-full bg-primary">
                      <FaCheck className="text-sm" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">
                        Passport Photos
                      </p>
                      <p className="text-sm text-gray-600">
                        2 recent passport-size photos
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex items-center justify-center w-8 h-8 mr-3 text-white rounded-full bg-primary">
                      <FaCheck className="text-sm" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">
                        Previous School Documents
                      </p>
                      <p className="text-sm text-gray-600">
                        Release letter & report form
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Parent Documents */}
              <div className="p-6 bg-white rounded-lg border border-blue-100">
                <h4 className="flex items-center mb-6 text-xl font-bold text-gray-800">
                  <FaUsers className="mr-3 text-primary" />
                  Parent/Guardian Documents
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex items-center justify-center w-8 h-8 mr-3 text-white rounded-full bg-primary">
                      <FaCheck className="text-sm" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">ID Copy</p>
                      <p className="text-sm text-gray-600">
                        Parent/Guardian identification
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex items-center justify-center w-8 h-8 mr-3 text-white rounded-full bg-primary">
                      <FaCheck className="text-sm" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">
                        Contact Information
                      </p>
                      <p className="text-sm text-gray-600">
                        Phone number & email address
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex items-center justify-center w-8 h-8 mr-3 text-white rounded-full bg-primary">
                      <FaCheck className="text-sm" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">
                        Home Address
                      </p>
                      <p className="text-sm text-gray-600">
                        Physical address for correspondence
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex items-center justify-center w-8 h-8 mr-3 text-white rounded-full bg-primary">
                      <FaCheck className="text-sm" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">
                        Emergency Contacts
                      </p>
                      <p className="text-sm text-gray-600">
                        Alternative phone numbers
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 bg-primary/10">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-800">
              Admission Process
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-blue-600">
              Simple 4-step journey to joining our academic family
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute top-0 w-px h-full left-6 bg-primary/20 md:left-1/2 md:-translate-x-1/2"></div>
              <div className="relative z-10 flex items-center justify-center w-16 h-16 mx-auto mb-6 text-white rounded-full bg-gradient-to-r from-primary to-blue-500">
                <span className="text-2xl font-bold">1</span>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg border border-blue-100">
                <h3 className="mb-4 text-xl font-bold text-gray-800">
                  Online Application
                </h3>
                <p className="mb-4 text-gray-600">
                  Complete our digital application form with student and
                  guardian details.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <FaCheckCircle className="mr-2 text-primary" />
                    Student information
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="mr-2 text-primary" />
                    KCPE details
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="mr-2 text-primary" />
                    Guardian contacts
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="absolute top-0 w-px h-full left-6 bg-primary/20 md:left-1/2 md:-translate-x-1/2"></div>
              <div className="relative z-10 flex items-center justify-center w-16 h-16 mx-auto mb-6 text-white rounded-full bg-gradient-to-r from-primary to-blue-500">
                <span className="text-2xl font-bold">2</span>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg border border-blue-100">
                <h3 className="mb-4 text-xl font-bold text-gray-800">
                  Document Submission
                </h3>
                <p className="mb-4 text-gray-600">
                  Visit school office with original documents for verification
                  process.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <FaCheckCircle className="mr-2 text-primary" />
                    Original documents
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="mr-2 text-primary" />
                    Verification interview
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="mr-2 text-primary" />
                    Parent meeting
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="absolute top-0 w-px h-full left-6 bg-primary/20 md:left-1/2 md:-translate-x-1/2"></div>
              <div className="relative z-10 flex items-center justify-center w-16 h-16 mx-auto mb-6 text-white rounded-full bg-gradient-to-r from-primary to-blue-500">
                <span className="text-2xl font-bold">3</span>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg border border-blue-100">
                <h3 className="mb-4 text-xl font-bold text-gray-800">
                  Interview & Assessment
                </h3>
                <p className="mb-4 text-gray-600">
                  Student and parent interview to assess compatibility with
                  school values.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <FaCheckCircle className="mr-2 text-primary" />
                    Student interview
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="mr-2 text-primary" />
                    Academic assessment
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="mr-2 text-primary" />
                    Values alignment
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="relative z-10 flex items-center justify-center w-16 h-16 mx-auto mb-6 text-white rounded-full bg-gradient-to-r from-primary to-blue-500">
                <span className="text-2xl font-bold">4</span>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg border border-blue-100">
                <h3 className="mb-4 text-xl font-bold text-gray-800">
                  Enrollment & Orientation
                </h3>
                <p className="mb-4 text-gray-600">
                  Complete admission with fee payment and attend orientation
                  program.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <FaCheckCircle className="mr-2 text-primary" />
                    Fee payment
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="mr-2 text-primary" />
                    Uniform & book purchase
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="mr-2 text-primary" />
                    School orientation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Considerations */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-800">
              Inclusive Education
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-blue-600">
              We welcome and support students with diverse needs and backgrounds
            </p>
          </div>

          <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-2">
            <div className="p-8 border rounded-lg shadow-lg bg-gradient-to-br from-primary/10 to-white border-primary/20">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center mr-4 text-white rounded-full w-14 h-14 bg-gradient-to-r from-primary to-blue-500">
                  <FaWheelchair className="text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Students with Special Needs
                </h3>
              </div>
              <p className="mb-6 text-gray-700">
                We provide an inclusive environment with accommodations for
                various learning needs and physical challenges. Our trained
                staff ensures every student receives appropriate support.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <FaCheckCircle className="mr-3 text-primary" />
                  Learning disabilities support
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-3 text-primary" />
                  Physical accessibility accommodations
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-3 text-primary" />
                  Individual education plans
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-3 text-primary" />
                  Specialized teaching approaches
                </li>
              </ul>
            </div>

            <div className="p-8 border rounded-lg shadow-lg bg-gradient-to-br from-blue-50 to-white border-blue-100">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center mr-4 text-white rounded-full w-14 h-14 bg-gradient-to-r from-primary to-blue-500">
                  <FaHeartbeat className="text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Medical & Health Support
                </h3>
              </div>
              <p className="mb-6 text-gray-700">
                Students with medical conditions receive proper care through
                collaboration with parents and healthcare providers. Our school
                clinic ensures health monitoring and emergency preparedness.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <FaCheckCircle className="mr-3 text-primary" />
                  Medication management support
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-3 text-primary" />
                  Emergency action plans
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-3 text-primary" />
                  Staff training on conditions
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-3 text-primary" />
                  Regular health monitoring
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-white bg-gradient-to-r from-primary to-blue-600">
        <div className="max-w-4xl px-6 mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Ready to Begin Your Journey?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg text-blue-100">
            Join our community of learners and discover your potential. Our
            admissions team is ready to guide you every step of the way.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              to="/admissions-form"
              className="inline-flex items-center gap-3 px-8 py-3 font-semibold transition bg-white rounded-lg text-primary hover:bg-gray-100 hover:shadow-lg hover:scale-105"
            >
              <FaFileAlt />
              Start Application
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-3 font-semibold text-white transition border-2 border-white rounded-lg hover:bg-white/10 hover:shadow-lg"
            >
              <FaEnvelope />
              Contact Admissions
            </Link>
            <a
              href="tel:+254712345678"
              className="inline-flex items-center gap-3 px-8 py-3 font-semibold text-white transition border-2 border-white rounded-lg hover:bg-white/10 hover:shadow-lg"
            >
              <FaPhone />
              Call +254 712 345 678
            </a>
          </div>
          <div className="mt-8 text-sm text-blue-100">
            <p className="flex items-center justify-center gap-2">
              <FaClock />
              Admissions Office Hours: Mon-Fri 8:00 AM - 4:00 PM
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;