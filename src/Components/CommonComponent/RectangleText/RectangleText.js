import React from 'react'
import './RectangleText.css'
export default function RectangleText({ children,IsActive }) {
  return (


    <div className="rectangle">
      <div className={`rectangle_text ${IsActive}`}>
        {children}
      </div>
    </div>

  )
}
