import React from 'react'

import twitter from '../../Assets/Icons/img-logo-Twitter.svg'
import facebook from '../../Assets/Icons/img-logo-Facebook.svg'
import linkedin from '../../Assets/Icons/img-logo-Linkedin.svg'
import youtube from '../../Assets/Icons/img-logo-Youtube.svg'


export default function Footer() {
  return (
    <div className='Footer'>
        <div id='Footer--top'>
            <h3>Sparrow Electric</h3>
        </div>
        <div id='Footer--nav'>
            <p>Who We Help</p>
            <p>What We Offer</p>
            <p>Why Sparrow Solar</p>
            <p>Financial Help Center</p>
        </div>
        <div id='Footer--divide'>

        </div>
        <div id='Footer--base--nav'>
            <p>© Sparrow Electric. All Rights Reserved.</p>
            <p id='nudged'>Terms & Conditions | Privacy Policy</p>
            <div>
                <img src={twitter}/>
                <img src={facebook}/>
                <img src={linkedin}/>
                <img src={youtube}/>
            </div>
        </div>

    </div>
  )
}
