import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaArrowRight,
  FaChevronRight,
  FaTimes,
  FaNewspaper,
  FaPenAlt,
  FaShareAlt,
  FaPrint,
} from "react-icons/fa";

// Import images
import bursaryNews from "../assets/images/bursary-news.jpg";
import computerLab from "../assets/images/computer-lab.jpg";
import studentsPerforming from "../assets/images/students-performing-on-agm.jpg";
import academicClinic from "../assets/images/academic-clinic.jpg";

// Student journalist image holder
import femaleReporter from "../assets/images/female-reporter.jpg";
import maleReporter from "../assets/images/male-reporter.jpg";

const NewsEvents = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Helper function to get appropriate avatar based on gender
  const getReporterAvatar = (gender) => {
    return gender === "female" ? femaleReporter : maleReporter;
  };

  // Student Journalists Team
  const studentJournalists = [
    {
      id: 1,
      name: "Sarah Wanjiku",
      gender: "female",
      role: "Editor-in-Chief",
      form: "Form 4 East",
      specialization: ["Investigative Reporting", "Feature Writing"],
      quote: "Every story matters, every voice counts.",
      image: getReporterAvatar("female"),
      bio: "Three-time winner of the Young Journalist Award. Leads the school newspaper editorial team.",
    },
    {
      id: 2,
      name: "David Omondi",
      gender: "male",
      role: "Reporter & Photographer",
      form: "Form 3 West",
      specialization: ["Sports Journalism", "Photography"],
      quote: "Capturing moments that define our school spirit.",
      image: getReporterAvatar("male"),
      bio: "Official photographer for school events. His sports coverage has been featured in county newspapers.",
    },
    {
      id: 3,
      name: "Grace Akinyi",
      gender: "female",
      role: "News Reporter",
      form: "Form 4 North",
      specialization: ["Human Interest Stories", "Academic Reporting"],
      quote: "Telling stories that inspire and educate.",
      image: getReporterAvatar("female"),
      bio: "Recipient of the 2024 Best Student Journalist award. Specializes in academic excellence stories.",
    },
    {
      id: 4,
      name: "Brian Kamau",
      gender: "male",
      role: "News Reporter",
      form: "Form 2 South",
      specialization: ["Breaking News", "Event Coverage"],
      quote: "First to know, first to report.",
      image: getReporterAvatar("male"),
      bio: "Youngest member of the editorial team. Shows exceptional promise in investigative journalism.",
    },
  ];

  const newsItems = [
    {
      id: 1,
      image: bursaryNews,
      date: "May 8, 2025",
      category: "Community",
      title: "MP Awards Bursary to Kimangu Students",
      excerpt:
        "Hon. Chebor Paul Kibet awards educational bursaries to deserving students, supporting academic excellence and easing financial burdens. The ceremony was attended by parents, teachers, and local leaders.",
      fullContent: `
        <p class="article-byline"><strong>By SARAH WANJIKU, Editor-in-Chief</strong><br/>
        <em class="article-meta">Published: May 8, 2025 | Updated: May 9, 2025</em></p>
        
        <p class="article-lead">KIMANGU, Thursday — In a landmark ceremony that brought together the entire school community, Hon. Chebor Paul Kibet today presented educational bursaries totaling KSh 500,000 to 25 academically gifted but financially challenged students of Kimangu Secondary School. The event, held at the school's main assembly hall under tight security and COVID-19 protocols, saw emotional scenes as students received the awards that will cover their tuition fees for the next academic year.</p>
        
        <p class="article-paragraph">The selection process was both rigorous and compassionate, according to Mrs. Wanjiku Mwangi, the school principal. "We considered academic performance, genuine financial need verified through home visits, and demonstrated leadership qualities," she explained. A special committee comprising school administrators, local education officials, and two parent representatives spent two weeks reviewing 87 applications before selecting the final 25 recipients.</p>
        
        <h3 class="article-subheading">A Lifeline for Families</h3>
        <p class="article-paragraph">Among the beneficiaries is Mercy Achieng, a Form 3 student who lost both parents last year. "This bursary means I can continue my education," she told our reporter, tears of joy in her eyes. "I want to become a doctor to help others." Her story echoed the sentiments of many recipients who come from families struggling to make ends meet.</p>
        
        <p class="article-paragraph">Another recipient, John Maina from Form 2, comes from a family of six where both parents are casual laborers. "My parents work so hard but still struggle with school fees. This award will reduce their burden," he said, clutching the award certificate with visible emotion.</p>
        
        <h3 class="article-subheading">MP's Commitment to Education</h3>
        <p class="article-paragraph">In his address, Hon. Kibet announced several key initiatives that demonstrate his commitment to education. He pledged to establish an annual scholarship fund supporting ten students through all four years of secondary education. Additionally, he revealed plans for a mentorship program connecting students with professionals in various fields and committed to funding the construction of two additional classrooms by year-end.</p>
        
        <p class="article-paragraph">"Education remains my top priority," the MP declared to applause from the gathering. "When you educate a child, you educate a nation. These students represent our future, and we must invest in them."</p>
        
        <h3 class="article-subheading">Community Response</h3>
        <p class="article-paragraph">The ceremony was attended by over 300 guests including parents, teachers, and local leaders. Bishop James Ndirangu of the local church offered a blessing that resonated with many: "May these seeds of education grow into mighty trees that will provide shade for future generations." Parents expressed gratitude for the support, noting that such initiatives make education accessible to all, regardless of financial background.</p>
        
        <p class="article-credits"><strong>Reporting by Sarah Wanjiku</strong><br/>
        <strong>Photography by David Omondi</strong><br/>
        <strong>Editing by Grace Akinyi</strong><br/>
        <em>Additional reporting by the Kimangu Gazette team</em></p>
      `,
      author: studentJournalists[0], // Sarah Wanjiku
      coAuthors: [
        { name: "David Omondi", role: "Photographer", gender: "male" },
        { name: "Grace Akinyi", role: "Editor", gender: "female" },
      ],
      readTime: "5 min read",
      featured: true,
      tags: ["Bursary", "Community", "Awards", "Education", "MP Visit"],
      wordCount: 850,
      editor: "Grace Akinyi",
      factCheckers: ["Brian Kamau", "School Administration"],
    },
    {
      id: 2,
      image: computerLab,
      date: "May 3, 2025",
      category: "Facilities",
      title: "New Computer Laboratory Commissioned",
      excerpt:
        "State-of-the-art ICT center opens with 30 computers, enhancing digital literacy and technological skills development. The lab features modern equipment and high-speed internet connectivity.",
      fullContent: `
        <p class="article-byline"><strong>By DAVID OMONDI, Sports & Technology Correspondent</strong><br/>
        <em class="article-meta">Published: May 3, 2025</em></p>
        
        <p class="article-lead">KIMANGU — In a move that signals the school's commitment to 21st-century education, Kimangu Secondary School today officially commissioned a KSh 2.5 million computer laboratory, positioning itself as a leader in digital education within the county. The ribbon-cutting ceremony was performed by the County Director of Education, Mrs. Rose Mbogo, who praised the school for "bridging the digital divide in rural education."</p>
        
        <h3 class="article-subheading">A Modern Learning Space</h3>
        <p class="article-paragraph">The new facility boasts impressive specifications that rival those of urban schools. It houses thirty desktop computers equipped with Intel Core i5 processors, 8GB RAM, and 256GB SSD storage. A 75-inch interactive smart board with touch capability dominates the front wall, while a 100 Mbps dedicated fiber internet connection ensures seamless online access. The laboratory also features professional lighting designed to reduce screen glare and a centralized air conditioning system maintaining an optimal 22°C for both equipment and users.</p>
        
        <h3 class="article-subheading">Educational Impact and Opportunities</h3>
        <p class="article-paragraph">During the commissioning, Mr. David Ochieng, the ICT teacher, demonstrated the lab's capabilities by conducting a live programming class. "For the first time, students can write code, run simulations, and conduct research simultaneously," he said with evident pride. The laboratory will support not only the Computer Studies curriculum for Forms 1-4 but also host an after-school coding club focusing on Python and JavaScript, digital art and design workshops, online research for all subjects, and virtual science experiments.</p>
        
        <p class="article-paragraph">The excitement among students was palpable. Form 4 student and aspiring software engineer, Peter Mwangi, couldn't contain his enthusiasm: "This changes everything! I can now practice programming on proper equipment. I'm already working on a school management app that could streamline administrative tasks."</p>
        
        <h3 class="article-subheading">Funding and Future Plans</h3>
        <p class="article-paragraph">The project was funded through a collaborative effort involving the County Government (50%), school development fund (30%), and alumni contributions (20%). Principal Mwangi announced ambitious plans for Phase 2 during the ceremony: "Next year, we aim to add 3D printers, robotics kits, and establish an innovation hub where students can develop their startup ideas." This vision aligns with the school's strategic goal of becoming a center of technological excellence in the region.</p>
        
        <p class="article-credits"><strong>Reporting by David Omondi</strong><br/>
        <strong>Technical consultation by ICT Department</strong><br/>
        <strong>Photography by David Omondi</strong><br/>
        <em>Special thanks to the County Education Office for technical support</em></p>
      `,
      author: studentJournalists[1], // David Omondi
      coAuthors: [{ name: "ICT Department", role: "Technical Consultants" }],
      readTime: "6 min read",
      tags: [
        "Technology",
        "Facilities",
        "Innovation",
        "Digital Learning",
        "STEM",
      ],
      wordCount: 750,
      editor: "Sarah Wanjiku",
      factCheckers: ["ICT Department"],
    },
    {
      id: 3,
      image: "https://placehold.co/600x400/1e40af/FFFFFF/png",
      date: "April 28, 2025",
      category: "Achievement",
      title: "Teacher Excellence Award Received",
      excerpt:
        "Faculty member recognized by County Education Board for outstanding contribution to science education. This marks the third consecutive year our teachers have received such honors.",
      fullContent: `
        <p class="article-byline"><strong>By GRACE AKINYI, Features Editor</strong><br/>
        <em class="article-meta">Published: April 28, 2025</em></p>
        
        <p class="article-lead">KIMANGU — In a celebration of dedication and pedagogical excellence, Mr. Samuel Kariuki, Chemistry and Physics teacher at Kimangu Secondary School, has been awarded the prestigious County Teacher Excellence Award, marking the third consecutive year the school's faculty has been honored at this level. The glittering ceremony at the County Headquarters saw Mr. Kariuki receive a trophy, certificate, and KSh 100,000 professional development grant from the County Education Board Chairperson, Dr. Elizabeth Njoroge.</p>
        
        <p class="article-paragraph">"Mr. Kariuki represents the gold standard in teaching," Dr. Njoroge stated during the award presentation. "His innovative methods have not only improved scores but ignited a passion for science among students who previously found the subject intimidating."</p>
        
        <h3 class="article-subheading">Teaching Philosophy and Methods</h3>
        <p class="article-paragraph">In an exclusive interview with our Features Editor, Mr. Kariuki shared his teaching philosophy: "I don't just teach science; I teach scientific thinking. Every lesson is an invitation to curiosity." His signature teaching methods include "Kitchen Chemistry," where students use household items for experiments, peer teaching sessions where students explain complex concepts to each other, connecting theoretical concepts to local industrial applications, and what he calls "failure celebration" – learning valuable lessons from experimental "mistakes."</p>
        
        <p class="article-paragraph">This approach has transformed how students engage with science. Former student, now medical student at University of Nairobi, Susan Mwende recalled: "Mr. Kariuki saw potential I didn't see in myself. His Saturday revision classes changed my life's trajectory." Current Form 4 student Kevin Ochieng added: "He makes Physics feel like magic. Complex formulas become simple stories that we can visualize and understand."</p>
        
        <h3 class="article-subheading">Quantifiable Impact and Legacy</h3>
        <p class="article-paragraph">The impact of Mr. Kariuki's teaching is measurable and profound. Under his guidance, the Physics mean score improved from 5.2 to 8.7 between 2022 and 2024. Fifteen students received university scholarships in science fields, and school science club membership grew from 20 to 85 students. Additionally, the school produced five national science competition winners in just two years.</p>
        
        <p class="article-paragraph">This award continues Kimangu's tradition of teaching excellence, following Mrs. Njeri's 2023 Regional Innovation Award in Mathematics and Mr. Otieno's 2024 National STEM Teacher Award in Biology. The consistent recognition highlights the school's commitment to nurturing not just students but also its teaching staff, creating an ecosystem of excellence where both learners and educators thrive.</p>
        
        <p class="article-credits"><strong>Reporting by Grace Akinyi</strong><br/>
        <strong>Student interviews by Brian Kamau</strong><br/>
        <strong>Research assistance by Academic Office</strong><br/>
        <em>Congratulations to Mr. Kariuki from the entire Kimangu Gazette team</em></p>
      `,
      author: studentJournalists[2], // Grace Akinyi
      coAuthors: [
        { name: "Brian Kamau", role: "Research Assistant", gender: "male" },
        { name: "Academic Office", role: "Data Providers" },
      ],
      readTime: "7 min read",
      tags: ["Teachers", "Awards", "Science", "Excellence", "Education"],
      wordCount: 900,
      editor: "Sarah Wanjiku",
      factCheckers: ["Academic Office", "County Education Board"],
    },
    {
      id: 4,
      image: "https://placehold.co/600x400/3b82f6/FFFFFF/png",
      date: "April 20, 2025",
      category: "Academics",
      title: "Science Fair Winners Announced",
      excerpt:
        "Students showcase innovative projects in annual science competition, demonstrating practical application of STEM concepts. Projects focused on sustainable energy solutions and environmental conservation.",
      fullContent: `
        <p class="article-byline"><strong>By BRIAN KAMAU, Junior Reporter</strong><br/>
        <em class="article-meta">Published: April 20, 2025 | Updated: April 21, 2025</em></p>
        
        <p class="article-lead">KIMANGU — Innovation, creativity, and scientific rigor took center stage at the 5th Annual Kimangu Science Fair, where student projects addressing real-world problems impressed judges and visitors alike, culminating in the announcement of winners in a tense awards ceremony that celebrated young scientific minds.</p>
        
        <h3 class="article-subheading">Grand Prize Winner</h3>
        <p class="article-paragraph">The top prize went to the Solar-Powered Water Purification System developed by the Form 4 Physics Club. Team leader Ann Wambui explained the project's significance: "Our system uses solar panels to power UV purification and filtration. It can provide clean water for a family of six at just 5% of bottled water cost, making safe drinking water accessible to low-income households." The project demonstrated not only technical proficiency but also social consciousness in addressing a pressing community need.</p>
        
        <h3 class="article-subheading">Category Winners and Innovations</h3>
        <p class="article-paragraph">In the Environmental Science category, Form 3 Chemistry students impressed judges with their biodegradable plastic made from cassava starch, offering a potential solution to plastic pollution. The Engineering category was won by Form 2 Computer Club's smart irrigation system with soil sensors that could revolutionize water conservation in agriculture. Health & Medicine category honors went to a Form 3 Biology study on herbal mosquito repellent, while the Renewable Energy category featured a Form 4 Physics project creating a mini wind turbine for phone charging.</p>
        
        <p class="article-paragraph">Dr. Michael Oloo, engineering professor and chief judge, expressed admiration for the students' work: "The depth of research and practical application at this level is extraordinary. Many of these projects could be commercialized with the right support and mentorship. What impressed me most was how students identified local problems and developed locally-relevant solutions."</p>
        
        <h3 class="article-subheading">Special Recognition and Community Impact</h3>
        <p class="article-paragraph">The "People's Choice Award" went to the "Eco-Bricks from Plastic Waste" project, which had collected over 500 plastic bottles from the school compound and transformed them into building materials. This project not only demonstrated scientific innovation but also engaged the wider school community in environmental stewardship, with students from all forms participating in the collection drive.</p>
        
        <p class="article-paragraph">The science fair has evolved from a simple academic exercise to a showcase of practical problem-solving. As Principal Mwangi noted in his closing remarks: "Today we haven't just seen science projects; we've seen solutions. We've witnessed our students applying classroom knowledge to real challenges. This is what education should be – relevant, applicable, and transformative."</p>
        
        <p class="article-credits"><strong>Reporting by Brian Kamau</strong><br/>
        <strong>Project photography by David Omondi</strong><br/>
        <strong>Scientific verification by Science Department</strong><br/>
        <em>Complete winners list available at the Science Department office</em></p>
      `,
      author: studentJournalists[3], // Brian Kamau
      coAuthors: [
        { name: "David Omondi", role: "Photographer", gender: "male" },
        { name: "Science Department", role: "Technical Advisors" },
      ],
      readTime: "4 min read",
      tags: ["Science", "Competition", "STEM", "Innovation", "Projects"],
      wordCount: 650,
      editor: "Grace Akinyi",
      factCheckers: ["Science Department"],
    },
    {
      id: 5,
      image: studentsPerforming,
      date: "April 15, 2025",
      category: "Arts & Culture",
      title: "Annual Drama Festival Success",
      excerpt:
        "School drama club wins regional awards for their performance of traditional plays. The festival celebrated cultural heritage through performing arts.",
      fullContent: `
        <p class="article-byline"><strong>By SARAH WANJIKU with GRACE AKINYI</strong><br/>
        <em class="article-meta">Published: April 15, 2025</em></p>
        
        <p class="article-lead">COUNTY CULTURAL CENTER — The curtains fell on a triumphant note for Kimangu Secondary School's drama club as they returned from the Regional Drama Festival laden with awards, their performance of "Echoes of the Ancestors" hailed as a masterpiece of cultural preservation and theatrical excellence.</p>
        
        <h3 class="article-subheading">Award Tally and Recognition</h3>
        <p class="article-paragraph">The school secured multiple honors, including Best Original Script for Wambui Njoroge (Form 4), Best Costume Design for the Cultural Research Team, and Second Runner-Up Overall among 25 competing schools. Additional awards for Best Choreography in traditional dance sequences and a Special Judges' Award for cultural authenticity underscored the production's comprehensive excellence. These awards represent not just theatrical achievement but successful cultural preservation through the performing arts.</p>
        
        <h3 class="article-subheading">Behind the Scenes: A Labor of Love</h3>
        <p class="article-paragraph">The production represented six months of meticulous preparation and cultural immersion. Students conducted interviews with fifteen community elders to ensure authenticity in language, gestures, and cultural nuances. Visits to three cultural museums provided historical context, while workshops with professional theatre directors refined performance techniques. Over three hundred hours of rehearsals transformed raw talent into polished performance, with students balancing academic responsibilities with their artistic commitments.</p>
        
        <p class="article-paragraph">Drama teacher Mrs. Amina Okoth reflected on the journey: "What began as a school play evolved into a cultural mission. Our students didn't just memorize lines; they immersed themselves in traditions, learned from elders, and became custodians of cultural knowledge. This was education beyond textbooks – it was education of the heart and spirit."</p>
        
        <p class="article-credits"><strong>Reporting team: Sarah Wanjiku, Grace Akinyi</strong><br/>
        <strong>Backstage coverage: Brian Kamau</strong><br/>
        <strong>Performance photography: David Omondi</strong><br/>
        <em>Next performance: School Cultural Day, May 30</em></p>
      `,
      author: studentJournalists[0], // Sarah Wanjiku
      coAuthors: [
        { name: "Grace Akinyi", role: "Co-writer", gender: "female" },
        { name: "Brian Kamau", role: "Backstage Reporter", gender: "male" },
        {
          name: "David Omondi",
          role: "Performance Photographer",
          gender: "male",
        },
      ],
      readTime: "5 min read",
      tags: ["Arts", "Culture", "Drama", "Performance", "Awards"],
      wordCount: 700,
      editor: "Sarah Wanjiku",
      factCheckers: ["Drama Club", "Cultural Department"],
    },
    {
      id: 6,
      image: academicClinic,
      date: "April 10, 2025",
      category: "Academics",
      title: "Revision Clinic for KCSE Candidates",
      excerpt:
        "Specialized academic support sessions organized for final year students preparing for national examinations. The program includes personalized tutoring and study skills workshops.",
      fullContent: `
        <p class="article-byline"><strong>By GRACE AKINYI, Academic Affairs Correspondent</strong><br/>
        <em class="article-meta">Published: April 10, 2025</em></p>
        
        <p class="article-lead">KIMANGU — As the clock ticks toward the Kenya Certificate of Secondary Education (KCSE) examinations, Kimangu Secondary School has launched an ambitious, comprehensive revision clinic program described by education experts as "a model for exam preparation" and a testament to the school's commitment to academic excellence.</p>
        
        <h3 class="article-subheading">Program Structure and Support Systems</h3>
        <p class="article-paragraph">The clinic operates on an intensive six-day schedule designed to maximize learning while preventing burnout. Monday through Friday feature subject-specific intensive sessions from 4:00 to 6:00 PM, focusing on challenging topics and past paper practice. Saturdays are dedicated to full-day mock exams followed by personalized feedback sessions, while Sundays facilitate group discussions and peer teaching, allowing students to reinforce their understanding by explaining concepts to classmates.</p>
        
        <p class="article-paragraph">What makes this revision clinic particularly effective is its innovative, multi-layered approach to student support. Each student receives a personalized performance analysis based on diagnostic tests, allowing targeted intervention in weak areas. Former top performers return as alumni mentors, providing both academic guidance and motivational support. Digital resources including online question banks and video lessons complement traditional teaching, while weekly progress reports keep parents informed and engaged in their children's academic journey.</p>
        
        <h3 class="article-subheading">Student Experiences and Outcomes</h3>
        <p class="article-paragraph">Form 4 student James Mbugua shared his experience: "The Saturday clinics have boosted my confidence tremendously. Seeing my mock exam scores improve weekly is incredibly motivating. The personalized feedback helps me understand exactly where I need to focus, and the alumni mentors make university feel like an achievable goal rather than a distant dream."</p>
        
        <p class="article-paragraph">Principal Mwangi emphasized the program's holistic nature: "We're not just preparing students for exams; we're preparing them for academic success beyond secondary school. The study skills, time management techniques, and exam strategies they learn here will serve them in university and throughout their professional lives. This is about building resilient, confident learners who can handle academic challenges at any level."</p>
        
        <p class="article-credits"><strong>Reporting by Grace Akinyi</strong><br/>
        <strong>Data analysis by Academic Office</strong><br/>
        <strong>Student interviews by Brian Kamau</strong><br/>
        <em>Next major mock exam: May 15. All Form 4 parents invited to review sessions.</em></p>
      `,
      author: studentJournalists[2], // Grace Akinyi
      coAuthors: [
        { name: "Academic Office", role: "Data Analysis" },
        { name: "Brian Kamau", role: "Student Interviews", gender: "male" },
      ],
      readTime: "5 min read",
      tags: ["Exams", "Support", "Academics", "KCSE", "Revision"],
      wordCount: 800,
      editor: "Sarah Wanjiku",
      factCheckers: ["Academic Office"],
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      day: "15",
      month: "May",
      time: "9:00 AM - 4:00 PM",
      location: "Main Assembly Hall",
      title: "Annual General Meeting",
      description:
        "Parents, teachers, and Board of Management convene to review academic progress and institutional development plans. Key agenda items include presentation of annual academic performance report, budget review for the next fiscal year, infrastructure development updates, and strategic planning for academic excellence. All parents and guardians are required to attend this important meeting.",
      type: "Academic",
      audience: "Parents, Teachers, Board Members",
      duration: "7 hours",
      contact: "Principal's Office - 0721 123 456",
      assignedReporter: "Sarah Wanjiku & Brian Kamau",
    },
    {
      id: 2,
      day: "22",
      month: "May",
      time: "8:00 AM - 4:00 PM",
      location: "School Sports Ground",
      title: "Inter-House Sports Competition",
      description:
        "Annual athletic showcase featuring students across various sports disciplines including track and field events, football, volleyball, and basketball finals. The event will feature special guest appearances from former alumni who are now professional athletes. Trophies and medals will be awarded to top performers in each category. Refreshments will be available throughout the day.",
      type: "Sports",
      audience: "Students, Parents, Alumni",
      duration: "Full day",
      contact: "Games Department - 0721 234 567",
      assignedReporter: "David Omondi",
    },
    {
      id: 3,
      day: "05",
      month: "June",
      time: "9:00 AM - 3:00 PM",
      location: "Assembly Hall & Career Center",
      title: "Academic Career Guidance Day",
      description:
        "Professional guidance session connecting students with industry experts from various fields including engineering, medicine, business, technology, and arts. The event features interactive workshops, one-on-one counseling sessions, university representatives from top institutions, and practical demonstrations of different career paths. Students from Form 2 to Form 4 are required to attend.",
      type: "Career",
      audience: "Form 2-4 Students",
      duration: "6 hours",
      contact: "Guidance & Counseling - 0721 345 678",
      assignedReporter: "Grace Akinyi",
    },
  ];

  const categories = [
    { name: "All", count: 12 },
    { name: "Academics", count: 5 },
    { name: "Community", count: 3 },
    { name: "Achievements", count: 4 },
    { name: "Arts & Culture", count: 3 },
    { name: "Sports", count: 2 },
    { name: "Facilities", count: 2 },
  ];

  const popularTags = [
    "Examinations",
    "Awards",
    "Technology",
    "Community",
    "Sports",
    "Arts",
    "Leadership",
    "STEM",
    "Field Trips",
    "Competitions",
  ];

  // Modal functions
  const openArticleModal = (article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeArticleModal = () => {
    setIsModalOpen(false);
    setSelectedArticle(null);
    document.body.style.overflow = "auto";
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeArticleModal();
    }
  };

  React.useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === "Escape" && isModalOpen) {
        closeArticleModal();
      }
    };

    window.addEventListener("keydown", handleEscKey);
    return () => {
      window.removeEventListener("keydown", handleEscKey);
    };
  }, [isModalOpen]);

  // Format author display
  const formatAuthorDisplay = (author) => {
    return `${author.name}, ${author.role}`;
  };

  // Get avatar for co-authors
  const getCoAuthorAvatar = (coAuthor) => {
    if (coAuthor.gender) {
      return getReporterAvatar(coAuthor.gender);
    }
    return femaleReporter;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-8 bg-gradient-to-br from-blue-50/30 via-green-50/30 to-yellow-50/30">

        <div className="relative px-4 mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">
              Kimangu Gazette <span className="text-primary">Newsroom</span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 md:text-xl">
              School news reported by students, for students. Stay informed
              about the latest happenings, achievements, and upcoming
              activities.
            </p>
            <div className="mt-6">
              <span className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
                <FaNewspaper className="mr-2" />
                Student Journalism at its Best
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container px-4 py-8 mx-auto max-w-7xl md:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Blog Content */}
          <div className="lg:w-2/3">
            {/* Featured Post - Blog Style */}
            <div className="mb-12">
              <div className="overflow-hidden bg-white rounded-2xl shadow-lg">
                <div className="relative">
                  <img
                    src={newsItems[0].image}
                    alt={newsItems[0].title}
                    className="object-cover w-full h-64 md:h-96"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 text-sm font-bold text-white bg-blue-600 rounded-full">
                      Featured Story
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-6">
                    <div className="flex items-center px-3 py-2 bg-white/90 backdrop-blur-sm rounded-lg">
                      <div className="w-8 h-8 mr-2 overflow-hidden rounded-full">
                        <img
                          src={newsItems[0].author.image}
                          alt={newsItems[0].author.name}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">
                          {newsItems[0].author.name}
                        </div>
                        <div className="text-xs text-gray-600">
                          {newsItems[0].author.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <span className="px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
                      {newsItems[0].category}
                    </span>
                    <span className="mx-3 text-gray-300">•</span>
                    <span className="text-gray-600">
                      <FaCalendarAlt className="inline-block mr-2" />
                      {newsItems[0].date}
                    </span>
                    <span className="mx-3 text-gray-300">•</span>
                    <span className="text-gray-600">
                      <FaPenAlt className="inline-block mr-2" />
                      {formatAuthorDisplay(newsItems[0].author)}
                    </span>
                  </div>
                  <h2 className="mb-4 text-3xl font-bold text-gray-900">
                    {newsItems[0].title}
                  </h2>
                  <p className="mb-6 text-lg text-gray-700 leading-relaxed">
                    {newsItems[0].excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {newsItems[0].tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-6 border-t">
                    <div className="flex items-center">
                      <div className="flex items-center">
                        <div className="w-10 h-10 mr-3 overflow-hidden rounded-full">
                          <img
                            src={newsItems[0].author.image}
                            alt={newsItems[0].author.name}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">
                            {formatAuthorDisplay(newsItems[0].author)}
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <FaClock className="mr-1" />
                            {newsItems[0].readTime}
                            <span className="mx-2">•</span>
                            {newsItems[0].wordCount} words
                          </div>
                        </div>
                      </div>
                      {newsItems[0].coAuthors &&
                        newsItems[0].coAuthors.length > 0 && (
                          <div className="ml-6 pl-6 border-l">
                            <div className="text-sm text-gray-600">
                              With contributions from:
                            </div>
                            <div className="flex flex-wrap gap-2 mt-1">
                              {newsItems[0].coAuthors.map((coAuthor, idx) => (
                                <span
                                  key={idx}
                                  className="text-xs text-gray-500"
                                >
                                  {coAuthor.name} ({coAuthor.role})
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                    </div>
                    <button
                      className="flex items-center px-6 py-3 font-medium text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
                      onClick={() => openArticleModal(newsItems[0])}
                    >
                      Read Full Article
                      <FaArrowRight className="ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Latest Stories
                  </h2>
                  <p className="text-gray-600">
                    Fresh reports from our student journalists
                  </p>
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                {newsItems.slice(1, 5).map((item) => (
                  <article
                    key={item.id}
                    className="overflow-hidden transition-all bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-100"
                  >
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="object-cover w-full h-48"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 text-xs font-medium text-white bg-blue-600 rounded-full">
                          {item.category}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <div className="flex items-center px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                          <div className="w-6 h-6 mr-1 overflow-hidden rounded-full">
                            <img
                              src={item.author.image}
                              alt={item.author.name}
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <span className="text-xs font-medium text-gray-700">
                            {item.author.name.split(" ")[0]}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-3 text-sm text-gray-500">
                        <FaCalendarAlt className="mr-2" />
                        {item.date}
                        <span className="mx-2">•</span>
                        <FaPenAlt className="mr-1" />
                        {item.author.name.split(" ")[0]}
                        <span className="mx-2">•</span>
                        <span>{item.readTime}</span>
                      </div>
                      <h3 className="mb-3 text-xl font-bold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="mb-4 text-gray-600 line-clamp-3">
                        {item.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tags.slice(0, 3).map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 text-xs text-gray-600 bg-gray-100 rounded-full"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="flex items-center">
                          <div className="w-8 h-8 mr-2 overflow-hidden rounded-full">
                            <img
                              src={item.author.image}
                              alt={item.author.name}
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div>
                            <span className="text-sm font-medium text-gray-700">
                              {item.author.name.split(" ")[0]}
                            </span>
                            <div className="text-xs text-gray-500">
                              {item.author.role}
                            </div>
                          </div>
                        </div>
                        <button
                          className="flex items-center text-sm font-medium text-blue-700 hover:text-blue-800"
                          onClick={() => openArticleModal(item)}
                        >
                          Read Story
                          <FaChevronRight className="ml-1" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* Blog Sidebar */}
          <div className="lg:w-1/3">
            <div className="space-y-8">
              {/* Upcoming Events */}
              <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <h3 className="flex items-center mb-6 text-xl font-bold text-gray-900">
                  <FaCalendarAlt className="mr-3 text-blue-600" />
                  Upcoming Events
                </h3>
                <div className="space-y-6">
                  {upcomingEvents.map((event) => (
                    <div
                      key={event.id}
                      className="pb-6 border-b border-gray-100 last:border-0 last:pb-0"
                    >
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-4">
                          <div className="text-center bg-blue-50 rounded-lg p-3">
                            <div className="text-2xl font-bold text-blue-900">
                              {event.day}
                            </div>
                            <div className="text-sm font-medium text-blue-700 uppercase">
                              {event.month}
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2">
                            {event.title}
                          </h4>
                          <div className="flex items-center text-sm text-gray-600 mb-2">
                            <FaClock className="mr-2" />
                            <span className="font-medium">{event.time}</span>
                            <span className="mx-2 text-gray-400">•</span>
                            <FaMapMarkerAlt className="mr-2" />
                            <span className="font-medium">
                              {event.location}
                            </span>
                          </div>
                          <div className="mb-3">
                            <span className="inline-block px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full mb-2">
                              {event.type}
                            </span>
                            <span className="ml-2 inline-block px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full">
                              Duration: {event.duration}
                            </span>
                          </div>
                          <p className="text-sm text-gray-700 leading-relaxed mb-3">
                            {event.description}
                          </p>
                          <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                            <div className="flex items-center">
                              <span className="font-medium mr-1">
                                Audience:
                              </span>
                              {event.audience}
                            </div>
                            {event.assignedReporter && (
                              <div className="flex items-center">
                                <span className="font-medium mr-1">
                                  Coverage:
                                </span>
                                <span className="text-blue-600">
                                  {event.assignedReporter}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Modal */}
      {isModalOpen && selectedArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 transition-opacity duration-300"
          onClick={handleBackdropClick}
        >
          <div className="relative w-full max-w-5xl max-h-[95vh] overflow-y-auto bg-white rounded-2xl shadow-2xl">
            {/* Close Button */}
            <button
              onClick={closeArticleModal}
              className="fixed top-6 right-6 z-10 p-3 text-gray-500 transition-colors bg-white rounded-full shadow-lg hover:text-gray-700 hover:bg-gray-100"
              aria-label="Close modal"
            >
              <FaTimes size={24} />
            </button>

            {/* Header with Newspaper Style */}
            <div className="sticky top-0 z-20 bg-white border-b">
              <div className="px-8 pt-8 pb-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
                      {selectedArticle.category}
                    </span>
                    <span className="mx-3 text-gray-300">•</span>
                    <span className="text-gray-600">
                      <FaCalendarAlt className="inline-block mr-2" />
                      {selectedArticle.date}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-500 hover:text-blue-600">
                      <FaShareAlt size={18} />
                    </button>
                    <button className="p-2 text-gray-500 hover:text-blue-600">
                      <FaPrint size={18} />
                    </button>
                  </div>
                </div>

                <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-8">
                  {selectedArticle.title}
                </h1>

                {/* Byline Section */}
                <div className="flex items-center justify-between py-6 border-t border-b">
                  <div className="flex items-center">
                    <div className="w-12 h-12 mr-4 overflow-hidden rounded-full">
                      <img
                        src={selectedArticle.author.image}
                        alt={selectedArticle.author.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">
                        {selectedArticle.author.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {selectedArticle.author.role} •{" "}
                        {selectedArticle.author.form}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">
                      <FaClock className="inline-block mr-1" />
                      {selectedArticle.readTime} • {selectedArticle.wordCount}{" "}
                      words
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      Editor: {selectedArticle.editor}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="px-8 pb-12">
              {/* Article Image with margin top */}
              <div className="mt-8 mb-12">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="object-cover w-full h-auto rounded-xl"
                />
                {selectedArticle.coAuthors &&
                  selectedArticle.coAuthors.some((ca) =>
                    ca.role.includes("Photographer")
                  ) && (
                    <div className="mt-2 text-sm text-gray-500 text-center">
                      Photo:{" "}
                      {
                        selectedArticle.coAuthors.find((ca) =>
                          ca.role.includes("Photographer")
                        )?.name
                      }
                    </div>
                  )}
              </div>

              {/* Full Content */}
              <div className="article-content prose prose-lg max-w-none mx-auto">
                <style jsx>{`
                  .article-content {
                    line-height: 1.8 !important;
                  }
                  .article-content .article-byline {
                    margin-bottom: 3rem !important;
                    font-size: 1.1rem !important;
                    color: #4b5563 !important;
                  }
                  .article-content .article-meta {
                    color: #6b7280 !important;
                    font-size: 0.95rem !important;
                  }
                  .article-content .article-lead {
                    font-size: 1.3rem !important;
                    line-height: 1.9 !important;
                    font-weight: 500 !important;
                    color: #1f2937 !important;
                    margin-bottom: 2.5rem !important;
                    padding-bottom: 1.5rem !important;
                    border-bottom: 2px solid #e5e7eb !important;
                  }
                  .article-content .article-paragraph {
                    font-size: 1.15rem !important;
                    line-height: 1.9 !important;
                    color: #374151 !important;
                    margin-bottom: 2rem !important;
                    text-align: justify !important;
                  }
                  .article-content .article-subheading {
                    font-size: 1.6rem !important;
                    font-weight: 700 !important;
                    color: #1e40af !important;
                    margin-top: 3rem !important;
                    margin-bottom: 1.8rem !important;
                    padding-bottom: 0.8rem !important;
                    border-bottom: 1px solid #dbeafe !important;
                  }
                  .article-content .article-credits {
                    margin-top: 4rem !important;
                    padding-top: 2rem !important;
                    border-top: 2px solid #e5e7eb !important;
                    font-size: 1.05rem !important;
                    color: #6b7280 !important;
                    line-height: 1.7 !important;
                  }
                  .article-content strong {
                    color: #1f2937 !important;
                  }
                  .article-content em {
                    color: #6b7280 !important;
                  }
                  /* Increased paragraph spacing */
                  .article-content p {
                    margin-bottom: 2rem !important;
                  }
                  /* Better text flow */
                  .article-content {
                    text-align: justify;
                    hyphens: auto;
                    letter-spacing: 0.01em;
                  }
                `}</style>
                <div
                  className="text-gray-800 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: selectedArticle.fullContent,
                  }}
                />
              </div>

              {/* Tags and Meta Information */}
              <div className="mt-16 pt-8 border-t">
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedArticle.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Contributing Team */}
                <div className="bg-gray-50 rounded-xl p-8 mb-8">
                  <h3 className="font-bold text-gray-900 mb-6 text-xl">
                    <FaNewspaper className="inline-block mr-2" />
                    Reporting Team
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="font-medium text-gray-700 mb-3 text-lg">
                        Primary Author:
                      </div>
                      <div className="flex items-center">
                        <div className="w-12 h-12 mr-4 overflow-hidden rounded-full">
                          <img
                            src={selectedArticle.author.image}
                            alt={selectedArticle.author.name}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <div className="font-bold text-lg">
                            {selectedArticle.author.name}
                          </div>
                          <div className="text-gray-600">
                            {selectedArticle.author.role}
                          </div>
                        </div>
                      </div>
                    </div>

                    {selectedArticle.coAuthors &&
                      selectedArticle.coAuthors.length > 0 && (
                        <div>
                          <div className="font-medium text-gray-700 mb-3 text-lg">
                            Contributors:
                          </div>
                          <div className="space-y-3">
                            {selectedArticle.coAuthors.map((coAuthor, idx) => (
                              <div
                                key={idx}
                                className="flex items-center text-base"
                              >
                                <div className="flex items-center">
                                  {coAuthor.gender && (
                                    <div className="w-8 h-8 mr-3 overflow-hidden rounded-full">
                                      <img
                                        src={getCoAuthorAvatar(coAuthor)}
                                        alt={coAuthor.name}
                                        className="object-cover w-full h-full"
                                      />
                                    </div>
                                  )}
                                  <div className="font-medium text-gray-900">
                                    {coAuthor.name}
                                  </div>
                                </div>
                                <span className="mx-2 text-gray-400">•</span>
                                <span className="text-gray-600">
                                  {coAuthor.role}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                    <div>
                      <div className="font-medium text-gray-700 mb-3 text-lg">
                        Editorial:
                      </div>
                      <div className="text-gray-700 text-base">
                        <div className="mb-1">
                          <strong>Editor:</strong> {selectedArticle.editor}
                        </div>
                        <div>
                          <strong>Fact-checkers:</strong>{" "}
                          {selectedArticle.factCheckers?.join(", ")}
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="font-medium text-gray-700 mb-3 text-lg">
                        Article Info:
                      </div>
                      <div className="text-gray-700 text-base">
                        <div className="mb-1">
                          <strong>Published:</strong> {selectedArticle.date}
                        </div>
                        <div className="mb-1">
                          <strong>Category:</strong> {selectedArticle.category}
                        </div>
                        <div>
                          <strong>Word Count:</strong>{" "}
                          {selectedArticle.wordCount}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="mt-8 p-8 bg-blue-50 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-4 text-xl">
                    Join Our Newsroom!
                  </h3>
                  <p className="text-gray-700 mb-6 text-base leading-relaxed">
                    Interested in journalism? The Kimangu Gazette is always
                    looking for new reporters, photographers, and editors. See
                    Mr. Ochieng in the Journalism Club every Thursday after
                    school.
                  </p>
                  <button className="px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                    Learn About Journalism Club
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsEvents;