import React, { useState } from "react";
import {
  FaGraduationCap,
  FaChartLine,
  FaTrophy,
  FaMicroscope,
  FaAward,
  FaBook,
  FaComments,
  FaStar,
  FaTools,
  FaLaptopCode,
  FaChartBar,
  FaMedal,
  FaUniversity,
  FaHandshake,
  FaArrowUp,
  FaHeart,
  FaCheckCircle,
  FaFlask,
  FaBookOpen,
  FaUsers,
  FaInfoCircle,
  FaClock,
  FaChalkboardTeacher,
  FaChevronDown,
  FaChevronUp,
  FaCheckCircle as FaCheckCircleSolid,
  FaUserGraduate,
  FaAtom,
  FaSeedling,
  FaCalculator,
  FaLanguage,
  FaHistory,
  FaGlobeAfrica,
  FaPaintBrush,
  FaCogs,
  FaIndustry,
  FaRobot,
  FaVial,
  FaBrain,
  FaChartPie,
  FaHandsHelping,
  FaUserTie,
  FaProjectDiagram,
  FaUser,
  FaUsersCog,
  FaLightbulb,
  FaBullhorn,
  FaCode,
  FaTree,
  FaGraduationCap as FaGradCap,
  FaBriefcase,
  FaGlobe,
  FaPalette,
  FaMusic,
  FaFutbol,
  FaTheaterMasks,
  FaChess,
  FaFlask as FaChem,
  FaMagnet,
  FaRobot as FaBot,
  FaCloud,
  FaShieldAlt,
  FaNetworkWired,
  FaTabletAlt,
  FaDatabase,
  FaLeaf,
  FaTractor,
  FaFish,
  FaStore,
  FaBalanceScale,
  FaLandmark,
  FaNewspaper,
  FaCamera,
  FaFilm,
  FaMicrophone,
  FaPencilAlt,
  FaDumbbell,
  FaSwimmer,
  FaBasketballBall,
  FaRunning,
  FaVolleyballBall,
} from "react-icons/fa";

const Academics = () => {
  const [expandedDepartmentId, setExpandedDepartmentId] = useState(null);

  const departments = [
    {
      id: 1,
      title: "SCIENCES DEPARTMENT",
      subtitle: "Laboratories of Discovery and Innovation",
      icon: <FaAtom className="text-2xl" />,
      color: "blue",
      head: {
        name: "Dr. James Mwangi",
        title: "Head of Science Department",
        qualification: "PhD in Chemical Engineering, University of Nairobi",
        experience: "18 years teaching experience",
        specialization: "Research Methodology & Advanced Chemistry",
        contact: "jmwangi@kimangu.ac.ke",
      },
      description: "Our Science Department is a hub of scientific exploration where students learn through hands-on experimentation, critical inquiry, and innovative thinking. We prepare the next generation of scientists, doctors, engineers, and researchers.",
      
      subjects: [
        { name: "Physics", code: "231", teacher: "Mr. Peter Okoth", icon: <FaMagnet /> },
        { name: "Chemistry", code: "233", teacher: "Mrs. Lucy Wangari", icon: <FaChem /> },
        { name: "Biology", code: "231", teacher: "Mr. Samuel Kiptoo", icon: <FaSeedling /> },
        { name: "Mathematics", code: "122", teacher: "Prof. John Kamau", icon: <FaCalculator /> },
      ],
      
      specialPrograms: [
        {
          title: "Science Olympiad Team",
          description: "Elite training for national and international science competitions",
          activities: ["Weekly training sessions", "Mock competitions", "Research projects"],
          achievements: ["3 national champions", "12 regional winners"],
        },
        {
          title: "Young Scientists Club",
          description: "Weekly meetings for scientific exploration and discovery",
          activities: ["Guest lectures", "Lab experiments", "Field trips to research centers"],
          achievements: ["Published 5 student research papers", "Won county science fair"],
        },
        {
          title: "Medical Careers Program",
          description: "Special preparation for students pursuing medical fields",
          activities: ["Hospital attachments", "Medical ethics workshops", "MCAT preparation"],
          achievements: ["15 students admitted to medical school in 2023"],
        },
      ],
      
      talentNurturing: [
        {
          area: "Research Skills",
          activities: ["Scientific paper writing", "Data analysis", "Experimental design"],
          competitions: ["National Science Congress", "Young Scientist Awards"],
        },
        {
          area: "Innovation & Invention",
          activities: ["Prototype development", "Patent research", "Product design"],
          competitions: ["Innovation Challenge", "STEM Fair"],
        },
        {
          area: "Science Communication",
          activities: ["Science journalism", "Poster presentations", "Public speaking"],
          competitions: ["Science Slam", "Poster Competitions"],
        },
      ],
      
      facilities: [
        "Physics Laboratory with digital sensors and measurement equipment",
        "Chemistry Lab with fume hoods, analytical balances, and safety equipment",
        "Biology Laboratory with microscopes, specimens, and incubation equipment",
        "Computer Lab for data analysis and scientific simulations",
        "Science Resource Center with journals and reference materials",
      ],
      
      achievements: [
        "County Science Fair Champions 2021, 2022, 2023",
        "12 students admitted to medical school in 2023",
        "Partnership with Kenya Medical Research Institute (KEMRI)",
        "Annual Science Symposium attracting 500+ participants",
        "Students published in international science journals",
      ],
      
      contactPerson: {
        name: "Dr. James Mwangi",
        email: "sciences@kimangu.ac.ke",
        office: "Science Block, Room 201",
        hours: "Mon-Fri, 8:00 AM - 4:00 PM",
      },
    },
    {
      id: 2,
      title: "MATHEMATICS DEPARTMENT",
      subtitle: "The Language of Logic and Patterns",
      icon: <FaCalculator className="text-2xl" />,
      color: "purple",
      head: {
        name: "Prof. John Kamau",
        title: "Head of Mathematics Department",
        qualification: "PhD in Pure Mathematics, University of Cambridge",
        experience: "20 years teaching experience",
        specialization: "Mathematical Modeling & Statistics",
        contact: "jkamau@kimangu.ac.ke",
      },
      description: "Our Mathematics Department develops logical thinking, problem-solving skills, and quantitative reasoning. We make mathematics accessible, engaging, and relevant to everyday life and future careers.",
      
      subjects: [
        { name: "Pure Mathematics", code: "121", teacher: "Dr. Susan Akinyi", icon: <FaBrain /> },
        { name: "Applied Mathematics", code: "122", teacher: "Mr. David Omondi", icon: <FaChartPie /> },
        { name: "Statistics", code: "123", teacher: "Mrs. Mary Wanjiru", icon: <FaChartBar /> },
        { name: "Business Mathematics", code: "124", teacher: "Mr. Paul Gitau", icon: <FaBriefcase /> },
      ],
      
      specialPrograms: [
        {
          title: "Math Olympiad Training",
          description: "Advanced problem-solving for national and international competitions",
          activities: ["Daily practice sessions", "Mock contests", "Strategy workshops"],
          achievements: ["2 International Math Olympiad participants", "15 national medals"],
        },
        {
          title: "Financial Literacy Program",
          description: "Practical mathematics for personal finance and investment",
          activities: ["Budgeting workshops", "Investment simulations", "Entrepreneurship math"],
          achievements: ["Students started 3 micro-businesses", "Won national financial literacy competition"],
        },
        {
          title: "Math Peer Tutoring",
          description: "Students helping students through structured peer learning",
          activities: ["Weekly tutorials", "Study groups", "Exam preparation sessions"],
          achievements: ["Improved pass rate by 25%", "Created 50 peer tutors"],
        },
      ],
      
      talentNurturing: [
        {
          area: "Problem Solving",
          activities: ["Competition math", "Puzzle solving", "Logic games"],
          competitions: ["Math Olympiad", "Kangaroo Math", "AMC"],
        },
        {
          area: "Mathematical Modeling",
          activities: ["Real-world applications", "Computer simulations", "Data analysis"],
          competitions: ["Math Modeling Challenge", "Data Science Competitions"],
        },
        {
          area: "Mathematical Art",
          activities: ["Fractal art", "Geometric design", "Mathematical origami"],
          competitions: ["Math Art Exhibition", "Design Competitions"],
        },
      ],
      
      facilities: [
        "Mathematics Resource Center with advanced calculators and software",
        "Computer Lab for statistical analysis and mathematical modeling",
        "Math Games Library with puzzles, strategy games, and competitions",
        "Quiet Study Rooms for individual problem-solving",
        "Interactive Whiteboards in all math classrooms",
      ],
      
      achievements: [
        "National Mathematics Contest Winners 2020-2023",
        "Students scoring perfect scores in KCSE Mathematics",
        "Published original mathematical proofs by students",
        "Partnership with African Institute of Mathematical Sciences",
        "Annual Pi Day celebration with 1000+ participants",
      ],
      
      contactPerson: {
        name: "Prof. John Kamau",
        email: "mathematics@kimangu.ac.ke",
        office: "Academic Block, Room 305",
        hours: "Mon-Fri, 8:30 AM - 4:30 PM",
      },
    },
    {
      id: 3,
      title: "LANGUAGES DEPARTMENT",
      subtitle: "Mastering Communication Across Cultures",
      icon: <FaLanguage className="text-2xl" />,
      color: "green",
      head: {
        name: "Dr. Grace Wambui",
        title: "Head of Languages Department",
        qualification: "PhD in Linguistics, University of Oxford",
        experience: "15 years teaching experience",
        specialization: "Multilingual Education & Sociolinguistics",
        contact: "gwambui@kimangu.ac.ke",
      },
      description: "Our Languages Department fosters effective communication skills, cultural appreciation, and literary analysis. We prepare students for global citizenship through multilingual competence and intercultural understanding.",
      
      subjects: [
        { name: "English", code: "101", teacher: "Mrs. Elizabeth Mwende", icon: <FaGlobe /> },
        { name: "Kiswahili", code: "102", teacher: "Mr. Hassan Ali", icon: <FaComments /> },
        { name: "French", code: "103", teacher: "Ms. Claire Dubois", icon: <FaGlobeAfrica /> },
        { name: "Literature", code: "104", teacher: "Prof. Michael Ochieng", icon: <FaBookOpen /> },
      ],
      
      specialPrograms: [
        {
          title: "Drama & Theatre Club",
          description: "Production of plays and performances in multiple languages",
          activities: ["Script writing", "Acting workshops", "Stage production"],
          achievements: ["Won national drama festival", "Produced 3 original plays"],
        },
        {
          title: "Creative Writing Society",
          description: "Platform for budding writers to develop literary talents",
          activities: ["Poetry slams", "Short story competitions", "Literary magazine"],
          achievements: ["Published student anthology", "Won national writing competition"],
        },
        {
          title: "Language Immersion Program",
          description: "Intensive language practice through cultural exchange",
          activities: ["Language cafés", "Cultural exchange programs", "Translation projects"],
          achievements: ["DELF certification for 95% of students", "Exchange programs with French schools"],
        },
      ],
      
      talentNurturing: [
        {
          area: "Public Speaking",
          activities: ["Debates", "Speeches", "Presentations"],
          competitions: ["National Debates", "Model UN", "Speech Competitions"],
        },
        {
          area: "Creative Writing",
          activities: ["Poetry", "Short stories", "Play writing"],
          competitions: ["Writing Competitions", "Literary Festivals", "Publishing"],
        },
        {
          area: "Translation & Interpretation",
          activities: ["Simultaneous translation", "Document translation", "Cultural mediation"],
          competitions: ["Translation Competitions", "Interpretation Challenges"],
        },
      ],
      
      facilities: [
        "Digital Language Laboratory with speech recognition software",
        "Recording Studio for pronunciation practice and podcasting",
        "Multilingual Library with books in 8 different languages",
        "Drama Studio with lighting and sound equipment",
        "Writing Center with editing software and publishing tools",
      ],
      
      achievements: [
        "National Spelling Bee Champion 2023",
        "Students published in international literary magazines",
        "DELF French certification for 95% of French students",
        "Annual International Language Day celebration",
        "Partnership with Alliance Française",
      ],
      
      contactPerson: {
        name: "Dr. Grace Wambui",
        email: "languages@kimangu.ac.ke",
        office: "Language Block, Room 102",
        hours: "Mon-Fri, 9:00 AM - 5:00 PM",
      },
    },
    {
      id: 4,
      title: "HUMANITIES & SOCIAL SCIENCES",
      subtitle: "Understanding Society, Shaping The Future",
      icon: <FaHistory className="text-2xl" />,
      color: "orange",
      head: {
        name: "Prof. Sarah Otieno",
        title: "Head of Humanities Department",
        qualification: "PhD in African History, University of Nairobi",
        experience: "18 years teaching experience",
        specialization: "Political Science & Development Studies",
        contact: "sotieno@kimangu.ac.ke",
      },
      description: "The Humanities Department develops critical thinkers who understand human society, culture, values, and institutions. We emphasize analytical skills, ethical reasoning, and global citizenship.",
      
      subjects: [
        { name: "History & Government", code: "311", teacher: "Dr. Robert Kariuki", icon: <FaLandmark /> },
        { name: "Geography", code: "312", teacher: "Mrs. Jane Njeri", icon: <FaGlobeAfrica /> },
        { name: "CRE/IRE", code: "313", teacher: "Rev. Samuel Mwangi", icon: <FaBook /> },
        { name: "Business Studies", code: "565", teacher: "Mr. James Gichuru", icon: <FaBriefcase /> },
      ],
      
      specialPrograms: [
        {
          title: "Model United Nations",
          description: "Students simulate UN committees and debate global issues",
          activities: ["Resolution writing", "Diplomatic negotiations", "Public speaking"],
          achievements: ["Best Delegation Award 2022", "3 students selected for international MUN"],
        },
        {
          title: "Business & Entrepreneurship Club",
          description: "Practical business training with real projects",
          activities: ["Market research", "Business planning", "Financial management"],
          achievements: ["Started 5 student-run businesses", "Won national business competition"],
        },
        {
          title: "Heritage & Culture Society",
          description: "Preserving and promoting cultural heritage",
          activities: ["Oral history collection", "Cultural exhibitions", "Community outreach"],
          achievements: ["Documented 50 community histories", "Cultural preservation award"],
        },
      ],
      
      talentNurturing: [
        {
          area: "Leadership & Governance",
          activities: ["Student council", "Committee work", "Policy analysis"],
          competitions: ["Leadership Conferences", "Governance Simulations"],
        },
        {
          area: "Research & Analysis",
          activities: ["Social research", "Data collection", "Policy papers"],
          competitions: ["Research Competitions", "Policy Challenges"],
        },
        {
          area: "Community Development",
          activities: ["Social projects", "Volunteer work", "Advocacy"],
          competitions: ["Community Service Awards", "Social Innovation"],
        },
      ],
      
      facilities: [
        "History Resource Room with primary source documents and archives",
        "Geography Lab with GIS software and mapping tools",
        "Business Studies Center with trading simulation software",
        "Debate Chamber with recording equipment and library",
        "Cultural Exhibition Space for displays and presentations",
      ],
      
      achievements: [
        "National Debate Champions 2022 & 2023",
        "Students published in academic journals",
        "Community development projects impacting 10,000+ people",
        "Partnership with Strathmore Business School",
        "Annual Heritage Day celebration",
      ],
      
      contactPerson: {
        name: "Prof. Sarah Otieno",
        email: "humanities@kimangu.ac.ke",
        office: "Humanities Block, Room 205",
        hours: "Mon-Fri, 8:00 AM - 4:00 PM",
      },
    },
    {
      id: 5,
      title: "TECHNICAL & APPLIED SCIENCES",
      subtitle: "Innovating Solutions, Building The Future",
      icon: <FaCogs className="text-2xl" />,
      color: "red",
      head: {
        name: "Eng. Daniel Ochieng",
        title: "Head of Technical Department",
        qualification: "MSc. in Engineering, University of Nairobi",
        experience: "16 years teaching experience",
        specialization: "Renewable Energy & Sustainable Design",
        contact: "dochieng@kimangu.ac.ke",
      },
      description: "The Technical Department equips students with practical skills for innovation, entrepreneurship, and sustainable development. We bridge theoretical knowledge with hands-on application.",
      
      subjects: [
        { name: "Agriculture", code: "443", teacher: "Mr. Joseph Kiprop", icon: <FaTractor /> },
        { name: "Computer Studies", code: "451", teacher: "Ms. Linda Chebet", icon: <FaLaptopCode /> },
        { name: "Home Science", code: "441", teacher: "Mrs. Grace Mumbi", icon: <FaPaintBrush /> },
        { name: "Wood/Metalwork", code: "445", teacher: "Mr. Samuel Njogu", icon: <FaTools /> },
      ],
      
      specialPrograms: [
        {
          title: "Innovation & Design Hub",
          description: "Space for students to develop prototypes and inventions",
          activities: ["3D printing", "Electronics projects", "App development"],
          achievements: ["National innovation award", "3 patents filed by students"],
        },
        {
          title: "Agribusiness Program",
          description: "Practical farming combined with business skills",
          activities: ["Greenhouse management", "Value addition", "Market linkages"],
          achievements: ["Supplied school kitchen", "Sold produce to local markets"],
        },
        {
          title: "ICT Academy",
          description: "Advanced training in emerging technologies",
          activities: ["Coding bootcamps", "Cybersecurity", "Data science"],
          achievements: ["Microsoft certification", "National ICT competition winners"],
        },
      ],
      
      talentNurturing: [
        {
          area: "Technical Skills",
          activities: ["Workshop practice", "Technical drawing", "Equipment operation"],
          competitions: ["Skills Competitions", "Technical Challenges"],
        },
        {
          area: "Digital Innovation",
          activities: ["Coding", "App development", "Robotics"],
          competitions: ["Hackathons", "Robotics Competitions", "App Challenges"],
        },
        {
          area: "Sustainable Design",
          activities: ["Green building", "Renewable energy", "Waste management"],
          competitions: ["Sustainability Awards", "Design Competitions"],
        },
      ],
      
      facilities: [
        "Computer Lab with 60 workstations and high-speed internet",
        "Agricultural Demonstration Farm (5 acres with irrigation)",
        "Woodwork and Metalwork Workshops with modern equipment",
        "Home Science Laboratory with kitchen and sewing facilities",
        "Innovation Lab with 3D printers, robotics kits, and electronics",
      ],
      
      achievements: [
        "National Science & Engineering Fair Gold Medal",
        "Students developed mobile app for local farmers",
        "Solar-powered irrigation system designed by students",
        "Partnership with Kenya Industrial Research Institute",
        "Annual Innovation Expo showcasing student projects",
      ],
      
      contactPerson: {
        name: "Eng. Daniel Ochieng",
        email: "technical@kimangu.ac.ke",
        office: "Technical Block, Room 101",
        hours: "Mon-Fri, 7:30 AM - 5:00 PM",
      },
    },
    {
      id: 6,
      title: "CREATIVE ARTS DEPARTMENT",
      subtitle: "Expressing Imagination, Celebrating Creativity",
      icon: <FaPalette className="text-2xl" />,
      color: "pink",
      head: {
        name: "Ms. Angela Mbeki",
        title: "Head of Creative Arts Department",
        qualification: "MFA in Fine Arts, Kenyatta University",
        experience: "12 years teaching experience",
        specialization: "Visual Arts & Creative Expression",
        contact: "ambeki@kimangu.ac.ke",
      },
      description: "Our Creative Arts Department nurtures artistic talent, creative expression, and cultural appreciation. We provide platforms for students to explore various art forms and develop their unique artistic voices.",
      
      subjects: [
        { name: "Art & Design", code: "442", teacher: "Mr. Thomas Odhiambo", icon: <FaPalette /> },
        { name: "Music", code: "511", teacher: "Mrs. Sarah Wanjiku", icon: <FaMusic /> },
        { name: "Drama", code: "512", teacher: "Mr. Peter Ouma", icon: <FaTheaterMasks /> },
        { name: "Media Studies", code: "513", teacher: "Ms. Rachel Atieno", icon: <FaCamera /> },
      ],
      
      specialPrograms: [
        {
          title: "School Band & Orchestra",
          description: "Musical ensemble performing various genres and styles",
          activities: ["Instrumental training", "Music theory", "Public performances"],
          achievements: ["County music festival winners", "Annual concert series"],
        },
        {
          title: "Visual Arts Studio",
          description: "Space for painting, sculpture, and digital art creation",
          activities: ["Art exhibitions", "Workshops", "Portfolio development"],
          achievements: ["Student art sold in galleries", "National art competition winners"],
        },
        {
          title: "Film & Media Club",
          description: "Production of films, documentaries, and media content",
          activities: ["Filmmaking", "Editing", "Screenwriting"],
          achievements: ["Film festival awards", "YouTube channel with 10k+ subscribers"],
        },
      ],
      
      talentNurturing: [
        {
          area: "Performing Arts",
          activities: ["Theatre productions", "Musical performances", "Dance"],
          competitions: ["Drama Festivals", "Music Competitions", "Talent Shows"],
        },
        {
          area: "Visual Arts",
          activities: ["Painting", "Sculpture", "Digital art"],
          competitions: ["Art Exhibitions", "Design Competitions", "Portfolio Reviews"],
        },
        {
          area: "Media Production",
          activities: ["Filmmaking", "Photography", "Journalism"],
          competitions: ["Film Festivals", "Media Awards", "Photo Contests"],
        },
      ],
      
      facilities: [
        "Art Studio with painting, drawing, and sculpture materials",
        "Music Room with various instruments and practice spaces",
        "Drama Hall with stage, lighting, and sound equipment",
        "Media Lab with cameras, editing software, and recording equipment",
        "Exhibition Gallery for displaying student artwork",
      ],
      
      achievements: [
        "National Drama Festival Winners 2022",
        "Student artwork exhibited in national galleries",
        "School band performed at national events",
        "Film club won national short film competition",
        "Annual Art Exhibition attracting 2000+ visitors",
      ],
      
      contactPerson: {
        name: "Ms. Angela Mbeki",
        email: "arts@kimangu.ac.ke",
        office: "Arts Block, Room 103",
        hours: "Mon-Fri, 9:00 AM - 5:00 PM",
      },
    },
    {
      id: 7,
      title: "SPORTS DEPARTMENT",
      subtitle: "Building Champions in Sports and Life",
      icon: <FaFutbol className="text-2xl" />,
      color: "yellow",
      head: {
        name: "Mr. Victor Omondi",
        title: "Head of Sports Department",
        qualification: "BEd in Physical Education, Kenyatta University",
        experience: "10 years coaching experience",
        specialization: "Athletics & Sports Science",
        contact: "vomondi@kimangu.ac.ke",
      },
      description: "Our Sports Department promotes physical fitness, teamwork, discipline, and sportsmanship. We develop athletes while instilling values that extend beyond the playing field.",
      
      sports: [
        { name: "Football", coach: "Mr. James Odhiambo", icon: <FaFutbol /> },
        { name: "Basketball", coach: "Ms. Susan Akinyi", icon: <FaBasketballBall /> },
        { name: "Athletics", coach: "Mr. Peter Kipchoge", icon: <FaRunning /> },
        { name: "Volleyball", coach: "Mrs. Mary Wangui", icon: <FaVolleyballBall /> },
        { name: "Swimming", coach: "Mr. David Ochieng", icon: <FaSwimmer /> },
      ],
      
      specialPrograms: [
        {
          title: "Elite Athlete Program",
          description: "Specialized training for competitive athletes",
          activities: ["Strength training", "Nutrition planning", "Sports psychology"],
          achievements: ["5 national champions", "12 regional records"],
        },
        {
          title: "Sports Science Club",
          description: "Study of sports medicine, physiology, and performance",
          activities: ["Injury prevention", "Fitness testing", "Biomechanics"],
          achievements: ["Sports science fair winners", "Published research"],
        },
        {
          title: "Community Sports Outreach",
          description: "Sharing sports facilities and coaching with community",
          activities: ["Youth coaching", "Sports clinics", "Tournaments"],
          achievements: ["Trained 500+ community youth", "Community sports day"],
        },
      ],
      
      talentNurturing: [
        {
          area: "Competitive Sports",
          activities: ["Team training", "Individual coaching", "Strategy development"],
          competitions: ["Inter-school competitions", "County championships", "National tournaments"],
        },
        {
          area: "Sports Leadership",
          activities: ["Captaincy", "Coaching certification", "Event management"],
          competitions: ["Leadership awards", "Coaching excellence"],
        },
        {
          area: "Sports Media",
          activities: ["Sports journalism", "Commentary", "Event photography"],
          competitions: ["Sports writing awards", "Broadcasting competitions"],
        },
      ],
      
      facilities: [
        "Football pitch with artificial turf and floodlights",
        "Basketball court with indoor and outdoor facilities",
        "Athletics track and field events area",
        "Swimming pool (25m) with changing rooms",
        "Gymnasium with weights and cardio equipment",
        "Sports science lab with testing equipment",
      ],
      
      achievements: [
        "County Football Champions 2023",
        "3 students selected for national teams",
        "Hosted regional athletics championships",
        "Sports scholarship recipients",
        "Annual Sports Day with 3000+ participants",
      ],
      
      contactPerson: {
        name: "Mr. Victor Omondi",
        email: "sports@kimangu.ac.ke",
        office: "Sports Complex, Office 1",
        hours: "Mon-Sat, 6:00 AM - 7:00 PM",
      },
    },
  ];

  const toggleDepartmentExpansion = (departmentId) => {
    setExpandedDepartmentId(expandedDepartmentId === departmentId ? null : departmentId);
  };

  const getColorClasses = (color) => {
    const colorMap = {
      blue: { bg: 'bg-blue-600', text: 'text-blue-600', light: 'bg-blue-50', border: 'border-blue-200' },
      purple: { bg: 'bg-purple-600', text: 'text-purple-600', light: 'bg-purple-50', border: 'border-purple-200' },
      green: { bg: 'bg-green-600', text: 'text-green-600', light: 'bg-green-50', border: 'border-green-200' },
      orange: { bg: 'bg-orange-600', text: 'text-orange-600', light: 'bg-orange-50', border: 'border-orange-200' },
      red: { bg: 'bg-red-600', text: 'text-red-600', light: 'bg-red-50', border: 'border-red-200' },
      pink: { bg: 'bg-pink-600', text: 'text-pink-600', light: 'bg-pink-50', border: 'border-pink-200' },
      yellow: { bg: 'bg-yellow-500', text: 'text-yellow-600', light: 'bg-yellow-50', border: 'border-yellow-200' },
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="text-gray-600">
      {/* Introduction Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="grid grid-cols-12 gap-12">
            {/* LEFT */}
            <div className="col-span-12 lg:col-span-8">
              <h2 className="mb-6 text-4xl font-bold text-gray-800">
                Academic Excellence at <span className="text-primary">Kimangu</span>
              </h2>

              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  At Kimangu Day Secondary School, we offer a comprehensive academic program 
                  through seven specialized departments. Each department provides expert instruction, 
                  modern facilities, and unique programs to nurture student talent and prepare them 
                  for future success.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed">
                  Our departments are led by experienced educators and supported by state-of-the-art 
                  facilities. Click on any department below to explore detailed information about 
                  subjects offered, special programs, talent nurturing areas, and achievements.
                </p>

                <div className="p-6 mt-8 bg-primary/5 rounded-xl border border-primary/20">
                  <h3 className="mb-3 text-lg font-semibold text-gray-800">
                    <FaGraduationCap className="inline mr-2 text-primary" />
                    Quick Facts
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">7</div>
                      <div className="text-sm text-gray-600">Departments</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">28+</div>
                      <div className="text-sm text-gray-600">Subjects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">50+</div>
                      <div className="text-sm text-gray-600">Clubs & Programs</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">100%</div>
                      <div className="text-sm text-gray-600">Qualified Teachers</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative col-span-12 lg:col-span-4">
              <div className="sticky top-8">
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src="/src/assets/images/career-compass.jpg"
                    alt="Academic Excellence"
                    className="object-cover w-full h-64"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl">
                        <FaTrophy className="text-2xl" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold tracking-widest opacity-90">
                          ACADEMIC EXCELLENCE
                        </p>
                        <h3 className="text-xl font-bold">
                          92.4% KCSE Mean Score
                        </h3>
                        <p className="text-xs opacity-90">2023 Results</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-6 bg-white rounded-xl shadow-sm border border-gray-200">
                  <h4 className="mb-3 font-semibold text-gray-800">
                    <FaInfoCircle className="inline mr-2 text-primary" />
                    How to Explore Departments
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <FaChevronDown className="mt-1 mr-2 text-primary text-xs" />
                      Click on any department to expand details
                    </li>
                    <li className="flex items-start">
                      <FaUser className="mt-1 mr-2 text-primary text-xs" />
                      View Head of Department information
                    </li>
                    <li className="flex items-start">
                      <FaBookOpen className="mt-1 mr-2 text-primary text-xs" />
                      Explore subjects and programs
                    </li>
                    <li className="flex items-start">
                      <FaTrophy className="mt-1 mr-2 text-primary text-xs" />
                      Check achievements and facilities
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments List Section */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-800">
              Academic Departments
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Click on any department to view detailed information
            </p>
          </div>

          {/* Departments List */}
          <div className="space-y-4">
            {departments.map((dept) => {
              const colors = getColorClasses(dept.color);
              const isExpanded = expandedDepartmentId === dept.id;

              return (
                <div
                  key={dept.id}
                  className="overflow-hidden transition-all duration-300 bg-white rounded-xl shadow-sm hover:shadow-md"
                >
                  {/* Department Header - Always Visible */}
                  <div
                    onClick={() => toggleDepartmentExpansion(dept.id)}
                    className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`flex items-center justify-center w-12 h-12 rounded-lg ${colors.bg} text-white`}>
                          {dept.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">
                            {dept.title}
                          </h3>
                          <p className={`font-medium ${colors.text}`}>
                            {dept.subtitle}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className={`px-3 py-1 text-sm font-medium rounded-full ${colors.light} ${colors.text}`}>
                          {dept.subjects ? dept.subjects.length : dept.sports?.length} {dept.subjects ? 'Subjects' : 'Sports'}
                        </span>
                        {isExpanded ? (
                          <FaChevronUp className={`${colors.text}`} />
                        ) : (
                          <FaChevronDown className={`${colors.text}`} />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content - Shows when department is clicked */}
                  {isExpanded && (
                    <div className="border-t border-gray-200">
                      <div className="p-8">
                        {/* Department Overview */}
                        <div className="mb-8">
                          <h4 className="mb-4 text-lg font-bold text-gray-800">Department Overview</h4>
                          <p className="text-gray-600 leading-relaxed">{dept.description}</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          {/* Left Column */}
                          <div className="space-y-8">
                            {/* Head of Department */}
                            <div className={`p-6 rounded-xl ${colors.light} border ${colors.border}`}>
                              <h4 className="mb-4 text-lg font-bold text-gray-800 flex items-center">
                                <FaUser className={`mr-3 ${colors.text}`} />
                                Head of Department
                              </h4>
                              <div className="space-y-3">
                                <div>
                                  <div className="font-bold text-gray-800">{dept.head.name}</div>
                                  <div className="text-sm text-gray-600">{dept.head.title}</div>
                                </div>
                                <div className="text-sm text-gray-600">
                                  <div><span className="font-medium">Qualification:</span> {dept.head.qualification}</div>
                                  <div><span className="font-medium">Experience:</span> {dept.head.experience}</div>
                                  <div><span className="font-medium">Specialization:</span> {dept.head.specialization}</div>
                                  <div><span className="font-medium">Contact:</span> {dept.head.contact}</div>
                                </div>
                              </div>
                            </div>

                            {/* Subjects/Sports Offered */}
                            <div>
                              <h4 className="mb-4 text-lg font-bold text-gray-800 flex items-center">
                                {dept.id === 7 ? (
                                  <FaFutbol className={`mr-3 ${colors.text}`} />
                                ) : (
                                  <FaBook className={`mr-3 ${colors.text}`} />
                                )}
                                {dept.id === 7 ? 'Sports Offered' : 'Subjects Offered'}
                              </h4>
                              <div className="space-y-3">
                                {(dept.subjects || dept.sports).map((item, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                                  >
                                    <div className="flex items-center">
                                      <div className={`p-2 rounded-md ${colors.light} ${colors.text} mr-3`}>
                                        {item.icon}
                                      </div>
                                      <div>
                                        <div className="font-medium text-gray-800">{item.name}</div>
                                        {dept.id === 7 ? (
                                          <div className="text-sm text-gray-600">Coach: {item.coach}</div>
                                        ) : (
                                          <div className="text-sm text-gray-600">Code: {item.code} | Teacher: {item.teacher}</div>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Right Column */}
                          <div className="space-y-8">
                            {/* Special Programs */}
                            <div>
                              <h4 className="mb-4 text-lg font-bold text-gray-800 flex items-center">
                                <FaStar className={`mr-3 ${colors.text}`} />
                                Special Programs
                              </h4>
                              <div className="space-y-4">
                                {dept.specialPrograms.map((program, idx) => (
                                  <div
                                    key={idx}
                                    className={`p-4 rounded-lg border ${colors.border}`}
                                  >
                                    <h5 className="font-bold text-gray-800 mb-2">{program.title}</h5>
                                    <p className="text-sm text-gray-600 mb-3">{program.description}</p>
                                    <div className="space-y-2">
                                      {program.activities.map((activity, actIdx) => (
                                        <div key={actIdx} className="flex items-center text-sm">
                                          <FaCheckCircle className="flex-shrink-0 mr-2 text-green-500" />
                                          <span className="text-gray-600">{activity}</span>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="mt-3 pt-3 border-t border-gray-200">
                                      <div className="text-xs font-medium text-gray-500">Achievements:</div>
                                      <div className="text-sm text-gray-600">{program.achievements.join(', ')}</div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Talent Nurturing Areas */}
                            <div>
                              <h4 className="mb-4 text-lg font-bold text-gray-800 flex items-center">
                                <FaLightbulb className={`mr-3 ${colors.text}`} />
                                Talent Nurturing Areas
                              </h4>
                              <div className="space-y-4">
                                {dept.talentNurturing.map((area, idx) => (
                                  <div
                                    key={idx}
                                    className={`p-4 rounded-lg ${colors.light}`}
                                  >
                                    <h5 className="font-bold text-gray-800 mb-2">{area.area}</h5>
                                    <div className="mb-3">
                                      <div className="text-sm font-medium text-gray-500 mb-1">Activities:</div>
                                      <div className="text-sm text-gray-600">{area.activities.join(', ')}</div>
                                    </div>
                                    <div>
                                      <div className="text-sm font-medium text-gray-500 mb-1">Competitions:</div>
                                      <div className="text-sm text-gray-600">{area.competitions.join(', ')}</div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Facilities and Achievements - Full Width */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                          {/* Facilities */}
                          <div>
                            <h4 className="mb-4 text-lg font-bold text-gray-800 flex items-center">
                              <FaUniversity className={`mr-3 ${colors.text}`} />
                              Facilities & Resources
                            </h4>
                            <div className="space-y-3">
                              {dept.facilities.map((facility, idx) => (
                                <div key={idx} className="flex items-start">
                                  <FaCheckCircle className="flex-shrink-0 mt-1 mr-3 text-green-500" />
                                  <span className="text-gray-600">{facility}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Achievements */}
                          <div>
                            <h4 className="mb-4 text-lg font-bold text-gray-800 flex items-center">
                              <FaTrophy className={`mr-3 ${colors.text}`} />
                              Recent Achievements
                            </h4>
                            <div className="space-y-3">
                              {dept.achievements.map((achievement, idx) => (
                                <div key={idx} className="flex items-start">
                                  <FaAward className="flex-shrink-0 mt-1 mr-3 text-yellow-500" />
                                  <span className="text-gray-600">{achievement}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Contact Information */}
                        <div className={`mt-8 p-6 rounded-xl ${colors.light} border ${colors.border}`}>
                          <h4 className="mb-4 text-lg font-bold text-gray-800 flex items-center">
                            <FaComments className={`mr-3 ${colors.text}`} />
                            Contact Information
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <div className="font-bold text-gray-800">{dept.contactPerson.name}</div>
                              <div className="text-sm text-gray-600">{dept.head.title}</div>
                              <div className="mt-2 text-sm text-gray-600">
                                <div><span className="font-medium">Email:</span> {dept.contactPerson.email}</div>
                                <div><span className="font-medium">Office:</span> {dept.contactPerson.office}</div>
                                <div><span className="font-medium">Office Hours:</span> {dept.contactPerson.hours}</div>
                              </div>
                            </div>
                            <div className="flex items-center justify-end">
                              <button className={`px-6 py-2 font-medium text-white rounded-lg ${colors.bg} hover:opacity-90 transition-opacity`}>
                                <FaComments className="inline mr-2" />
                                Schedule Meeting
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Summary Section */}
          <div className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-blue-100 rounded-2xl border border-primary/20">
            <h3 className="mb-4 text-xl font-bold text-gray-800 text-center">
              Comprehensive Academic Support
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 text-white rounded-full bg-primary">
                  <FaUsers className="text-xl" />
                </div>
                <h4 className="font-semibold text-gray-800">Expert Faculty</h4>
                <p className="text-sm text-gray-600">All departments led by experienced educators with advanced degrees</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 text-white rounded-full bg-primary">
                  <FaFlask className="text-xl" />
                </div>
                <h4 className="font-semibold text-gray-800">Modern Facilities</h4>
                <p className="text-sm text-gray-600">State-of-the-art laboratories, studios, and sports facilities</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 text-white rounded-full bg-primary">
                  <FaTrophy className="text-xl" />
                </div>
                <h4 className="font-semibold text-gray-800">Proven Success</h4>
                <p className="text-sm text-gray-600">Consistent excellence in academics, sports, and creative arts</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;