import React, { useState } from "react";
import {
  FaHeart,
  FaBullseye,
  FaUsers,
  FaRunning,
  FaTrophy,
  FaMusic,
  FaBook,
  FaBookOpen,
  FaLaptop,
  FaMicrophone,
  FaUserGraduate,
  FaCalendarAlt,
  FaArchive,
  FaSmile,
  FaPaintBrush,
  FaHandsHelping,
  FaInfoCircle,
  FaCheckCircle,
  FaArrowUp,
  FaStar,
  FaChevronDown,
  FaChevronUp,
  FaCheckCircle as FaCheckCircleSolid,
  FaFutbol,
  FaBasketballBall,
  FaVolleyballBall,
  FaSwimmer,
  FaTableTennis,
  FaChess,
  FaTree,
  FaRecycle,
  FaCamera,
  FaVideo,
  FaDrum,
  FaGuitar,
  FaMicroscope,
  FaRobot,
  FaCode,
  FaBrain,
  FaBalanceScale,
  FaComments,
  FaShieldAlt,
  FaMedkit,
  FaLightbulb,
  FaHandshake,
  FaAward,
  FaChalkboardTeacher,
  FaClipboardList,
  FaUsers as FaTeam,
  FaBullhorn,
  FaFlag,
  FaGraduationCap,
  FaUserFriends,
  FaCogs,
  FaProjectDiagram,
} from "react-icons/fa";

const ExtraCurricular = () => {
  const [expandedDepartmentId, setExpandedDepartmentId] = useState(null);

  const departments = [
    {
      id: 1,
      title: "GAMES & SPORTS DEPARTMENT",
      subtitle: "Building Champions in Sports and Life",
      icon: <FaRunning className="text-2xl" />,
      color: "red",
      head: {
        name: "Mr. Peter Kamau",
        title: "Head of Sports & Physical Education",
        qualification: "BEd Physical Education, Sports Science, Kenyatta University",
        experience: "12 years coaching experience",
        specialization: "Athletics Training & Sports Psychology",
        contact: "pkamau@kimangu.ac.ke",
      },
      description: "Our Sports Department promotes physical fitness, teamwork, discipline, and sportsmanship. We develop athletes while instilling values that extend beyond the playing field. We believe sports build character and prepare students for life's challenges.",
      
      programs: [
        {
          title: "Elite Athlete Development Program",
          description: "Specialized training for competitive athletes with potential for national representation",
          activities: ["Strength & conditioning", "Nutrition planning", "Sports psychology sessions", "Video analysis"],
          achievements: ["5 national champions", "12 regional records", "3 students selected for national teams"],
        },
        {
          title: "Sports Science Club",
          description: "Study of sports medicine, physiology, biomechanics, and performance analysis",
          activities: ["Injury prevention workshops", "Fitness testing", "Biomechanics analysis", "Research projects"],
          achievements: ["Sports science fair winners", "Published research papers", "Partnership with sports science institute"],
        },
        {
          title: "Community Sports Outreach",
          description: "Sharing sports facilities and coaching expertise with the local community",
          activities: ["Youth coaching clinics", "Community tournaments", "Sports equipment drives", "Disability sports programs"],
          achievements: ["Trained 500+ community youth", "Annual community sports day", "Partnership with local sports clubs"],
        },
      ],
      
      sports: [
        { name: "Football", coach: "Mr. James Odhiambo", level: "County Champions", icon: <FaFutbol /> },
        { name: "Basketball", coach: "Ms. Susan Akinyi", level: "Regional Finalists", icon: <FaBasketballBall /> },
        { name: "Athletics", coach: "Mr. Peter Kipchoge", level: "National Qualifiers", icon: <FaRunning /> },
        { name: "Volleyball", coach: "Mrs. Mary Wangui", level: "County Champions", icon: <FaVolleyballBall /> },
        { name: "Swimming", coach: "Mr. David Ochieng", level: "Regional Level", icon: <FaSwimmer /> },
        { name: "Table Tennis", coach: "Mr. Samuel Njoroge", level: "School League", icon: <FaTableTennis /> },
        { name: "Chess", coach: "Ms. Grace Mwende", level: "National Participants", icon: <FaChess /> },
      ],
      
      talentNurturing: [
        {
          area: "Competitive Sports Excellence",
          activities: ["Intensive team training", "Individual skill development", "Strategy and tactics", "Mental conditioning"],
          competitions: ["Inter-school competitions", "County championships", "National tournaments", "International exchanges"],
        },
        {
          area: "Sports Leadership & Management",
          activities: ["Team captaincy training", "Coaching certification", "Event management", "Sports administration"],
          competitions: ["Leadership awards", "Coaching excellence", "Event organization competitions"],
        },
        {
          area: "Sports Media & Journalism",
          activities: ["Sports reporting", "Commentary training", "Event photography", "Social media management"],
          competitions: ["Sports writing awards", "Broadcasting competitions", "Photography contests"],
        },
      ],
      
      facilities: [
        "Full-size football pitch with artificial turf and floodlights",
        "Basketball court (indoor and outdoor facilities)",
        "400m athletics track with field events area",
        "Swimming pool (25m) with changing rooms and lifeguard",
        "Modern gymnasium with weights and cardio equipment",
        "Sports science lab with testing and analysis equipment",
        "Indoor games hall for table tennis, chess, and badminton",
      ],
      
      achievements: [
        "County Football Champions 2021, 2022, 2023",
        "3 students selected for national athletics team",
        "Hosted regional athletics championships",
        "15 sports scholarship recipients",
        "Annual Sports Day with 3000+ participants",
        "Partnership with professional sports clubs",
      ],
      
      contactPerson: {
        name: "Mr. Peter Kamau",
        email: "sports@kimangu.ac.ke",
        office: "Sports Complex, Office 1",
        hours: "Mon-Sat, 6:00 AM - 7:00 PM",
        phone: "+254 712 345 678",
      },
    },
    {
      id: 2,
      title: "CLUBS & SOCIETIES DEPARTMENT",
      subtitle: "Exploring Passions, Building Communities",
      icon: <FaUsers className="text-2xl" />,
      color: "green",
      head: {
        name: "Ms. Jane Wanjiru",
        title: "Head of Clubs & Societies",
        qualification: "MEd in Educational Psychology, University of Nairobi",
        experience: "10 years experience in student activities coordination",
        specialization: "Youth Development & Program Coordination",
        contact: "jwanjiru@kimangu.ac.ke",
      },
      description: "Our Clubs & Societies Department provides platforms for students to explore interests, develop skills, and build communities around shared passions. We foster leadership, creativity, and social responsibility through diverse club activities.",
      
      clubs: [
        {
          name: "Science & Innovation Club",
          patron: "Dr. James Mwangi",
          activities: ["Research projects", "Science fairs", "Innovation challenges"],
          achievements: ["National science fair winners", "Published research"],
          icon: <FaMicroscope />,
        },
        {
          name: "Debate & Model UN Society",
          patron: "Prof. Sarah Otieno",
          activities: ["Weekly debates", "Model UN conferences", "Public speaking"],
          achievements: ["National debate champions", "International MUN participation"],
          icon: <FaComments />,
        },
        {
          name: "Environmental & Wildlife Club",
          patron: "Mr. Joseph Kiprop",
          activities: ["Tree planting", "Wildlife conservation", "Recycling projects"],
          achievements: ["Green school award", "Community environmental impact"],
          icon: <FaTree />,
        },
        {
          name: "ICT & Robotics Club",
          patron: "Ms. Linda Chebet",
          activities: ["Coding workshops", "Robotics competitions", "App development"],
          achievements: ["National ICT competition winners", "Student-developed apps"],
          icon: <FaRobot />,
        },
        {
          name: "Drama & Performing Arts Club",
          patron: "Mr. David Odhiambo",
          activities: ["Play productions", "Acting workshops", "Stage management"],
          achievements: ["Drama festival awards", "Original plays produced"],
          icon: <FaVideo />,
        },
        {
          name: "Chess & Strategy Games Club",
          patron: "Ms. Grace Mwende",
          activities: ["Chess tournaments", "Strategy sessions", "Mind games"],
          achievements: ["National chess competition participants", "School league champions"],
          icon: <FaChess />,
        },
      ],
      
      specialPrograms: [
        {
          title: "Leadership Development Program",
          description: "Comprehensive training for club leaders and office bearers",
          activities: ["Leadership workshops", "Project management", "Team building", "Conflict resolution"],
          achievements: ["50+ trained student leaders", "Improved club management", "Increased membership"],
        },
        {
          title: "Inter-Club Collaboration Initiative",
          description: "Fostering collaboration between different clubs for joint projects",
          activities: ["Joint community projects", "Cross-club workshops", "Collaborative events", "Resource sharing"],
          achievements: ["10+ successful joint projects", "Enhanced club synergy", "Increased community impact"],
        },
        {
          title: "Club Fair & Recruitment Drive",
          description: "Annual event showcasing all clubs and recruiting new members",
          activities: ["Club exhibitions", "Demo sessions", "Member testimonials", "Sign-up campaigns"],
          achievements: ["85% student participation", "Record club memberships", "Enhanced school spirit"],
        },
      ],
      
      talentNurturing: [
        {
          area: "Leadership & Organization",
          activities: ["Club management", "Event planning", "Budget management", "Team leadership"],
          competitions: ["Leadership awards", "Organization excellence", "Event management competitions"],
        },
        {
          area: "Specialized Skill Development",
          activities: ["Technical skills", "Creative arts", "Scientific research", "Digital innovation"],
          competitions: ["Skill-based competitions", "Innovation challenges", "Creative contests"],
        },
        {
          area: "Community Engagement",
          activities: ["Social projects", "Community service", "Awareness campaigns", "Volunteer work"],
          competitions: ["Community service awards", "Social impact recognition", "Volunteer awards"],
        },
      ],
      
      facilities: [
        "Club Resource Center with meeting rooms and materials",
        "Multi-purpose hall for club meetings and events",
        "Outdoor spaces for environmental and gardening clubs",
        "ICT lab with specialized software for technical clubs",
        "Art and craft studio for creative clubs",
        "Science lab for research-oriented clubs",
        "Quiet study rooms for academic societies",
      ],
      
      achievements: [
        "25+ national competition awards in various club categories",
        "Student-led community projects impacting 5000+ people",
        "Partnerships with 15 professional organizations and NGOs",
        "Annual Club Excellence Awards recognizing outstanding clubs",
        "Student publications in various club journals and magazines",
        "Successful alumni mentorship program connecting past and present members",
      ],
      
      contactPerson: {
        name: "Ms. Jane Wanjiru",
        email: "clubs@kimangu.ac.ke",
        office: "Student Activities Center, Room 201",
        hours: "Mon-Fri, 8:00 AM - 5:00 PM",
        phone: "+254 723 456 789",
      },
    },
    {
      id: 3,
      title: "GUIDANCE & COUNSELING DEPARTMENT",
      subtitle: "Nurturing Minds, Empowering Futures",
      icon: <FaHandsHelping className="text-2xl" />,
      color: "blue",
      head: {
        name: "Dr. Faith Muthoni",
        title: "Head of Guidance & Counseling",
        qualification: "PhD in Counseling Psychology, University of Nairobi",
        experience: "15 years experience in educational counseling",
        specialization: "Adolescent Psychology & Career Development",
        contact: "fmuthoni@kimangu.ac.ke",
      },
      description: "Our Guidance & Counseling Department provides comprehensive support for students' emotional, social, and academic well-being. We offer professional counseling services, career guidance, and life skills training to help students navigate challenges and maximize their potential.",
      
      services: [
        {
          category: "Academic Counseling",
          services: ["Study skills development", "Exam preparation strategies", "Time management", "Learning style assessment"],
          frequency: "Weekly individual sessions, monthly workshops",
          icon: <FaBookOpen />,
        },
        {
          category: "Career Guidance",
          services: ["Career assessment tests", "University selection guidance", "Scholarship application support", "Internship placement"],
          frequency: "Termly career fairs, individual appointments",
          icon: <FaGraduationCap />,
        },
        {
          category: "Personal & Social Counseling",
          services: ["Stress management", "Conflict resolution", "Relationship counseling", "Self-esteem building"],
          frequency: "On-demand sessions, weekly group counseling",
          icon: <FaUserFriends />,
        },
        {
          category: "Crisis Intervention",
          services: ["Emergency counseling", "Crisis management", "Referral services", "Follow-up support"],
          frequency: "24/7 emergency contact available",
          icon: <FaMedkit />,
        },
      ],
      
      specialPrograms: [
        {
          title: "Peer Counseling Program",
          description: "Trained student counselors providing support to fellow students",
          activities: ["Peer counseling training", "Support group facilitation", "Awareness campaigns", "Mentorship programs"],
          achievements: ["50 trained peer counselors", "Increased help-seeking behavior", "Reduced stigma around counseling"],
        },
        {
          title: "Mental Health Awareness Initiative",
          description: "Promoting mental health awareness and reducing stigma",
          activities: ["Mental health workshops", "Awareness campaigns", "Stress management seminars", "Wellness activities"],
          achievements: ["School-wide mental health week", "Increased awareness", "Improved emotional literacy"],
        },
        {
          title: "Parent-Student Counseling Sessions",
          description: "Facilitating communication and understanding between parents and students",
          activities: ["Family counseling sessions", "Parent workshops", "Communication skills training", "Conflict mediation"],
          achievements: ["Improved family relationships", "Enhanced parent involvement", "Better home-school collaboration"],
        },
      ],
      
      talentNurturing: [
        {
          area: "Emotional Intelligence",
          activities: ["Self-awareness training", "Emotion regulation", "Empathy development", "Social skills"],
          outcomes: ["Better relationships", "Improved conflict resolution", "Enhanced self-awareness"],
        },
        {
          area: "Leadership & Communication",
          activities: ["Leadership workshops", "Public speaking", "Active listening", "Assertiveness training"],
          outcomes: ["Confident communicators", "Effective leaders", "Strong team players"],
        },
        {
          area: "Career Readiness",
          activities: ["Interview skills", "Resume writing", "Professional etiquette", "Networking skills"],
          outcomes: ["Successful job placements", "Confident professionals", "Career satisfaction"],
        },
      ],
      
      facilities: [
        "Private counseling rooms with comfortable seating",
        "Group counseling room for workshops and sessions",
        "Career resource center with university catalogs and test prep materials",
        "Relaxation room with calming decor and resources",
        "Computer lab for career assessments and research",
        "Parent consultation room for family sessions",
        "Library of self-help and counseling resources",
      ],
      
      achievements: [
        "95% student satisfaction rate with counseling services",
        "100% university placement for career-counseled students",
        "KES 50 million in scholarships secured through guidance",
        "National recognition for peer counseling program",
        "Published research on adolescent counseling in Kenya",
        "Partnerships with 20+ universities and colleges",
      ],
      
      contactPerson: {
        name: "Dr. Faith Muthoni",
        email: "counseling@kimangu.ac.ke",
        office: "Guidance & Counseling Center, Room 101",
        hours: "Mon-Fri, 8:00 AM - 5:00 PM (Emergency: 24/7)",
        phone: "+254 700 123 456 (Emergency: +254 711 987 654)",
      },
    },
    {
      id: 4,
      title: "LIBRARY & RESOURCE CENTER",
      subtitle: "Gateway to Knowledge and Innovation",
      icon: <FaBook className="text-2xl" />,
      color: "purple",
      head: {
        name: "Ms. Mary Atieno",
        title: "Head Librarian & Resource Center Manager",
        qualification: "MLS Library and Information Science, Kenyatta University",
        experience: "18 years experience in library management",
        specialization: "Digital Libraries & Information Literacy",
        contact: "matieno@kimangu.ac.ke",
      },
      description: "Our Library & Resource Center is more than just books - it's a dynamic learning hub that supports academic excellence, research skills, and digital literacy. We provide resources, technology, and spaces that foster curiosity, creativity, and lifelong learning.",
      
      resources: [
        {
          type: "Print Collection",
          details: "15,000+ books covering all subjects, reference materials, periodicals, newspapers",
          access: "Open access, borrowing system",
          icon: <FaBookOpen />,
        },
        {
          type: "Digital Resources",
          details: "E-books, online journals, research databases, educational software",
          access: "24/7 online access, computer lab",
          icon: <FaLaptop />,
        },
        {
          type: "Multimedia Collection",
          details: "Educational DVDs, audio books, language learning materials, documentary films",
          access: "In-library viewing, borrowing available",
          icon: <FaVideo />,
        },
        {
          type: "Special Collections",
          details: "Kenyan literature archive, past exam papers, student projects archive, career resources",
          access: "Reference only, special request",
          icon: <FaArchive />,
        },
      ],
      
      specialPrograms: [
        {
          title: "Information Literacy Program",
          description: "Teaching students how to find, evaluate, and use information effectively",
          activities: ["Research skills workshops", "Citation training", "Source evaluation", "Digital literacy"],
          achievements: ["Improved research quality", "Reduced plagiarism", "Enhanced critical thinking"],
        },
        {
          title: "Reading Promotion Initiative",
          description: "Encouraging reading for pleasure and academic growth",
          activities: ["Book clubs", "Reading challenges", "Author visits", "Book reviews"],
          achievements: ["Doubled book circulation", "Increased reading scores", "Reading culture established"],
        },
        {
          title: "Digital Learning Support",
          description: "Assisting students and teachers with technology-enhanced learning",
          activities: ["E-learning platform support", "Digital resource training", "Technology workshops", "Online research guidance"],
          achievements: ["Increased e-resource usage", "Improved digital skills", "Enhanced online learning"],
        },
      ],
      
      talentNurturing: [
        {
          area: "Research & Information Skills",
          activities: ["Research methodology", "Data analysis", "Academic writing", "Presentation skills"],
          competitions: ["Research competitions", "Essay contests", "Debate competitions"],
        },
        {
          area: "Digital Literacy & Technology",
          activities: ["Online research", "Digital content creation", "Software proficiency", "Information management"],
          competitions: ["Digital skills competitions", "Technology challenges", "Coding contests"],
        },
        {
          area: "Creative Expression",
          activities: ["Creative writing", "Storytelling", "Literary analysis", "Book reviewing"],
          competitions: ["Writing competitions", "Storytelling contests", "Literary criticism"],
        },
      ],
      
      facilities: [
        "Main reading area with comfortable seating for 100+ students",
        "Silent study zone for individual focused work",
        "Group study rooms with whiteboards and projectors",
        "Computer lab with 30 workstations and high-speed internet",
        "Multimedia room with audio-visual equipment",
        "Career and university information center",
        "Periodicals section with current magazines and journals",
        "Outdoor reading garden for pleasant weather days",
      ],
      
      achievements: [
        "Awarded 'Best School Library' by Kenya Library Association 2023",
        "15,000+ book collection with annual 10% growth",
        "95% student satisfaction with library services",
        "Digital library accessed by 1000+ users monthly",
        "Partnership with 5 university libraries for resource sharing",
        "Student research published in academic journals",
      ],
      
      contactPerson: {
        name: "Ms. Mary Atieno",
        email: "library@kimangu.ac.ke",
        office: "Library Building, Main Office",
        hours: "Mon-Fri: 7:00 AM - 8:00 PM, Sat: 9:00 AM - 4:00 PM",
        phone: "+254 722 333 444",
      },
    },
    {
      id: 5,
      title: "MUSIC & PERFORMING ARTS DEPARTMENT",
      subtitle: "Expressing Creativity, Celebrating Talent",
      icon: <FaMusic className="text-2xl" />,
      color: "orange",
      head: {
        name: "Mr. David Odhiambo",
        title: "Director of Music & Performing Arts",
        qualification: "MFA in Performing Arts, Kenyatta University",
        experience: "14 years experience in arts education",
        specialization: "Music Composition & Theatre Production",
        contact: "dodhiambo@kimangu.ac.ke",
      },
      description: "Our Music & Performing Arts Department provides a vibrant platform for creative expression, artistic development, and cultural appreciation. We nurture musical talent, theatrical skills, and creative confidence through diverse artistic experiences.",
      
      programs: [
        {
          name: "School Choir",
          director: "Mrs. Sarah Wanjiku",
          activities: ["Vocal training", "Choral competitions", "Public performances", "Recording sessions"],
          achievements: ["National music festival gold medal", "Annual Christmas concert", "Community performances"],
          icon: <FaMicrophone />,
        },
        {
          name: "Instrumental Band",
          director: "Mr. James Mbugua",
          activities: ["Instrument lessons", "Band practice", "Concert performances", "Music composition"],
          achievements: ["County band competition winners", "Original compositions", "Recording experience"],
          icon: <FaGuitar />,
        },
        {
          name: "Drama Club",
          director: "Ms. Angela Mbeki",
          activities: ["Acting workshops", "Play productions", "Stage management", "Script writing"],
          achievements: ["Drama festival awards", "Original plays", "Community theatre"],
          icon: <FaVideo />,
        },
        {
          name: "Dance Troupe",
          director: "Ms. Rachel Atieno",
          activities: ["Dance classes", "Choreography", "Cultural dances", "Competitions"],
          achievements: ["Cultural festival winners", "International dance exchange", "School event performances"],
          icon: <FaRunning />,
        },
      ],
      
      specialPrograms: [
        {
          title: "Annual Arts Festival",
          description: "Week-long celebration of student talent in music, dance, and drama",
          activities: ["Competitions", "Masterclasses", "Guest performances", "Art exhibitions"],
          achievements: ["2000+ attendees", "Media coverage", "Community engagement", "Talent discovery"],
        },
        {
          title: "Arts Integration Program",
          description: "Integrating arts into academic learning across all subjects",
          activities: ["History through drama", "Math through music", "Science through art", "Literature through performance"],
          achievements: ["Improved academic performance", "Enhanced creativity", "Increased engagement"],
        },
        {
          title: "Community Arts Outreach",
          description: "Sharing artistic talent with the wider community",
          activities: ["Community concerts", "Arts workshops", "Hospital visits", "Elderly home performances"],
          achievements: ["Community appreciation", "Social impact", "Student character development"],
        },
      ],
      
      talentNurturing: [
        {
          area: "Musical Excellence",
          activities: ["Instrument mastery", "Vocal training", "Music theory", "Composition"],
          competitions: ["Music festivals", "Talent shows", "Composition contests", "Battle of bands"],
        },
        {
          area: "Theatrical Arts",
          activities: ["Acting techniques", "Stagecraft", "Directing", "Playwriting"],
          competitions: ["Drama festivals", "One-act play contests", "Monologue competitions"],
        },
        {
          area: "Creative Production",
          activities: ["Stage management", "Lighting design", "Sound engineering", "Costume design"],
          competitions: ["Technical theatre awards", "Production excellence", "Design competitions"],
        },
      ],
      
      facilities: [
        "Music room with pianos, keyboards, and various instruments",
        "Drama hall with professional stage, lighting, and sound system",
        "Dance studio with mirrors, barres, and proper flooring",
        "Recording studio with equipment for music production",
        "Costume and props room for theatre productions",
        "Practice rooms for individual and small group rehearsals",
        "Art gallery space for visual arts exhibitions",
      ],
      
      achievements: [
        "National Music Festival Gold Medalists 2022 & 2023",
        "Students admitted to prestigious arts colleges and universities",
        "Original student compositions performed at national events",
        "Partnership with Kenya National Theatre",
        "Annual production attracting 1500+ audience members",
        "Arts scholarship recipients for talented students",
      ],
      
      contactPerson: {
        name: "Mr. David Odhiambo",
        email: "arts@kimangu.ac.ke",
        office: "Arts Complex, Room 103",
        hours: "Mon-Fri, 8:00 AM - 6:00 PM, Sat: 9:00 AM - 2:00 PM",
        phone: "+254 733 555 666",
      },
    },
    {
      id: 6,
      title: "STUDENT LEADERSHIP DEPARTMENT",
      subtitle: "Developing Leaders for Tomorrow",
      icon: <FaUserGraduate className="text-2xl" />,
      color: "yellow",
      head: {
        name: "Mr. Samuel Njoroge",
        title: "Student Leadership Coordinator",
        qualification: "MEd in Educational Leadership, University of Nairobi",
        experience: "9 years experience in student leadership development",
        specialization: "Youth Governance & Democratic Education",
        contact: "snjoroge@kimangu.ac.ke",
      },
      description: "Our Student Leadership Department empowers students to become effective leaders, responsible citizens, and positive change-makers. We provide opportunities for leadership experience, governance participation, and community service through structured programs and real responsibilities.",
      
      leadershipStructures: [
        {
          body: "Student Council",
          members: "15 elected representatives",
          responsibilities: ["School governance", "Student advocacy", "Event planning", "Budget management"],
          elections: "Annual democratic elections",
          icon: <FaUsers />,
        },
        {
          body: "Prefects Board",
          members: "25 appointed prefects",
          responsibilities: ["Discipline maintenance", "Role modeling", "Peer mentoring", "School ambassadorship"],
          selection: "Merit-based appointment",
          icon: <FaShieldAlt />,
        },
        {
          body: "Class Monitors",
          members: "40 class representatives",
          responsibilities: ["Class liaison", "Attendance monitoring", "Resource management", "Peer support"],
          selection: "Class elections",
          icon: <FaChalkboardTeacher />,
        },
        {
          body: "Club Presidents",
          members: "15 club leaders",
          responsibilities: ["Club management", "Activity planning", "Member engagement", "Resource coordination"],
          selection: "Club elections",
          icon: <FaFlag />,
        },
      ],
      
      specialPrograms: [
        {
          title: "Leadership Academy",
          description: "Comprehensive training program for all student leaders",
          activities: ["Leadership theory", "Practical skills", "Ethical leadership", "Service learning"],
          achievements: ["100+ trained leaders annually", "Improved leadership quality", "Enhanced school governance"],
        },
        {
          title: "Student Voice Initiative",
          description: "Platform for students to contribute to school decision-making",
          activities: ["Student forums", "Suggestion systems", "Policy input", "School improvement projects"],
          achievements: ["Implemented student suggestions", "Increased student satisfaction", "Enhanced school environment"],
        },
        {
          title: "Community Leadership Projects",
          description: "Student-led initiatives addressing community needs",
          activities: ["Community needs assessment", "Project planning", "Implementation", "Evaluation"],
          achievements: ["10+ community projects annually", "Real community impact", "Leadership in action"],
        },
      ],
      
      talentNurturing: [
        {
          area: "Governance & Administration",
          activities: ["Meeting procedures", "Policy development", "Budget management", "Conflict resolution"],
          competitions: ["Model parliament", "Governance simulations", "Leadership debates"],
        },
        {
          area: "Public Speaking & Advocacy",
          activities: ["Speech writing", "Debate skills", "Presentation techniques", "Negotiation skills"],
          competitions: ["Public speaking contests", "Debate competitions", "Advocacy challenges"],
        },
        {
          area: "Project Management",
          activities: ["Planning", "Organization", "Implementation", "Evaluation"],
          competitions: ["Project competitions", "Social entrepreneurship", "Community service awards"],
        },
      ],
      
      facilities: [
        "Student Council Chamber for meetings and deliberations",
        "Leadership Training Room with multimedia equipment",
        "Student Resource Center with leadership materials",
        "Project Planning Room with whiteboards and planning tools",
        "Conference Room for meetings with school administration",
        "Student Notice Board and Communication Center",
        "Online leadership portal for resources and communication",
      ],
      
      achievements: [
        "National Student Leadership Conference Host 2023",
        "Student Council recognized as 'Model Council' by Ministry of Education",
        "Student-led projects won national community service awards",
        "100% of student leaders graduate with leadership certificates",
        "Partnership with leadership organizations for training",
        "Alumni leaders in prominent positions nationally and internationally",
      ],
      
      contactPerson: {
        name: "Mr. Samuel Njoroge",
        email: "leadership@kimangu.ac.ke",
        office: "Student Leadership Center, Room 202",
        hours: "Mon-Fri, 8:00 AM - 5:00 PM",
        phone: "+254 744 777 888",
      },
    },
  ];

  const toggleDepartmentExpansion = (departmentId) => {
    setExpandedDepartmentId(expandedDepartmentId === departmentId ? null : departmentId);
  };

  const getColorClasses = (color) => {
    const colorMap = {
      red: { bg: 'bg-red-600', text: 'text-red-600', light: 'bg-red-50', border: 'border-red-200' },
      green: { bg: 'bg-green-600', text: 'text-green-600', light: 'bg-green-50', border: 'border-green-200' },
      blue: { bg: 'bg-blue-600', text: 'text-blue-600', light: 'bg-blue-50', border: 'border-blue-200' },
      purple: { bg: 'bg-purple-600', text: 'text-purple-600', light: 'bg-purple-50', border: 'border-purple-200' },
      orange: { bg: 'bg-orange-600', text: 'text-orange-600', light: 'bg-orange-50', border: 'border-orange-200' },
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
                Holistic Student Development at <span className="text-primary">Kimangu</span>
              </h2>

              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  At Kimangu Day Secondary School, we believe that true education extends 
                  beyond the classroom. Our non-academic departments are designed to nurture 
                  well-rounded individuals by developing talents, building character, and 
                  fostering essential life skills.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed">
                  Through six specialized departments, we provide platforms for students to 
                  discover their passions, develop leadership skills, and build meaningful 
                  relationships. Our approach ensures every student finds their unique path 
                  to success.
                </p>

                <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                  <div className="p-6 border border-gray-200 rounded-xl bg-white shadow-sm">
                    <h3 className="flex items-center mb-3 text-lg font-semibold text-gray-800">
                      <FaHeart className="mr-3 text-xl text-primary" />
                      Our Philosophy
                    </h3>
                    <p className="text-gray-600">
                      To create a nurturing environment where students can explore, create, 
                      and grow through diverse non-academic experiences that build character, 
                      resilience, and social responsibility.
                    </p>
                  </div>

                  <div className="p-6 border border-gray-200 rounded-xl bg-white shadow-sm">
                    <h3 className="flex items-center mb-3 text-lg font-semibold text-gray-800">
                      <FaBullseye className="mr-3 text-xl text-primary" />
                      Our Approach
                    </h3>
                    <p className="text-gray-600">
                      Inclusive, student-led activities with professional guidance that 
                      encourage participation, teamwork, and personal growth for every 
                      student, regardless of background or ability.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative col-span-12 lg:col-span-4">
              <div className="sticky top-8">
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src="/src/assets/images/sports.jpg"
                    alt="Student Activities"
                    className="object-cover w-full h-64"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl">
                        <FaUsers className="text-2xl" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold tracking-widest opacity-90">
                          STUDENT ENGAGEMENT
                        </p>
                        <h3 className="text-xl font-bold">
                          87% Participation Rate
                        </h3>
                        <p className="text-xs opacity-90">In Non-Academic Activities</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-6 bg-white rounded-xl shadow-sm border border-gray-200">
                  <h4 className="mb-3 font-semibold text-gray-800">
                    <FaInfoCircle className="inline mr-2 text-primary" />
                    Explore Our Departments
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <FaChevronDown className="mt-1 mr-2 text-primary text-xs" />
                      Click on any department to expand details
                    </li>
                    <li className="flex items-start">
                      <FaUsers className="mt-1 mr-2 text-primary text-xs" />
                      View programs, activities, and achievements
                    </li>
                    <li className="flex items-start">
                      <FaTrophy className="mt-1 mr-2 text-primary text-xs" />
                      Check facilities and talent nurturing areas
                    </li>
                    <li className="flex items-start">
                      <FaComments className="mt-1 mr-2 text-primary text-xs" />
                      Contact department heads for more information
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
              Non-Academic Departments
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Click on any department to view detailed information about programs, 
              activities, and achievements
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
                          {dept.id === 1 ? '7 Sports' : 
                           dept.id === 2 ? '6 Clubs' : 
                           dept.id === 3 ? '4 Services' :
                           dept.id === 4 ? '4 Resources' :
                           dept.id === 5 ? '4 Programs' : '4 Bodies'}
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
                                <FaUserGraduate className={`mr-3 ${colors.text}`} />
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

                            {/* Programs/Sports/Clubs/Services */}
                            <div>
                              <h4 className="mb-4 text-lg font-bold text-gray-800 flex items-center">
                                {dept.id === 1 ? <FaFutbol className={`mr-3 ${colors.text}`} /> :
                                 dept.id === 2 ? <FaUsers className={`mr-3 ${colors.text}`} /> :
                                 dept.id === 3 ? <FaHandsHelping className={`mr-3 ${colors.text}`} /> :
                                 dept.id === 4 ? <FaBookOpen className={`mr-3 ${colors.text}`} /> :
                                 dept.id === 5 ? <FaMusic className={`mr-3 ${colors.text}`} /> :
                                 <FaUserGraduate className={`mr-3 ${colors.text}`} />}
                                {dept.id === 1 ? 'Sports Programs' : 
                                 dept.id === 2 ? 'Active Clubs' :
                                 dept.id === 3 ? 'Services Offered' :
                                 dept.id === 4 ? 'Resources Available' :
                                 dept.id === 5 ? 'Performance Programs' : 'Leadership Structures'}
                              </h4>
                              <div className="space-y-3">
                                {(dept.sports || dept.clubs || dept.services || dept.resources || dept.programs || dept.leadershipStructures).map((item, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                                  >
                                    <div className="flex items-center">
                                      <div className={`p-2 rounded-md ${colors.light} ${colors.text} mr-3`}>
                                        {item.icon}
                                      </div>
                                      <div>
                                        <div className="font-medium text-gray-800">{item.name || item.category || item.type || item.body}</div>
                                        {dept.id === 1 && (
                                          <div className="text-sm text-gray-600">Coach: {item.coach} | Level: {item.level}</div>
                                        )}
                                        {dept.id === 2 && (
                                          <div className="text-sm text-gray-600">Patron: {item.patron}</div>
                                        )}
                                        {dept.id === 3 && (
                                          <div className="text-sm text-gray-600">Frequency: {item.frequency}</div>
                                        )}
                                        {dept.id === 4 && (
                                          <div className="text-sm text-gray-600">Access: {item.access}</div>
                                        )}
                                        {dept.id === 5 && (
                                          <div className="text-sm text-gray-600">Director: {item.director}</div>
                                        )}
                                        {dept.id === 6 && (
                                          <div className="text-sm text-gray-600">Members: {item.members}</div>
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
                                Special Programs & Initiatives
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
                                      <div className="text-sm font-medium text-gray-500 mb-1">
                                        {dept.id === 3 ? 'Outcomes:' : 'Competitions:'}
                                      </div>
                                      <div className="text-sm text-gray-600">
                                        {(area.competitions || area.outcomes).join(', ')}
                                      </div>
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
                                {dept.contactPerson.phone && (
                                  <div><span className="font-medium">Phone:</span> {dept.contactPerson.phone}</div>
                                )}
                              </div>
                            </div>
                            <div className="flex items-center justify-end">
                              <button className={`px-6 py-2 font-medium text-white rounded-lg ${colors.bg} hover:opacity-90 transition-opacity`}>
                                <FaComments className="inline mr-2" />
                                Contact Department
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

          {/* Impact Summary Section */}
          <div className="mt-12">
            <h3 className="mb-8 text-2xl font-bold text-gray-800 text-center">
              Overall Impact & Achievements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 text-center bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white rounded-full bg-red-600">
                  <FaTrophy className="text-2xl" />
                </div>
                <div className="text-3xl font-bold text-red-600">65+</div>
                <p className="mt-2 text-gray-600">Sports Trophies Won</p>
                <div className="mt-3 text-sm text-gray-500">County, Regional & National Levels</div>
              </div>

              <div className="p-6 text-center bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white rounded-full bg-green-600">
                  <FaUsers className="text-2xl" />
                </div>
                <div className="text-3xl font-bold text-green-600">87%</div>
                <p className="mt-2 text-gray-600">Student Participation</p>
                <div className="mt-3 text-sm text-gray-500">In Non-Academic Activities</div>
              </div>

              <div className="p-6 text-center bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white rounded-full bg-blue-600">
                  <FaAward className="text-2xl" />
                </div>
                <div className="text-3xl font-bold text-blue-600">120+</div>
                <p className="mt-2 text-gray-600">Club Competition Awards</p>
                <div className="mt-3 text-sm text-gray-500">Last Academic Year</div>
              </div>

              <div className="p-6 text-center bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white rounded-full bg-purple-600">
                  <FaSmile className="text-2xl" />
                </div>
                <div className="text-3xl font-bold text-purple-600">94%</div>
                <p className="mt-2 text-gray-600">Student Satisfaction</p>
                <div className="mt-3 text-sm text-gray-500">With Non-Academic Programs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Summary Section */}
      <section className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl">
          <h2 className="mb-4 text-3xl text-center font-bold text-gray-800">
            State-of-the-Art Facilities
          </h2>
          <p className="max-w-3xl mx-auto mb-12 text-center text-gray-600">
            Comprehensive facilities designed to support diverse student interests and talents
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Sports Facilities */}
            <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-14 h-14 mr-4 text-white rounded-full bg-gradient-to-r from-red-500 to-red-600">
                  <FaRunning className="text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Sports Facilities
                </h3>
              </div>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <FaCheckCircleSolid className="mt-1 mr-3 text-red-500" />
                  <span>Full-size football pitch with floodlights</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircleSolid className="mt-1 mr-3 text-red-500" />
                  <span>Basketball and volleyball courts</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircleSolid className="mt-1 mr-3 text-red-500" />
                  <span>400m athletics track and field events area</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircleSolid className="mt-1 mr-3 text-red-500" />
                  <span>Swimming pool and indoor games facilities</span>
                </li>
              </ul>
            </div>

            {/* Creative & Performing Arts Facilities */}
            <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-14 h-14 mr-4 text-white rounded-full bg-gradient-to-r from-orange-500 to-orange-600">
                  <FaPaintBrush className="text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Creative & Performing Arts
                </h3>
              </div>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <FaCheckCircleSolid className="mt-1 mr-3 text-orange-500" />
                  <span>Music room with various instruments</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircleSolid className="mt-1 mr-3 text-orange-500" />
                  <span>Drama hall with stage and lighting</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircleSolid className="mt-1 mr-3 text-orange-500" />
                  <span>Art studio and dance facilities</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircleSolid className="mt-1 mr-3 text-orange-500" />
                  <span>Recording studio and exhibition spaces</span>
                </li>
              </ul>
            </div>

            {/* Support & Learning Facilities */}
            <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-14 h-14 mr-4 text-white rounded-full bg-gradient-to-r from-blue-500 to-blue-600">
                  <FaHandsHelping className="text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Support & Learning Facilities
                </h3>
              </div>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <FaCheckCircleSolid className="mt-1 mr-3 text-blue-500" />
                  <span>Modern counseling and guidance rooms</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircleSolid className="mt-1 mr-3 text-blue-500" />
                  <span>Comprehensive library with digital resources</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircleSolid className="mt-1 mr-3 text-blue-500" />
                  <span>Leadership training and meeting spaces</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircleSolid className="mt-1 mr-3 text-blue-500" />
                  <span>Club resource centers and activity rooms</span>
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