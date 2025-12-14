/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mariem Sabri",
  title: "Hi all, I'm Mariem",
  subTitle: emoji(
    "Full Stack Developer specialized in web and mobile development, passionate about modern technologies and building high-performance applications. Experienced in delivering complete projects and mentoring youth in community settings. I also conduct workshops on IT and soft skills, sharing knowledge with diverse audiences."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
 

    github: "https://github.com/sabrimariem1025-spec",
  linkedin: "https://www.linkedin.com/in/sabri-mariem/",
  gmail: "sabrimariem1025@gmail.com",
  facebook: "https://www.facebook.com/mariem.sabri.61707",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER & PASSIONATE TRAINER WHO LOVES TO EXPLORE EVERY TECH STACK AND SHARE KNOWLEDGE",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    ),
      emoji(
      "⚡ Conduct IT and Soft Skills training sessions for students and professionals "
    ),
       emoji(
      "⚡ Mentor and guide learners to strengthen their technical and interpersonal skills "
    )
  ],


softwareSkills: [
  {
    skillName: "HTML5",
    fontAwesomeClassname: "fab fa-html5"
  },
  {
    skillName: "CSS3",
    fontAwesomeClassname: "fab fa-css3-alt"
  },
  {
    skillName: "SASS",
    fontAwesomeClassname: "fab fa-sass"
  },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "fab fa-js"
  },
  {
    skillName: "React.js",
    fontAwesomeClassname: "fab fa-react"
  },
  {
    skillName: "Node.js",
    fontAwesomeClassname: "fab fa-node"
  },
  {
    skillName: "Swift",
    fontAwesomeClassname: "fab fa-swift"
  },
  {
    skillName: "NPM",
    fontAwesomeClassname: "fab fa-npm"
  },
  {
    skillName: "SQL Database",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "AWS",
    fontAwesomeClassname: "fab fa-aws"
  },
  {
    skillName: "Firebase",
    fontAwesomeClassname: "fas fa-fire"
  },
  {
    skillName: "Python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "Docker",
    fontAwesomeClassname: "fab fa-docker"
  },
  {
    skillName: "Soft Skills Training",
    fontAwesomeClassname: "fas fa-chalkboard-teacher"
  },
  {
    skillName: "IT Training / Mentoring",
    fontAwesomeClassname: "fas fa-user-graduate"
  },
  {
    skillName: "Communication",
    fontAwesomeClassname: "fas fa-comments"
  },
  {
    skillName: "Teamwork",
    fontAwesomeClassname: "fas fa-users"
  }
],

  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Higher Institute of Computer Science of Medenine, Médenine, Tunisia ",
      logo: require("./assets/images/education.jpg"),
      subHeader: "MASTER’S DEGREE IN SOFTWARE & KNOWLEDGE ENGINEERING ",
      duration: "September 2021 - June 2023",
      desc: "Graduated with High Distinction; focused on software engineering, knowledge engineering, system architecture, and performance optimization. ",
   
    },
    {
      schoolName: "Higher Institute of Computer Science of Medenine, Médenine, Tunisia ",
      logo: require("./assets/images/education.jpg"),
      subHeader: "APPLIED BACHELOR’S DEGREE IN MULTIMEDIA & WEB TECHNOLOGIES",
      duration: "September 2018 - June 2021",
      desc: "Completed coursework in programming, databases, multimedia systems, web development, and software fundamentals.",
  
    }
  ]
};


const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full-Stack Web Developer",
      company: "Devaxon",
      companylogo: require("./assets/images/devaxon.jpg"),
      date: "February 2024 – Present",
      desc: " Developing and maintaining full-stack web applications with dynamic interfaces connected to SQL databases, optimizing UX/UI, and debugging or refactoring existing code for better performance.",
    },
    
      {
    role: "Digital Marketing",
    company: "Aquatun",
    companylogo: require("./assets/images/aqua.jpg"),
    date: "December 2023 - 17 February 2024",
    desc:"Optimized the company website, created engaging digital and editorial content, and tracked social media trends to boost overall online presence and audience engagement.",
  }
  ]
};



const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "",
  projects: [
     {
      image: require("./assets/images/ecommerce.png"),
      projectName: "LUXE BOUTIQUE - E-Commerce Frontend",
      projectDesc: "A modern, responsive e-commerce website built with Next.js 15 and React, featuring an elegant minimalist design, product showcase, and smooth user interactions. Fully deployed on Vercel with a professional UI/UX optimized for performance and accessibility.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://ecommerce-front-xi-rust.vercel.app/"
        }
      ]
    },
       {
      image: require("./assets/images/rhapp.png"),
      projectName: "HR Management App – Master Final Year Project",
      projectDesc: "A centralized HR app that streamlines recruitment, onboarding, and employee management. It digitizes probation evaluations, contracts, and documentation, while keeping managers and HR teams updated. The solution improves transparency, efficiency, and workforce management.",
     
    },
    {
      image: require("./assets/images/wassaleni.png"),
      projectName: "Mobile Carpooling App – Licence Final Year Project",
      projectDesc: "A mobile app that makes carpooling easy, safe, and social. Passengers can quickly find drivers on their route, while drivers choose their preferred trips via an integrated map. Users can share trip status, update destinations, and communicate efficiently, making every journey convenient and connected.",
    
    }
     
 
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [

    {
title: "Certificate of Participation – HP LIFE e-Learning",
  subtitle: "Attended the in-person student training workshop in Médenine, Tunisia, and successfully completed 30 online courses.",
  image: require("./assets/images/hp.png"),
  imageAlt: "HP LIFE e-Learning Logo",
      footerLink: [

      ]
    },
        {
      title: "Soft Skills Trainer- Association des Jeunes Créateurs (AJC)",
      subtitle: " Animated numerous soft skills workshops (communication, teamwork).",
       image: require("./assets/images/ajc.jpg"),
         imageAlt: "Logo",
          footerLink: [
      
      ]
    },
    {
      title: "Trainer - Tunisian Programming Lovers (ISIMED)",
       subtitle: "Conducted IT workshops for students on frameworks like Ionic and other web/mobile technologies & Animated numerous soft skills workshops (communication, teamwork).",
      image: require("./assets/images/isi.jpg"),
       imageAlt: "Logo",
        footerLink: [
     
      ]
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  //** Podcast 
  podcast: [
    // "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  display: true 
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+21653978027",
  email_address: "sabrimariem1025@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
