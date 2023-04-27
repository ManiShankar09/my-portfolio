import React from 'react';
import {ImReddit} from 'react-icons/im'
import {FiGithub} from 'react-icons/fi'
import {RxTwitterLogo} from 'react-icons/rx';
import {FaFacebookF} from 'react-icons/fa';
import {FaLinkedinIn} from 'react-icons/fa';

const About = () => {
  return (
    <div className='about1 h-[100vh] bg-[#142d4c] justify-around items-center flex' id='about'>
        <div className='about flex items-center justify-around'>
            <div>
                <img src="https://i.ibb.co/171HzkM/hello.jpg" className='about_image w-[350px] h-[350px] rounded-full object-cover bg-[#4ef037] p-1' alt="hello" />
            </div>
            <div>
                <h1 className=' text-white flex  justify-center mb-7 text-2xl font-bold'>Who I am ?.</h1>
                <p className='about-self text-white w-[500px] ml-14'>Hi, I'm Mani Shankar, and I'm currently persuing third-year B.Tech  major at Vishnu Institute of Technology, Bhimavaram.
                    I've always been fascinated by technology and how it can be used to solve real-world problems.
                    I've completed several coding projects. I'm also a member of the university's coding club and enjoy collaborating with others on coding challenges.
                    In my free time, I like to expose to new technologies.
                </p>
                <p className=' bg-gray-600 h-[1px] w-[460px] flex justify-center mt-5 ml-14'></p>
                <div className=' flex mt-5 space-x-5 ml-14 text-gray-500'>
                    <p className=' text-white font-bold mr-8'>Get Connect</p>
                    <a href="https://www.facebook.com/mani.shankar.98284" className=''><FaFacebookF className=' w-6 h-auto hover:text-gray-300 hover:duration-300 transition ease-in-out' /></a>
                    <a href="https://twitter.com/Mani_Shankar09"><RxTwitterLogo className=' w-6 h-auto hover:text-gray-300 hover:duration-300 transition ease-in-out' /></a>
                    <a href="https://t.co/pGxE8QuqWx"><FaLinkedinIn className=' w-6 h-auto hover:text-gray-300 hover:duration-300 transition ease-in-out' /></a>
                    <a href="https://github.com/ManiShankar09"><FiGithub className=' w-6 h-auto hover:text-gray-300 hover:duration-300 transition ease-in-out' /></a>
                    <a href="https://www.reddit.com/user/mani_shankar09"><ImReddit className=' w-6 h-auto hover:text-gray-300 hover:duration-300 transition ease-in-out' /></a>

                </div>
            </div>
        </div>
        
    </div>
  )
}

export default About