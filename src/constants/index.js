import {
    mobile,
    backend,
    creator,
    web,
    javascript,

    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,

    carrent,
    jobit,
    tripguide,
    threejs,
    
    
    c,
    java,
    GSAP,
    express,
    firebase,
    htmlsvg,
    js,
    mongodbsvg,
    nodesvg,
    reactjssvg,
    tailwindsvg,
    csssvg
    
} from "../assets/assets";



export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Project",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Frontend Developer",
        icon: web,
    },
    {
        title: "React Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "knowledge about Database like MongoDB,MySQL...",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },

    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "java",
        icon: java,
    }, 
    {
        name: "c",
        icon: c,
    },
    {
        name: "GSAP",
        icon: GSAP,
    }

];

const experiences = [
    {
        title: "Helpers Hands",
        technologies: [
            { name: "JavaScript", icon: js },
            { name: "React", icon: reactjssvg },
            { name: "Node.js", icon: nodesvg },
            { name: "Express", icon: express },
            { name: "Tailwind", icon: tailwindsvg },
            { name: "MongoDB", icon:mongodbsvg }
        ],
        iconBg: "#383E56",
        icon: "src/assets/assets/company/helpers-hands.svg", // Add project logo here
        date: "April 2024 - June 2024",
        repoLink: "https://github.com/Yash290402/HelpersHand",
        points: [
            "Developed a responsive website used to book any required, skilled and trained, service provider by the user, at its respective selected booking slot.",
            "Features: Searching for Service providers, Booking, Selecting slots, Feedback, etc.",
        ],
    },
    {
        title: "VerbalVibes",
        technologies: [
            { name: "React", icon: reactjssvg},
            { name: "Tailwind", icon: tailwindsvg },
            { name: "Firebase", icon: firebase }
        ],
        icon: "src/assets/assets/helpers-hands-logo.svg", // Add project logo here
        // iconBg: "#E6DEDD",
        iconBg: "#383E56",
        date: "Jan 2024 - March 2024",
        repoLink: "src/assets/assets/company/Verbalvibes.svg",
        points: [
            "VerbalVibe is a messaging app offering smooth communication with a user-friendly interface, real-time messaging, multimedia sharing, and robust security across all platforms.",
            "Features: User-friendly interface, real-time messaging, multimedia sharing, and robust security measures.",
        ],
    },
    {
        title: "ImaGenie",
        technologies: [
            { name: "JavaScript", icon: js },
            { name: "React", icon: reactjssvg },
            { name: "Tailwind", icon:tailwindsvg },
            { name: "Node.js", icon: nodesvg },
            { name: "Express.js", icon: express },
            { name: "MongoDB", icon:mongodbsvg }
        ],
        iconBg: "#383E56",
        icon: "src/assets/assets/company/imagenie.svg", // Add project logo here
        date: "Nov 2023 - December 2023",
        repoLink: "https://github.com/Yash290402/ImaGenie",
        points: [
            "ImaGenie is a website that requests a prompt for an image and generates the requested image using OpenAI's API. It also features functionality where users can share the generated images.",
            "Features: Generating, downloading, and sharing the image.",
        ],
    },
    {
        title: "Hungrito",
        technologies: [
            { name: "HTML", icon: htmlsvg },
            { name: "CSS", icon:csssvg },
            { name: "JavaScript", icon:js },
            { name: "Node.js", icon: nodesvg },
            { name: "Express.js", icon: express },
            { name: "MongoDB", icon: mongodbsvg }
        ],
        // iconBg: "#E6DEDD",
        iconBg: "#383E56",
        icon: "src/assets/assets/company/hungrito.svg", // Add project logo here
        date: "March 2023 - July 2023",
        points: [
            "Hungrito is an innovative platform designed to revolutionize the dining experience by offering seamless online ordering and table booking services.",
            "Built with a focus on user convenience, Hungrito allows customers to browse restaurant menus, place orders for delivery or pickup, and reserve tables at their favorite dining spots—all from a single, user-friendly interface.",
            "The platform is designed to cater to both customers and restaurant owners, providing a streamlined solution that enhances operational efficiency while delivering a superior customer experience.",
        ],
    },
];


const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };