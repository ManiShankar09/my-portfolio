import React,{useEffect, useState} from 'react';
import {Link} from 'react-scroll';

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    }

    window.addEventListener('scroll', handleScroll); 

    return () => {

      window.removeEventListener('scroll', handleScroll); 

    };
  }, []);

  return (
    <div className={`navbar bg-[#142d4c] sticky top-0 z-10 pb-3 ${scroll ?  'backdrop-blur-md bg-opacity-50' : 'bg-[#142d4c]' }`}>
        <div className=' flex justify-around text-white items-center'>
            <div className=' flex mr-10  items-center'>
                <img src= 'https://png.pngtree.com/png-clipart/20210309/original/pngtree-ms-initial-logo-png-image_5839089.jpg' className=' w-8 h-8 mr-3 rounded-full' alt="logo" />
                <p className='name font-bold text-xl'>Mani Shankar</p>
            </div>
            <ul className='items flex  no-underline ml-9 mt-3'>
                <li className=' mr-8 cursor-pointer hover:text-[#8594e4]'> <Link to='home' smooth={true} duration={600}>Home</Link> </li>
                <li className=' mr-8 cursor-pointer hover:text-[#a393eb]'> <Link to='about' smooth={true} duration={600}>About</Link> </li>
                <li className=' mr-8 cursor-pointer hover:text-[#7c73e6]'><Link to='skills' smooth={true} duration={600}>Skills</Link> </li>
                <li className=' mr-8 cursor-pointer hover:text-[#7c73e6]'><Link to='works' smooth={true} duration={600}>Works</Link> </li>
                <li className=' mr-8 cursor-pointer hover:text-[#7c73e6]'><Link to='contact' smooth={true} duration={600}>Contact me</Link> </li>
            </ul>
            
            
        </div>
    </div>
  )
}

export default Navbar