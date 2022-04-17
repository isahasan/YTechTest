import React from 'react'
import './CircularText.css'

export default function CircularText({children,IsActive}) {
  return (
    <div className='circular'>
        <div className={`circular_text ${IsActive}`}>
            {children}
        </div>
    </div>
  )
}
