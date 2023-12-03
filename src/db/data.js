const courseModel = [
  {
    id: 1,
    name: "Introduction to React Native",
    instructor: "John Doe",
    description:
      "Learn the basics of React Native development and build your first mobile app.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://entri.app/blog/wp-content/uploads/2022/03/Untitled581-750x375.png",
    duration: "8 weeks",
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
    ],
    students: [
      {
        id: 101,
        name: "Alice Johnson",
        email: "alice@example.com",
        dueDate: "23/09/23",
        progress:80,
      },
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com",
        dueDate: "23/09/23",
        progress:80,
      },
    ],
  },
  {
    id: 2,
    name: "Game design with Unreal Engine ",
    instructor: "Thomas Jefferson",
    description: "Learn how to design your first game on unreal engine.",
    enrollmentStatus: "Closed",
    thumbnail:
      "https://www.razzem.com/wp-content/uploads/2023/05/Unreal-Engine-5-System-requirements.jpg",
    duration: "4 weeks",
    schedule: "Mondays and Wednesdays, 5:00 PM - 7:00 PM",
    location: "Online",
    prerequisites: [
      "Basic Game development knowledge",
      "Familiarity with Unreal Engine",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Unreal Engine",
        content: "How to work with unreal engine.",
      },
      {
        week: 2,
        topic: "Building Your First Game",
        content: "Creating a simple block and obstacle game",
      },
    ],
    students: [
      {
        id: 103,
        name: "Scarlett Johanson",
        email: "scarlett@example.com",
        dueDate: "23/09/23",
        progress:70,
        
      },
      {
        id: 104,
        name: "Will Smith",
        email: "Will@example.com",
        dueDate: "23/09/23",
        progress:80,
      },
    ],
  },
  {
    id: 3,
    name: "Adobe Photoshop CC: A Beginner to Advanced Photoshop Course ",
    instructor: "Phil Ebiner",
    description:
      "You can learn Adobe Photoshop CC. Graphic Design, Photo Editing & Retouching, Learn it all with this Photoshop class.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://static.skillshare.com/uploads/parentClasses/07a7e81c813da92414c046f9563264b3/a0555965",
    duration: "4 weeks",
    schedule: "Mondays and Wednesdays, 5:00 PM - 7:00 PM",
    location: "Online",
    prerequisites: [
      "Students should have a copy of Adobe Photoshop to follow along. ",
      "We'll be teaching using version CC (Creative Cloud), but any version will be fine.",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Photoshop Basics",
        content: "Understand the photoshop interface",
      },
      {
        week: 2,
        topic: "Understand the Layer panel",
        content: "Aligning layers in photoshop",
      },
    ],
    students: [
      {
        id: 105,
        name: "Devanshi Tyagi",
        email: "devanshi@example.com",
        dueDate: "23/09/23",
        progress:30,
      },
      {
        id: 106,
        name: "Isha Jain",
        email: "Isha@example.com",
        dueDate: "23/09/23",
        progress:80,
      },
      {
        id: 103,
        name: "Scarlett Johanson",
        email: "scarlett@example.com",
        dueDate: "23/09/23",
        progress:60,
      },
    ],
  },
  {
    id: 4,
    name: "Principles of Human Computer Interaction",
    instructor: "Jaime Montemayor",
    description:
      "This course focuses on the HCI design process and covers the underlying scientific principles, HCI design methodology, and the user-interface technology used to implement HCI.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://ik.imagekit.io/Botpenguin/assets/website/Human_Computer_Interaction_HCI_d62974eee5.png",
    duration: "5 weeks",
    schedule: "Mondays and Wednesdays, 3:00 PM - 5:00 PM",
    location: "Online",
    prerequisites: [
      "Information Systems Engineering ",
      "We'll be teaching using version CC (Creative Cloud), but any version will be fine.",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Theories of Human Information Processing",
        content: "Understand basic principles of human-computer interaction",
      },
      {
        week: 2,
        topic: "Design Psychology",
        content: "Design, develop, and evaluate interactive systems",
      },
    ],
    students: [
      {
        id: 105,
        name: "Reese jolly",
        email: "reese@example.com",
        dueDate: "23/09/23",
        progress:90,
      },
      {
        id: 106,
        name: "Jamie Jordan",
        email: "jamie@example.com",
        dueDate: "23/09/23",
        progress:80,
      },
    ],
  },
  {
    id: 5,
    name: "Communication Design",
    instructor: "Shreya Jakhar",
    description:
      "Communication Design is a unique program centered on creating delight through good design.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://images.shiksha.com/mediadata/images/articles/1444286359php2HikNc.jpeg",
    duration: "5 weeks",
    schedule: "Fridays and Saturdays, 3:00 PM - 5:00 PM",
    location: "Online",
    prerequisites: [
      "Information Systems Engineering ",
      "We'll be teaching using version CC (Creative Cloud), but any version will be fine.",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Discipline and Learning ",
        content:
          "interdisciplinary curriculum and experiential learning at the core. ",
      },
      {
        week: 2,
        topic: "Design Psychology",
        content: "Design, develop, and evaluate interactive systems",
      },
    ],
    students: [
      {
        id: 105,
        name: "Reese jolly",
        email: "reese@example.com",
        dueDate: "23/09/23",
        progress:50,
      },
      {
        id: 106,
        name: "Jamie Jordan",
        email: "jamie@example.com",
        dueDate: "23/09/23",
        progress:80,
      },
    ],
  },
  {
    id: 6,
    name: "Illustrator CC: Design and drawing from scratch to expert!",
    instructor: "Joel Combes",
    description:
      "This course is the gateway to people who are starting the vector graphics. We will see many exercises that will take you from the simple to truly amazing things. You'll be able to design any kind of vector arts with confidence.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://www.classcentral.com/report/wp-content/uploads/2022/06/Adobe-Illustrator-BCG-Banner.png",
    duration: "5 weeks",
    schedule: "Mondays and Saturdays, 3:00 PM - 5:00 PM",
    location: "Online",
    prerequisites: [
      "You must have the Adobe Illustrator CS5 version or higher (preferably CC) installed",
      "Must be familiar with the operating system use either Apple or Windows.",
    ],
    syllabus: [
      {
        week: 1,
        topic: "First Steps Presentation",
        content: "Create new documents and templates ",
      },
      {
        week: 2,
        topic: "Basic Tools",
        content: "Selection Tool and Direct Selection Tool",
      },
      {
        week: 3,
        topic: "Designing Brands Presentation",
        content: "Design, develop, and evaluate interactive systems",
      },
    ],
    students: [
      {
        id: 105,
        name: "Ashima Tyagi",
        email: "ashima@example.com",
        dueDate: "23/09/23",
        progress:80,
      },
      {
        id: 106,
        name: "Aria Goel",
        email: "aria@example.com",
        dueDate: "23/09/23",
        progress:10,
      },
    ],
  },
];
export default courseModel;