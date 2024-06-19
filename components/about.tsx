"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import  useSectionInView  from "@/lib/hooks";



export default function About() {
    const { ref } = useSectionInView("Om");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-0 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="om"
    >
      <SectionHeading>Om mig</SectionHeading>
      <p className="mb-3">
        Efter att ha avslutat min examen inom{" "}
        <span className="font-medium">
          frontend utveckling & backend med .NET
        </span>{" "}
        fortsätter jag även idag att följa min passion för programmering och det
        är att sitta och leka runt med mina hobby projekt för att utöka mina
        kompetenser inom området för{" "}
        <span className="font-medium">frontend dels backend</span>.{" "}
        <span className="italic">Min favoritdel av programmering</span> är
        aspekten av problemlösning. Jag{" "}
        <span className="underline">älskar</span> känslan av att slutligen
        hittat en lösning på ett problem. Just nu letar jag efter en{" "}
        <span className="font-medium">heltidsanställning</span> som
        systemutvecklare.
      </p>

      <p>
        <span className="italic">När jag inte fokuserar på kodning</span>,
        gillar jag att spela videospel, titta på filmer och läsa böcker. Mest av
        allt gillar jag att vara aktiv och det är bland annat att går på gym, ut
        och joggar eller att går ut på en simpel vandring med friskt luft för
        att njuta av naturen. Jag tycker också om att{" "}
        <span className="font-medium">lära mig nya saker</span>. Just nu lär jag
        mig mer om programmeringsspråket <span className="font-medium">Java.</span>{" "}
        <span className="font-medium"></span>
      </p>
    </motion.section>
  );
}
