import React from "react";
import Accordion from "react-bootstrap/Accordion";

import { SAAVFleet } from "../assets/data";

const FleetDropdowns = () => {
  return (
    <>
      <div className="">
        <div className="m-4">
          <h3 className="text-end">SAAV Fleet</h3>
        </div>

        <Accordion defaultActiveKey="0" flush>
          {SAAVFleet.map(
            ({ id, aircraft, image, range, crzSpeed, maxAlt, capacity }) => (
              <>
                <Accordion.Item eventKey={id}>
                  <Accordion.Header>{aircraft}</Accordion.Header>

                  <Accordion.Body>
                    <div className="">
                      <img
                        src={image}
                        className="w-100 h-100 rounded my-2"
                        alt="a330-fleet"
                      />
                    </div>

                    <div className="d-flex justify-content-center">
                      <ul>
                        <li className="font-monospace">
                          <span>Range:</span> {range}km
                        </li>
                        <li className="font-monospace">
                          <span>Cruise Speed :</span> M{crzSpeed}
                        </li>
                        <li className="font-monospace">
                          <span>Max Altitude :</span> {maxAlt}ft
                        </li>
                        <li className="font-monospace">
                          <span>Capacity :</span> {capacity}pax
                        </li>
                      </ul>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </>
            )
          )}
        </Accordion>
      </div>
    </>
  );
};

export default FleetDropdowns;
