import React, { useEffect, useRef, useState } from "react";
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
  FaClock,
  FaHandsHelping,
  FaFistRaised,
  FaEye,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaPlay,
  FaPause,
  FaUsers,
  FaFlask,
  FaChartLine,
} from "react-icons/fa";
import { GiTeacher, GiTrophyCup } from "react-icons/gi";
import { MdGroups, MdLibraryBooks, MdComputer } from "react-icons/md";
import { IoTimeOutline, IoStatsChart } from "react-icons/io5";

// Import all images
import heroStaffMembers from "/src/assets/images/hero-staff-members.webp";
import heroStaffMembersSmall from "/src/assets/images/hero-staff-members-small.webp";
import heroStudents from "/src/assets/images/hero-students.webp";
import heroStudentsSmall from "/src/assets/images/hero-students-small.webp";
import inspectingGuard from "/src/assets/images/inspecting-guard-of-honor.webp";
import inspectingGuardSmall from "/src/assets/images/inspecting-guard-of-honor-small.webp";
import topPerformingStudents from "/src/assets/images/top-performing-students.webp";
import ksefNationals from "/src/assets/images/ksef-nationals.webp";
import computerLab from "/src/assets/images/students-in-computer-lab.webp";
import teachingStaff from "/src/assets/images/teaching-staff.webp";

const Home = () => {
  const heroImgRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [stats, setStats] = useState({
    students: 0,
    staff: 0,
    years: 0,
    performance: 0,
  });

  // Animated stats counter
  useEffect(() => {
    const targetStats = { students: 580, staff: 35, years: 9, performance: 98 };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let current = { students: 0, staff: 0, years: 0, performance: 0 };
    let step = 0;

    const counter = setInterval(() => {
      step++;
      current.students = Math.min(
        Math.round((targetStats.students * step) / steps),
        targetStats.students
      );
      current.staff = Math.min(
        Math.round((targetStats.staff * step) / steps),
        targetStats.staff
      );
      current.years = Math.min(
        Math.round((targetStats.years * step) / steps),
        targetStats.years
      );
      current.performance = Math.min(
        Math.round((targetStats.performance * step) / steps),
        targetStats.performance
      );

      setStats({ ...current });

      if (step >= steps) clearInterval(counter);
    }, interval);

    return () => clearInterval(counter);
  }, []);

  // Hero slider
  useEffect(() => {
    const isSmallScreen = window.matchMedia("(max-width: 640px)").matches;
    const heroImages = isSmallScreen
      ? [heroStaffMembersSmall, heroStudentsSmall, inspectingGuardSmall]
      : [heroStaffMembers, heroStudents, inspectingGuard];

    let currentImageIndex = 0;
    const heroImg = heroImgRef.current;

    function changeHeroImage() {
      if (!isPlaying) return;
      currentImageIndex = (currentImageIndex + 1) % heroImages.length;
      heroImg.src = heroImages[currentImageIndex];
      setCurrentSlide(currentImageIndex);
    }

    if (heroImg) {
      heroImg.src = heroImages[currentImageIndex];
      const interval = setInterval(changeHeroImage, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const handlePrevSlide = () => {
    const isSmallScreen = window.matchMedia("(max-width: 640px)").matches;
    const heroImages = isSmallScreen
      ? [heroStaffMembersSmall, heroStudentsSmall, inspectingGuardSmall]
      : [heroStaffMembers, heroStudents, inspectingGuard];

    const newIndex =
      currentSlide === 0 ? heroImages.length - 1 : currentSlide - 1;
    heroImgRef.current.src = heroImages[newIndex];
    setCurrentSlide(newIndex);
    setIsPlaying(false);
  };

  const handleNextSlide = () => {
    const isSmallScreen = window.matchMedia("(max-width: 640px)").matches;
    const heroImages = isSmallScreen
      ? [heroStaffMembersSmall, heroStudentsSmall, inspectingGuardSmall]
      : [heroStaffMembers, heroStudents, inspectingGuard];

    const newIndex = (currentSlide + 1) % heroImages.length;
    heroImgRef.current.src = heroImages[newIndex];
    setCurrentSlide(newIndex);
    setIsPlaying(false);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Hero section */}
      <section className="relative h-[72vh] min-h-[600px] overflow-hidden">
        <img
          ref={heroImgRef}
          id="heroImage"
          alt="Kimangu Students"
          fetchpriority="high"
          className="absolute inset-0 object-cover w-full h-full transition-opacity duration-1000"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-6xl px-4 mx-auto text-center">
          <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Kimangu Day
            <span className="block mt-2">Secondary School</span>
          </h1>
          <p className="max-w-3xl mx-auto mb-8 text-lg text-white sm:text-xl md:text-2xl">
            Nurturing Tomorrow's Leaders Through Excellence in Education,
            Character Formation, and Holistic Development
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="/about"
              className="px-8 py-3 font-bold transition duration-300 bg-transparent border-2 border-white rounded-lg text-white hover:bg-white hover:text-primary"
            >
              Learn More
            </a>
            <a
              href="/contact-us"
              className="px-8 py-3 font-bold transition duration-300 bg-white rounded-lg text-primary hover:bg-gray-100"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Slider controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center space-x-4">
          <button
            onClick={handlePrevSlide}
            className="p-2 text-white transition-colors bg-white/20 rounded-full hover:bg-white/30"
            aria-label="Previous slide"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={togglePlay}
            className="p-2 text-white transition-colors bg-white/20 rounded-full hover:bg-white/30"
            aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button
            onClick={handleNextSlide}
            className="p-2 text-white transition-colors bg-white/20 rounded-full hover:bg-white/30"
            aria-label="Next slide"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => {
                const isSmallScreen = window.matchMedia("(max-width: 640px)").matches;
                const heroImages = isSmallScreen
                  ? [heroStaffMembersSmall, heroStudentsSmall, inspectingGuardSmall]
                  : [heroStaffMembers, heroStudents, inspectingGuard];
                heroImgRef.current.src = heroImages[index];
                setCurrentSlide(index);
                setIsPlaying(false);
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index
                  ? "bg-white w-8"
                  : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-12 bg-gradient-to-r from-primary to-blue-600 text-white">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <MdGroups className="mr-2 text-3xl" />
                <p className="text-4xl font-bold">{stats.students}+</p>
              </div>
              <p className="text-lg">Students</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <GiTeacher className="mr-2 text-3xl" />
                <p className="text-4xl font-bold">{stats.staff}+</p>
              </div>
              <p className="text-lg">Dedicated Staff</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <IoTimeOutline className="mr-2 text-3xl" />
                <p className="text-4xl font-bold">{stats.years}</p>
              </div>
              <p className="text-lg">Years of Excellence</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <IoStatsChart className="mr-2 text-3xl" />
                <p className="text-4xl font-bold">{stats.performance}%</p>
              </div>
              <p className="text-lg">KCSE Performance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Why Choose Kimangu?
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              We combine academic excellence with character development to
              create well-rounded leaders of tomorrow
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-6 text-center transition-all duration-300 bg-white rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-primary/10 text-primary">
                <FaUserGraduate className="text-2xl" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-primary">
                Academic Excellence
              </h3>
              <p className="text-gray-600">
                Consistently ranked as the top-performing school in our region
                with outstanding KCSE results year after year.
              </p>
            </div>

            <div className="p-6 text-center transition-all duration-300 bg-white rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-secondary/10 text-secondary">
                <FaSchool className="text-2xl" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-primary">
                Modern Facilities
              </h3>
              <p className="text-gray-600">
                State-of-the-art labs, digital resources, and premium sports
                facilities for optimal learning.
              </p>
            </div>

            <div className="p-6 text-center transition-all duration-300 bg-white rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-tertiary/10 text-tertiary">
                <FaStar className="text-2xl" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-primary">
                Character Development
              </h3>
              <p className="text-gray-600">
                Award-winning character program developing leaders with strong
                moral character and exceptional discipline.
              </p>
            </div>

            <div className="p-6 text-center transition-all duration-300 bg-white rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-secondary-light/10 text-secondary-light">
                <GiTrophyCup className="text-2xl" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-primary">
                Championship Programs
              </h3>
              <p className="text-gray-600">
                Regional and national competition winners in sports, arts, and
                academics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Motto */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center sm:text-4xl">
            Our Guiding Principles
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Mission */}
            <div className="relative flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-white to-gray-50 rounded-xl border border-gray-100">
              <div className="absolute -top-4">
                <div className="p-3 rounded-full bg-primary text-white">
                  <FaHandsHelping className="text-xl" />
                </div>
              </div>
              <h3 className="mt-4 mb-4 text-2xl font-bold text-primary">
                Mission
              </h3>
              <p className="text-gray-600">
                To nurture responsible and disciplined students through quality
                education, fostering critical thinking skills, and promoting
                holistic development to prepare them for future challenges.
              </p>
            </div>

            {/* Motto */}
            <div className="relative flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-white to-gray-50 rounded-xl border border-gray-100">
              <div className="absolute -top-4">
                <div className="p-3 rounded-full bg-secondary text-white">
                  <FaFistRaised className="text-xl" />
                </div>
              </div>
              <h3 className="mt-4 mb-4 text-2xl font-bold text-secondary">
                Motto
              </h3>
              <p className="text-4xl font-bold mb-4">Aim High!</p>
              <p className="text-sm text-gray-500">
                Striving for excellence in all endeavors
              </p>
            </div>

            {/* Vision */}
            <div className="relative flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-white to-gray-50 rounded-xl border border-gray-100">
              <div className="absolute -top-4">
                <div className="p-3 rounded-full bg-tertiary text-white">
                  <FaEye className="text-xl" />
                </div>
              </div>
              <h3 className="mt-4 mb-4 text-2xl font-bold text-tertiary">
                Vision
              </h3>
              <p className="text-gray-600">
                To be a center of academic excellence and moral integrity in
                Kenya and beyond, producing well-rounded graduates who will
                positively impact their communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Our Core Values
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Principles that guide our daily operations and shape our students'
              character
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-5">
            {[
              {
                icon: <FaTrophy />,
                title: "Excellence",
                desc: "Highest standards",
              },
              {
                icon: <FaCheckCircle />,
                title: "Integrity",
                desc: "Honesty & ethics",
              },
              { icon: <FaClock />, title: "Discipline", desc: "Self-control" },
              { icon: <FaUsers />, title: "Responsibility", desc: "Ownership" },
              {
                icon: <FaChartLine />,
                title: "Innovation",
                desc: "Creativity",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-4 text-center transition-all duration-300 bg-white rounded-lg hover:shadow-md hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 mb-3 text-white rounded-full bg-primary">
                  {value.icon}
                </div>
                <h4 className="mb-1 font-bold text-gray-800">{value.title}</h4>
                <p className="text-sm text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Facilities */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Modern Facilities
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              State-of-the-art resources to enhance learning and development
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-6 text-center transition-all duration-300 bg-white rounded-lg shadow-sm hover:shadow-lg border border-gray-100">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 text-white rounded-full bg-primary">
                <FaFlask className="text-2xl" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-primary">
                Science Labs
              </h3>
              <p className="text-gray-600">
                Fully equipped laboratories for Physics, Chemistry, and Biology
                with modern equipment and safety features.
              </p>
            </div>

            <div className="p-6 text-center transition-all duration-300 bg-white rounded-lg shadow-sm hover:shadow-lg border border-gray-100">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 text-white rounded-full bg-secondary">
                <MdComputer className="text-2xl" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-primary">
                ICT Center
              </h3>
              <p className="text-gray-600">
                Modern computer lab with high-speed internet, digital resources,
                and programming workshops.
              </p>
            </div>

            <div className="p-6 text-center transition-all duration-300 bg-white rounded-lg shadow-sm hover:shadow-lg border border-gray-100">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 text-white rounded-full bg-tertiary">
                <MdLibraryBooks className="text-2xl" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-primary">
                Library
              </h3>
              <p className="text-gray-600">
                Extensive collection of books, digital resources, and quiet
                study areas for research and learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* News and Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl">News & Events</h2>

          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* News Column */}
            <div>
              <h3 className="mb-6 text-2xl font-semibold border-b pb-2">
                Latest News
              </h3>
              <article className="pb-6 border-b border-gray-200">
                <h4 className="mb-2 text-xl font-semibold text-primary">
                  MP Awards Bursary to Students
                </h4>

                <p className="mb-4 text-gray-600">
                  Hon. Chebor Paul Kibet awards bursaries to deserving students
                  to support education and ease financial burden on families.
                </p>

                {/* Bottom row */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 text-sm font-medium rounded-full bg-gray-200 text-gray-500">
                    May 8, 2025
                  </span>

                  <a
                    href="/news-and-events"
                    className="inline-flex items-center font-medium text-primary hover:text-primary/80 group"
                  >
                    More News
                    <FaArrowRight className="ml-2 text-sm transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
              <article className="pb-6 border-b border-gray-200">
                <h4 className="mb-2 text-xl font-semibold text-primary">
                  Annual Sports Day Held Successfully
                </h4>

                <p className="mb-4 text-gray-600">
                  Students showcased their talent and team spirit during our
                  annual sports day, with winners receiving medals and
                  certificates.
                </p>

                {/* Bottom row */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 text-sm font-medium rounded-full bg-gray-200 text-gray-500">
                    April 28, 2025
                  </span>

                  <a
                    href="/news-and-events"
                    className="inline-flex items-center font-medium text-primary hover:text-primary/80 group"
                  >
                    More News
                    <FaArrowRight className="ml-2 text-sm transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            </div>

            {/* Events Column */}
            <div>
              <h3 className="mb-6 text-2xl font-semibold border-b pb-2">
                Upcoming Events
              </h3>
              <div className="space-y-6">
                <div className="flex pb-6 border-b border-gray-200">
                  <div className="flex-shrink-0 mr-4">
                    <div className="flex flex-col items-center justify-center w-16 h-16 rounded-lg bg-primary text-white">
                      <span className="text-xl font-bold">15</span>
                      <span className="text-sm">May</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-2 text-xl font-semibold text-primary">
                      Parents' Annual General Meeting (AGM)
                    </h4>
                    <p className="mb-2 text-gray-600">
                      Annual general meeting for all parents and guardians at
                      the school grounds.
                    </p>
                    <div className="flex items-center justify-end text-sm text-gray-500">
                      <FaClock className="mr-2" />
                      9:00 AM - 1:00 PM
                    </div>
                  </div>
                </div>

                <div className="flex pb-6 border-b border-gray-200">
                  <div className="flex-shrink-0 mr-4">
                    <div className="flex flex-col items-center justify-center w-16 h-16 rounded-lg bg-secondary text-white">
                      <span className="text-xl font-bold">22</span>
                      <span className="text-sm">May</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-2 text-xl font-semibold text-secondary">
                      Inter-House Sports Competition
                    </h4>
                    <p className="mb-2 text-gray-600">
                      Annual sports day featuring athletics, football,
                      volleyball, and basketball tournaments.
                    </p>
                    <div className="flex items-center justify-end text-sm text-gray-500">
                      <FaClock className="mr-2" />
                      8:00 AM - 5:00 PM
                    </div>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="flex flex-col items-center justify-center w-16 h-16 rounded-lg bg-tertiary text-white">
                      <span className="text-xl font-bold">05</span>
                      <span className="text-sm">June</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-2 text-xl font-semibold text-tertiary">
                      Career Day
                    </h4>
                    <p className="mb-2 text-gray-600">
                      Professionals from various fields will visit to guide
                      students on career choices.
                    </p>
                    <div className="flex items-center justify-end text-sm text-gray-500">
                      <FaClock className="mr-2" />
                      10:00 AM - 3:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl">School Gallery</h2>
            <a
              href="/gallery"
              className="flex items-center font-medium transition-colors text-primary hover:text-primary/80 group"
            >
              View All Photos
              <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="relative overflow-hidden rounded-lg group">
              <img
                src={topPerformingStudents}
                loading="lazy"
                alt="Top performing students"
                className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="text-sm">
                    Top performing students in Rongai Sub County
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg group">
              <img
                src={ksefNationals}
                loading="lazy"
                alt="Mr. Osore With Students Receiving Award at KSEF Nationals"
                className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="text-sm">
                    Mr. Osore With Students Receiving Award at KSEF Nationals
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg group">
              <img
                src={computerLab}
                loading="lazy"
                alt="Students Studying in Computer Lab"
                className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="text-sm">Students Studying in Computer Lab</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg group">
              <img
                src={teachingStaff}
                loading="lazy"
                alt="Members of The Teaching Staff"
                className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="text-sm">Members of The Teaching Staff</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl">
          <h2 className="mb-8 text-xl font-bold text-center sm:text-2xl lg:text-3xl">
            Visit Us
          </h2>
          <div className="grid items-center gap-8 md:grid-cols-12">
            <div className="md:col-span-4">
              {/* Location */}
              <h3 className="mb-4 text-lg font-semibold sm:text-xl lg:text-xl">
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
              <h3 className="mb-4 text-lg font-semibold sm:text-xl lg:text-xl">
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