import React from 'react'
import Navbar from './Navbar'
import TrustedBy from './TrustedBy'
import WhoWeAre from './WhoWeAre'
import Footer from './Footer'

const UpperAboutHeader = () => {
  return (
      <div>
        <Navbar/>
        <div>
            <h1 className='text-center text-5xl text-red-600 h-[50px] font-semibold mt-6'>About Us </h1>
       
            {/* trusted by */}
            <div className='h-[150px]'>
                <TrustedBy/>
            </div>
            {/* trusted by ende */}
            <hr></hr>
            <div>
                <WhoWeAre/>
            </div>
            <Footer/>
        </div>
    
    </div>
  )
}

export default UpperAboutHeader
