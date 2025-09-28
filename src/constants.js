// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import mcLogo from './assets/tech_logo/mc.png';
import hoppscotchLogo from './assets/tech_logo/hoppscotch.png';
import renderLogo from './assets/tech_logo/render.png';
// import renderLogo from './assets/tech_logo/render.png';

// Experience Section Logo's
import oasisinfobyteLogo from './assets/company_logo/oasisinfobyte_logo.png';
import ybiFoundationLogo from './assets/company_logo/ybiFoundation_logo.png';


// Education Section Logo's
import kietLogo from './assets/education_logo/kiet.png';
import vpsLogo from './assets/education_logo/vps_logo.png';
;

// Project Section Logo's
import wanderlustLogo from './assets/work_logo/wanderlust.png';
import weatherLogo from './assets/work_logo/weather.png';
import portfolioLogo from './assets/work_logo/portfolio.png';



export const SkillsInfo = [
    {
        title: 'Frontend',
        skills: [
            { name: 'HTML', logo: htmlLogo },
            { name: 'CSS', logo: cssLogo },
            { name: 'JavaScript', logo: javascriptLogo },
            { name: 'React JS', logo: reactjsLogo },
            { name: 'Redux', logo: reduxLogo },
            { name: 'Tailwind CSS', logo: tailwindcssLogo },
            { name: 'Material UI', logo: materialuiLogo },
            { name: 'Bootstrap', logo: bootstrapLogo },
        ],
    },
    {
        title: 'Backend',
        skills: [
            { name: 'Node JS', logo: nodejsLogo },
            { name: 'Express JS', logo: expressjsLogo },
            { name: 'MySQL', logo: mysqlLogo },
            { name: 'MongoDB', logo: mongodbLogo },
            { name: 'PostgreSQL', logo: postgreLogo },
        ],
    },
    {
        title: 'Languages',
        skills: [
            { name: 'C', logo: cLogo },
            { name: 'Java', logo: javaLogo },
            { name: 'Python', logo: pythonLogo },
            { name: 'JavaScript', logo: javascriptLogo },
            { name: 'TypeScript', logo: typescriptLogo },
        ],
    },
    {
        title: 'Tools',
        skills: [
            { name: 'Git', logo: gitLogo },
            { name: 'GitHub', logo: githubLogo },
            { name: 'VS Code', logo: vscodeLogo },
            { name: 'Postman', logo: postmanLogo },
            { name: 'Compass', logo: mcLogo },
            { name: 'Vercel', logo: vercelLogo },
            { name: 'Hoppscotch', logo: hoppscotchLogo},
            { name: 'Render', logo: renderLogo},
            // { name: 'Render', logo: renderLogo},
        ],
    },
];

export const experiences = [
    {
        id: 0,
        img: oasisinfobyteLogo,
        role: "Web developer Intern",
        company: "Skillraace",
        date: "Apr 2024 - Jun 2024",
        desc: "Developed and implemented modern product features using React and Tailwind CSS creating 10+ optimized reusable components that enhanced UI responsiveness and overall user experience.",
        skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Tailwind CSS",
        "Bootstrap",
        "Redux",
      ],
    },
    {
        id: 1,
        img: ybiFoundationLogo,
        role: "Data Scientist Intern",
        company: "YBI Foundation",
        date: "Aug 2023 - Sep 2023",
        desc: "Proficient in data analysis with hands-on experience in cleaning, exploration, and visualization using Python and SQL.Skilled in statistical modeling and predictive analytics to drive actionable insights and informed decisions.",
        skills: [
        "Python",
        "Data Processing",
        "SQL",
        "Statistics",
        "Machine Learning",
      ],
    },
];

export const education = [
    {
        id: 0,
        img: kietLogo,
        school: "KIET Group of Institutions, Ghaziabad",
        date: "Nov 2021 - Jul 2025",
        grade: "7.00 CGPA",
        desc: "I have completed my B.Tech in Information Technology, where I gained strong foundational knowledge in core subjects. During my college years, I focused on enhancing my problem-solving and programming skills through Data Structures and Algorithms (DSA) and Object-Oriented Programming (OOPs). I also developed a solid understanding of Database Management Systems (DBMS) and Software Engineering principles, which helped me build a structured approach to designing, developing, and managing software systems.",
        degree: "B.Tech in Information Technology",
    },
    {
        id: 1,
        img: vpsLogo,
        school: "Rajkiya Pratibha Vikas Vidyalaya, Delhi",
        date: "May 2018 - Apr 2019",
        grade: "75.4%",
        desc: "I completed my class 12th education from Rajkiya Pratibha Vikas Vidyalaya , Delhi, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM)",
    },
    {
        id: 2,
        img: vpsLogo,
        school: "Govt. boys secondary School, Delhi",
        date: "Jul 2016 - Jun 2017",
        grade: "82%",
        desc: "I completed my class 10th education from Govt. boys secondary School, Delhi, under the CBSE board, where I studied Science",
    },

];

export const projects =[
    {
        id: 0,
        title: "Full-Stack WanderLust Website",
        description:
          " Developed and deployed a full-stack travel listing app (Wanderlust) with CRUD operations, secure Passport.js authentication, and session management, built on an MVC architecture with EJS and MongoDB for scalable routing and efficient data handling. Optimized middleware, error handling, and a responsive Bootstrap UI to enhance reliability, maintainability, and cross-device usability.",
        image: wanderlustLogo,
        tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Node.js", "Express", "MongoDB"],
        github: "https://github.com/Amit12mishraa/major_project",
        webapp: "https://major-project-jdva.onrender.com/",
    },
    {
        id: 1,
        title: "Portfolio Website",
        description:
            "Designed and developed a personal portfolio website to showcase projects, skills, and achievements. Built using React and Tailwind CSS with a fully responsive layout for seamless viewing across devices. Deployed on Netlify with optimized performance and clean UI/UX for a professional presentation.",
        image: portfolioLogo,
        tags: ["HTML", "JavaScript", "React", "Tailwindcss"],
        github: "https://github.com/Amit12mishraa/PORTFOLIO",
        webapp: "https://68d8efbf4192f08ad71c2116--visionary-cat-2c9275.netlify.app/",
    },
    {
        id: 2,
        title: "Weather Forcasting Website",
        description:
           "Built a responsive weather forecasting website using React and Express. Integrated a weather API to fetch real-time temperature, humidity, and condition data for any city. Designed with Bootstrap for clean UI and responsive layout, ensuring usability across all devices. Deployed on Netlify for fast and reliable access.",
        image: weatherLogo,
        tags: ["HTML", "JavaScript", "Bootstrap", "React"],
        github: "https://github.com/Amit12mishraa/Weather_Forcasting",
        webapp: "https://monumental-boba-16b823.netlify.app/",
    },
    
   
];