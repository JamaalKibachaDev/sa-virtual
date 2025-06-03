import React from "react";

import ListGroup from "react-bootstrap/ListGroup";


import "./css/ApplyNow.css";

import { applyHeader, applyRequirements } from "../assets/data";

const ApplyHeader = () => {
  return (
    <>
      <div className="main-container">
        <div className="text-center p-4">
          {applyHeader.map(({ id, title, description, }) => (
            <>
            <h2 className="apply__h2 text-end mb-5 ">
              {title}
            </h2>
          <p className=" apply__p">
            {description}
          </p>
          </>
          ))}
          <div className="requirements-container py-3">
            {applyRequirements.map(({ id, key, value }) => (
              <ListGroup className="list-group">
                <ListGroup.Item
                  className="list-item bg bg-dark bg-gradient text-white p-2"
                  id={id}
                >
                  {key}: {value}
                </ListGroup.Item>
              </ListGroup>
            ))}
          </div>

          <div className="mt-4 d-flex justify-content-evenly border-top pt-3">
            <a href="https://community.infiniteflight.com/u/josiah_dennis/summary" className=" apply__a text-decoration-none text-dark" >
            Josiah Dennis (CEO)</a>
            <a href="https://community.infiniteflight.com/u/lufthansa1/summary" className="apply__a text-decoration-none text-dark" >
            Lufthansa1 (COO)</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplyHeader;
