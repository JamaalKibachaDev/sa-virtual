import React from "react";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";


const AccordionHeader = () => {
  return (
    <>
      <MDBAccordion flush initialActive={1} className="accordion">
        <MDBAccordionItem collapseId={1} headerTitle="Why Join Us?">
          We offer a vast array of destinations & a large fleet of aircraft
          ranging from the Q-400 to the B747 giving you a wide range of options
          to choose from.
        </MDBAccordionItem>
      </MDBAccordion>

      <MDBAccordion initialActive={1} flush className="accordion">
        <MDBAccordionItem collapseId={2} headerTitle="Crew Operations">
          We offer a vast array of destinations & a large fleet of aircraft
          ranging from the Q-400 to the B747 giving you a wide range of options
          to choose from.
        </MDBAccordionItem>
      </MDBAccordion>

      <MDBAccordion flush alwaysOpen initialActive={1} className="accordion">
        <MDBAccordionItem collapseId={3} headerTitle="Application Process">
         We made sure that our application process is smooth & seamless for better user experience.
        </MDBAccordionItem>
      </MDBAccordion>
    </>
  );
};

export default AccordionHeader;
