import React from 'react'
import { useState } from 'react'

import Button from '../Button'

import residentialHome from '../../Assets/Icons/img-residential-home.jpg'
import peopleWorkingOnSolar from '../../Assets/Icons/img-people-working-on-solar.jpg'

export default function WeCanHelp() {
  const [toggleDetails, setToggleDetails] = useState(false)


  const showDescription = () => {
    setToggleDetails(prevState => !prevState)
  }

  return (
    <div id='WeCanHelp--root'>
      <h3 id='WeCanHelp--nav' > Home / <span className='font--regular' >Who We Help</span></h3>
      <div className='WeCanHelp--container--primary'>
        <div id='section1Group1' className='centered'>
          <h1 className='headerElement centered'>We Can Help You Make The Switch To Solor Power</h1>
            <p>Solar power provides one of the best ways to go green if you want a reliable alternative for power. 
              Sparrow Electric believes that solar power should be affordable and attainable by every homeowner. 
              Using solar energy to power your home is a responsible action that should be .ewarded and encouraged. 
              That's why we do everything to help people obtain financing, so they qualify to have residential solar panels installed on their homes. 
            </p>
        </div>
        <div id='section1Group2' className='centered'>
          <img className='WeCanHelp--img' src={residentialHome} />
        </div>
        <div id='section1Group3' className=''>
          <h4 className='headerElement' >Pull The Plug And Start Saving</h4>
            <p>
              The increasing cost of energy makes a significant impact on homeowners because it affects them financially. 
              The usual process to switch to solar power includes a sizeable upfront investment that very few homeowners can make. 
              The typical process for switching to solar power involves purchasing the panels and then paying for the installation. 
              Although this is a step in the right direction, some property owners cannot afford the number of panels to completely replace paying the power company for a portion of their power. 
              The most impactful way to go solar requires that you generate enough solar energy to stop paying the power company and make a lower monthly payment towards your panels.
            </p>
        </div>
          {
            toggleDetails &&
            <>
              <div id='section1Group4' className='centered'>
                <p>
                  Homeowners who prefer to own their solar panels typically opt for financing. 
                  This makes it so homeowners can switch to solar for no money down and make monthly payments on their system that are less than their power bill. 
                  Property owners begin saving on their monthly expenditures immediately because they eliminate their energy bill, plus the money they would have been throwing away at the power company is now being put towards owning their solar system. 
                  Solar power financing with Sparrow Electric allows homeowners to get the most value from their residential solar system. We designed our financing for homeowners looking to reap long-term savings rather than short-term cash flow.
                </p>
              </div>
              <div id='section1Group5' className='centered'>
                <p>
                  Fortunately, Sparrow Electric can help eliminate that upfront investment through our exceptional financing program. 
                  We can help you get the financing you need to purchase and install your home solar system. Our team works hand-in-hand with those who own their 
                  home and are seeking alternatives to using fossil fuel and need help obtaining adequate financing, no matter their credit score. Because the need for renewable sources 
                  of energy and eco-friendly practices increases, we help you find an affordable solution that fits your lifestyle and saves you money instantly. As your solar experts, 
                  we strive to make it easy for homeowners to adopt clean, renewable energy without significant investment or up-front costs.
                </p>
              </div>
              <div id='section1Group6' className='centered'>
                <img class='WeCanHelp--img' src={peopleWorkingOnSolar} />
              </div>
              <div id='section1Group7' className='centered'>
                <h4 className='headerElement' >You Can Take Advantage Of Our Solar Process</h4>
                <p>
                Sparrow Electric has solar power financing options for homeowners that can't pay for the panels and the installation in cash.
                Whether or not they plan on going the solar power route, every property owner can benefit from familiarizing themselves with our 
                financing options and how they work. Knowing that we help identify a payment option that enables a better long-term energy cost can make all the 
                difference in whether or not they get new solar panels. 
                </p>
              </div>
              <div id='section1Group8' className='centered'>
                <p>
                  Nationwide, the federal Investment Tax Credit (ITC) is one of the primary incentives available to anyone 
                  interested in solar energy. The ITC tax credit allows you to deduct 26 percent of the cost of installing a solar system 
                  from your federal taxes. This incentive won't last forever - in 2023, the federal ITC steps down to 22 percent and then 
                  goes away entirely for residential solar installations in 2024.
                </p>
              </div>
            </>
          }
        </div>
        <div className='centered'>
          <Button
            title={!toggleDetails ? 'Show More' : 'Show Less'}
            bgColor='#21BA9E'
            border='white'
            padding='1% 2%'
            onClick={showDescription}
          />
        </div>
      </div>
  )
}
