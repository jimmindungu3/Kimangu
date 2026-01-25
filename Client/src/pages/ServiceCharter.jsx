import React from "react";
import {
  FaClock,
  FaMoneyBillWave,
  FaUserTie,
  FaFileAlt,
  FaDownload,
  FaPhone,
  FaEnvelope,
  FaExclamationCircle,
  FaCheckCircle,
  FaUniversity,
  FaBook,
  FaUserFriends,
  FaShieldAlt,
  FaBalanceScale,
  FaChartLine,
} from "react-icons/fa";

const ServiceCharter = () => {
  const serviceCategories = [
    {
      title: "Academic Services",
      icon: <FaBook className="text-2xl" />,
      services: [
        {
          service: "Admission Processing",
          description: "New student registration and admission",
          timeline: "Within 7 working days",
          cost: "Free upon fee clearance",
          officer: "Admissions Officer",
          contact: "admissions@kimangusecondary.sc.ke",
          notes: "Requires original KCPE certificate",
        },
        {
          service: "Issue of Academic Transcripts",
          description: "Official academic records",
          timeline: "Within 3 working days",
          cost: "Free for current students",
          officer: "Academic Registrar",
          contact: "academics@kimangusecondary.sc.ke",
          notes: "Former students require written request",
        },
        {
          service: "KCSE Registration",
          description: "Registration for national examinations",
          timeline: "As per KNEC calendar",
          cost: "KNEC fees apply",
          officer: "Examinations Officer",
          contact: "exams@kimangusecondary.sc.ke",
          notes: "Deadlines strictly observed",
        },
        {
          service: "Learning Material Distribution",
          description: "Textbooks and learning resources",
          timeline: "First week of term",
          cost: "Govt issued books free",
          officer: "Librarian",
          contact: "library@kimangusecondary.sc.ke",
          notes: "Issued against textbook card",
        },
      ],
    },
    {
      title: "Administrative Services",
      icon: <FaUniversity className="text-2xl" />,
      services: [
        {
          service: "Fee Payment & Receipting",
          description: "School fees payment and receipt issuance",
          timeline: "Immediate during working hours",
          cost: "As per fee structure",
          officer: "Bursar",
          contact: "bursar@kimangusecondary.sc.ke",
          notes: "Bank deposits require 24 hours processing",
        },
        {
          service: "Student ID Card Issuance",
          description: "Issuance of school identification cards",
          timeline: "Within 14 days of admission",
          cost: "Free for new students",
          officer: "Dean of Students",
          contact: "dean@kimangusecondary.sc.ke",
          notes: "Lost cards reported to security",
        },
        {
          service: "Clearance Certificate",
          description: "School leaving/clearance certificate",
          timeline: "Within 5 working days",
          cost: "Free",
          officer: "Deputy Principal",
          contact: "deputy@kimangusecondary.sc.ke",
          notes: "Requires full fee payment clearance",
        },
        {
          service: "Parent Meeting Scheduling",
          description: "Booking appointments with teachers",
          timeline: "48 hours notice required",
          cost: "Free",
          officer: "Class Teacher",
          contact: "Class teacher via office",
          notes: "Meetings during consultation hours",
        },
      ],
    },
    {
      title: "Student Welfare Services",
      icon: <FaUserFriends className="text-2xl" />,
      services: [
        {
          service: "Guidance & Counseling",
          description: "Personal and academic counseling",
          timeline: "By appointment (within 2 days)",
          cost: "Free",
          officer: "Guidance & Counseling Teacher",
          contact: "counseling@kimangusecondary.sc.ke",
          notes: "Confidential services available",
        },
        {
          service: "Medical Services",
          description: "Sick bay treatment and first aid",
          timeline: "Immediate for emergencies",
          cost: "Govt medical cover",
          officer: "School Nurse",
          contact: "nurse@kimangusecondary.sc.ke",
          notes: "Referrals to hospital at parent cost",
        },
        {
          service: "Disciplinary Hearing",
          description: "Student disciplinary proceedings",
          timeline: "Within 72 hours of incident",
          cost: "Free",
          officer: "Disciplinary Committee",
          contact: "discipline@kimangusecondary.sc.ke",
          notes: "Parents/guardians must attend",
        },
        {
          service: "Co-curricular Activities",
          description: "Clubs, sports, and games registration",
          timeline: "First 2 weeks of term",
          cost: "Free",
          officer: "Games Teacher",
          contact: "games@kimangusecondary.sc.ke",
          notes: "Medical clearance required for sports",
        },
      ],
    },
    {
      title: "Support Services",
      icon: <FaShieldAlt className="text-2xl" />,
      services: [
        {
          service: "Library Services",
          description: "Book borrowing and reading space",
          timeline: "During library hours",
          cost: "Free",
          officer: "Librarian",
          contact: "library@kimangusecondary.sc.ke",
          notes: "Maximum 2 books for 2 weeks",
        },
        {
          service: "Laboratory Access",
          description: "Science practical sessions",
          timeline: "As per timetable",
          cost: "Free",
          officer: "Lab Technician",
          contact: "lab@kimangusecondary.sc.ke",
          notes: "Safety gear mandatory",
        },
        {
          service: "ICT Services",
          description: "Computer lab access and internet",
          timeline: "As per timetable",
          cost: "Free",
          officer: "ICT Teacher",
          contact: "ict@kimangusecondary.sc.ke",
          notes: "Supervised sessions only",
        },
        {
          service: "Transport Services",
          description: "School bus transportation",
          timeline: "As per bus schedule",
          cost: "Free",
          officer: "Transport Officer",
          contact: "transport@kimangusecondary.sc.ke",
          notes: "Routes subject to demand",
        },
      ],
    },
  ];

  const servicePrinciples = [
    {
      icon: <FaClock />,
      title: "Timeliness",
      description: "All services delivered within stipulated timelines",
    },
    {
      icon: <FaBalanceScale />,
      title: "Fairness",
      description: "Equal access to services for all stakeholders",
    },
    {
      icon: <FaChartLine />,
      title: "Quality",
      description: "High standard services meeting educational needs",
    },
    {
      icon: <FaShieldAlt />,
      title: "Transparency",
      description: "Clear information on costs and procedures",
    },
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="py-12 text-white bg-gradient-to-r from-primary to-blue-700">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Service Delivery Charter
            </h1>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 className="mb-4 text-3xl font-bold text-primary">
                Introduction
              </h2>
              <p className="mb-4 text-gray-700">
                This Service Delivery Charter outlines the standards of service
                that students, parents, guardians, and other stakeholders can
                expect from Kimangu Day Secondary School. It specifies the
                services we offer, timelines for delivery, costs where
                applicable, and responsible officers.
              </p>
              <div className="p-6 border rounded-lg bg-primary/5 border-primary/10">
                <h3 className="mb-3 text-xl font-semibold text-primary">
                  Our Pledge
                </h3>
                <p className="text-gray-700">
                  We commit to providing efficient, transparent, and quality
                  services that support the academic and personal development of
                  our students while maintaining the highest standards of
                  integrity and professionalism.
                </p>
              </div>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg bg-gray-50">
              <h3 className="mb-4 text-xl font-semibold text-primary">
                Service Principles
              </h3>
              <ul className="space-y-4">
                {servicePrinciples.map((principle, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 text-white rounded-full bg-primary">
                      {principle.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {principle.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {principle.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Tables */}
      <section className="bg-gray-50">
        <div className="max-w-6xl px-4 mx-auto py-12">
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-3xl font-bold text-primary">
              Service Standards Table
            </h2>
            <p className="text-gray-600">
              Detailed breakdown of all services offered by the school
            </p>
          </div>

          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 mr-4 text-white rounded-lg bg-primary">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {category.title}
                </h3>
              </div>

              <div className="overflow-x-auto rounded-lg shadow">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead className="text-white bg-primary">
                    <tr>
                      <th className="px-6 py-4 text-left">Service</th>
                      <th className="px-6 py-4 text-left">Description</th>
                      <th className="px-6 py-4 text-left">Timeline</th>
                      <th className="px-6 py-4 text-left">Cost</th>
                      <th className="px-6 py-4 text-left">
                        Responsible Officer
                      </th>
                      <th className="px-6 py-4 text-left">
                        Notes/Requirements
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {category.services.map((service, serviceIndex) => (
                      <tr
                        key={serviceIndex}
                        className="transition-colors hover:bg-gray-50"
                      >
                        <td className="px-6 py-4">
                          <div className="font-medium text-gray-900">
                            {service.service}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          {service.description}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <span className="font-medium text-gray-900">
                              {service.timeline}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <span className="font-medium text-gray-900">
                              {service.cost}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div>
                              <div className="font-medium text-gray-900">
                                {service.officer}
                              </div>
                              <div className="text-sm text-gray-600">
                                {service.contact}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {service.notes}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Performance Indicators */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl px-4 mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center text-primary">
            Performance Standards
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-6 text-center border border-gray-200 rounded-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 text-white bg-green-500 rounded-full">
                <FaCheckCircle className="text-xl" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Service Timeliness</h3>
              <p className="text-gray-600">
                95% of services delivered within stipulated timelines
              </p>
            </div>

            <div className="p-6 text-center border border-gray-200 rounded-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 text-white bg-blue-500 rounded-full">
                <FaUserFriends className="text-xl" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">
                Stakeholder Satisfaction
              </h3>
              <p className="text-gray-600">
                90% satisfaction rate in quarterly surveys
              </p>
            </div>

            <div className="p-6 text-center border border-gray-200 rounded-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 text-white bg-purple-500 rounded-full">
                <FaExclamationCircle className="text-xl" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">
                Complaint Resolution
              </h3>
              <p className="text-gray-600">
                100% of complaints addressed within 7 days
              </p>
            </div>

            <div className="p-6 text-center border border-gray-200 rounded-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 text-white bg-orange-500 rounded-full">
                <FaChartLine className="text-xl" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">
                Continuous Improvement
              </h3>
              <p className="text-gray-600">
                Annual review and update of service standards
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback & Complaints */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className=" grid gap-8 md:grid-cols-2">
            <div className="p-8 bg-white border border-gray-200 rounded-lg shadow-sm">
              <h3 className="mb-6 text-2xl font-bold text-primary">
                Feedback & Complaints
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="mb-3 font-semibold text-gray-800">
                    Channels:
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <FaEnvelope className="mr-3 text-primary" />
                      <span>Email: complaints@kimangusecondary.sc.ke</span>
                    </li>
                    <li className="flex items-center">
                      <FaPhone className="mr-3 text-primary" />
                      <span>Phone: +254 721 415 851</span>
                    </li>
                    <li className="flex items-center">
                      <FaFileAlt className="mr-3 text-primary" />
                      <span>Complaints Box: Main Administration Office</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-3 font-semibold text-gray-800">
                    Response Time:
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <FaClock className="mr-3 text-green-500" />
                      <span>Acknowledgment: Within 24 hours</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="mr-3 text-green-500" />
                      <span>Resolution: Within 7 working days</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-8 text-white rounded-lg bg-gradient-to-br from-primary to-blue-700">
              <h3 className="mb-6 text-2xl font-bold">Download Charter</h3>
              <p className="mb-6">
                Download the complete Service Delivery Charter document for
                offline reference
              </p>
              <a
                href="/documents/Service_Delivery_Charter.pdf"
                download="Service_Delivery_Charter.pdf"
                className="inline-flex items-center px-6 py-3 font-bold transition-colors bg-white rounded-lg text-primary hover:bg-gray-100"
              >
                <FaDownload className="mr-3" />
                Download Full Charter (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-8 bg-white border-t border-gray-200">
        <div className="max-w-6xl px-4 mx-auto text-center">
          <p className="text-gray-600">
            This Service Delivery Charter is reviewed annually. Last updated:
            January 2025
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Kimangu Day Secondary School • Rongai, Nakuru County • "Aim High!"
          </p>
        </div>
      </section>
    </div>
  );
};

export default ServiceCharter;
