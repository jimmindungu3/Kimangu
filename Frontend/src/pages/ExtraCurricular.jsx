import React from "react";

const ExtraCurricular = () => {
  return (
    <div className="text-gray-600">
      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="grid grid-cols-12 gap-12">
            {/* LEFT */}
            <div className="col-span-12 lg:col-span-8">
              <h2 className="mb-6 text-3xl font-bold text-gray-800">
                Holistic Student Development
              </h2>

              <div className="space-y-4">
                <p className="text-lg text-gray-600">
                  At Kimangu Day Secondary School, we believe that true
                  education extends beyond the classroom. Our non-academic
                  departments are designed to nurture well-rounded individuals
                  by developing talents, building character, and fostering
                  essential life skills.
                </p>

                <p className="text-lg text-gray-600">
                  Through sports, clubs, counseling, and creative activities, we
                  provide platforms for students to discover their passions,
                  develop leadership skills, and build meaningful relationships.
                  Our approach ensures every student finds their unique path to
                  success.
                </p>

                <p className="text-lg text-gray-600">
                  We maintain a balanced program that complements academic
                  learning with practical experiences, preparing students for
                  the challenges and opportunities of the modern world.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2">
                <div className="p-6 border border-gray-200 rounded-lg">
                  <h3 className="flex items-center mb-3 text-lg font-semibold text-gray-800">
                    <i className="mr-3 text-xl text-primary fas fa-heart"></i>
                    Our Philosophy
                  </h3>
                  <p className="text-gray-600">
                    To create a nurturing environment where students can
                    explore, create, and grow through diverse non-academic
                    experiences that build character and resilience.
                  </p>
                </div>

                <div className="p-6 border border-gray-200 rounded-lg">
                  <h3 className="flex items-center mb-3 text-lg font-semibold text-gray-800">
                    <i className="mr-3 text-xl text-primary fas fa-bullseye"></i>
                    Our Approach
                  </h3>
                  <p className="text-gray-600">
                    Inclusive, student-led activities with professional guidance
                    that encourage participation, teamwork, and personal growth
                    for every student.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative col-span-12 lg:col-span-4">
              <img
                src="/src/assets/images/sports.jpg"
                alt="Student Activities"
                className="object-cover w-full h-full rounded-lg shadow-lg"
              />

              <div className="absolute bottom-0 left-0 max-w-xs p-6 -mb-8 -ml-4 bg-white rounded-lg shadow-lg border border-gray-200">
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-12 h-12 mr-4 text-white rounded-full bg-primary">
                    <i className="text-xl fas fa-users"></i>
                  </div>
                  <div>
                    <p className="text-sm font-semibold tracking-widest text-primary">
                      ACTIVE PARTICIPATION
                    </p>
                    <h3 className="text-lg font-bold text-gray-800">
                      85% Student Involvement
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Non-Academic Departments */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-800">
              Our Non-Academic Departments
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Each department provides unique opportunities for students to
              develop skills, explore interests, and build lasting connections
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Games & Sports Department */}
            <div className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/src/assets/images/sports.webp"
                  alt="Sports Activities"
                  className="w-full h-full transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="flex items-center text-xl font-bold text-white">
                    <i className="mr-3 fas fa-running"></i>
                    Games & Sports Department
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 overflow-hidden rounded-full">
                    <div className="flex items-center justify-center w-full h-full bg-primary/10">
                      <img src="/src/assets/images/user.png" alt="Coach" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-primary">
                      Head of Sports
                    </h4>
                    <p className="text-sm text-gray-600">Mr. Peter Kamau</p>
                    <p className="text-xs text-gray-500">
                      Certified Sports Coach, 10 years experience
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="mb-2 font-semibold text-gray-800">
                    Sports Activities:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
                      Football
                    </span>
                    <span className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
                      Basketball
                    </span>
                    <span className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
                      Athletics
                    </span>
                    <span className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
                      Volleyball
                    </span>
                    <span className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
                      Netball
                    </span>
                    <span className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
                      Rugby
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between text-sm">
                    <span className="text-primary">
                      <i className="mr-1 fas fa-trophy"></i>
                      15+ Trophies
                    </span>
                    <span className="text-primary">
                      <i className="mr-1 fas fa-users"></i>
                      200+ Participants
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Clubs & Societies Department */}
            <div className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/src/assets/images/clubs.webp"
                  alt="Club Activities"
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-secondary/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="flex items-center text-xl font-bold text-white">
                    <i className="mr-3 fas fa-users"></i>
                    Clubs & Societies Department
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 overflow-hidden rounded-full">
                    <div className="flex items-center justify-center w-full h-full bg-secondary/10">
                      <img src="/src/assets/images/user.png" alt="Patron" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-secondary">
                      Head of Clubs
                    </h4>
                    <p className="text-sm text-gray-600">Ms. Jane Wanjiru</p>
                    <p className="text-xs text-gray-500">
                      B.Ed Guidance & Counseling, 8 years experience
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="mb-2 font-semibold text-gray-800">
                    Active Clubs:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-sm rounded-full bg-secondary/10 text-secondary">
                      Science Club
                    </span>
                    <span className="px-3 py-1 text-sm rounded-full bg-secondary/10 text-secondary">
                      Debate Club
                    </span>
                    <span className="px-3 py-1 text-sm rounded-full bg-secondary/10 text-secondary">
                      Environmental Club
                    </span>
                    <span className="px-3 py-1 text-sm rounded-full bg-secondary/10 text-secondary">
                      Drama Club
                    </span>
                    <span className="px-3 py-1 text-sm rounded-full bg-secondary/10 text-secondary">
                      ICT Club
                    </span>
                    <span className="px-3 py-1 text-sm rounded-full bg-secondary/10 text-secondary">
                      Chess Club
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between text-sm">
                    <span className="text-secondary">
                      <i className="mr-1 fas fa-club"></i>8 Active Clubs
                    </span>
                    <span className="text-secondary">
                      <i className="mr-1 fas fa-award"></i>
                      25+ Awards
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Guidance & Counseling Department */}
            <div className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/src/assets/images/guidance-and-counselling.jpg"
                  alt="Counseling Session"
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="flex items-center text-xl font-bold text-white">
                    <i className="mr-3 fas fa-hands-helping"></i>
                    Guidance & Counseling
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 overflow-hidden rounded-full">
                    <div className="flex items-center justify-center w-full h-full bg-primary/10">
                      <img src="/src/assets/images/user.png" alt="Counselor" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-primary">
                      Head Counselor
                    </h4>
                    <p className="text-sm text-gray-600">Ms. Faith Muthoni</p>
                    <p className="text-xs text-gray-500">
                      MA Counseling Psychology, 12 years experience
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="mb-2 font-semibold text-gray-800">
                    Services Offered:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
                      Career Guidance
                    </span>
                    <span className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
                      Academic Counseling
                    </span>
                    <span className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
                      Peer Counseling
                    </span>
                    <span className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
                      Stress Management
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between text-sm">
                    <span className="text-primary">
                      <i className="mr-1 fas fa-calendar-check"></i>
                      Weekly Sessions
                    </span>
                    <span className="text-primary">
                      <i className="mr-1 fas fa-user-friends"></i>
                      300+ Students Served
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Library & Resource Center */}
            <div className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/src/assets/images/library.jpg"
                  alt="Library Resources"
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-secondary/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="flex items-center text-xl font-bold text-white">
                    <i className="mr-3 fas fa-book"></i>
                    Library & Resource Center
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 overflow-hidden rounded-full">
                    <div className="flex items-center justify-center w-full h-full bg-secondary/10">
                      <img src="/src/assets/images/user.png" alt="Librarian" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-secondary">
                      Head Librarian
                    </h4>
                    <p className="text-sm text-gray-600">Ms. Mary Atieno</p>
                    <p className="text-xs text-gray-500">
                      MLS Library Science, 15 years experience
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="mb-2 font-semibold text-gray-800">
                    Resources Available:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-sm rounded-full bg-secondary/10 text-secondary">
                      Academic Books
                    </span>
                    <span className="px-3 py-1 text-sm rounded-full bg-secondary/10 text-secondary">
                      Digital Library
                    </span>
                    <span className="px-3 py-1 text-sm rounded-full bg-secondary/10 text-secondary">
                      E-Learning
                    </span>
                    <span className="px-3 py-1 text-sm rounded-full bg-secondary/10 text-secondary">
                      Research Materials
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between text-sm">
                    <span className="text-secondary">
                      <i className="mr-1 fas fa-book-open"></i>
                      5,000+ Books
                    </span>
                    <span className="text-secondary">
                      <i className="mr-1 fas fa-laptop"></i>
                      15 Computers
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Music & Performing Arts */}
            <div className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/src/assets/images/music.webp"
                  alt="Music Performance"
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="flex items-center text-xl font-bold text-white">
                    <i className="mr-3 fas fa-music"></i>
                    Music & Performing Arts
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 overflow-hidden rounded-full">
                    <div className="flex items-center justify-center w-full h-full bg-primary/10">
                      <img src="/src/assets/images/user.png" alt="Director" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-primary">
                      Arts Director
                    </h4>
                    <p className="text-sm text-gray-600">Mr. David Odhiambo</p>
                    <p className="text-xs text-gray-500">
                      BA Performing Arts, 9 years experience
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="mb-2 font-semibold text-gray-800">
                    Activities:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
                      Choir
                    </span>
                    <span className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
                      Band
                    </span>
                    <span className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
                      Drama Club
                    </span>
                    <span className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
                      Dance Troupes
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between text-sm">
                    <span className="text-primary">
                      <i className="mr-1 fas fa-microphone"></i>3 Annual
                      Concerts
                    </span>
                    <span className="text-primary">
                      <i className="mr-1 fas fa-trophy"></i>
                      12 Awards
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Student Leadership */}
            <div className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/src/assets/images/leadership.webp"
                  alt="Student Leaders"
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-secondary/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="flex items-center text-xl font-bold text-white">
                    <i className="mr-3 fas fa-user-graduate"></i>
                    Student Leadership
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 overflow-hidden rounded-full">
                    <div className="flex items-center justify-center w-full h-full bg-secondary/10">
                      <img
                        src="/src/assets/images/user.png"
                        alt="Coordinator"
                      />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-secondary">
                      Leadership Coordinator
                    </h4>
                    <p className="text-sm text-gray-600">Mr. Samuel Njoroge</p>
                    <p className="text-xs text-gray-500">
                      M.Ed Educational Leadership, 7 years experience
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="mb-2 font-semibold text-gray-800">
                    Leadership Bodies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-sm rounded-full bg-secondary/10 text-secondary">
                      Student Council
                    </span>
                    <span className="px-3 py-1 text-sm rounded-full bg-secondary/10 text-secondary">
                      Prefects Board
                    </span>
                    <span className="px-3 py-1 text-sm rounded-full bg-secondary/10 text-secondary">
                      Class Monitors
                    </span>
                    <span className="px-3 py-1 text-sm rounded-full bg-secondary/10 text-secondary">
                      Club Presidents
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between text-sm">
                    <span className="text-secondary">
                      <i className="mr-1 fas fa-users"></i>
                      45 Student Leaders
                    </span>
                    <span className="text-secondary">
                      <i className="mr-1 fas fa-calendar-alt"></i>
                      Monthly Forums
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Achievements Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-800">
              Impact & Achievements
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Our non-academic programs have significantly contributed to
              student development and school reputation
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-8 text-center transition-transform duration-300 bg-white rounded-lg shadow-lg hover:transform hover:scale-105">
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 text-white rounded-full bg-primary">
                <i className="text-2xl fas fa-trophy"></i>
              </div>
              <div className="text-4xl font-bold text-primary">50+</div>
              <p className="mt-2 text-gray-600">Sports trophies won</p>
              <div className="mt-3 text-sm text-primary">
                <i className="fas fa-arrow-up"></i> County & regional levels
              </div>
            </div>

            <div className="p-8 text-center transition-transform duration-300 bg-white rounded-lg shadow-lg hover:transform hover:scale-105">
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 text-white rounded-full bg-secondary">
                <i className="text-2xl fas fa-users"></i>
              </div>
              <div className="text-4xl font-bold text-secondary">85%</div>
              <p className="mt-2 text-gray-600">Student participation</p>
              <div className="mt-3 text-sm text-secondary">
                <i className="fas fa-heart"></i> In extracurricular activities
              </div>
            </div>

            <div className="p-8 text-center transition-transform duration-300 bg-white rounded-lg shadow-lg hover:transform hover:scale-105">
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 text-white rounded-full bg-primary">
                <i className="text-2xl fas fa-award"></i>
              </div>
              <div className="text-4xl font-bold text-primary">37</div>
              <p className="mt-2 text-gray-600">Club competition awards</p>
              <div className="mt-3 text-sm text-primary">
                <i className="fas fa-star"></i> Last academic year
              </div>
            </div>

            <div className="p-8 text-center transition-transform duration-300 bg-white rounded-lg shadow-lg hover:transform hover:scale-105">
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 text-white rounded-full bg-secondary">
                <i className="text-2xl fas fa-smile"></i>
              </div>
              <div className="text-4xl font-bold text-secondary">95%</div>
              <p className="mt-2 text-gray-600">Student satisfaction rate</p>
              <div className="mt-3 text-sm text-secondary">
                <i className="fas fa-check-circle"></i> Non-academic programs
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities & Resources Section */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl">
          <h2 className="mb-4 text-3xl text-center font-bold text-gray-800">
            Facilities & Resources
          </h2>
          <p className="max-w-3xl mx-auto mb-12 text-center text-gray-600">
            State-of-the-art facilities designed to support diverse student
            interests and talents
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Sports Facilities */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 mr-4 text-white rounded-full bg-primary">
                  <i className="text-xl fas fa-running"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Sports Facilities
                </h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <i className="mt-1 mr-3 text-primary fas fa-check-circle"></i>
                  <span>Full-size football pitch with floodlights</span>
                </li>
                <li className="flex items-start">
                  <i className="mt-1 mr-3 text-primary fas fa-check-circle"></i>
                  <span>Basketball and volleyball courts</span>
                </li>
                <li className="flex items-start">
                  <i className="mt-1 mr-3 text-primary fas fa-check-circle"></i>
                  <span>400m athletics track</span>
                </li>
                <li className="flex items-start">
                  <i className="mt-1 mr-3 text-primary fas fa-check-circle"></i>
                  <span>Indoor games room (chess, table tennis)</span>
                </li>
              </ul>
            </div>

            {/* Creative Spaces */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 mr-4 text-white rounded-full bg-secondary">
                  <i className="text-xl fas fa-paint-brush"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Creative Spaces
                </h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <i className="mt-1 mr-3 text-secondary fas fa-check-circle"></i>
                  <span>Music room with various instruments</span>
                </li>
                <li className="flex items-start">
                  <i className="mt-1 mr-3 text-secondary fas fa-check-circle"></i>
                  <span>Art studio with pottery equipment</span>
                </li>
                <li className="flex items-start">
                  <i className="mt-1 mr-3 text-secondary fas fa-check-circle"></i>
                  <span>Drama hall with stage and lighting</span>
                </li>
                <li className="flex items-start">
                  <i className="mt-1 mr-3 text-secondary fas fa-check-circle"></i>
                  <span>Digital media production corner</span>
                </li>
              </ul>
            </div>

            {/* Support Facilities */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 mr-4 text-white rounded-full bg-primary">
                  <i className="text-xl fas fa-hands-helping"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Support Facilities
                </h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <i className="mt-1 mr-3 text-primary fas fa-check-circle"></i>
                  <span>Modern counseling rooms</span>
                </li>
                <li className="flex items-start">
                  <i className="mt-1 mr-3 text-primary fas fa-check-circle"></i>
                  <span>Quiet study zones in library</span>
                </li>
                <li className="flex items-start">
                  <i className="mt-1 mr-3 text-primary fas fa-check-circle"></i>
                  <span>Leadership training room</span>
                </li>
                <li className="flex items-start">
                  <i className="mt-1 mr-3 text-primary fas fa-check-circle"></i>
                  <span>Parent-student meeting spaces</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExtraCurricular;