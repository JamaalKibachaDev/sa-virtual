import React from "react";
import { MDBFooter, MDBContainer } from "mdb-react-ui-kit";

import { FaTiktok, FaDiscord, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="mt-4">
        <MDBFooter className="text-center text-white bg-dark bg-gradient">
          <MDBContainer className="pb-0">
            <section className="p-4">
              <div className="fs-2">
                <h2>Socials :</h2>

                <a href="/" className="text-white">
                  <FaDiscord className="me-5" />
                </a>

                <a href="/" className="text-white">
                  <FaYoutube className="me-5" />
                </a>

                <a href="/" className="text-white">
                  <FaTiktok />
                </a>
              </div>

              <div className="py-4">
                <small className="text-secondary font-monospace">
                  Infinite Flight's South African Virtual is not affiliated with
                  or endorsed by the real SA Airways in any way. All SAAV logos
                  are registered trademarks of South African Airways.
                </small>
              </div>
            </section>
          </MDBContainer>

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2025 Copyright : SA Virtual
          </div>
        </MDBFooter>
      </div>
    </>
  );
};

export default Footer;
