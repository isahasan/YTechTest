import React from 'react'
import './HexagonText.css'

export default function HexagonText({children,IsActive}) {
  return (
    <div className='hexagon'>
        <div className={`hexagon_text ${IsActive}`}>
            {children}
        </div>
    </div>
  )
}
