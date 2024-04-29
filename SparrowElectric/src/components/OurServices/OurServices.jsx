import React from 'react'

import repairAndMaintenance from '../../Assets/Icons/img-repair-and-maintenance.jpg'
import peopleWorkingOnSoloar from '../../Assets/Icons/img-people-working-on-solar.jpg'
import solarPanel from '../../Assets/Icons/img-solar-panel.jpg'
import generatorAndBattery from '../../Assets/Icons/img-generator-and-battery-backup.jpg'
import lightingFixture from '../../Assets/Icons/img-lighting-fixtures.jpg'
import landscapeLighting from '../../Assets/Icons/img-outside-and-landscape-lighting.jpg'
import inspectionRepair from '../../Assets/Icons/img-violations-and-inspection-repairs.jpg'
import rewiring from '../../Assets/Icons/img-rewiring.jpg'
import electricalCarPorts from '../../Assets/Icons/img-electrical-car-ports.jpg'
import replacementEmergencyEnergy from '../../Assets/Icons/img-replacement-emergency-lighting.jpg'

export default function OurServices() {

    const servicesList = [
        {
            image: repairAndMaintenance,
            title: 'Repair and Maintenance',
            caption: 'We provide repair and help maintain existing solar systems. '
        },
        {
            image: peopleWorkingOnSoloar,
            title: 'Electrician Service Upgrades',
            caption: 'As reputable and licensed master electricians, we provide a variety of electrical services.'
        },
        {
            image: solarPanel,
            title: 'Solar Panel',
            caption: 'We install a variety of solar products like PV and Photovoltaic panels.'
        },
        {   
            image: generatorAndBattery,
            title: 'Generator and Battery Pickup',
            caption: 'We can help with your generator and solar battery banks.'

        },
        {
            image: lightingFixture,
            title: 'Lighting Fixtures',
            caption: 'Sparrow Electric installs lighting fixtures and takes care of fittings and fans.'
        },
        {
            image: landscapeLighting,
            title: 'Outside and Landscape Lighting',
            caption: 'Our outdoor lighting services can highlight the architecture of your property and the landscape of your yard.'
        },
        {
            image: inspectionRepair,
            title: 'Violations and Inspection Repairs',
            caption: 'Our master electricians can correct code violations and home inspection electrical repairs.'
        },
        {
            image: rewiring,
            title: 'Rewiring',
            caption: 'We can wire for and install chandeliers and fixtures throughout your property.'
        },
        {
            image: electricalCarPorts,
            title: 'Electrical Car Ports',
            caption: 'We handle the installation and repair of electric vehicle charging systems.'
        },
        {
            image: replacementEmergencyEnergy,
            title: 'Replacment Energy Lighting',
            caption: 'You can count on Sparrow Electric to ensure your emergency lighting never goes unaddressed.'
        }
    ]

    const service = servicesList.map((card, i) => {

        const {image, title, caption } = card

        return <div 
            key={i}
            className='service' 
            id={`OurServices--service${i}`}
            >
            <img className='serviceImage' src={image} />
            <h4>{title}</h4>
            <p>{caption}</p>
        </div>
    })

  return (
    <div id='OurServices'>
      <h2 className='headerElement'>Our Services</h2>
      <p>In addition to affordable solar, Sparrow Electric offers an array of services in your area. </p>
     
      <div id='services--container'>
        <div id='servicesGridWrapper'>
            {service}
        </div>
      </div>
    </div>
  )
}
