import React from "react";
import SectionHeading from "./section-heading";
import { GiStarSwirl } from "react-icons/gi";

export default function Offer() {
  return (
    <section className="mb-24">
      <SectionHeading>Vad jag erbjuder</SectionHeading>
      <div className="bg-gray-100 max-w-2xl border border-black/5 rounded-lg">
        <div className="mx-auto">
          <div className="text-sm">

            <div className="flex flex-col gap-3 border-r border-gray-200 p-4 ">
              <div className="flex flex-col  gap-2 mb-4">
                <h2 className="text-xl font-medium pl-8">UX & UI</h2>
                <div className="flex gap-3 items-center">
                  <GiStarSwirl fontSize={60} />
                  <p className="font leading-5 text-gray-700">
                  Jag erbjuder  UX/UI-designlösningar som säkerställer en användarvänlig och tilltalande digital upplevelse. Genom att kombinera funktionell design med intuitiv användarinteraktion skapar jag gränssnitt som inte bara ser bra ut, utan också förbättrar användarengagemang och konverteringar.
                  </p>
                  
                </div>
              </div>

              <div className="flex flex-col  gap-2">
                <h2 className="text-xl font-medium pl-8">UX & UI</h2>
                <div className="flex gap-3 items-center">
                  <GiStarSwirl fontSize={60} />
                  <p className="font leading-5 text-gray-700">
                  Jag erbjuder  UX/UI-designlösningar som säkerställer en användarvänlig och tilltalande digital upplevelse. Genom att kombinera funktionell design med intuitiv användarinteraktion skapar jag gränssnitt som inte bara ser bra ut, utan också förbättrar användarengagemang och konverteringar.
                  </p>
                  
                </div>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
