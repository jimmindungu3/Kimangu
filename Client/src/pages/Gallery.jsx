import React, { useState } from "react";

// Import all images
import computerLabSponsors from "../assets/images/computer-lab-sponsors.jpg";
import christianUnion from "../assets/images/christian-union-fellowship.jpg";
import teachersAttentive from "../assets/images/teachers-attentive-in-school-closong-ceremony.jpg";
import parentsDuringAgm from "../assets/images/parents-during-agm.webp";
import teachersLightMoment from "../assets/images/teachers-have-a-light-moment-on-sports-day.jpg";
import teachingStaff from "../assets/images/teaching-staff.jpg";
import teachingStaffLabCoats from "../assets/images/teaching-staff-in-lab-coats.jpg";
import rephaWishing from "../assets/images/repha-wishing-success.jpg";
import studentCouncil from "../assets/images/student-council-elections.jpg";
import parentsAcademicClinic from "../assets/images/parents-with-students-during-academic-clinic.jpg";
import stomachsMatter from "../assets/images/stomachs-matter.jpg";
import muslimStudents from "../assets/images/muslim-students.jpg";
import studentsTakingWater from "../assets/images/students-taking-water.jpg";
import studentsPerforming from "../assets/images/students-performing-on-agm.jpg";
import inspectingGuard from "../assets/images/inspecting-guard-of-honor.jpg";
import agricultureStudents from "../assets/images/agriculture-students.jpg";

const Gallery = () => {
  const galleryImages = [
    {
      src: computerLabSponsors,
      caption: "Computer Lab Sponsors With School Secretary",
      category: "Facilities",
      date: "Mar 2024",
    },
    {
      src: christianUnion,
      caption: "Minister Of God Preaching In A Christian Union Fellowship",
      category: "Spiritual",
      date: "Feb 2024",
    },
    {
      src: teachersAttentive,
      caption: "Teachers Attentive In School Closing Ceremony",
      category: "Academic",
      date: "Dec 2023",
    },
    {
      src: parentsDuringAgm,
      caption: "Parents During AGM",
      category: "Community",
      date: "Nov 2023",
    },
    {
      src: teachersLightMoment,
      caption: "Teachers Have A Light Moment On A Day Out",
      category: "Staff",
      date: "Oct 2023",
    },
    {
      src: teachingStaff,
      caption: "Teaching Staff Pose For A Team Photo During An AGM",
      category: "Staff",
      date: "Nov 2023",
    },
    {
      src: teachingStaffLabCoats,
      caption: "Teaching Staff In Their New Looks. They Are Happy!",
      category: "Staff",
      date: "Sep 2023",
    },
    {
      src: rephaWishing,
      caption: "Madam Repha Wishing Success To Her Candidate Class",
      category: "Academic",
      date: "Oct 2023",
    },
    {
      src: studentCouncil,
      caption: "Students Democratically Electing A New Student Council Body",
      category: "Student Life",
      date: "Jan 2024",
    },
    {
      src: parentsAcademicClinic,
      caption:
        "Parents Exchange Words With Their Children During An Academic Clinic",
      category: "Community",
      date: "Aug 2023",
    },
    {
      src: stomachsMatter,
      caption: "We Love Taking Care Of Our Stomachs",
      category: "Student Life",
      date: "May 2024",
    },
    {
      src: muslimStudents,
      caption: "Our Muslim Students Saying Prayers",
      category: "Spiritual",
      date: "Apr 2024",
    },
    {
      src: studentsTakingWater,
      caption: "Students Enjoying Clean Drinking Water",
      category: "Facilities",
      date: "Jun 2024",
    },
    {
      src: studentsPerforming,
      caption: "Students Performing During An AGM",
      category: "Events",
      date: "Nov 2023",
    },
    {
      src: inspectingGuard,
      caption: "Principal Inspecting Guard Of Honor",
      category: "Events",
      date: "Nov 2023",
    },
    {
      src: agricultureStudents,
      caption:
        "Agriculture Students Pose In Front Of Their Agriculture Project",
      category: "Academic",
      date: "Jul 2023",
    },
  ];

  const categories = [
    "All",
    "Academic",
    "Student Life",
    "Staff",
    "Community",
    "Events",
    "Spiritual",
    "Facilities",
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <div className="font-sans text-gray-900">
      {/* Hero Section */}
      <section className="relative py-12 bg-gradient-to-br from-gray-50 to-gray-100 border-b border-gray-200">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="relative px-4 mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">
              Our <span className="text-primary">Gallery</span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 md:text-xl">
              Capturing memorable moments from our school life and celebrations
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full md:text-base ${
                  selectedCategory === category
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-primary-light hover:text-white shadow"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-3xl font-bold text-gray-800">
              {selectedCategory === "All"
                ? "All Highlights"
                : `${selectedCategory} Highlights`}
            </h2>
            <p className="text-gray-600">
              {filteredImages.length} photo
              {filteredImages.length !== 1 ? "s" : ""}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden bg-white rounded-lg shadow-lg cursor-pointer group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={image.src}
                    loading="lazy"
                    alt={image.caption}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-2 right-2">
                    <span className="px-2 py-1 text-xs font-semibold text-white bg-primary rounded-full">
                      {image.category}
                    </span>
                  </div>
                  <div className="absolute top-2 left-2">
                    <span className="px-2 py-1 text-xs text-white bg-black bg-opacity-50 rounded">
                      {image.date}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-sm text-white font-medium">
                        {image.caption}
                      </p>
                      <div className="flex items-center justify-end mt-2">
                        <span className="px-3 py-1 text-xs font-medium text-white bg-secondary rounded-full">
                          View
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-0 right-0 z-10 p-2 m-4 text-white bg-red-500 rounded-full hover:bg-red-500/70 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.caption}
              className="object-contain w-full h-auto max-h-[70vh] rounded-lg"
            />
            <div className="p-6 mt-4 bg-white rounded-lg shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-800">
                  {selectedImage.caption}
                </h3>
                <span className="px-3 py-1 text-sm font-semibold text-white bg-primary rounded-full">
                  {selectedImage.category}
                </span>
              </div>
              <p className="text-sm text-gray-500 mb-2">{selectedImage.date}</p>
              <p className="text-gray-600">
                Kimangu Day Secondary School - A moment captured in our school's
                journey
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Video Section */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl font-bold text-gray-800">
              <span className="text-primary">Kimangu's Got</span>{" "}
              <span className="text-secondary">Talent</span>
            </h2>
            <p className="text-gray-600">
              Watch our students shine in these special moments
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Video 1 */}
            <div className="overflow-hidden bg-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
              <div
                className="relative"
                style={{ paddingBottom: "56.25%", height: 0 }}
              >
                <iframe
                  src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fjulius.gachoka%2Fvideos%2F1401788014339214%2F&show_text=false&width=560&t=0"
                  className="absolute top-0 left-0 w-full h-full"
                  style={{ border: "none", overflow: "hidden" }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="Weekend Challenge Vibes"
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 text-xs font-bold text-white bg-red-500 rounded-full">
                    🔥 HOT
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-gray-800">
                  Weekend Challenge Vibes
                </h3>
                <p className="text-gray-600">
                  Students showcasing their talents in our weekend challenge
                  sessions
                </p>
              </div>
            </div>

            {/* Video 2 */}
            <div className="overflow-hidden bg-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
              <div
                className="relative"
                style={{ paddingBottom: "56.25%", height: 0 }}
              >
                <iframe
                  src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fjulius.gachoka%2Fvideos%2F345746777796057%2F&show_text=false&width=560&t=0"
                  className="absolute top-0 left-0 w-full h-full"
                  style={{ border: "none", overflow: "hidden" }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="Scouts Raising National Flag"
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 text-xs font-bold text-white bg-red-500 rounded-full">
                    🇰🇪 PATRIOTIC
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-gray-800">
                  Scouts Raising National Flag
                </h3>
                <p className="text-gray-600">
                  Our scouts demonstrating discipline and patriotism during flag
                  raising ceremony
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
