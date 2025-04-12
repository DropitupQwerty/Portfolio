import React from "react";
import {
  BiLogoFirebase,
  BiLogoJava,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoSpringBoot,
  BiLogoTypescript,
} from "react-icons/bi";
import {
  SiMysql,
  SiNextdotjs,
  SiTurborepo,
  SiDotnet,
  SiMicrosoftsqlserver,
  SiCsharp,
} from "react-icons/si";

import healthCarerImage from "assets/projects/healthBgImage.webp";
import reskyutBg from "assets/projects/reskyutMainPage.webp";
import yokai from "assets/projects/yokai.webp";
import arxenius from "assets/projects/arxenius3.png";

export type ProgrammingLanguage = {
  icon: React.ReactNode; // Use ReactNode to specify that 'icon' can be a React element
  name: string;
};

export type ProjectType = {
  img: string; // Assuming 'img' is a string URL
  name: string;
  nameDesc: string;
  links: string;
  description: string;
  programminglanguagesIcons: ProgrammingLanguage[];
};

export const projects: ProjectType[] = [
  {
    img: reskyutBg,
    name: "RESKYUT",
    nameDesc: "Made Adoption Fun and Easy",
    links: "https://reskyut-landing-page.vercel.app/",
    description:
      "The web and mobile project is dedicated to simplifying the pet adoption process while aiding overcrowded animal shelters and facilitating ideal pet-parent matches. This platform offers an intuitive interface for users to search for pets based on their preferences, utilizing geolocation services to connect users with nearby shelters. In addition to adoption services, it provides a wealth of pet care resources, ensuring responsible pet ownership. The mobile app extends accessibility, fostering a pet-loving community. By bridging shelters, prospective pet owners, and resources, this project streamlines adoption, promotes animal well-being, and strengthens the bond between pets and their new families.",
    programminglanguagesIcons: [
      {
        icon: <BiLogoJavascript />,
        name: "Javascript",
      },
      {
        icon: <BiLogoReact />,
        name: "ReactJs",
      },
      {
        icon: <BiLogoFirebase />,
        name: "Firebase",
      },
    ],
  },
  {
    img: yokai,
    name: "Yokai Express",
    nameDesc: "Project I work with in my Internship",
    links: "https://www.yokaiexpress.com/",
    description:
      "A web-based and mobile project, this was the project I worked on throughout my internship. As a full-stack developer, I work on the admin side. This website allows you to order ramen through an Android device and can display the location of the closest vending machine to you.",
    programminglanguagesIcons: [
      {
        icon: <BiLogoTypescript />,
        name: "TypeScript",
      },
      {
        icon: <BiLogoReact />,
        name: "ReactTs",
      },
      {
        icon: <BiLogoJava />,
        name: "Java",
      },
      {
        icon: <BiLogoSpringBoot />,
        name: "Springboot",
      },
      {
        icon: <SiMysql />,
        name: "MySql",
      },
    ],
  },
  {
    img: healthCarerImage,
    name: "Santos Maternity Clinic",
    nameDesc: "Healthcare Management System",
    links: "https://healthcare-management-system.vercel.app/",
    description:
      "This recently completed website and mobile application serve as a comprehensive appointment and schedule management system for doctors and clinics. The platform offers users the convenience of scheduling appointments with healthcare providers efficiently. With user-friendly interfaces, it simplifies the process of securing appointments and enhances overall healthcare accessibility. This digital solution streamlines healthcare administration, ensuring a seamless and efficient experience for both medical practitioners and patients, ultimately contributing to improved healthcare service delivery.",
    programminglanguagesIcons: [
      {
        icon: <BiLogoJavascript />,
        name: "Javascript",
      },
      {
        icon: <BiLogoTypescript />,
        name: "Typescript",
      },
      {
        icon: <BiLogoReact />,
        name: "ReactTS",
      },
      {
        icon: <BiLogoNodejs />,
        name: "NodeJs",
      },
      {
        icon: <SiMysql />,
        name: "MySql",
      },
    ],
  },
  {
    img: arxenius,
    name: "Arxenius",
    nameDesc: "Nurse Review Training System",
    links: "https://nclexpowerdev.vercel.app/coming-soon",
    description:
      "At our core, we are dedicated to helping aspiring nurses succeed. Our platform offers a dynamic and continually evolving review training system specifically designed to thoroughly prepare students for the NCLEX-RN and NCLEX-PN licensure examinations. Through high-quality resources, targeted practice, and evidence-based strategies, we aim to empower examinees with the knowledge and confidence they need to pass and thrive in their nursing careers.",
    programminglanguagesIcons: [
      {
        icon: <SiNextdotjs />,
        name: "NextJs",
      },
      {
        icon: <BiLogoTypescript />,
        name: "Typescript",
      },
      {
        icon: <BiLogoReact />,
        name: "ReactTS",
      },

      {
        icon: <SiMicrosoftsqlserver />,
        name: "MSSQL",
      },
      {
        icon: <SiTurborepo />,
        name: "Turborepo",
      },
      {
        icon: <SiDotnet />,
        name: "Dotnet",
      },
      {
        icon: <SiCsharp />,
        name: "C#",
      },
    ],
  },
];
