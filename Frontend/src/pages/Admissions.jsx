import React from "react";
import { Link } from "react-router-dom";
import {
  FaGraduationCap,
  FaCalendarAlt,
  FaArrowRight,
  FaQuoteLeft,
  FaStar,
  FaChartLine,
  FaHeart,
  FaHandshake,
  FaBook,
  FaFileAlt,
  FaEnvelope,
  FaPhone,
  FaClock,
  FaUsers,
} from "react-icons/fa";

const Admissions = () => {
  return (
    <div className="text-gray-600">
{/* Hero Section */}
<section
  className="relative h-[40vh] md:h-[50vh] flex items-center justify-center text-white overflow-hidden bg-cover bg-center"
  style={{
    backgroundImage: "url('/src/assets/images/admissions-banner.jpg')",
  }}
>
  {/* Overlay using Tailwind colors */}
  <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/30"></div>

  <div className="relative z-10 px-4 text-center max-w-4xl">
    <h1 className="mb-4 text-4xl font-bold md:text-6xl animate-fade-in">
      Your Journey to Excellence Begins Here
    </h1>

    <p className="max-w-2xl mx-auto mb-8 text-xl font-light">
      At our school, we don't just educate students — we nurture future
      leaders, innovators, and changemakers. Your story starts today.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link
        to="/admissions-form"
        className="inline-flex items-center justify-center gap-2 px-8 py-3 font-semibold text-white transition-all duration-300 bg-primary rounded-lg hover:bg-primary-light hover:scale-105 hover:shadow-xl"
      >
        Start Your Application
        <FaArrowRight className="animate-pulse" />
      </Link>

      <Link
        to="/schedule-visit"
        className="inline-flex items-center justify-center gap-2 px-8 py-3 font-semibold text-white transition-all duration-300 border-2 border-white rounded-lg hover:bg-secondary/20 hover:shadow-lg"
      >
        Schedule a Visit
        <FaCalendarAlt className="ml-2" />
      </Link>
    </div>
  </div>

  {/* Bottom fade */}
  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
</section>

      {/* Story Section - The Student Experience */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-800">
              More Than a School—A Community
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-primary">
              Every student writes their own success story. Here's what makes
              ours special.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-r from-blue-50 to-white rounded-2xl border border-blue-100 shadow-lg transform transition-transform hover:scale-[1.02]">
                <div className="flex items-center mb-4">
                  <div className="p-3 mr-4 text-white bg-gradient-to-r from-primary to-primary-light rounded-xl">
                    <FaUsers className="text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    A Family That Grows Together
                  </h3>
                </div>
                <p className="text-gray-700 text-lg">
                  Join a community where teachers know your name, peers become
                  lifelong friends, and every achievement is celebrated
                  together. Our small class sizes ensure personalized attention
                  and meaningful connections.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-r from-green-50 to-white rounded-2xl border border-green-100 shadow-lg transform transition-transform hover:scale-[1.02]">
                <div className="flex items-center mb-4">
                  <div className="p-3 mr-4 text-white bg-gradient-to-r from-tertiary to-tertiary-light rounded-xl">
                    <FaChartLine className="text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    From Potential to Excellence
                  </h3>
                </div>
                <p className="text-gray-700 text-lg">
                  Watch your confidence soar as you master new skills, overcome
                  challenges, and discover talents you never knew you had. Our
                  graduates consistently outperform national averages by 35%.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 p-8 bg-white rounded-2xl shadow-2xl border border-blue-100">
                <FaQuoteLeft className="mb-4 text-4xl text-primary" />
                <blockquote className="mb-6 text-xl italic text-gray-700">
                  "Coming here was the best decision of my life. The teachers
                  didn't just teach me—they believed in me. Today, I'm pursuing
                  my dream career in medicine, all thanks to the foundation
                  built here."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-16 h-16 mr-4 bg-gradient-to-r from-primary to-primary-light rounded-full"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">Sarah M.</h4>
                    <p className="text-primary">Class of 2023</p>
                    <div className="flex mt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <FaStar key={star} className="text-secondary" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-secondary to-secondary-light rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* The Opportunity - Why Choose Us */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-800">
              Your Path to Success
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-primary">
              We provide more than education—we provide opportunities that shape
              futures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 text-center transition-all duration-300 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 border border-blue-100 group">
              <div className="inline-flex items-center justify-center w-20 h-20 mb-6 text-white rounded-full bg-gradient-to-r from-primary to-primary-light group-hover:from-primary-light group-hover:to-primary transition-all">
                <FaHandshake className="text-3xl" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-800">
                Mentorship Program
              </h3>
              <p className="text-gray-600">
                One-on-one guidance from dedicated mentors who help you navigate
                academic challenges and career choices.
              </p>
            </div>

            <div className="p-8 text-center transition-all duration-300 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 border border-blue-100 group">
              <div className="inline-flex items-center justify-center w-20 h-20 mb-6 text-white rounded-full bg-gradient-to-r from-tertiary to-tertiary-light group-hover:from-tertiary-light group-hover:to-tertiary transition-all">
                <FaBook className="text-3xl" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-800">
                Innovative Learning
              </h3>
              <p className="text-gray-600">
                Hands-on projects, technology integration, and real-world
                applications that make learning exciting and relevant.
              </p>
            </div>

            <div className="p-8 text-center transition-all duration-300 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 border border-blue-100 group">
              <div className="inline-flex items-center justify-center w-20 h-20 mb-6 text-white rounded-full bg-gradient-to-r from-secondary to-secondary-light group-hover:from-secondary-light group-hover:to-secondary transition-all">
                <FaHeart className="text-3xl" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-800">
                Holistic Development
              </h3>
              <p className="text-gray-600">
                Beyond academics—develop leadership, creativity, and character
                through sports, arts, and community service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Invitation - Simple Steps */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light text-white">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold">
              Your Invitation to Excellence
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-blue-100">
              Take the first step toward an extraordinary educational experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 text-center bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 text-white rounded-full bg-white/20">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="mb-4 text-xl font-bold">Reach Out</h3>
              <p className="mb-6 text-blue-100">
                Schedule a visit or virtual meeting. See our campus, meet our
                teachers, and feel the energy of our community.
              </p>
              <Link
                to="/schedule-visit"
                className="inline-flex items-center gap-2 px-6 py-2 font-semibold text-primary bg-white rounded-lg hover:bg-gray-100"
              >
                Schedule Visit
              </Link>
            </div>

            <div className="p-8 text-center bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 text-white rounded-full bg-white/20">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="mb-4 text-xl font-bold">Apply</h3>
              <p className="mb-6 text-blue-100">
                Complete our simple application. We review every application
                personally and consider more than just scores.
              </p>
              <Link
                to="/admissions-form"
                className="inline-flex items-center gap-2 px-6 py-2 font-semibold text-primary bg-white rounded-lg hover:bg-gray-100"
              >
                Start Application
              </Link>
            </div>

            <div className="p-8 text-center bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 text-white rounded-full bg-white/20">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="mb-4 text-xl font-bold">Begin Your Journey</h3>
              <p className="mb-6 text-blue-100">
                Join our orientation, meet your classmates, and start writing
                the first chapter of your success story.
              </p>
              <Link
                to="/orientation"
                className="inline-flex items-center gap-2 px-6 py-2 font-semibold text-primary bg-white rounded-lg hover:bg-gray-100"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - The Decision */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl px-4 mx-auto text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 mb-8 text-white rounded-full bg-gradient-to-r from-primary to-primary-light shadow-xl">
            <FaGraduationCap className="text-3xl" />
          </div>

          <h2 className="mb-6 text-4xl font-bold text-gray-800">
            This Could Be Your Story
          </h2>

          <p className="mb-8 text-xl text-gray-600 max-w-3xl mx-auto">
            Imagine walking through our halls, discovering new passions, forming
            lifelong friendships, and building the foundation for your dreams.
            This isn't just school—it's the beginning of everything.
          </p>

          <div className="p-8 mb-10 rounded-2xl bg-gradient-to-r from-blue-50 to-white border border-blue-100 shadow-lg">
            <p className="text-lg text-gray-700 mb-6">
              <strong className="text-primary">Limited spots available</strong>{" "}
              for the upcoming term. Applications are reviewed on a rolling
              basis.
            </p>
            <div className="inline-flex items-center gap-4 px-6 py-3 text-sm font-semibold text-primary bg-blue-100 rounded-full">
              <FaClock />
              Early applications receive priority consideration
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admissions-form"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-primary to-primary-light rounded-xl hover:shadow-2xl hover:scale-105 transform"
            >
              <FaFileAlt />
              Begin Your Application Now
            </Link>

            <div className="relative group">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 text-lg font-bold transition-all duration-300 border-2 border-primary rounded-xl text-primary hover:bg-primary hover:text-white group-hover:shadow-lg"
              >
                <FaEnvelope />
                Talk to Our Team
              </Link>
              <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-4 py-2 text-sm text-white bg-gray-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Response within 24 hours
              </div>
            </div>
          </div>

          <p className="mt-8 text-sm text-gray-500">
            Still unsure?{" "}
            <Link
              to="/virtual-tour"
              className="font-semibold text-primary hover:underline"
            >
              Take our virtual tour
            </Link>{" "}
            or{" "}
            <Link
              to="/faq"
              className="font-semibold text-primary hover:underline"
            >
              read FAQs
            </Link>
          </p>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-6xl px-4 mx-auto text-center">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left">
              <h3 className="mb-2 text-2xl font-bold">
                Ready to write your story?
              </h3>
              <p className="text-gray-300">
                Our admissions team is here to guide you.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+254712345678"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 font-semibold text-white transition bg-primary rounded-lg hover:bg-primary-light hover:shadow-lg"
              >
                <FaPhone />
                Call Now
              </a>
              <a
                href="mailto:admissions@school.edu"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 font-semibold text-gray-900 transition bg-white rounded-lg hover:bg-gray-100 hover:shadow-lg"
              >
                <FaEnvelope />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;