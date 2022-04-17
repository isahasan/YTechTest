import React from 'react'
import './CircleBtn.css'

export default function CircleBtn({children}) {
  return (
    <>
      <button className='c_button'>
        {children}
      </button>
    </>
  )
}
