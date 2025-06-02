import React from "react";
import Card from "react-bootstrap/Card";

import { staffHeader, staffPage } from "../assets/data";

const StaffCard = () => {
  return (
    <>
      <div className="staff-card m-4">
      <div className="card__container">
        <div className="m-2">
          {staffHeader.map(({ title, id }) => (
            <h2 className="staff__h2 text-end" id={id}>
              {title}
            </h2>
          ))}
        </div>

   
          <Card className="staff__card" border="light">
            {staffPage.map(({ id, image, description, username, role }) => (
              <>
                <Card.Header>
                  <div className="d-flex justify-content-between">
                    <img
                      src={image}
                      alt="staff-pfp"
                      className="staff-pfp rounded-circle"
                      id={id}
                    />
                    <h6 className="d-flex align-items-end">{role}</h6>
                  </div>
                </Card.Header>

                <Card.Body className="mb-4">
                  <blockquote className="blockquote mb-0">
                    <p className="fs-6 p-2">{description}</p>
                    <footer className="blockquote-footer">{username}</footer>
                  </blockquote>
                </Card.Body>
              </>
            ))}
          </Card>
        </div>
      </div>
    </>
  );
};

export default StaffCard;
