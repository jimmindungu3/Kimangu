import React, { useEffect, useRef } from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaCheckCircle,
  FaTimesCircle,
  FaUserGraduate,
  FaSchool,
  FaStar,
  FaTrophy,
  FaCalendar,
  FaClock,
  FaHandsHelping,
  FaFistRaised, 
  FaEye,
  FaRunning,
  FaAward,
  FaChartLine,
  FaUsers,
  FaHeart,
  FaBookOpen,
  FaLightbulb,
  FaShieldAlt,
} from "react-icons/fa";


const Home = () => {
  const heroImgRef = useRef(null);

  useEffect(() => {
    const isSmallScreen = window.matchMedia("(max-width: 640px)").matches;

    const heroImages = isSmallScreen
      ? [
          "/src/assets/images/hero-staff-members-small.webp",
          "/src/assets/images/hero-students-small.webp",
          "/src/assets/images/inspecting-guard-of-honor-small.webp",
        ]
      : [
          "/src/assets/images/hero-staff-members.webp",
          "/src/assets/images/hero-students.webp",
          "/src/assets/images/inspecting-guard-of-honor.webp",
        ];

    let currentImageIndex = 0;
    const heroImg = heroImgRef.current;

    function changeHeroImage() {
      currentImageIndex = (currentImageIndex + 1) % heroImages.length;
      heroImg.src = heroImages[currentImageIndex];
    }

    if (heroImg) {
      heroImg.src = heroImages[currentImageIndex];
      const interval = setInterval(changeHeroImage, 5000);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div className="font-sans text-sm text-gray-800 sm:text-base">
      {/* Hero section */}
      <section className="relative flex items-end justify-center text-center h-[45vh]">
        {/* Hero image slider */}
        <img
          ref={heroImgRef}
          id="heroImage"
          alt="Kimangu Students"
          fetchpriority="high"
          className="absolute inset-0 object-cover w-full h-full"
          style={{ zIndex: 1 }}
        />

        {/* Gradient overlay */}
        <div
          className="relative w-full py-4 bg-gradient-to-t from-gray-900/70 via-gray-900/10 to-transparent"
          style={{ zIndex: 3 }}
        >
          <div className="px-4 mx-auto max-w-7xl">
            <h2 className="px-4 py-1 text-2xl font-bold text-white sm:text-3xl lg:text-5xl">
              Kimangu Day Secondary School
            </h2>
            <p className="px-4 py-1 mx-auto mb-2 text-sm md:text-base font-semibold text-white sm:text-lg lg:text-xl">
              Nurturing Tomorrow's Leaders Through Excellence in Education,
              Character Formation, and Holistic Development
            </p>
          </div>
        </div>
      </section>

      {/* Highlights Section - We Are The Best */}
      <section className="py-12 bg-gradient-to-br from-primary-light/20 to-secondary-light/20">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="mb-6 text-center md:mb-12">
            <h2 className="text-xl font-bold text-primary sm:text-2xl lg:text-3xl">
              We Are The Best
            </h2>
          </div>

          <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
            {/* Item 1 - Academic Performance */}
            <div className="p-6 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
              <div className="flex justify-center">
                <FaUserGraduate className="text-3xl md:text-5xl text-primary" />
              </div>
              <h3 className="mt-4 mb-2 text-lg font-semibold text-primary sm:text-xl">
                #1 Academic Performance
              </h3>
              <p className="text-sm text-gray-700 lg:text-base">
                Consistently ranked as the top-performing school in our region
                with outstanding KCSE results year after year.
              </p>
            </div>

            {/* Item 2 - State-of-the-Art Facilities */}
            <div className="p-6 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
              <div className="flex justify-center">
                <FaSchool className="text-3xl md:text-5xl text-secondary" />
              </div>
              <h3 className="mt-4 mb-2 text-lg font-semibold text-primary sm:text-xl">
                State-of-the-Art Facilities
              </h3>
              <p className="text-sm text-gray-700 lg:text-base">
                Unmatched learning environment with modern labs, digital
                resources, and premium sports facilities.
              </p>
            </div>

            {/* Item 3 - Award-Winning Character Program */}
            <div className="p-6 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
              <div className="flex justify-center">
                <FaStar className="text-3xl md:text-5xl text-tertiary" />
              </div>
              <h3 className="mt-4 mb-2 text-lg font-semibold text-primary sm:text-xl">
                Award-Winning Character Program
              </h3>
              <p className="text-sm text-gray-700 lg:text-base">
                Recognized for developing leaders with strong moral character
                and exceptional discipline.
              </p>
            </div>

            {/* Item 4 - Championship-Level Programs */}
            <div className="p-6 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
              <div className="flex justify-center">
                <FaTrophy className="text-3xl md:text-5xl text-secondary-light" />
              </div>
              <h3 className="mt-4 mb-2 text-lg font-semibold text-primary sm:text-xl">
                Championship-Level Programs
              </h3>
              <p className="text-sm text-gray-700 lg:text-base">
                Our students regularly win regional and national competitions in
                sports, arts, and academics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Motto - Our Guiding Principles */}
      <section className="py-8 md:py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="px-4 mx-auto max-w-7xl">
          <h2 className="mb-4 text-xl font-bold text-center text-primary sm:text-2xl lg:text-3xl md:mb-12">
            Our Guiding Principles
          </h2>

          <div className="grid sm:grid-cols-2 gap-x-4 md:gap-x-8 gap-y-6 justify-items-center md:grid-cols-3">
            {/* Mission */}
            <div className="w-full pt-6 pb-6 overflow-hidden transition transform bg-white border rounded-lg shadow-lg border-primary/20 max-w-96 sm:w-full hover:scale-105 hover:shadow-xl">
              <div className="flex items-center justify-center text-primary">
                <FaHandsHelping className="text-3xl md:text-5xl" />
              </div>
              <div className="p-2 text-center md:p-6">
                <h3 className="mb-2 text-lg font-semibold text-primary sm:text-xl lg:text-xl">
                  Mission
                </h3>
                <p className="text-sm text-gray-600 lg:text-base">
                  To nurture responsible and disciplined students through
                  quality education, fostering critical thinking skills, and
                  promoting holistic development to prepare them for future
                  challenges.
                </p>
              </div>
            </div>

            {/* Motto */}
            <div className="w-full pt-6 pb-6 overflow-hidden transition transform bg-white border rounded-lg shadow-lg border-secondary/20 max-w-96 sm:w-full hover:scale-105 hover:shadow-xl">
              <div className="flex items-center justify-center text-secondary">
                <FaFistRaised className="text-3xl md:text-5xl" />
              </div>
              <div className="p-2 text-center md:p-6">
                <h3 className="mb-2 text-lg font-semibold text-secondary sm:text-xl lg:text-xl">
                  Motto
                </h3>
                <p className="text-sm text-gray-600 lg:text-base">Aim High!</p>
              </div>
            </div>

            {/* Vision */}
            <div className="w-full pt-6 pb-6 overflow-hidden transition transform bg-white border rounded-lg shadow-lg border-tertiary/20 max-w-96 sm:w-full hover:scale-105 hover:shadow-xl">
              <div className="flex items-center justify-center text-tertiary">
                <FaEye className="text-3xl md:text-5xl" />
              </div>
              <div className="p-2 text-center md:p-6">
                <h3 className="mb-2 text-lg font-semibold text-tertiary sm:text-xl lg:text-xl">
                  Vision
                </h3>
                <p className="text-sm text-gray-600 lg:text-base">
                  To be a center of academic excellence and moral integrity in
                  Kenya and beyond, producing well-rounded graduates who will
                  positively impact their communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News and Events */}
      <section className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-primary sm:text-2xl lg:text-3xl">
              Latest News
            </h2>
            <a
              href="/news-and-events"
              className="font-medium transition-colors duration-300 text-primary hover:text-primary/80 hover:underline"
            >
              View All News
            </a>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Bursary Award */}
            <div className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
              <img
                src="/src/assets/images/bursary-news.webp"
                alt="MP Bursary Award"
                className="object-cover object-top w-full h-48"
              />
              <div className="p-6">
                <p className="mb-2 text-sm font-semibold text-primary">
                  May 8, 2025
                </p>
                <h3 className="mb-2 text-lg font-semibold text-primary sm:text-xl lg:text-xl">
                  MP Awards Bursary to Students
                </h3>
                <p className="mb-4 text-gray-600">
                  Hon. Chebor Paul Kibet awards bursaries to deserving students
                  to support education and ease financial burden on families.
                </p>
                <a
                  href="/news-and-events"
                  className="font-medium transition-colors duration-300 text-primary hover:text-primary/80 hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>

            {/* New Computer Lab */}
            <div className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
              <img
                src="/src/assets/images/computer-lab.webp"
                loading="lazy"
                alt="New Computer Lab"
                className="object-cover object-top w-full h-48"
              />
              <div className="p-6">
                <p className="mb-2 text-sm font-semibold text-primary">
                  May 3, 2025
                </p>
                <h3 className="mb-2 text-lg font-semibold text-primary sm:text-xl lg:text-xl">
                  New Computer Lab Opens
                </h3>
                <p className="mb-4 text-gray-600">
                  Thanks to Vanessa Grant, we've opened a state-of-the-art
                  computer lab with 30 new computers for students.
                </p>
                <a
                  href="/news-and-events"
                  className="font-medium transition-colors duration-300 text-primary hover:text-primary/80 hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>

            {/* Upcoming Annual General Meeting */}
            <div className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
              <img
                src="/src/assets/images/parents-during-agm.webp"
                loading="lazy"
                alt="Annual General Meeting"
                className="object-cover w-full h-48"
              />
              <div className="p-6">
                <p className="mb-2 text-sm font-semibold text-primary">
                  May 12, 2025
                </p>
                <h3 className="mb-2 text-lg font-semibold text-primary sm:text-xl lg:text-xl">
                  Annual General Meeting
                </h3>
                <p className="mb-4 text-gray-600">
                  Parents, teachers, and BOM met to discuss school progress,
                  challenges, and future plans.
                </p>
                <a
                  href="/news-and-events"
                  className="font-medium transition-colors duration-300 text-primary hover:text-primary/80 hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Calendar */}
      <section className="py-8 md:p-16 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl">
          <h2 className="mb-8 text-xl font-bold text-primary sm:text-2xl lg:text-3xl">
            Upcoming Events
          </h2>
          <div className="space-y-4">
            {/* Event 1 */}
            <div className="flex items-start gap-4 p-4 transition-shadow duration-300 bg-white rounded-lg shadow-sm hover:shadow-md">
              <div className="flex-shrink-0 w-16 p-2 text-center text-white rounded bg-gradient-to-br from-primary to-primary/90 md:w-20 md:p-3">
                <div className="text-lg font-bold md:text-xl">15</div>
                <div className="text-xs md:text-sm">May</div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-primary sm:text-xl lg:text-xl">
                  Parents' Meeting
                </h3>
                <p className="text-gray-600">
                  Annual general meeting for all parents and guardians at the
                  school grounds.
                </p>
                <p className="mt-1 text-sm text-primary">
                  <FaClock className="inline mr-1" />
                  9:00 AM - 1:00 PM
                </p>
              </div>
            </div>

            {/* Event 2 */}
            <div className="flex items-start gap-4 p-4 transition-shadow duration-300 bg-white rounded-lg shadow-sm hover:shadow-md">
              <div className="flex-shrink-0 w-16 p-2 text-center text-white rounded bg-gradient-to-br from-secondary to-secondary/90 md:w-20 md:p-3">
                <div className="text-lg font-bold md:text-xl">22</div>
                <div className="text-xs md:text-sm">May</div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-secondary sm:text-xl lg:text-xl">
                  Inter-House Sports Competition
                </h3>
                <p className="text-gray-600">
                  Annual sports day featuring athletics, football, volleyball,
                  and basketball tournaments.
                </p>
                <p className="mt-1 text-sm text-secondary">
                  <FaClock className="inline mr-1" />
                  8:00 AM - 5:00 PM
                </p>
              </div>
            </div>

            {/* Event 3 */}
            <div className="flex items-start gap-4 p-4 transition-shadow duration-300 bg-white rounded-lg shadow-sm hover:shadow-md">
              <div className="flex-shrink-0 w-16 p-2 text-center text-white rounded bg-gradient-to-br from-tertiary to-tertiary/90 md:w-20 md:p-3">
                <div className="text-lg font-bold md:text-xl">05</div>
                <div className="text-xs md:text-sm">June</div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-tertiary sm:text-xl lg:text-xl">
                  Career Day
                </h3>
                <p className="text-gray-600">
                  Professionals from various fields will visit to guide students
                  on career choices.
                </p>
                <p className="mt-1 text-sm text-tertiary">
                  <FaClock className="inline mr-1" />
                  10:00 AM - 3:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 text-gray-800 bg-gradient-to-r from-primary to-primary/90">
        <div className="px-4 mx-auto max-w-7xl">
          <h2 className="mb-12 text-xl font-bold text-center text-white sm:text-2xl lg:text-3xl">
            What People Say About Us
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="p-6 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
              <p className="mt-4 mb-6 text-gray-700">
                Kimangu Day Secondary School provided my daughter with an
                excellent education foundation. The teachers are dedicated and
                the school maintains high standards of discipline.
              </p>
              <div className="flex items-center">
                <img
                  src="https://placehold.co/150x150/2563EB/FFF"
                  alt="Dr. Omondi - education Officer"
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-3">
                  <p className="text-base font-semibold text-primary sm:text-lg">
                    Peter Mwangi
                  </p>
                  <p className="text-sm text-gray-600">Parent</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="p-6 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
              <p className="mt-4 mb-6 text-gray-700">
                As a former student, I can confidently say that Kimangu equipped
                me with both academic knowledge and life skills that have been
                crucial to my success in university.
              </p>
              <div className="flex items-center">
                <img
                  src="/src/assets/images/dominic.webp"
                  alt="Dominic Njoroge - alumnus"
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-3">
                  <p className="text-base font-semibold text-primary sm:text-lg">
                    Dominic Njoroge
                  </p>
                  <p className="text-sm text-gray-600">Alumnus</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="p-6 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
              <p className="mt-4 mb-6 text-gray-700">
                The holistic education approach at Kimangu Day Secondary School
                ensures students develop not just academically but also in
                character and leadership.
              </p>
              <div className="flex items-center">
                <img
                  src="https://placehold.co/150x150/2563EB/FFF"
                  alt="Dr. Omondi - education Officer"
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-3">
                  <p className="text-base font-semibold text-primary sm:text-lg">
                    Dr. Omondi
                  </p>
                  <p className="text-sm text-gray-600">Education Officer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Preview */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-primary sm:text-2xl lg:text-3xl">
              School Gallery
            </h2>
            <a
              href="/gallery"
              className="font-medium transition-colors duration-300 text-primary hover:text-primary/80 hover:underline"
            >
              View All Photos
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="relative overflow-hidden transition-shadow duration-300 rounded-lg shadow-md hover:shadow-lg aspect-w-4 aspect-h-3">
              <img
                src="/src/assets/images/top-performing-students.webp"
                loading="lazy"
                alt="Top performing students in Rongai Sub County from Kimangu"
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-0 left-0 w-full p-2 text-sm text-white bg-gradient-to-t from-gray-900 to-transparent">
                Top performing students in Rongai Sub County from Kimangu
              </div>
            </div>
            <div className="relative overflow-hidden transition-shadow duration-300 rounded-lg shadow-md hover:shadow-lg aspect-w-4 aspect-h-3">
              <img
                src="/src/assets/images/ksef-nationals.webp"
                loading="lazy"
                alt="Mr. Osore With Students Receiving Award at KSEF Nationals"
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-0 left-0 w-full p-2 text-sm text-white bg-gradient-to-t from-gray-900 to-transparent">
                Mr. Osore With Students Receiving Award at KSEF Nationals
              </div>
            </div>
            <div className="relative overflow-hidden transition-shadow duration-300 rounded-lg shadow-md hover:shadow-lg aspect-w-4 aspect-h-3">
              <img
                src="/src/assets/images/students-in-computer-lab.webp"
                loading="lazy"
                alt="Students Studying in Computer Lab"
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-0 left-0 w-full p-2 text-sm text-white bg-gradient-to-t from-gray-900 to-transparent">
                Students Studying in Computer Lab
              </div>
            </div>
            <div className="relative overflow-hidden transition-shadow duration-300 rounded-lg shadow-md hover:shadow-lg aspect-w-4 aspect-h-3">
              <img
                src="/src/assets/images/teaching-staff.webp"
                loading="lazy"
                alt="Members of The Teaching Staff"
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-0 left-0 w-full p-2 text-sm text-white bg-gradient-to-t from-gray-900 to-transparent">
                Members of The Teaching Staff
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center text-white bg-gradient-to-r from-primary to-primary/90">
        <div className="max-w-3xl px-4 mx-auto">
          <h3 className="mb-4 text-xl font-bold sm:text-2xl lg:text-3xl">
            Join Kimangu Today
          </h3>
          <p className="mb-8 text-base sm:text-lg lg:text-xl">
            Enroll your child in a school that cares for their academic
            excellence and personal growth. Limited spaces available for the
            2025 academic year.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/admissions-form"
              className="px-8 py-3 font-bold transition duration-300 bg-white rounded-lg text-primary hover:bg-gray-100 hover:shadow-lg"
            >
              Apply Now
            </a>
            <a
              href="/contact-us"
              className="px-8 py-3 font-bold transition duration-300 bg-transparent border-2 border-white rounded-lg hover:bg-white hover:text-primary"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl">
          <h2 className="mb-8 text-xl font-bold text-center text-primary sm:text-2xl lg:text-3xl">
            Visit Us
          </h2>
          <div className="grid items-center gap-8 md:grid-cols-12">
            <div className="md:col-span-4">
              {/* Location */}
              <h3 className="mb-4 text-lg font-semibold text-primary sm:text-xl lg:text-xl">
                Location
              </h3>
              <p className="mb-4 text-gray-700">
                We are located in Rongai, Nakuru County, Kenya, approximately 7
                km from Rongai Town along Rongai-Kandutura Road.
              </p>

              <div className="mb-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                    <FaMapMarkerAlt className="text-primary" />
                  </div>
                  <p className="text-gray-700">
                    Kimangu, Rongai, Nakuru County
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                    <FaPhone className="text-primary" />
                  </div>
                  <p className="text-gray-700">+254 721 415 851</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                    <FaEnvelope className="text-primary" />
                  </div>
                  <p className="text-gray-700">info@kimangu.sc.ke</p>
                </div>
              </div>

              {/* Office hours */}
              <h3 className="mb-4 text-lg font-semibold text-primary sm:text-xl lg:text-xl">
                Office Hours
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-xl text-tertiary" />
                  <p className="text-gray-700">
                    <span className="font-medium">Monday - Friday:</span> 8:00
                    AM - 5:00 PM
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-xl text-tertiary" />
                  <p className="text-gray-700">
                    <span className="font-medium">Saturday:</span> 8:00 AM -
                    12:00 PM
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <FaTimesCircle className="text-xl text-red-500" />
                  <p className="text-gray-700">
                    <span className="font-medium">
                      Sunday & Public Holidays:
                    </span>{" "}
                    <span className="text-red-600">Closed</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="h-64 overflow-hidden border rounded-lg shadow-md border-primary/30 md:col-span-8 md:h-80">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://maps.google.com/maps?q=-0.150096,35.838525&z=15&output=embed"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kimangu Day Secondary School Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
