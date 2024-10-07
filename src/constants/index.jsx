import company from "../assets/company.jpg";
import compliance from "../assets/compliance.jpg";
import digitalmarketing from "../assets/digitalmarketing.jpg";
import funding from "../assets/funding.jpg";
import webdev from "../assets/webdev.jpg";

import { TbPointFilled } from "react-icons/tb";
import businessicon from "../assets/businessicon.png";
import digitalmarketingicon from "../assets/digitalmarketingicon.png";
import webdevicon from "../assets/webdevicon.png";

import loxionfruits from "../assets/loxionfruits.jpg";
import creativehub from "../assets/creativehub.jpg";
import digitalhub from "../assets/digitalhub.jpg";
import safenel from "../assets/safenel.jpg";

import testimonial1 from "../assets/testimonial1.jpg";
import testimonial2 from "../assets/testimonial2.jpg";
import testimonial3 from "../assets/testimonial3.jpg";
import testimonial4 from "../assets/testimonial4.jpg";

import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";

export const approach = [
  {
    id: 1,
    number: "01",
    heading: "Registering Your Company ",
    backgroundImage: company,
    fistTittle: "Seamless Startup",
    firstDescription: "Your Business, Registered in a Flash",
    secondTittle: "Launch Your Legacy ",
    secondDescription: "Expert Company Registration Services",
    thirdTittle: "Your Business, Your Future ",
    thirdDescription: "Start Here with Expert Guidance",
    button: "Register",
  },
  {
    id: 2,
    number: "02",
    heading: "Development Your Website",
    backgroundImage: webdev,
    fistTittle: "Crafting Digital Masterpieces",
    firstDescription: "Custom Web Solutions for Your Business",
    secondTittle: "Elevate Your Online Presence ",
    secondDescription: "Professional Web  Development",
    thirdTittle: "Your Vision, Our Expertis ",
    thirdDescription: "Building Websites that Convert",
    button: "Get A Quote",
  },
  {
    id: 3,
    heading: "Digital Marketing Compains",
    backgroundImage: digitalmarketing,
    fistTittle: "Dominate the Digital Landscape",
    firstDescription: "Effective Marketing Strategies",
    secondTittle: "Maximize Your Reach ",
    secondDescription: "Expert Digital Marketing Solutions",
    thirdTittle: " Grow Your Brand Online",
    thirdDescription: "SEO, PPC, Social Media, and More",
    button: "Start",
  },
  {
    id: 4,
    heading: "Business Compliance",
    backgroundImage: compliance,
    fistTittle: "Navigate the Regulatory Maze",
    firstDescription: "Expert Business Compliance Services",
    secondTittle: "Protect Your Business ",
    secondDescription: "Compliance with Industry Standards",
    thirdTittle: " Peace of Mind, Guaranteed",
    thirdDescription: "Stay Compliant with Our Guidance",
    button: "Get Started",
  },
  {
    id: 5,
    heading: "Funding Your Business",
    backgroundImage: funding,
    fistTittle: "Fuel Your Growth",
    firstDescription: "Secure the Funding You Need",
    secondTittle: " Unlock Your Potential",
    secondDescription: "Access Tailored Funding Solutions",
    thirdTittle: "Invest in Your Future ",
    thirdDescription: "Explore Funding Options with Us",
    button: "Learn more",
  },
];

export const skilledPersonnels = [
  {
    id: 1,
    icon: webdevicon,
    icon2: <TbPointFilled />,
    tittle: "Web Development ",
    l1: "Web Developers",
    l2: "Web Content Managers",
    l3: "UI/UX Designers",
    l4: "Graphic Designers",
  },
  {
    id: 2,
    icon: businessicon,
    icon2: <TbPointFilled />,
    tittle: "Business Compliance",
    l1: "Compliance Officers",
    l2: "Risk Management Specialists",
    l3: "Legal Counsels",
    l4: "Regulatory Affairs Specialists",
  },
  {
    id: 3,
    icon: digitalmarketingicon,
    icon2: <TbPointFilled />,
    tittle: "Digital Marketing",
    l1: "SEO Specialists",
    l2: "Social Media Managers",
    l3: "Content Marketing Specialists",
    l4: "Analytics Specialist",
  },
];

import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import twiter from "../assets/twiter.png";
import whatsup from "../assets/whatsup.png";

export const featured = [
  {
    id: 1,
    tittle: "Creative-Hub",
    link: "https://freddymazenge.vercel.app/#",
    backgroundImage: creativehub,
  },
  {
    id: 2,
    tittle: "Digital-Hub",
    backgroundImage: digitalhub,
  },
  {
    id: 1,
    tittle: "Safenel",
    link: "https://tendernet.net/safenal",
    backgroundImage: safenel,
  },
  {
    id: 1,
    tittle: "Loxion-Fruits",
    link: "https://tendernet.net/loxion-fruitbeverages#blog",
    backgroundImage: loxionfruits,
  },
];

export const testimonals = [
  {
    id: 1,
    testimonal:
      "I started my small baking business as a hobby, but with TenderNet's guidance, I turned it into a thriving akery. They helped me navigate the legal and financial complexities, and now I'm on track to expand my business and reach new customers.",
    profilePic: testimonial1,
    name: " Lan Lex",
    position: "Bakery-Owner",
  },
  {
    id: 2,
    testimonal:
      "I was struggling to get my new tech startup off the ground. TenderNet provided invaluable assistance with securing funding, developing a robust website, and building a strong online presence. Their team was incredibly supportive and knowledgeable, and I'm now well-positioned for growth.",
    profilePic: testimonial2,
    name: " A Lumberg",
    position: "San-City",
  },

  {
    id: 3,
    testimonal:
      "As a non-profit, we faced challenges raising funds and reaching our target audience. TenderNet's expertise in grant writing and social media management was instrumental in expanding our reach and securing the resources we needed to continue our mission",
    profilePic: testimonial3,
    name: "T. Ntuli ",
    position: "Jorguer",
  },

  {
    id: 4,
    testimonal:
      "I had a great business idea but lacked the knowledge to bring it to life. TenderNet guided me through the entire process, from company registration to securing funding and developing a comprehensive business plan. Their support has been invaluable, and I'm excited to see where my venture goes.",
    profilePic: testimonial4,
    name: "F. Ncube",
    position: "Pundreth ",
  },
];

export const youths = [
  {
    id: 1,
    latter: "y",
  },
  {
    id: 2,
    latter: "o",
  },
  {
    id: 3,
    latter: "u",
  },
  {
    id: 4,
    latter: "t",
  },
  {
    id: 5,
    latter: "h",
  },
];

export const newCompanyRegistration = [
  {
    id: 1,
    list: "Company Registration Completed in 24-hours",
    point: <TbPointFilled />,
  },
  {
    id: 2,
    list: "Requirements: (1) ID Number / Passport; (2) Home or Business Address in SA. No Paperwork!",
    point: <TbPointFilled />,
  },

  {
    id: 3,
    list: "Reserved Company Name",
    point: <TbPointFilled />,
  },

  {
    id: 4,
    list: "CIPC Company Registration Certificate (COR14.3)",
    point: <TbPointFilled />,
  },

  {
    id: 5,
    list: "All CIPC Fees Covered",
    point: <TbPointFilled />,
  },

  {
    id: 6,
    list: "Company Income Tax Number",
    point: <TbPointFilled />,
  },

  {
    id: 7,
    list: "Free Optional Services Included: BEE Affidavit, Bank Account, Custom Tender Search and Website.",
    point: <TbPointFilled />,
  },

  {
    id: 8,
    list: "Toll Free Support on +27 78 135 1373",
    point: <TbPointFilled />,
  },

  {
    id: 9,
    list: "Money Back Guarantee",
    point: <TbPointFilled />,
  },
];

export const servicesList = [
  {
    id: 1,
    list: "Company Registrations",
    point: <TbPointFilled />,
  },
  {
    id: 2,
    list: "Websites Development",
    point: <TbPointFilled />,
  },
  {
    id: 3,
    list: "Digital Marketing",
    point: <TbPointFilled />,
  },
  {
    id: 4,
    list: "Business Compliance",
    point: <TbPointFilled />,
  },
  {
    id: 5,
    list: "Funding",
    point: <TbPointFilled />,
  },
];

export const socialMediaIcons = [
  {
    id: 1,
    icon: instagram,
  },
  {
    id: 2,
    icon: facebook,
  },
  {
    id: 3,
    icon: twiter,
  },
  {
    id: 4,
    icon: linkedin,
  },
  {
    id: 5,
    icon: whatsup,
  },
];

export const behindYou = [
  {
    id: 1,
    tittle: "Free Initial Meeting",
    description: "Get a free expert opinion on your compliance needs.",
  },
  {
    id: 2,
    tittle: "Business Blueprint",
    description:
      "Get free training to start your own business in South Africa. We offer free online videos and affordable coaching",
  },
  {
    id: 3,
    tittle: "Refund",
    description:
      "We're confident in our ability to help you, and if we can't, we'll refund your money.",
  },
  {
    id: 4,
    tittle: "Risk Assessment",
    description:
      "Staying ahead of compliance challenges by anticipating potential problems and taking steps to avoid them.",
  },
];

export const typesOfGrands = [
  {
    id: 1,
    text: "ENTERPRISE DEVELOPMENT PROGRAM (EDP)",
    point: <TbPointFilled />,
  },
  {
    id: 2,
    text: "YOUTH ENTREPRENEURSHIP PROGRAM (YEP)",
    point: <TbPointFilled />,
  },
  {
    id: 3,
    text: "WOMEN EMPOWERMENT PROGRAM (WEP)",
    point: <TbPointFilled />,
  },
  {
    id: 4,
    text: "SECTOR-SPECIFIC GRANTS",
    point: <TbPointFilled />,
  },
];

export const requirements = [
  {
    id: 1,
    text: "South African citizen or permanent resident",
    point: <TbPointFilled />,
  },
  {
    id: 2,
    text: "Owning a registered business.",
    point: <TbPointFilled />,
  },
  {
    id: 3,
    text: "Meeting specific financial requirements.",
    point: <TbPointFilled />,
  },
  {
    id: 4,
    text: "Demonstrating a viable business plan.",
    point: <TbPointFilled />,
  },
];

export const theProcess = [
  {
    id: 1,
    tittle: "Understanding Your Needs",
    heading1: "Initial Consultation",
    description1:
      "We'll sit down and discuss your project goals, target audience, and desired features.",
    heading2: "Requirements Gathering",
    description2:
      "We'll create a detailed outline of your website's functionality and design",
  },
  {
    id: 2,
    tittle: "Design and Planning",
    heading1: "Wireframing",
    description1:
      "We'll create basic visual representations of your website's layout and structure.",
    heading2: "UI/UX Design",
    description2:
      "Our designers will craft a visually appealing and user-friendly interface.",
  },

  {
    id: 3,
    tittle: "Development",
    heading1: "Coding",
    description1:
      "We'll build the visible part of your website using web technologies",
    heading2: "Content Management System (CMS)",
    description2:
      "If needed, we'll implement a CMS to allow you to easily update your content.",
  },

  {
    id: 4,
    tittle: "Testing and Quality Assurance",
    heading1: "Thorough Testing",
    description1:
      "We'll test your website on various devices and browsers to ensure optimal performance.",
    heading2: "Bug Fixing",
    description2:
      "We'll identify and address any issues that arise during testing.",
  },
  {
    id: 5,
    tittle: "Launch and Maintenance",
    heading1: "Website Launch",
    description1: "We'll deploy your website to a live server.",
    heading2: "Ongoing Support",
    description2:
      "We'll provide ongoing maintenance and support to keep your website running smoothly",
  },
];

export const socialMediaPackages = [
  {
    id: 1,
    package: "Starter",
    payment: "R385.00/month",
    l1: "Social Media Pages Management",
    l2: "2 x Motion Graphics Ad",
    l3: "2 x Graphical Image Ad",
    l4: "Auto Comments Reply",
    buttonText: "Order Today",
  },
  {
    id: 2,
    package: "Essentials",
    payment: "R485.00/month",
    l1: "Social Media Pages Management",
    l2: "4 x Motion Graphics Ad",
    l3: "4 x Graphical Image Ad",
    l4: "Auto Comments Reply",
    l5: "Monthly Statistics Report",
    buttonText: "Order Today",
  },
  {
    id: 3,
    package: "Pro",
    payment: "R585.00/month",
    l1: "Social Media Pages Management",
    l2: "5 x Motion Graphics Ad",
    l3: "5 x Graphical Image Ad",
    l4: "Auto Comments Reply",
    l5: "Monthly Statistics Report",
    l6: "1hr Monthly expert help.",
    buttonText: "Order Today",
  },
];

export const webPackages = [
  {
    id: 1,
    package: "Starter",
    payment: "R295.00/month",
    l1: "2 Pages",
    l2: "2hrs Monthly Maintenance",
    l3: "Mobile Optimised",
    l4: "Search Engine Optimisation",
    l5: "Hyperlinks to Other Sites",
    l6: "Google Map",
    buttonText: "Order Today",
  },
  {
    id: 2,
    package: "Essential",
    payment: "R395.00/month",
    l1: "4 Pages",
    l2: "3hrs Monthly Maintenance",
    l3: "Mobile Optimised",
    l4: "Search Engine Optimisation",
    l5: "Hyperlinks to Other Sites",
    l6: "Google Map",
    buttonText: "Order Today",
  },
  {
    id: 3,
    package: "Pro",
    payment: "R295.00/month",
    l1: "5 Pages",
    l2: "5hrs Monthly Maintenance",
    l3: "Mobile Optimised",
    l4: "Search Engine Optimisation",
    l5: "Hyperlinks to Other Sites",
    l6: "Google Map",
    buttonText: "Order Today",
  },
  {
    id: 4,
    package: "e-Commerce",
    payment: "R595.00/month",
    l1: "3 Pages",
    l2: "2hrs Monthly Maintenance",
    l3: "Mobile Optimised",
    l4: "Search Engine Optimisation",
    l5: "Hyperlinks to Other Sites",
    l6: "Google Map",
    buttonText: "Order Today",
  },
  {
    id: 5,
    package: "e-Commerce",
    payment: "R895.00/month",
    l1: "5 Pages",
    l2: "3hrs Monthly Maintenance",
    l3: "Mobile Optimised",
    l4: "Search Engine Optimisation",
    l5: "Hyperlinks to Other Sites",
    l6: "Google Map",
    buttonText: "Order Today",
  },
  {
    id: 6,
    package: "e-Commerce & CMS",
    payment: "R1295.00/month",
    l1: "Custom",
    l2: "4hrs Monthly Maintenance",
    l3: "Mobile Optimised",
    l4: "Search Engine Optimisation",
    l5: "Hyperlinks to Other Sites",
    l6: "Google Map",
    buttonText: "Order Today",
  },
];
