// Personal Info
export const personalInfo = {
  name: 'SEPTIAN ARDHI CHRISTIANTO',
  title: 'Full Stack Developer & QC Technical Support Specialist',
  phone: '082233401530',
  email: 'ardhiseptiand@gmail.com',
  location: 'Surabaya, Indonesia',
  bio: 'I am a dedicated IT professional with a passion for technology and continuous learning. Currently working as a Quality Control & Technical Support Specialist at PT Youpeng, while pursuing a degree in Information Systems at Universitas Terbuka. With 6+ years of experience spanning software development, networking, graphic design, and technical infrastructure management, I bring a comprehensive skill set to every project. Known for strong problem-solving abilities, adaptability, and leadership qualities. I am committed to leveraging my technical expertise and professional experience to deliver high-quality solutions and create meaningful impact in the technology field.'
}

// Skills Data
export const skills = {
  technical: [
    { name: 'JavaScript', level: 85, icon: '✨' },
    { name: 'HTML/CSS', level: 90, icon: '🌐' },
    { name: 'React.js', level: 80, icon: '⚛️' },
    { name: 'Next.js', level: 75, icon: '🚀' },
    { name: 'Java', level: 70, icon: '☕' },
    { name: 'C++', level: 65, icon: '⚙️' },
    { name: 'Network Troubleshooting', level: 85, icon: '🔧' },
    { name: 'Adobe Photoshop', level: 75, icon: '🎨' },
  ],
  soft: [
    { name: 'Komunikasi Efektif', level: 90, icon: '💬' },
    { name: 'Problem Solving', level: 92, icon: '🧠' },
    { name: 'Adaptif & Fleksibel', level: 95, icon: '🔄' },
    { name: 'Lifelong Learner', level: 98, icon: '📚' },
    { name: 'Interpersonal Skills', level: 88, icon: '🤝' },
    { name: 'Leadership', level: 85, icon: '🎯' },
  ],
  software: [
    { name: 'Visual Studio Code', icon: '💻' },
    { name: 'Adobe Photoshop', icon: '🎨' },
    { name: 'Adobe Illustrator', icon: '✏️' },
    { name: 'CorelDRAW', icon: '🖌️' },
    { name: 'Microsoft Office', icon: '📊' },
    { name: 'Windows OS', icon: '🪟' },
  ]
}

// Projects Data
export const projects = [
  {
    id: 1,
    title: 'Web Development Portfolio',
    description: 'Collection of web development projects created using HTML, CSS, JavaScript and various web platforms and development tools.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    details: 'Created during studies at SMK 17 Agustus 1945, including static and dynamic websites'
  },
  {
    id: 2,
    title: 'Web-based Chatting Application',
    description: 'Online chatting feature development using HTML, PHP, CSS, and MySQL implemented during Internship at Dinas Komunikasi dan Informatika.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    tags: ['PHP', 'MySQL', 'HTML', 'CSS'],
    details: 'Developed as part of internship at Dinas Komunikasi dan Informatika Surabaya'
  },
  {
    id: 3,
    title: 'Graphic Design Portfolio',
    description: 'Collection of professional graphic designs including posters, social media content, and billboards using Adobe Creative Suite.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    tags: ['Photoshop', 'Illustrator', 'Design', 'Branding'],
    details: 'Results from Junior Graphic Designer training at Tekno Sains Academy'
  },
  {
    id: 4,
    title: 'Network & Infrastructure Management',
    description: 'Expertise in network troubleshooting, LAN cable crimping, and network device configuration based on real-world experience.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    tags: ['Networking', 'Hardware', 'Troubleshooting'],
    details: 'Skills developed through education and professional work experience'
  },
]

// Experience & Achievements
export const achievements = [
  {
    id: 1,
    title: 'Quality Control Excellence',
    description: 'Ensuring quality standards for tools and team certifications',
    impact: 'Elevated equipment installation quality standards',
    year: 2026,
    icon: '✅',
  },
  {
    id: 2,
    title: 'Technical Installation',
    description: 'Technical inspection of telecommunications equipment',
    impact: 'Ensured provider specifications met perfectly',
    year: 2026,
    icon: '🛠️',
  },
  {
    id: 3,
    title: 'Safety Leadership',
    description: 'Ensuring team safety with PPE use and K3 procedures',
    impact: 'Zero accident rate in technical team',
    year: 2026,
    icon: '🛡️',
  },
  {
    id: 4,
    title: 'Professional Development',
    description: 'Completed Junior Graphic Designer training and certifications',
    impact: 'KKNI Level II and LSP Dua Warna Certifications',
    year: 2024,
    icon: '🎓',
  },
]

// Experience Timeline
export const experience = [
  {
    period: 'November 2025 - March 2026',
    role: 'Quality Control & Technical Support Staff',
    company: 'PT Youpeng Informasi Teknologi - Jakarta, Bogor',
    description: 'Ensuring quality of telecommunications equipment installation and team safety management',
    achievements: [
      'QC (Tools & Certification): Validated work tools and team certifications according to SOP',
      'QC Installation: Technical inspection of Antenna, RRU, Cabinet and other equipment',
      'QHSE Supervisor: Ensured proper use of PPE and implementation of K3 procedures',
      'Technical Support: Accompanied technical team in installation processes',
    ]
  },
  {
    period: 'November 2023 - January 2024',
    role: 'General Affair - Internship Staff',
    company: 'PT. Surya Timur Sakti Jatim - Surabaya',
    description: 'Managing inventory of goods and operational vehicles',
    achievements: [
      'Inventory management of goods and vehicles to support operational efficiency',
      'Replacement of damaged or incompatible hardware',
      'Monitoring of incoming and outgoing goods',
      'Recording and monitoring operational vehicle condition',
    ]
  },
  {
    period: 'January 2021 - January 2023',
    role: 'Assistant Surveyor - Outsourcing',
    company: 'Badan Pertanahan Nasional (BPN) - Surabaya',
    description: 'Assisting in land measurement activities',
    achievements: [
      'Operating surveying equipment (Disto, tape measures, satellite meters)',
      'Ensuring measurement accuracy according to technical standards',
      'Field documentation and technical coordination',
      'Contributing to measurement data verification processes',
    ]
  },
  {
    period: 'January 2020 - March 2020',
    role: 'Informatics - Internship Staff',
    company: 'Dinas Komunikasi dan Informatika Surabaya',
    description: 'Web application feature development and website monitoring',
    achievements: [
      'Development of web-based chatting features (HTML, PHP, CSS, MySQL)',
      'Monitoring government website visitor statistics',
      'Data analysis and monitoring result reporting',
      'Using development tools such as Sublime Text',
    ]
  },
  {
    period: 'March 2023 - Freelance',
    role: 'Document Editing - Freelance',
    company: 'Puskesmas Sidosermo - Surabaya',
    description: 'Document editing and organizing for data collection and reporting',
    achievements: [
      'Organizing documents using Microsoft Word',
      'Annual report compilation',
      'Presentation material editing',
    ]
  },
]

// Education Data
export const education = [
  {
    id: 1,
    degree: 'Information Systems',
    school: 'Universitas Terbuka (Indonesian Open University)',
    period: 'Currently Enrolled',
    description: 'Distance learning program in Information Systems field',
    highlights: [
      'Studying fundamentals of Information Systems and technology',
      'Focus on software development and IT management',
      'Combination of theory and practice in system implementation',
      'Working professionally while pursuing education'
    ]
  },
  {
    id: 2,
    degree: 'Software Engineering (RPL)',
    school: 'SMK 17 Agustus 1945 Surabaya',
    period: '2018 - 2021',
    description: 'Vocational program specializing in Information Technology',
    highlights: [
      'Programming fundamentals (Java, C++)',
      'Hardware assembly and maintenance',
      'Computer network management',
      'Website development using various platforms',
      'Certificate of Competence / KKNI Level II'
    ]
  },
  {
    id: 3,
    degree: 'Junior Graphic Designer',
    school: 'Tekno Sains Academy / Dinas Tenaga Kerja / StillUp Academy',
    period: 'August - September 2024',
    description: 'Intensive training in graphic design and visual communication',
    highlights: [
      'Visual Design: Posters, social media content, billboards',
      'Proficient in Adobe Photoshop CC2019 and Adobe Illustrator CC2019',
      'Design Communication and presentation using Canva',
      'Certificate from Lembaga Sertifikasi Profesi Informatika Dua Warna'
    ]
  }
]

// Certifications Data
export const certifications = [
  {
    id: 1,
    title: 'Certificate of Competence / KKNI Level II',
    issuer: 'SMK 17 Agustus 1945',
    field: 'Software Engineering',
    year: 2021,
    icon: '📜',
  },
  {
    id: 2,
    title: 'Junior Graphic Designer',
    issuer: 'Lembaga Sertifikasi Profesi Informatika Dua Warna',
    field: 'Graphic Design',
    year: 2024,
    icon: '🎨',
  }
]

// Organizations Data
export const organizations = [
  {
    id: 1,
    position: 'Chairman',
    organization: 'Karang Taruna Kampung RT 7 RW 4, Jetis Kulon',
    location: 'Surabaya, Indonesia',
    period: '2023 - Present',
    description: 'Leading and mentoring members in social and youth development activities',
    responsibilities: [
      'Leading and guiding Karang Taruna members in various community activities',
      'Organizing village events and Independence Day celebrations',
      'Encouraging youth participation in positive community service',
      'Facilitating mutual cooperation activities in the community'
    ]
  }
]
