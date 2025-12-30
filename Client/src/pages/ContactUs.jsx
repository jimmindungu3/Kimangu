import React, { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMailBulk,
  FaMapMarkerAlt,
  FaClock,
  FaHeadset,
  FaUser,
  FaTag,
  FaComment,
  FaPaperPlane,
  FaSpinner,
  FaDirections,
  FaMapMarkedAlt,
  FaShieldAlt,
  FaQuestionCircle,
  FaCalendarAlt,
  FaGraduationCap,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({
    show: false,
    message: "",
    type: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      showNotification("Please fill in all required fields", "error");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showNotification("Please enter a valid email address", "error");
      return;
    }

    setLoading(true);

    try {
      const contactData = {
        ...formData,
        submittedAt: new Date().toISOString(),
      };

      const response = await fetch(
        "https://kimangu.onrender.com/contact/form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contactData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        showNotification(
          "✅ Message sent successfully! We will get back to you soon.",
          "success"
        );
        setFormData({
          fullName: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      showNotification(
        `❌ ${error.message || "Failed to send message. Please try again."}`,
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  const showNotification = (message, type) => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ show: false, message: "", type: "" });
    }, 5000);
  };

  const styles = {
    floatingShapes: {
      position: "absolute",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      pointerEvents: "none",
    },
    shape: {
      position: "absolute",
      borderRadius: "50%",
      background: "rgba(255, 255, 255, 0.1)",
      animation: "float 6s ease-in-out infinite",
    },
    floatAnimation: `
      @keyframes float {
        0%, 100% {
          transform: translateY(0) rotate(0deg);
        }
        50% {
          transform: translateY(-20px) rotate(180deg);
        }
      }
    `,
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
                  Have questions about admissions, programs, job, tenders, or
                  anything else? Fill out the form below and we'll get back to
                  you as soon as possible.
                </p>
              </div>

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
                        placeholder="John Doe"
                        className="w-full px-4 py-3 pl-10 border border-gray-200 rounded-lg focus:outline-none focus:border-primary form-input"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
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
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 pl-10 border border-gray-200 rounded-lg focus:outline-none focus:border-primary form-input"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
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
                      placeholder="What is this regarding?"
                      className="w-full px-4 py-3 pl-10 border border-gray-200 rounded-lg focus:outline-none focus:border-primary form-input"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                    />
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
                      rows="5"
                      placeholder="How can we help you today?"
                      className="w-full px-4 py-3 pl-10 border border-gray-200 rounded-lg resize-none focus:outline-none focus:border-primary form-input"
                      required
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <FaShieldAlt />
                    <span>Your information is safe with us</span>
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center gap-2 px-8 py-3 font-medium text-white transition-all duration-200 rounded-lg bg-primary hover:bg-primary-light hover:shadow-lg focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <FaSpinner className="animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        <span>Send Message</span>
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
                frameBorder="0"
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
                <div>
                  <h3 className="text-lg font-semibold">
                    Kimangu Day Secondary School
                  </h3>
                  <p className="text-gray-600">Rongai, Nakuru County</p>
                </div>
                <a
                  href="https://goo.gl/maps/example"
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

      {/* Notification */}
      {notification.show && (
        <div
          className={`notification fixed top-4 right-4 z-50 max-w-sm p-4 rounded-lg shadow-lg transition-all duration-300 transform translate-x-0 ${
            notification.type === "success"
              ? "bg-tertiary text-white border-l-4 border-tertiary-dark"
              : "bg-red-500 text-white border-l-4 border-red-700"
          }`}
        >
          <div className="flex items-start justify-between">
            <div className="flex-1 mr-3">
              <p className="text-sm font-medium">{notification.message}</p>
            </div>
            <button
              onClick={() =>
                setNotification({ show: false, message: "", type: "" })
              }
              className="text-white hover:text-gray-200 focus:outline-none"
            >
              <FaTimesCircle />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
