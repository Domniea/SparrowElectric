import React from 'react'

export default function Button(props) {
    const {
        classes,
        title,
        bgColor,
        border,
        padding,
        onClick
   
    } = props
  return (
    <>
      <button
        className={`Button ${classes}  `}
        // className='Button'
        style={{
            backgroundColor: bgColor,
            border: border,
            padding: padding
        }}
        onClick={onClick}
      >
        {title}
      </button>
    </>
  )
}
