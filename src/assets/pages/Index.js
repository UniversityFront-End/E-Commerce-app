import React from 'react'
import './index.css';

const HomePage = new URL("./homepage-A1.png",import.meta.url)

export default function Index() {
  return (
    <>
      <div className="bgimg-1">
        <img src={HomePage} alt="HOMEPAGE." className='HomePage' />
        <div className="caption">
          <span className="border">E-Commerce Store App&reg;</span>
        </div>
      </div>
    </>
  )
}
