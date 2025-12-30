import React from "react";
import { Link } from "react-router-dom";
import {
  FaGraduationCap,
  FaFileAlt,
  FaUsers,
  FaClipboardCheck,
  FaSchool,
  FaMoneyBillWave,
  FaHandshake,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Admissions = () => {
  return (
    <div className="text-gray-600">
      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-800">
              What Parents Need to Know
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-primary">
              Admission into Senior School is structured, guided, and learner‑
              centred. Below is what is required and expected from parents and
              guardians.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="p-8 bg-white border border-blue-100 shadow-lg rounded-2xl">
              <div className="flex items-center justify-center w-16 h-16 mb-6 text-white rounded-full bg-gradient-to-r from-primary to-primary-light">
                <FaUsers className="text-2xl" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-800">
                Eligible Learners
              </h3>
              <p className="text-gray-600">
                Admission is open to learners who have successfully completed
                Grade 9 and participated in the Kenya Primary School Education
                Assessment (KPSEA).
              </p>
            </div>

            <div className="p-8 bg-white border border-blue-100 shadow-lg rounded-2xl">
              <div className="flex items-center justify-center w-16 h-16 mb-6 text-white rounded-full bg-gradient-to-r from-tertiary to-tertiary-light">
                <FaSchool className="text-2xl" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-800">
                CBC Senior School Pathways
              </h3>
              <p className="text-gray-600">
                Learners are admitted into approved Senior School pathways based
                on their interests, abilities, and KPSEA outcomes, as guided by
                MOE policy.
              </p>
            </div>

            <div className="p-8 bg-white border border-blue-100 shadow-lg rounded-2xl">
              <div className="flex items-center justify-center w-16 h-16 mb-6 text-white rounded-full bg-gradient-to-r from-secondary to-secondary-light">
                <FaHandshake className="text-2xl" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-800">
                Parent Partnership
              </h3>
              <p className="text-gray-600">
                Parents play a key role in supporting learner choices, attending
                guidance sessions, and complying with admission requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-800">
              Admission Requirements
            </h2>
            <p className="text-lg text-primary">
              Parents are required to present the following for full admission
              clearance.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="p-8 bg-white border border-blue-100 shadow-lg rounded-2xl">
              <FaFileAlt className="mb-4 text-3xl text-primary" />
              <h3 className="mb-3 text-xl font-bold text-gray-800">
                Required Documents
              </h3>
              <ul className="space-y-2 text-gray-600 list-disc list-inside">
                <li>Copy of KPSEA results slip</li>
                <li>Grade 9 completion certificate / school report</li>
                <li>Birth certificate copy</li>
                <li>Transfer letter (if applicable)</li>
                <li>Two recent passport photographs</li>
              </ul>
            </div>

            <div className="p-8 bg-white border border-blue-100 shadow-lg rounded-2xl">
              <FaMoneyBillWave className="mb-4 text-3xl text-primary" />
              <h3 className="mb-3 text-xl font-bold text-gray-800">
                Financial Commitments
              </h3>
              <ul className="space-y-2 text-gray-600 list-disc list-inside">
                <li>Payment of school fees as per MOE‑approved structure</li>
                <li>Timely payment within stipulated deadlines</li>
                <li>Purchase of learning materials and uniform</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Steps */}
      <section className="py-20 text-white bg-gradient-to-r from-primary to-primary-light">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold">Admission Process</h2>
            <p className="text-lg text-blue-100">
              A clear step‑by‑step process to ensure smooth enrollment.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="p-8 bg-white/10 backdrop-blur rounded-2xl">
              <FaClipboardCheck className="mb-4 text-3xl" />
              <h3 className="mb-3 text-xl font-bold">Step 1: Verification</h3>
              <p className="text-blue-100">
                Verification of learner eligibility and submitted academic
                records.
              </p>
            </div>

            <div className="p-8 bg-white/10 backdrop-blur rounded-2xl">
              <FaUsers className="mb-4 text-3xl" />
              <h3 className="mb-3 text-xl font-bold">Step 2: Guidance</h3>
              <p className="text-blue-100">
                Learner and parent engage in pathway guidance and orientation
                sessions.
              </p>
            </div>

            <div className="p-8 bg-white/10 backdrop-blur rounded-2xl">
              <FaGraduationCap className="mb-4 text-3xl" />
              <h3 className="mb-3 text-xl font-bold">Step 3: Admission</h3>
              <p className="text-blue-100">
                Issuance of admission letter, fee structure, and reporting
                dates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl px-4 mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-800">
            Need Clarification?
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            Our admissions team is available to guide you through every step of
            the process.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 font-semibold text-white rounded-lg bg-primary hover:bg-primary-light"
            >
              <FaEnvelope /> Contact Admissions
            </Link>
            <a
              href="tel:+254712345678"
              className="inline-flex items-center gap-2 px-8 py-3 font-semibold border-2 rounded-lg text-primary border-primary hover:bg-primary hover:text-white"
            >
              <FaPhone /> Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
