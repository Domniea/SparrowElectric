import React from 'react'

import phone from '../../Assets/Icons/img-icon-Phone.svg'
import envelope from '../../Assets/Icons/img-icon-Envelope.svg'

import sparrowLogo from '../../Assets/Icons/img-SparrowElectric-Logo-White.svg'
import arrowRight from '../../Assets/Icons/img-icon-ArrowRight.svg'
import lightning from '../../Assets/Icons/img-icon-Lightning.svg'
import circle from '../../Assets/Icons/img-iconXCircle.svg'

export default function Header() {
  return (
    <div className='Header'>
        <div className='Header--contact'>
            <div className='contact--grouping'>
                <div>
                    <img src={phone} />
                    <h3>385-244-0355</h3>
                </div>
                <div>
                    <img src={envelope} />
                    <h3>Send Message</h3>
                </div>
            </div>
            <div className='contact--grouping'>
                <h3>Find A Location</h3>
                <h3>Contact Us</h3>
            </div>
        </div>
        <div className='Header--nav'>
            <div className='Header--nav--top'>
                <img src={sparrowLogo}/>
                <div className='Header--nav-top--subNav'>
                    <h3>How We Help</h3>
                    <h3>What We Offer</h3>
                    <h3>Financial Help Center</h3>
                    <h3>Why Sparrow Solar</h3>
                </div>
                <button className='Header--nav--RequestAQuote'>Request A Quote <img src={arrowRight} /></button>
            </div>
            <div className='Header--nav--bottom'>
                <div>
                    <img src={lightning} />
                    <span>Give us a call today and we will waive all financing fees.</span>
                    <p className='Header--nav--bottom--link'>See Details</p>
                </div>
                <img className='Header--nav--bottom--close' src={circle} /> 
            </div>
        </div>
        <div className='Header--banner'>
            <h1 className='Header--banner--top'>Are You Ready To Cut Your Energy Bill?</h1>
            <h1 className='Header--banner--bottom'>Sparrow Electric helps homeowners from coast to coast with the best solor financing options.</h1>
        </div>
    </div>
  )
}
