import React from "react";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";

import { homeAccordion } from "../assets/data";

import './css/Header.css';

const AccordionHeader = () => {
  return (
    <>
    <div className="container">
    <div className="mt-5">
            
      <div className="accordion__container d-flex justify-content-center align-items-center">
      <h1 className="faq-h1">FAQs</h1>
      <MDBAccordion initialActive={1} className="w-100 mb-5 shadow" flush >
        {homeAccordion.map(({ id, title, description, collapseId}) => (
          <MDBAccordionItem
            collapseId= {collapseId}
            headerTitle={title}
            id={id}
           className="accordion__desc">
            {description}
          </MDBAccordionItem>
        ))}
      </MDBAccordion>
      </div>
      </div>
      </div>
    </>
  );
};

export default AccordionHeader;
