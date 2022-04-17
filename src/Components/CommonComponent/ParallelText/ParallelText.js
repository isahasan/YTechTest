import React from 'react'
import './ParallelText.css'
export default function ParallelText({ children, IsActive }) {
  return (


    <div className="parallelogram">
      <div className={`parallelogram_text ${IsActive}`}>
        {children}
      </div>
    </div>

  )
}
