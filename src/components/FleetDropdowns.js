import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

import A330Fleet from '../assets/a330-fleet.jpg'

const FleetDropdowns = () => {
  return (
    <>
    <div className=''>

      <div className='m-4'>
        <h3>
          SAAV Fleet
        </h3>
      </div>
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Airbus A330-300</Accordion.Header>
        <Accordion.Body >

          <div className=''>
            <img src={A330Fleet} className='w-100 h-100 rounded my-2' alt='a330-fleet'/>
          </div>

          <div className='d-flex justify-content-center'>
          <ul>
            <li className='font-monospace'><span>Range:</span> --km</li>
            <li className='font-monospace'><span>Cruise Speed :</span> --M</li>
            <li className='font-monospace'><span>Max Altitude :</span> --ft</li>
            <li className='font-monospace'><span>Capacity :</span> --pax</li>
          </ul>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>B747-200</Accordion.Header>
        <Accordion.Body>
        
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
    </>
  )
}

export default FleetDropdowns
