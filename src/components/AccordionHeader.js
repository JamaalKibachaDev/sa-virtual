import React from "react";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";

import { homeAccordion } from "../assets/data";

const AccordionHeader = () => {
  return (
    <>
      <MDBAccordion initialActive={1} className="mb-5 shadow" flush>
        {homeAccordion.map(({ id, title, description, collapseId}) => (
          <MDBAccordionItem
            collapseId= {collapseId}
            headerTitle={title}
            id={id}
          >
            {description}
          </MDBAccordionItem>
        ))}
      </MDBAccordion>
    </>
  );
};

export default AccordionHeader;
