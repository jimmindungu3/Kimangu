import React from "react";
import { Link } from "react-router-dom";
import {
  FaFileAlt,
  FaClipboardCheck,
  FaMoneyBillWave,
  FaPhone,
  FaEnvelope,
  FaRegIdCard,
  FaUserCheck,
  FaTasks,
  FaRegCalendarAlt,
  FaChartLine,
  FaHandshake,
} from "react-icons/fa";
import { MdOutlineNotificationImportant } from "react-icons/md";
import { GiPathDistance } from "react-icons/gi";

const Admissions = () => {
  const steps = [
    {
      id: 1,
      title: "Application",
      description:
        "Submit application through NEMIS portal during national admission window",
    },
    {
      id: 2,
      title: "Placement",
      description:
        "KNEC processes KPSEA & school assessments for centralized placement",
    },
    {
      id: 3,
      title: "Selection",
      description:
        "School selection based on merit, capacity, and learner preferences",
    },
    {
      id: 4,
      title: "Reporting",
      description:
        "Physical reporting with admission letter and required documents",
    },
  ];
  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section className="pt-12 pb-6 bg-white">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
              Senior School Admissions
            </h1>
            <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-8">
              Following Government of Kenya Guidelines for Grade 9 to Senior
              School Transition and guided by the Ministry of Education's
              Competency-Based Curriculum framework, our admission process
              ensures fair, transparent, and merit-based placement into Senior
              School pathways.
            </p>
            <div className="inline-flex items-center px-4 py-2 mb-8 text-sm font-medium text-white rounded-full bg-primary">
              <FaRegCalendarAlt className="mr-2" />
              Admissions Open: January - February Annually
            </div>
          </div>
        </div>
      </section>

      {/* Admission Eligibility & Requirements */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Eligibility & Requirements
            </h2>
            <p className="text-lg text-primary font-medium">
              As per Ministry of Education Guidelines
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 text-white rounded-lg bg-primary">
                  <FaUserCheck className="text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Eligibility Criteria
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 mt-1 mr-3 text-primary">
                    <FaClipboardCheck className="w-full h-full" />
                  </div>
                  <span className="text-gray-800">
                    Completion of Grade 9 under CBC curriculum
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 mt-1 mr-3 text-primary">
                    <FaClipboardCheck className="w-full h-full" />
                  </div>
                  <span className="text-gray-800">
                    Valid KPSEA results from KNEC
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 mt-1 mr-3 text-primary">
                    <FaClipboardCheck className="w-full h-full" />
                  </div>
                  <span className="text-gray-800">
                    Registered on National Education Management Information
                    System (NEMIS)
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 mt-1 mr-3 text-primary">
                    <FaClipboardCheck className="w-full h-full" />
                  </div>
                  <span className="text-gray-800">
                    Age-appropriate for Grade 10
                  </span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 text-white rounded-lg bg-secondary">
                  <FaFileAlt className="text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Required Documents
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 mt-1 mr-3 text-secondary">
                    <FaRegIdCard className="w-full h-full" />
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">
                      Original KPSEA Results Slip
                    </span>
                    <p className="text-sm text-gray-600">Issued by KNEC</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 mt-1 mr-3 text-secondary">
                    <FaRegIdCard className="w-full h-full" />
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">
                      Birth Certificate
                    </span>
                    <p className="text-sm text-gray-600">
                      Or any government-issued ID
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 mt-1 mr-3 text-secondary">
                    <FaRegIdCard className="w-full h-full" />
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">
                      Grade 9 Report Card
                    </span>
                    <p className="text-sm text-gray-600">
                      Complete school-based assessment records
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 mt-1 mr-3 text-secondary">
                    <FaRegIdCard className="w-full h-full" />
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">
                      Passport Photos
                    </span>
                    <p className="text-sm text-gray-600">
                      Two recent color passport-size photographs
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process Flow */}
      <section className="py-16 text-white bg-primary">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">
              GOK Admission Process Flow
            </h2>
            <p className="text-lg text-white/90">
              Structured process as guided by the Ministry of Education
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.id}
                className="relative p-6 bg-white/10 backdrop-blur rounded-xl border border-white/20"
              >
                <div
                  className={`absolute top-0 left-0 flex items-center justify-center w-8 h-8 -mt-4 -ml-4 text-sm font-bold rounded-full bg-gray-100 text-gray-800`}
                >
                  {step.id}
                </div>
                <h3 className="mb-3 text-xl font-bold">{step.title}</h3>
                <p className="text-white/90">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-white/10 backdrop-blur rounded-xl border border-white/20">
            <div className="flex items-center">
              <div className="flex-shrink-0 p-3 mr-4 text-white rounded-lg">
                <MdOutlineNotificationImportant className="text-xl md:text-5xl" />
              </div>
              <div>
                <h4 className="text-lg font-bold">Important Notice</h4>
                <p className="text-white/90">
                  All admissions are conducted through the official Ministry of
                  Education placement system. Parents are advised to follow
                  announcements on national media and the MOE website for
                  admission timelines and procedures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Support */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Need Assistance?
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-700">
              Our admissions office is ready to help you navigate the GOK Senior
              School admission process. Contact us for clarification on
              requirements, timelines, or any other inquiries.
            </p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 text-white rounded-full bg-primary">
                  <FaPhone className="text-xl" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  Call Us
                </h3>
                <p className="mb-2 text-gray-600">Admissions Hotline</p>
                <a
                  href="tel:+254712345678"
                  className="font-medium text-gray-600 hover:underline"
                >
                  +254 712 345 678
                </a>
              </div>

              <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 text-white rounded-full bg-secondary">
                  <FaEnvelope className="text-xl" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  Email Us
                </h3>
                <p className="mb-2 text-gray-600">Send us your inquiries</p>
                <a
                  href="mailto:admissions@kimanguday.sc.ke"
                  className="font-medium text-gray-600 hover:underline"
                >
                  admissions@kimanguday.sc.ke
                </a>
              </div>

              <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 text-white rounded-full bg-tertiary">
                  <FaRegCalendarAlt className="text-xl" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  Visit Us
                </h3>
                <p className="mb-2 text-gray-600">Office Hours</p>
                <p className="font-medium text-gray-600">
                  Mon-Fri: 8:00 AM - 4:00 PM
                </p>
              </div>
            </div>

            <div className="mt-10">
              <Link
                to="/contact-us"
                className="inline-flex items-center px-8 py-3 text-lg font-semibold text-white rounded-lg bg-primary hover:bg-primary/90"
              >
                <FaEnvelope className="mr-2" /> Contact Admissions Office
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
