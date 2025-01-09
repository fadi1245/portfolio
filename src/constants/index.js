import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import shoe from '../assets/projects/shoe4.jpg'
import train from '../assets/projects/train.jpg'

export const HERO_CONTENT = `I am a dedicated full-stack developer with a passion for building reliable and scalable web applications. With 1 year of practical experience, I have developed strong expertise in the MERN stack, including React for front-end development and Node.js, Express, and MongoDB for back-end systems. My focus is on creating innovative solutions that enhance user satisfaction and contribute to business success.`;

export const ABOUT_TEXT = `I am a passionate full-stack developer who strongly focuses on building efficient, scalable, and intuitive web applications. Over the past year, I have gained hands-on experience working with various technologies such as React, Node.js, MongoDB, MySQL, and PostgreSQL. My journey in web development started from a curiosity about how things work and has evolved into a career where I enjoy overcoming complex challenges and continuously improving my skills. I thrive in dynamic, team-oriented environments and take pride in delivering high-quality, user-centric solutions. In my free time, I enjoy staying active, exploring emerging technologies, and contributing to open-source initiatives.`;

export const EXPERIENCES = [
  {
    year: "5/2023 - 11/2023",
    role: "MERN Stack Developer",
    company: "Camerinfolks.pvt.ltd",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for seamless data communication. Worked closely with cross-functional teams to contribute to the development of high-quality software solutions, ensuring timely delivery and meeting project requirements.`,
    technologies: ["React.js", "Node", "Node.js", "Mongo DB","Tailwind CSS"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: shoe,
    description:
      "Developed a fully functional e-commerce website, featuring a product listing, dynamic shopping cart system, and seamless payment integration. Managed all aspects of development, including front-end and back-end functionalities, ensuring a smooth user experience and secure transactions with robust user authentication. The project also involved implementing robust user authentication to secure the shopping experience.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB","Material UI"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "A fully functional to-do list application that features task management, user authentication, and real-time updates. The application allows users to easily add, edit, and delete tasks, while providing a smooth and efficient experience through seamless front-end and back-end integration. Key functionalities include secure user authentication and the ability to track tasks in real-time.",
    technologies: ["HTML", "CSS", "React.js", "Node.js", "Mongo DB", "Tailwind css"],
  },
  {
    title: "Railway management Application",
    image: train,
    description:
      "A train booking application designed for train owners to add and manage their routes, train details, and schedules. The front-end provides an intuitive interface for train owners to input and update train information, such as route details, schedules, and availability. The back-end, developed in collaboration with a Python developer, manages the data and ensures smooth communication between the front-end and back-end systems, enabling efficient storage and retrieval of train details in real-time.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
];

export const CONTACT = {
  address: "www.linkedin.com/in/mohammed-fadi-cp",
  phoneNo: "+91 9645578913 ",
  email: "mohammedfadi1245@gmail.com",
};
