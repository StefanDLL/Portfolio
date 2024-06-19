import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { TbBellSchool } from "react-icons/tb";
import { AiTwotoneEdit } from "react-icons/ai";
import fitnessImg from "@/public/fitness.png";
import senseraImg from "@/public/sensera.png";

export const links = [
  {
    name: "Hem",
    hash: "#hem",
  },
  {
    name: "Om",
    hash: "#om",
  },
  {
    name: "Projekt",
    hash: "#projekt",
  },
  {
    name: "Kompetenser",
    hash: "#kompetenser",
  },
  {
    name: "Erfarenhet",
    hash: "#erfarenhet",
  },
  {
    name: "Kontakt",
    hash: "#kontakt",
  },
] as const;

export const experiencesData = [
  {
    title: "Början av min systemutvecklings resa",
    location: "Växjö",
    description:
      "Under 2021 deltog jag för första gången i en Backend-kurs med fokus på C#. Redan under den första lektionen väcktes mitt intresse för ämnet. Jag genomförde kursen, fick godkänt och blev omedelbart fascinerad av programmeringens värld",
    icon: React.createElement(TbBellSchool),
    date: "2021",
  },
  {
    title: "Front-End Developer / Backend .NET",
    location: "Växjö",
    description:
      "Inspirerad av min erfarenhet från backend-kursen jag deltog i 2021, beslutade jag mig för att vidareutbilda mig genom en 2 årig frontend-utbildning. Denna utbildning omfattade även kurser inom backend, där jag fick möjlighet att fördjupa mig i användningen av .NET",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "LIA på Sensera AB",
    location: "Stockholm",
    description:
      "LIA på Sensera. Totalt 24 veckors arbete i ett frontend-team. Arbete som involverade React/Vite med Javascript & Typescript. Från unit testing med Jest till webbapplikations och componenents tester med Cypress och Storybook. Den erfarenheten jag fick under LIAn var ovärderlig och tog mig till en ny nivå av förståelse som systemutvecklare",
    icon: React.createElement(FaReact),
    date: "2023",
  },
  {
    title: "Examen",
    location: "Växjö",
    description:
      "Med min nyligen avslutade examen kan jag nu stolt kalla mig för en examinerad Frontend-utvecklare med kompletterande kunskaper inom backend med .NET. Jag är nu aktivt sökande efter heltidsanställningar inom området och ser fram emot att få möjligheten att fortsätta växa och utvecklas som professionell utvecklare.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "Fitness website",
    description:
      "Hobby projekt, fitness hemsida. Med olika träningspass, bli medlem och en kontakt formulär med react-hook-form. Framer-motion för användning av animationer.",
    tags: ["React", "Vite", "Typescript", "Tailwind CSS", "Framer-motion"],
    imageUrl: fitnessImg,
    projectUrl: "https://stefandll.github.io/ts-react-fitness/",
  },
  {
    title: "Sensera Landingpage",
    description:
      "En av fyra frontend arbeten under min 6-månaders LIA, där jag designade om hela hemsidan och förbättrade användarupplevelsen med en modernare design.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "DaisyUI"],
    imageUrl: senseraImg,
    projectUrl: "https://sensera.se/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Vite",
  "Next.js",
  "Node.js",
  "Git",
  "Gitlab",
  "Github",
  "Tailwind",
  "Figma",
  "Design Prototyping",
  "UX & UI",
  ".NET",
  "C#",
  "Docker",
  "Azure",
  "SQL",
  "Web Api",
  "Entity Framework",
  "Framer Motion",
  "Agile methods",
  "Unit Test Jest",
  "Cypress",
  "Storybook",
  "Debugging",
] as const;
