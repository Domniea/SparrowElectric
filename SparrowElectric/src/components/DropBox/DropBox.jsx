import React from 'react'
import { useState } from 'react'

import downArrow from '../../Assets/Icons/img-icon-CaretCircleDown.svg'

export default function DropBox(props) {

    const {
        data
    } = props

    const {
        title,
        response
    } = data

    const [dropState, setDropState] = useState(false)

    const toggleDropBox = () => {
       return setDropState(prevState => !prevState)
    }


  return (
    <div className='Dropbox'>
        <div id='Dropbox--top'>
            <button onClick={() => toggleDropBox()}>
                <img src={downArrow}/>
            </button>
            <h2>{title}</h2>
        </div>
       
        <div className='dropData--container'>
            {
                dropState &&
                <>
                {/* <div className='divider' ></div> */}
                <p>{response}</p>
                </>
            }
        </div>
       
  </div>
  )
}
