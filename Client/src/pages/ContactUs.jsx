import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import {
  FaPhone,
  FaEnvelope,
  FaMailBulk,
  FaClock,
  FaHeadset,
  FaUser,
  FaTag,
  FaComment,
  FaMapMarkedAlt,
  FaShieldAlt,
  FaQuestionCircle,
  FaCalendarAlt,
  FaGraduationCap,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

const BASE_URL = import.meta.env.VITE_API_URL_BASE;

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: "" });

    try {
      const response = await fetch(`${BASE_URL}/api/contact-form`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log(BASE_URL);
      const data = await response.json();

      if (data.success) {
        setSubmitStatus({
          success: true,
          message: "Message sent successfully! We'll get back to you soon.",
        });
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });

        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus({ success: false, message: "" });
        }, 5000);
      } else {
        setSubmitStatus({
          success: false,
          message: data.message || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        success: false,
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50">
      {/* Main Content */}
      <section className="px-4 py-16 -mt-8 md:py-24">
        <div className="grid gap-8 mx-auto max-w-7xl md:grid-cols-2 lg:grid-cols-3">
          {/* Contact Information Cards */}
          <div className="space-y-6 lg:col-span-1">
            {/* Contact Card 1 */}
            <div className="p-8 bg-white shadow-lg rounded-2xl">
              <div className="mb-6">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-tertiary">
                  <FaHeadset className="text-xl text-white" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Quick Contact</h3>
                <div>
                  <a
                    href="tel:+254721415851"
                    className="flex items-center gap-3 p-3 transition-colors rounded-lg group hover:bg-gray-50"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                      <FaPhone className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">+254 721 415 851</p>
                    </div>
                  </a>

                  <a
                    href="mailto:info@kimangu.sc.ke"
                    className="flex items-center gap-3 p-3 transition-colors rounded-lg group hover:bg-gray-50"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                      <FaEnvelope className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">info@kimangu.sc.ke</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 p-3 transition-colors rounded-lg group hover:bg-gray-50">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                      <FaMailBulk className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        Postal Address
                      </p>
                      <p className="text-gray-600">
                        P.O. Box 79, Rongai, Nakuru
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Card 2 */}
            <div className="p-8 bg-white shadow-lg rounded-2xl">
              <div className="mb-6">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-secondary">
                  <FaClock className="text-xl text-white" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Working Hours</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-3">
                    <FaCheckCircle className="text-xl text-tertiary" />
                    <div>
                      <span className="font-medium">Mon-Fri:</span>
                      <span className="ml-2">8:00 AM – 5:00 PM</span>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaCheckCircle className="text-xl text-tertiary" />
                    <div>
                      <span className="font-medium">Saturday:</span>
                      <span className="ml-2">8:00 AM – 12:00 PM</span>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaTimesCircle className="text-xl text-red-500" />
                    <div>
                      <span className="font-medium">Sunday & Holidays:</span>
                      <span className="ml-2 text-red-600">Closed</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="h-full p-8 bg-white shadow-lg rounded-2xl">
              <div className="mb-8">
                <h2 className="mb-3 text-3xl font-bold">Send us a message</h2>
                <p className="text-gray-600">
                  Have questions or comments about admissions, programs, job,
                  tenders, or anything else? Fill out the form below and we'll
                  get back to you as soon as possible.
                </p>
              </div>

              {/* Status Message */}
              {submitStatus.message && (
                <div
                  className={`p-4 mb-6 rounded-lg ${
                    submitStatus.success
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  <div className="flex items-center">
                    {submitStatus.success ? (
                      <FaCheckCircle className="mr-3 text-green-600" />
                    ) : (
                      <FaTimesCircle className="mr-3 text-red-600" />
                    )}
                    <span className="font-medium">{submitStatus.message}</span>
                  </div>
                </div>
              )}

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Full Name *
                    </label>
                    <div className="relative">
                      <div className="absolute transform -translate-y-1/2 left-3 top-1/2">
                        <FaUser className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 pl-10 border border-gray-200 rounded-lg focus:outline-none focus:border-primary form-input"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Email Address *
                    </label>
                    <div className="relative">
                      <div className="absolute transform -translate-y-1/2 left-3 top-1/2">
                        <FaEnvelope className="text-gray-400" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 pl-10 border border-gray-200 rounded-lg focus:outline-none focus:border-primary form-input"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Subject *
                    </label>
                    <div className="relative">
                      <div className="absolute transform -translate-y-1/2 left-3 top-1/2">
                        <FaTag className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What is this regarding?"
                        className="w-full px-4 py-3 pl-10 border border-gray-200 rounded-lg focus:outline-none focus:border-primary form-input"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Phone Number (Optional)
                    </label>
                    <div className="relative">
                      <div className="absolute transform -translate-y-1/2 left-3 top-1/2">
                        <FaPhone className="text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+254 123 456 789"
                        className="w-full px-4 py-3 pl-10 border border-gray-200 rounded-lg focus:outline-none focus:border-primary form-input"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Your Message *
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-4">
                      <FaComment className="text-gray-400" />
                    </div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      placeholder="How can we help you today?"
                      className="w-full px-4 py-3 pl-10 border border-gray-200 rounded-lg resize-none focus:outline-none focus:border-primary form-input"
                      required
                      disabled={isSubmitting}
                    ></textarea>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <div className="items-center hidden gap-2 text-sm text-gray-500 md:flex">
                    <FaShieldAlt />
                    <span>Your information is safe with us</span>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center gap-2 px-8 py-3 font-medium text-white transition-all duration-200 rounded-lg bg-primary hover:bg-primary-light hover:shadow-lg focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <IoIosSend className="text-lg text-white" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-4 pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden shadow-xl rounded-2xl">
            <div className="aspect-w-16 aspect-h-7">
              <iframe
                width="100%"
                height="400"
                style={{ border: 0 }}
                src="https://maps.google.com/maps?q=-0.150096,35.838525&z=15&output=embed"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
                title="Kimangu Day Secondary School Location"
              ></iframe>
            </div>
            <div className="px-6 py-4 bg-white">
              <div className="flex items-center justify-between">
                <div className="hidden md:flex">
                  <h3 className="text-lg font-semibold">
                    Kimangu Day Secondary School -{" "}
                    <span className="text-base font-normal">
                      Rongai, Nakuru County
                    </span>
                  </h3>
                </div>
                <a
                  href="https://maps.google.com/maps?q=-0.150096,35.838525&z=15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary hover:bg-primary-light"
                >
                  <FaMapMarkedAlt />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ/Quick Help */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Frequently Asked Questions
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Quick answers to common questions about our school
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-white shadow-sm rounded-xl">
              <FaQuestionCircle className="mb-4 text-2xl text-primary" />
              <h4 className="mb-2 text-lg font-semibold">Admission Process</h4>
              <p className="text-gray-600">
                Learn about our admission requirements and application timeline
                for new students.
              </p>
            </div>
            <div className="p-6 bg-white shadow-sm rounded-xl">
              <FaCalendarAlt className="mb-4 text-2xl text-secondary" />
              <h4 className="mb-2 text-lg font-semibold">School Calendar</h4>
              <p className="text-gray-600">
                View our academic calendar, holidays, and important dates for
                the current year.
              </p>
            </div>
            <div className="p-6 bg-white shadow-sm rounded-xl">
              <FaGraduationCap className="mb-4 text-2xl text-tertiary" />
              <h4 className="mb-2 text-lg font-semibold">Academic Programs</h4>
              <p className="text-gray-600">
                Discover our curriculum, extracurricular activities, and
                academic support services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
