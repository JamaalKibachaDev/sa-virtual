import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

import "./css/ApplyNow.css";

const ApplyHeader = () => {
  return (
    <>
      <div className="main-container">
        <div className="text-center p-4">
          <h2 className="">VA Application</h2>
          <p>
            We appreciate your kind interest in applying to join our VA. Please
            check out the requirements before sending out your applications.
          </p>

          <div className="requirements-container py-3">
            <ListGroup className="list-group">
              <ListGroup.Item className="list-item bg bg-dark bg-gradient text-white">Minimum Age : 13 Years</ListGroup.Item>
              <ListGroup.Item className="list-item bg bg-dark bg-gradient text-white">IF Grade 2 and above</ListGroup.Item>
              <ListGroup.Item className="list-item bg bg-dark bg-gradient text-white">Not on IFC Blacklist/Watchlist</ListGroup.Item>
              <ListGroup.Item className="list-item bg bg-dark bg-gradient text-white">Valid IFC Subscription</ListGroup.Item>
            </ListGroup>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplyHeader;
