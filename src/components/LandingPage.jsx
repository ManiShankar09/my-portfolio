import React from 'react'
import {MdOutlineDownloadForOffline} from 'react-icons/md';



const LandingPage = () => {
  return (
    <div className=' bg-[#142d4c] h-[100vh]' id='home' >
        
        <div className='landing_page flex items-center h-[90vh] justify-around'>
            <div className=' '>
                <h1 className=' text-3xl text-white'>Hi, I am</h1>
                <h1 className=' text-5xl text-white font-extrabold mt-3 font-abc leading-snug'>MANI <br /> SHANKAR</h1>
                <button className=' flex items-center bg-gray-200 p-2 mt-6 rounded-md hover:bg-[#655DBB] hover:text-white hover:duration-300 transition ease-in-out'> <MdOutlineDownloadForOffline className=' text-lg mr-2' /><a href="https://drive.google.com/file/d/1uq1mryfc98VLWRLb8zcdftWYy4W9CrCd/view?usp=sharing" download='Mani Shankar resume'>Download Resume</a></button>
            </div>
            <div>
                <img src="https://react-tailwindcss-portfolio.netlify.app/static/media/developer-dark.3f07bd13.svg" className='landing_image w-[530px] h-auto' alt="..." />
            </div>
            
        </div>
    </div>
  )
}

export default LandingPage