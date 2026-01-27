import React, { useState, useEffect } from "react";
import axios from "axios";
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

// Icon mapping object
const iconComponents = {
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
};

const ServiceCharter = () => {
  const [serviceData, setServiceData] = useState({
    serviceCategories: [],
    servicePrinciples: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/data/serviceCharter.json");
        setServiceData(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load service charter data");
        setLoading(false);
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl text-primary">Loading Service Charter...</div>
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

  const { serviceCategories, servicePrinciples } = serviceData;

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="py-12 text-white bg-gradient-to-r from-primary to-blue-700">
        <div className="max-w-7xl px-4 mx-auto">
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
                {servicePrinciples.map((principle, index) => {
                  const IconComponent = iconComponents[principle.icon];
                  return (
                    <li key={index} className="flex items-start">
                      <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 text-white rounded-full bg-primary">
                        <IconComponent />
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
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Tables */}
      <section className="bg-gray-50">
        <div className="max-w-7xl px-4 py-12 mx-auto">
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-3xl font-bold text-primary">
              Service Standards Table
            </h2>
          </div>

          {serviceCategories.map((category, categoryIndex) => {
            const CategoryIcon = iconComponents[category.icon];
            return (
              <div key={categoryIndex} className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-12 h-12 mr-4 text-white rounded-lg bg-primary">
                    <CategoryIcon className="text-2xl" />
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
            );
          })}
        </div>
      </section>

      {/* Feedback & Complaints */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
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
