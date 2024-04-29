import React from 'react'

import Button from '../Button'

export default function GoSolar() {
  return (
    <div className='GoSolar'>
      <div id='GoSolar--left'>
        <h2>Go Solar Today</h2>
        <p>Pay less for your solar panels than the monthly cost of your power bill and reduce your dependence on traditional sources of electricity with Sparrow Electric. </p>
      </div>
      <div id='GoSolar--right'>
             <Button
                title='Lets Work Together'
                bgColor='#FFFFFF'
                border='3px solid #21BA9E'
                padding='2% 4%'
          />
      </div>
    </div>
  )
}
