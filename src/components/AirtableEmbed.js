import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

import "./css/RouteDb.css";
import { ReactComponent as AirtableLogo } from "../assets/Airtable_Logo.svg";

import { GiRadarSweep } from "react-icons/gi";
import { TbBuildingAirport } from "react-icons/tb";
import CodeShares from "./CodeShares";

const AirtableEmbed = () => {
  return (
    <>
      <div className="main-container">
        <div className="m-4">
          <p className="text-center">
            We serve many passengers with many different backgrounds out of our
            two major hubs : O.R. Tambo International Airport & Cape Town
            International Airport. <br />
            Our joy is flying, yours is sitting back and relaxing as we bring
            the comfort to the Virtual world. You can reserve a gate on our
            discord server without any issues. Thank you for your time and
            support. Good Day! <br />
            <br />
            CEO Signing off😎
          </p>
        </div>
        <div className="routedb-header">
          <AirtableLogo className="airtable-logo my-4" />
        </div>

        <div className="iframe-db d-flex justify-content-center">
          <iframe
            class="airtable-embed mx-3"
            src="https://airtable.com/embed/appVZEAo7Z6WEJtZJ/shriWmzGaaMrdP0ID?layout=card&viewControls=on"
            frameborder="0"
            onmousewheel=""
            title="SAAV-db"
          />
        </div>

        <div className=" py-2 m-4 text-center">
          <h2>Quick Links:</h2>
          <div className="d-flex justify-content-center my-2 p-3">
            <ButtonGroup vertical>
              <h6 className="text-muted">Airport Guides</h6>

              <Button variant="dark" className="btn btn-dark">
                <a
                  href="https://community.infiniteflight.com/t/your-guide-to-oliver-reginald-international-airport-or-known-as-faor/546414/1"
                  className="text-decoration-none text-white"
                >
                  OR Tambo Intl <TbBuildingAirport className="fs-3 " />
                </a>
              </Button>

              <Button variant="dark" className="btn btn-dark">
                <a
                  href="https://en.wikipedia.org/wiki/Cape_Town_International_Airport"
                  className="text-decoration-none text-white"
                >
                  Cape Town Intl <TbBuildingAirport className="fs-3" />
                </a>
              </Button>

              <h6 className="text-muted mt-4">
            Routes & Destinations
          </h6>
          <Button variant="dark" className="btn btn-dark ">
            <a
              href="https://my.flightradar24.com/SouthAfricanVirtual"
              className="text-decoration-none text-white"
            >
              Routes Map <GiRadarSweep className="fs-2 " />
            </a>
          </Button>
            </ButtonGroup>
    
          </div>
        </div>

        <div>
          <CodeShares />
        </div>
      </div>
    </>
  );
};

export default AirtableEmbed;
