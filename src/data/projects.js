import eTeras from "../assets/projects/eTeras.png";
import gms from "../assets/projects/gms.png";
import eTicket from "../assets/projects/eTicket.png";

const projects = [
  {
    id: 1,
    title: "Gym Management System Odoo",
    description:
      "Gym management system helps gym owners, trainers and members to manage their activities in the gym, such as creating membership invoices, managing attendance, tracking training progress and so on.",
    date: "March 2025",
    image: gms,
    tags: ["ERP", "Odoo", "Python"],
    links: {
      demo: "https://youtu.be/Ny1wJq_8tsg?si=5aL9wUYIh_ocgLmh",
      code: "https://github.com/Daralams/odooapps",
    },
  },
  {
    id: 2,
    title: "eTeras - The modern blogging platform",
    description:
      "A modern web-based blogging platform with social media-like features that enable users to express themselves, create content, and interact with others.",
    date: "Dec 2024",
    image: eTeras,
    tags: ["Fullstack Development", "Javascript", "React JS", "Nodejs"],
    links: {
      demo: "https://youtu.be/51V_7hcaFjQ?si=5MVMyqaJbAB2vBUo",
      code: "https://github.com/Daralams/eTeras-app",
    },
  },

  {
    id: 3,
    title: "E Ticketing - Booking plane tickets.",
    description:
      "E-ticketing is a web platform that helps users in booking airline tickets online. with dashboard features, flight schedule search, booking history, e-ticket printout and so on..",
    date: "Jan 2025",
    image: eTicket,
    tags: ["Fullstack Development", "PHP", "Laravel"],
    links: {
      demo: "#",
      code: "https://github.com/Daralams/tiket_pesawat",
    },
  },
];

export default projects;