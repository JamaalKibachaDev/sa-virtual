import React from "react";
import Header from "../components/Header";
import InfoCards from "../components/InfoCards";
import AccordionHeader from "../components/AccordionHeader";

const Home = () => {
  return (
    <>
      <div className="main-contianer">
        <Header />

        <div>
          <div>
            <InfoCards />
          </div>

          <div className="d-flex px-4 py-5">
            <div>
              <h1 className="faq-h1">FAQs</h1>
            </div>
            <div>
              <AccordionHeader />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
