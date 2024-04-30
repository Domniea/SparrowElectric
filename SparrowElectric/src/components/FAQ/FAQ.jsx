import React from 'react'
import { useState } from 'react'

import Button from '../Button'

import solorPannels from '../../Assets/Icons/img-affordable-energy.jpg'
import checkCircle from '../../Assets/Icons/img-icon-CheckCircle.svg'
import DropBox from '../DropBox'


export default function FAQ() {

  const faqData = [
    {
      title: 'Why Should I Purchase My Solar System Through Sparrow Electric?',
      response: 'With a solar loan through Sparrows financing, homeowners will own their system through monthly payments. Ownership of their residential solar panels delivers the highest return on investment of all the financing options. Ownership also presents other opportunities for savings through tax credits, tax incentives, and increasing the value of your property.'
    },
    {
      title: 'Does Sparrow Electric Require a down payment for their solar options?',
      response: 'Sparrow Electric’s financing options don’t require a deposit because we help you secure funding to cover the total purchase price with the benefit of zeroing out your energy costs upon the installation.'
    },
    {
      title: 'How does the solar tax credit work?',
      response: 'Homeowners who qualify for a federal tax liability can save money on their installation and ownership process. Currently, paying for the system with a loan means homeowners can utilize the 30% Federal Solar Tax Credit, and they can deduct 30% of their solar installation costs from their tax liability.'
    },
    {
      title: 'Will I Save Money With Sparrow Electric’s Solar Financing?',
      response: 'You can also look forward to compound savings that occur over time through our residential solar system ownership program. We have fixed payment rates for our home solar power systems, so as the cost of power inevitably increases, you will save more and more money as the price of electricity increases.'
    },
    {
      title: 'How Much Will I Save If I Go Solar?',
      response: 'There is no way to accurately predict precisely how much this will save them in the long run, because it’s hard to forecast how much electricity rates will go up. Recent studies show how installing solar on your home can add an average of around $20,000 to a home. Having that system paid off can make a home more enticing to buyers.'
    },
  ]

  const drop = faqData.map((data, i) => {
    return <DropBox 
      key={i}
      data={data}
    />
  })



  return (
    <div id='FAQ'>
      <img id='FAQ--background' src={solorPannels}/>
      <div id='FAQ--topContainer'>
        <div id='FAQ--group1'>
          <h2>We Can Help Get You Affordable Energy</h2>
          <p>
          At Sparrow Electric, we believe that clean, affordable energy should be available to any homeowner, 
          so we work tirelessly to help people obtain financing for residential solar panels. Our help doesn't 
          stop there because we also provide installation services. Consider our team for residential solar panel 
          installations when you're ready to modernize your home with an environmentally friendly source of energy.
          </p>
        </div>

        <div id='FAQ--group2'>
          <h5>Look to Sparrow Electric for:</h5>
          <div id='FAQ--group2--top'>
            <div >
              <img src={checkCircle} />
              <p>Sound and economical solar power options.</p>
            </div>
            <div className=''>
              <img src={checkCircle} />
              <p>We can help any homeowner obtain financing.</p>
            </div>
            <div className=''>
              <img src={checkCircle} />
              <p>Reliable solar and electrical services.</p>
            </div>
            <div className=''>
              <img src={checkCircle} />
              <p>Positive impact on the environment.</p>
            </div>
            <div className=''>
              <img src={checkCircle} />
              <p>We help you navigate tax credits and other offers.</p>
            </div>
          </div>
          <Button
            title='The Residential Solor Adventure'
            bgColor='#21BA9E'
            border='white'
            padding='1% 2%'
          />
        </div>
      </div>
      <div id='FAQ--group3'>
          <h2>Frequently Asked Questions</h2>
          <div id='FAQ--container' >
            {drop}
          </div>
      </div>
    </div>
  )
}
