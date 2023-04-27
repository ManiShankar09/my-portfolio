import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";


const Skills = () => {
  return (
    <div className='skills_main bg-[#142d4c] h-[100vh]' id='skills'>
        <h1 className=' flex justify-center text-4xl text-white font-bold pt-5'>Skills</h1>

        <div className='skills flex justify-center  flex-wrap mt-10 w-auto ml-28 mr-28 items-center'>
            <div className=' flex flex-col w-[200px] p-5 justify-center m-6 hover:shadow-2xl rounded-lg'>
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png" alt=".." className=' w-16 h-auto flex' />
                <h1 className=' mt-3 text-white mb-2 '>Python</h1>
            </div>

            <div className=' flex flex-col w-[200px] p-5 justify-center m-6 hover:shadow-2xl'>
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968282.png" alt=".." className=' w-16 h-auto flex' />
                <h1 className=' mt-3 text-white mb-2 '>Java</h1>
            </div>

            <div className=' flex flex-col w-[200px] p-5 justify-center m-6 hover:shadow-2xl'>
                <img src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png" alt=".." className=' w-16 h-auto flex' />
                <h1 className=' mt-3 text-white mb-2 '>HTML</h1>
            </div>

            <div className=' flex flex-col w-[200px] p-5 justify-center m-6 hover:shadow-2xl'>
                <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt=".." className=' w-16 h-auto flex' />
                <h1 className=' mt-3 text-white mb-2 '>CSS</h1>
            </div>

            <div className=' flex flex-col w-[200px] p-5 justify-center m-6 hover:shadow-2xl'>
                <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt=".." className=' w-16 h-auto flex' />
                <h1 className=' mt-3 text-white mb-2 '>TailwindCSS</h1>
            </div>

            <div className=' flex flex-col w-[200px] p-5 justify-center m-6 hover:shadow-2xl'>
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt=".." className=' w-16 h-auto flex' />
                <h1 className=' mt-3 text-white mb-2 '>JavaScript</h1>
            </div>

            <div className=' flex flex-col w-[200px] p-5 justify-center m-6 hover:shadow-2xl'>
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png" alt=".." className=' w-16 h-auto flex' />
                <h1 className=' mt-3 text-white mb-2 '>NodeJS</h1>
            </div>

            <div className=' flex flex-col w-[200px] p-5 justify-center m-6 hover:shadow-2xl'>
                <img src="https://img.icons8.com/color/256/express-js.png" alt=".." className=' w-16 h-auto flex' />
                <h1 className=' mt-3 text-white mb-2 '>ExpressJS</h1>
            </div>

            <div className=' flex flex-col w-[200px] p-5 justify-center m-6 hover:shadow-2xl'>
                <img src="https://cdn-icons-png.flaticon.com/512/520/520890.png" alt=".." className=' w-16 h-auto flex' />
                <h1 className=' mt-3 text-white mb-2 '>ReactJS</h1>
            </div>

            <div className=' flex flex-col w-[200px] p-5 justify-center m-6 hover:shadow-2xl'>
                <img src="https://cdn.iconscout.com/icon/free/png-256/mongodb-3521676-2945120.png?f=webp&w=256" alt=".." className=' w-16 h-auto flex' />
                <h1 className=' mt-3 text-white mb-2 '>MongoDB</h1>
            </div>

            <div className=' flex flex-col w-[200px] p-5 justify-center m-6 hover:shadow-2xl'>
                <img src="https://cdn-icons-png.flaticon.com/512/4492/4492311.png" alt=".." className=' w-16 h-auto flex' />
                <h1 className=' mt-3 text-white mb-2 '>SQL</h1>
            </div>

            
        </div>

    </div>
  )
}

export default Skills