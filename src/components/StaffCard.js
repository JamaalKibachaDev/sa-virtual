import React from "react";
import Card from 'react-bootstrap/Card';

import JDPfp from '../assets/josiah-dennis-pfp.jpeg'

const StaffCard = () => {
  return (
    <>
      <div className="staff-card m-4">
        <div className="d-flex justify-content-start my-2">
            <h2 className="text">
                About the team
            </h2>
        </div>
      <Card>
      <Card.Header>
        <div className="d-flex justify-content-between my-2">
          <img src={JDPfp} alt="pfp" className="w-25 h-25 rounded-circle" />
          <h6 className="d-flex align-items-end">- SAAV CEO</h6>
        </div>
      </Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p className="fs-6 p-2">
                Welcome New Pilots!👋 I am Josiah Dennis, a 14 year old aviator who has been flying in the virual skies for over 3 years. Thank you for having a look at our website and we hope to see you soon.
          </p>
          <footer className="blockquote-footer">
           Josiah Dennis
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
      </div>
    </>
  );
};

export default StaffCard;
