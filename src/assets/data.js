//data imports

//carousel images
import img1 from "./saav-carousel-1.jpg";
import img1_1 from "./crj-700.jpg";
import img1_2 from "./saav-q400-tail.jpg";

//staff pfp
import img2 from "./josiah-dennis-pfp.jpeg";
import img3 from "./lufthansa1-pfp.jpeg";



//fleet
import img4 from "./a330-fleet.jpg";


export const Ranks = [
  { id: "1", image: "/", alt: "/", title: "/", description: "/" },
  { id: "2", image: "/", alt: "/", title: "/", description: "/" },
  { id: "3", image: "/", alt: "/", title: "/", description: "/" },
  { id: "1", image: "/", alt: "/", title: "/", description: "/" },
  { id: "1", image: "/", alt: "/", title: "/", description: "/" },
];

export const routeHeader = [
  {
    id: "28",
    description:
      "We serve many passengers with many different backgrounds out of our two major hubs : O.R. Tambo International Airport & Cape Town International Airport.Our joy is flying, yours is sitting back and relaxing as we bring the comfort to the Virtual world. You can reserve a gate on our discord server without any issues.Thank you for your time and support. Good Day! CEO Signing off😎",
  },
];

export const SAAVFleet = [
  {
    id: "18",
    aircraft: "Airbus A330-300",
    image: img4,
    range: "5000",
    crzSpeed: "0.85",
    maxAlt: "",
    capacity: "",
  },

  {
    id: "19",
    aircraft: "Airbus A350-900",
    image: img4,
    range: "",
    crzSpeed: "",
    maxAlt: "",
    capacity: "",
  },

  {
    id: "21",
    aircraft: "Airbus A340-600",
    image: img4,
    range: "",
    crzSpeed: "",
    maxAlt: "",
    capacity: "",
  },

  {
    id: "22",
    aircraft: "Airbus A320",
    image: img4,
    range: "",
    crzSpeed: "",
    maxAlt: "",
    capacity: "",
  },

  {
    id: "23",
    aircraft: "Airbus A319",
    image: img4,
    range: "",
    crzSpeed: "",
    maxAlt: "",
    capacity: "",
  },

  {
    id: "2",
    aircraft: "Boeing 747-200",
    image: img4,
    range: "",
    crzSpeed: "",
    maxAlt: "",
    capacity: "",
  },

  {
    id: "24",
    aircraft: "Boeing 737-800",
    image: img4,
    range: "",
    crzSpeed: "",
    maxAlt: "",
    capacity: "",
  },

  {
    id: "25",
    aircraft: "Dash 8 Q-400",
    image: img4,
    range: "",
    crzSpeed: "",
    maxAlt: "",
    capacity: "",
  },

  {
    id: "26",
    aircraft: "CRJ-700",
    image: img4,
    range: "",
    crzSpeed: "",
    maxAlt: "",
    capacity: "",
  },

  {
    id: "27",
    aircraft: "CRJ-200",
    image: img4,
    range: "",
    crzSpeed: "",
    maxAlt: "",
    capacity: "",
  },
];

export const staffHeader = [
  {
    id: "14",
    title: "About the team",
  },
];

export const staffPage = [
  //staffPage

  {
    id: "15",
    image: img2,
    description:
      "Welcome New Pilots!👋 I am Josiah Dennis, a 14 year old aviator who has been flying in the virual skies for over 3 years. Thank you for having a look at our website and we hope to see you soon.",
    username: "Josiah Dennis",
    role: "- SAAV CEO",
  },

  {
    id: "16",
    image: img3,
    description:
      "On Behalf of the Crew, Welcome South African Virtual, pilots! Here you can fly a large variety of routes and aircrafts together with other SAAV pilots. Have fun!🛫",
    username: "Lufthansa1",
    role: "- SAAV COO",
  },
];

export const applyHeader = [
  {
    id: "9",
    title: "VA Application",
    description:
      "We appreciate your kind interest in applying to join our VA. Please check out the requirements before sending out your applications. If you meet them, feel free to send a PM to our CEO or COO in order to be scheduled for a pilot test🧑‍✈️",
  },
];

export const applyRequirements = [
  //applyNow

  {
    id: "10",
    key: "Minimum Age",
    value: "13 Years",
  },

  {
    id: "11",
    key: "IF Grading",
    value: "Grade 2 and above",
  },

  {
    id: "12",
    key: "Conduct",
    value: "Not on IFC Blacklist/Watchlist",
  },

  {
    id: "13",
    key: "IF PRO",
    value: "Valid IF Subscription",
  },
];

export const homeHeader = [
  {
    id: "1",
    title: "Welcome to South African Virtual",
    description:
      "We are a prominent virtual airline within the Infinite Flight community. Dedicated to replicating the real-world operations of South African Airways, Our VA offers a highly professional and immersive flying experience in the IF skies.",
  },
];

export const homeCarousel = [
  //carouselhome
  {
    id: "2",
    image: img1,
    category: "carousel",
    alt: "carouselImage",
  },

  {
    id: "3",
    image: img1_1,
    category: "carousel",
    alt: "carouselImage",
  },

  {
    id: "4",
    image: img1_2,
    category: "carousel",
    alt: "carouselImage",
  },
];

export const homeCards = [
  //homeCards
  {
    id: "3",
    title: "Route Database 🧑‍💻",
    description:
      "Our Route Database is specially built to achieve maximum user friendliness and ensure easier navigation during flight briefings.",
  },

  {
    id: "4",
    title: "SAAV Staff 🧑‍✈️",
    description:
      "Our staff are highly trained & experienced in their fields of work and are always ready to help. Feel free to communicate with us at any time through our socials or via IFC.",
  },

  {
    id: "5",
    title: "Ranking System 🌟",
    description:
      "Pilots advance through ranks starting from Trainee all the way upto Senior Pilot by logging flight hours.This encourages progression and realism. Higher ranks will be granted access to advanced aircraft and events.",
  },
];

export const homeAccordion = [
  {
    id: "6",
    title: "Why Join Us?",
    description:
      "We offer a vast array of destinations & a large fleet of aircraft ranging from the Q-400 to the B747 giving you a wide range of options to choose from.",
    collapseId: "1",
  },

  {
    id: "7",
    title: "Crew Operations🧑‍✈️",
    description:
      "Pilots advance through ranks starting from Trainee all the way upto Senior Pilot by logging flight hours, This encourages progression and realism. Higher ranks will be granted access to advanced aircraft and events.",
    collapseId: "2",
  },

  {
    id: "8",
    title: "Application Process📃",
    description:
      "Our application process is seamless & user-friendly to allow for smooth and easy registrations.",
    collapseId: "3",
  },
];
