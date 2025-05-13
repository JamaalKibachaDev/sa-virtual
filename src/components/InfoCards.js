import React from "react";
import Card from "react-bootstrap/Card";

import { FaDatabase } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { FaRankingStar } from "react-icons/fa6";

const InfoCards = () => {
  return (
    <>
      <div className="p-4">
        <Card className="info-card mb-3">
          <Card.Title className="d-flex justify-content-center p-2">
            <FaDatabase className="fs-1 m-2" />
            <h4 className="text-center my-auto p-2">Route Database</h4>
          </Card.Title>

          <Card.Body className="bg bg-dark bg-gradient m-2 rounded text-white">
            Our Route Database is specially built to achieve maximum user
            friendliness and ensure easier navigation during flight briefings.
          </Card.Body>
        </Card>

        <Card className="info-card mb-3">
          <Card.Title className="d-flex justify-content-center p-2">
            <FaUsers className="fs-1 m-2" />
            <h4 className="text-center p-2  my-auto">SAAV Staff</h4>
          </Card.Title>

          <Card.Body className="bg-danger bg-gradient m-2 rounded text-white">
            Our staff are highly trained & experienced in their fields of work
            and are always ready to help. Feel free to communicate with us at
            any time through our socials or via IFC.
          </Card.Body>
        </Card>

        <Card className="info-card">
          <Card.Title className="d-flex justify-content-center p-2">
            <FaRankingStar className="fs-1 m-1" />
            <h4 className="text-center p-2 my-auto">Ranking System</h4>
          </Card.Title>

          <Card.Body className="bg bg-dark bg-gradient m-2 rounded text-white">
            Pilots advance through ranks starting from Trainee all the way upto
            Senior Pilot by logging flight hours. This encourages progression
            and realism. Higher ranks will be granted access to advanced
            aircraft and events.
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default InfoCards;
