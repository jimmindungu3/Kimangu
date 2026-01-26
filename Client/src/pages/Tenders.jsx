import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  FaDownload,
  FaCalendarAlt,
  FaDollarSign,
  FaFileAlt,
  FaCheckCircle,
  FaBalanceScale,
  FaQuestionCircle,
  FaChevronDown,
  FaChevronUp,
  FaBuilding,
  FaChartLine,
  FaShieldAlt,
  FaClock,
  FaExclamationTriangle,
  FaBullhorn,
  FaShoppingCart,
  FaPenFancy,
  FaBoxOpen,
  FaLockOpen,
  FaChartBar,
  FaTrophy,
  FaFileContract,
  FaTag,
  FaFile,
  FaCircle,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

// Icon mapping object
const iconComponents = {
  FaDownload,
  FaCalendarAlt,
  FaDollarSign,
  FaFileAlt,
  FaCheckCircle,
  FaBalanceScale,
  FaQuestionCircle,
  FaChevronDown,
  FaChevronUp,
  FaBuilding,
  FaChartLine,
  FaShieldAlt,
  FaClock,
  FaExclamationTriangle,
  FaBullhorn,
  FaShoppingCart,
  FaPenFancy,
  FaBoxOpen,
  FaLockOpen,
  FaChartBar,
  FaTrophy,
  FaFileContract,
  FaTag,
  FaFile,
  FaCircle,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
};

const Tenders = () => {
  const [expandedTenderId, setExpandedTenderId] = useState(null);
  const [expandedFaqId, setExpandedFaqId] = useState(null);
  const [tendersData, setTendersData] = useState({
    tenders: [],
    processSteps: [],
    requiredDocuments: [],
    faqs: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/data/tendersData.json");
        setTendersData(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load tender data");
        setLoading(false);
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  const toggleTenderExpansion = (tenderId) => {
    setExpandedTenderId(expandedTenderId === tenderId ? null : tenderId);
  };

  const toggleFaq = (faqId) => {
    setExpandedFaqId(expandedFaqId === faqId ? null : faqId);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl text-primary">Loading Tenders...</div>
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

  const { tenders, processSteps, requiredDocuments, faqs } = tendersData;

  return (
    <div className="font-sans text-gray-900 bg-gray-50">
      {/* Subtle Hero Section */}
      <section className="relative py-12 bg-gradient-to-br from-gray-50 to-gray-100 border-b border-gray-200">
        <div className="relative px-4 mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">
              Procurement & <span className="text-primary">Tenders</span>
            </h1>
            <p className="max-w-3xl mx-auto mb-6 text-lg text-gray-600 md:text-xl">
              Transparent, fair, and competitive procurement opportunities at
              Kimangu Day Secondary School
            </p>
            <div className="inline-flex items-center px-6 py-3 space-x-4 text-gray-700 bg-white rounded-full shadow-sm">
              <div className="flex items-center">
                <FaCalendarAlt className="mr-2 text-primary" />
                <span className="font-medium">
                  {tenders.length} Active Tenders
                </span>
              </div>
              <div className="w-px h-6 bg-gray-300"></div>
              <div className="flex items-center">
                <FaCircle className="mr-2 text-green-500" />
                <span className="font-medium">Open for Bidding</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Tenders Section */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
              Current <span className="text-primary">Tenders</span>
            </h2>
          </div>

          <div className="space-y-6">
            {tenders.map((tender, index) => (
              <div
                key={tender.id}
                className="overflow-hidden transition-all duration-300 bg-white rounded-xl shadow-lg hover:shadow-xl"
              >
                {/* Tender Header - Always Visible */}
                <div
                  onClick={() => toggleTenderExpansion(tender.id)}
                  className="p-6 cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      {/* Tender Number Badge */}
                      <div className="flex items-center justify-center w-8 h-8 text-sm font-bold text-white rounded-full bg-primary">
                        {index + 1}
                      </div>
                      <div className="px-3 py-1 text-primary bg-primary/10 rounded-full">
                        <span className="font-semibold">{tender.ref}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="flex items-center text-sm text-orange-600">
                          <FaCalendarAlt className="mr-1" />
                          <span>Closing: {tender.closingDate}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <FaDollarSign className="mr-1" />
                          <span>Fee: {tender.fee}</span>
                        </div>
                      </div>
                      {expandedTenderId === tender.id ? (
                        <FaChevronUp className="text-gray-400" />
                      ) : (
                        <FaChevronDown className="text-gray-400" />
                      )}
                    </div>
                  </div>

                  <h3 className="mb-2 text-xl font-bold text-gray-800">
                    {tender.title}
                  </h3>
                  <p className="text-gray-600">{tender.description}</p>
                </div>

                {/* Expanded Details - Shown when clicked */}
                {expandedTenderId === tender.id && (
                  <div className="p-6 border-t border-gray-100 bg-primary/5">
                    <div className="grid gap-8 md:grid-cols-3">
                      {/* Tender Details */}
                      <div className="md:col-span-2">
                        <div className="mb-6">
                          <h4 className="mb-3 text-lg font-bold text-gray-800">
                            Tender Details
                          </h4>
                          <div className="grid gap-4 md:grid-cols-2">
                            <div>
                              <h5 className="font-medium text-gray-700">
                                Scope of Work
                              </h5>
                              <p className="text-gray-600">
                                {tender.details.scope}
                              </p>
                            </div>
                            <div>
                              <h5 className="font-medium text-gray-700">
                                Delivery Schedule
                              </h5>
                              <p className="text-gray-600">
                                {tender.details.deliverySchedule}
                              </p>
                            </div>
                            <div>
                              <h5 className="font-medium text-gray-700">
                                Contract Duration
                              </h5>
                              <p className="text-gray-600">
                                {tender.details.contractDuration}
                              </p>
                            </div>
                            <div>
                              <h5 className="font-medium text-gray-700">
                                Evaluation Criteria
                              </h5>
                              <p className="text-gray-600">
                                {tender.details.evaluationCriteria}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="mb-3 text-lg font-bold text-gray-800">
                            Technical Specifications
                          </h4>
                          <ul className="space-y-2">
                            {tender.details.specifications.map((spec, idx) => (
                              <li key={idx} className="flex items-start">
                                <FaCheckCircle className="flex-shrink-0 mt-1 mr-3 text-green-500" />
                                <span className="text-gray-600">{spec}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mb-6">
                          <h4 className="mb-3 text-lg font-bold text-gray-800">
                            Submission Requirements
                          </h4>
                          <ul className="space-y-2">
                            {tender.details.submissionRequirements.map(
                              (req, idx) => (
                                <li key={idx} className="flex items-start">
                                  <FaFileAlt className="flex-shrink-0 mt-1 mr-3 text-primary" />
                                  <span className="text-gray-600">{req}</span>
                                </li>
                              ),
                            )}
                          </ul>
                        </div>
                      </div>

                      {/* Action Sidebar */}
                      <div className="md:col-span-1">
                        <div className="p-6 rounded-xl bg-gradient-to-b from-primary/10 to-white border border-primary/20">
                          <h4 className="mb-4 text-lg font-bold text-gray-800">
                            Ready to Apply?
                          </h4>

                          <div className="mb-6">
                            <div className="p-3 mb-4 bg-primary/10 rounded-lg">
                              <div className="flex items-center justify-between mb-2">
                                <span className="font-medium text-gray-700">
                                  Tender Fee:
                                </span>
                                <span className="font-bold text-primary">
                                  {tender.fee}
                                </span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="font-medium text-gray-700">
                                  Deadline:
                                </span>
                                <span className="font-bold text-orange-600">
                                  {tender.closingDate}
                                </span>
                              </div>
                            </div>

                            <div className="p-3 mb-4 bg-yellow-50 rounded-lg">
                              <div className="flex items-start">
                                <FaExclamationTriangle className="flex-shrink-0 mt-1 mr-2 text-yellow-500" />
                                <p className="text-sm text-gray-600">
                                  Bids must be submitted in sealed envelopes
                                  addressed to:
                                  <br />
                                  <span className="font-semibold">
                                    The Chairperson, Tender Committee
                                  </span>
                                  <br />
                                  Kimangu Day Secondary School
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-3">
                            <a
                              href={tender.fileUrl}
                              download
                              className="flex items-center justify-center w-full px-4 py-3 font-medium text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-primary to-blue-600 hover:shadow-lg hover:scale-105"
                            >
                              <FaDownload className="mr-2" />
                              Download Tender Document
                            </a>

                            <div className="p-3 text-sm text-center text-gray-600 bg-gray-100 rounded-lg">
                              <FaClock className="inline-block mr-1" />
                              Submission closes at 5:00 PM
                            </div>
                          </div>
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

      {/* Tendering Process - Original Layout */}
      <section className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl">
          <h2 className="mb-8 text-3xl font-bold text-center">
            Tendering Process
          </h2>

          <div className="p-8 mb-12 bg-gray-100 rounded-lg">
            <p className="mb-6 text-gray-700">
              Kimangu Day Secondary School is committed to a fair, transparent,
              and competitive procurement process. We invite qualified
              suppliers, contractors, and service providers to participate in
              our tendering opportunities. Below is our standard tendering
              process:
            </p>

            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-xl font-semibold text-primary">
                  Steps to Apply for Tenders
                </h3>
                <ol className="space-y-4 list-decimal list-inside">
                  {processSteps.map((step) => {
                    const StepIcon = iconComponents[step.icon];
                    return (
                      <li key={step.step} className="p-4 bg-white rounded-lg">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 mt-1 mr-3 text-primary">
                            <StepIcon className="text-2xl" />
                          </div>
                          <div>
                            <span className="font-semibold text-gray-800">
                              {step.title}:
                            </span>
                            <p className="mt-1 text-gray-600">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>

              <div>
                <h3 className="mb-4 text-xl font-semibold text-primary">
                  Required Documents
                </h3>
                <ul className="space-y-3">
                  {requiredDocuments.map((doc, idx) => (
                    <li
                      key={idx}
                      className="flex items-start p-3 bg-white rounded-lg"
                    >
                      <FaFile className="flex-shrink-0 mt-1 mr-3 text-primary" />
                      <span className="text-gray-700">{doc}</span>
                    </li>
                  ))}
                </ul>

                <div className="p-4 mt-8 bg-yellow-100 border-l-4 border-yellow-500 rounded">
                  <h4 className="mb-2 text-lg font-semibold">
                    Important Note:
                  </h4>
                  <ul className="ml-4 space-y-1 list-disc">
                    <li className="text-gray-700">
                      All tender bids must be addressed to The Chairperson,
                      Tender Committee.
                    </li>
                    <li className="text-gray-700">
                      Each tender bid must be submitted in a separate envelope,
                      with the tender ref number clearly indicated on the
                      envelope.
                    </li>
                    <li className="text-gray-700">
                      All relevant documents must be securely enclosed in the
                      envelope.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms of Engagement Section */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl">
          <h2 className="mb-8 text-3xl font-bold text-center">
            Terms of Engagement
          </h2>

          <div className="p-8 rounded-lg bg-white shadow-sm">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h3 className="mb-6 text-xl font-semibold text-primary">
                  General Terms & Conditions
                </h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="flex items-center font-semibold text-gray-800">
                      <FaTag className="mr-2 text-primary" />
                      Contract Terms
                    </h4>
                    <p className="mt-2 text-gray-600">
                      All contracts will be governed by Kenyan law. Contract
                      duration varies by tender type and will be specified in
                      the tender documents.
                    </p>
                  </div>

                  <div>
                    <h4 className="flex items-center font-semibold text-gray-800">
                      <FaDollarSign className="mr-2 text-primary" />
                      Payment Terms
                    </h4>
                    <p className="mt-2 text-gray-600">
                      Standard payment terms are at least 30 days after delivery
                      and acceptance of goods/services. No advance payments
                      unless specified in tender documents.
                    </p>
                  </div>

                  <div>
                    <h4 className="flex items-center font-semibold text-gray-800">
                      <FaChartLine className="mr-2 text-primary" />
                      Quality Standards
                    </h4>
                    <p className="mt-2 text-gray-600">
                      All goods and services must meet the standards specified
                      in the tender documents. The school reserves the right to
                      reject any substandard deliveries.
                    </p>
                  </div>

                  <div>
                    <h4 className="flex items-center font-semibold text-gray-800">
                      <FaClock className="mr-2 text-primary" />
                      Delivery Timeframes
                    </h4>
                    <p className="mt-2 text-gray-600">
                      Strict adherence to agreed delivery schedules is required.
                      Late deliveries may attract penalties and/or termination
                      of contract as specified in the contract.
                    </p>
                  </div>

                  <div>
                    <h4 className="flex items-center font-semibold text-gray-800">
                      <FaShieldAlt className="mr-2 text-primary" />
                      Confidentiality
                    </h4>
                    <p className="mt-2 text-gray-600">
                      All information provided during the tendering process is
                      confidential and should not be disclosed to third parties
                      by either party.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-6 text-xl font-semibold text-primary">
                  Eligibility & Disqualification
                </h3>

                <div className="mb-8">
                  <h4 className="flex items-center mb-3 font-semibold text-gray-800">
                    <FaBuilding className="mr-2 text-primary" />
                    Who Can Apply
                  </h4>
                  <ul className="ml-6 space-y-2 text-gray-600 list-disc">
                    <li>Registered businesses with valid business permits</li>
                    <li>Tax compliant businesses</li>
                    <li>Businesses with relevant experience in the field</li>
                    <li>Businesses with adequate financial capacity</li>
                    <li>Businesses with qualified personnel</li>
                  </ul>
                </div>

                <div>
                  <h4 className="flex items-center mb-3 font-semibold text-gray-800">
                    <FaExclamationTriangle className="mr-2 text-primary" />
                    Grounds for Disqualification
                  </h4>
                  <ul className="ml-6 space-y-2 text-gray-600 list-disc">
                    <li>Late submission of bids</li>
                    <li>Incomplete documentation</li>
                    <li>False and/or misleading information</li>
                    <li>Collusion or unethical practices</li>
                    <li>Failure to meet mandatory requirements</li>
                    <li>Conflict of interest</li>
                    <li>Prior poor performance</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 mt-8 bg-red-100 border-l-4 border-red-500 rounded-lg">
              <h4 className="flex items-center mb-3 text-lg font-semibold text-gray-800">
                <FaBalanceScale className="mr-2 text-red-500" />
                Procurement Ethics & Anti-Corruption Policy
              </h4>
              <p className="text-gray-700">
                Kimangu Day Secondary School is committed to ethical procurement
                practices. We have a zero-tolerance policy for corruption,
                bribery, or any form of unethical conduct. Any attempt to
                influence the tender process through illegal means will result
                in immediate disqualification and may be reported to relevant
                authorities. All our staff involved in procurement are bound by
                a strict code of ethics, and we expect the same from our
                suppliers and service providers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Find answers to common questions about our tendering process
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="overflow-hidden bg-white rounded-lg shadow-sm border border-gray-200"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="flex items-center justify-between w-full p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-800">
                    {faq.question}
                  </span>
                  <div className="flex items-center">
                    <FaQuestionCircle className="mr-3 text-primary" />
                    {expandedFaqId === faq.id ? (
                      <FaChevronUp className="text-primary" />
                    ) : (
                      <FaChevronDown className="text-primary" />
                    )}
                  </div>
                </button>
                {expandedFaqId === faq.id && (
                  <div className="px-6 pb-6 pt-2 bg-primary/5 border-t border-primary/10">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simplified CTA Section */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="p-8 text-center bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl border border-gray-100">
            <h2 className="mb-6 text-3xl font-bold text-gray-800">
              Ready to Partner With Us?
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-600">
              Contact our procurement team for inquiries about tender
              submissions, process clarification, or partnership opportunities
            </p>

            <div className="grid max-w-4xl gap-6 mx-auto md:grid-cols-3">
              <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 text-white rounded-full bg-primary">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">Email</h3>
                  <p className="text-gray-600">procurement@kimangu.ac.ke</p>
                  <p className="text-sm text-gray-500">
                    Response within 24 hours
                  </p>
                </div>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 text-white rounded-full bg-primary">
                    <FaPhone className="text-xl" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">Phone</h3>
                  <p className="text-gray-600">+254 723 456 789</p>
                  <p className="text-sm text-gray-500">
                    Mon-Fri, 8:00 AM - 5:00 PM
                  </p>
                </div>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 text-white rounded-full bg-primary">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">Address</h3>
                  <p className="text-gray-600">
                    The Chairperson, Tender Committee
                  </p>
                  <p className="text-sm text-gray-500">
                    Kimangu Day Secondary School
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tenders;
