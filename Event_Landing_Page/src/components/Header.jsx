import React, { useEffect, useState } from 'react'
import { assets } from '../assets/images/assets'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isopen, setIsopen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

 
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id || window.location.hash.replace("#", ""));
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
  return (
    <>


      <nav className={`${isScrolled ? 'bg-gray-100 shadow-2xl' : 'bg-transparent'} transition-colors duration-300 fixed w-full z-20 top-0 start-0 `}>
        <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">
          <a for="#" className={` flex items-center space-x-3 rtl:space-x-reverse relative cursor-pointer`}>
            <img src={assets.flag} alt="flag" className='h-10 w-10 absolute z-1'/>
              <span className={`${isScrolled ? 'text-black' : 'text-white'} self-center text-4xl text-heading font-bold z-2`}>25</span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <a href="#register" className="text-white bg-orange-400 transition-all delay-150 cursor-pointer rounded-2xl hover:bg-green-400 box-border border border-transparent hover:bg-brand-strong focus:ring-2 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-2 md:px-4 py-2.5 focus:outline-none">Registration</a>
            <button onClick={()=>{setIsopen(!isopen)}} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex text-white items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only text-white">Open main menu</span>
              <span className={`${isScrolled ? 'text-black' : 'text-white'} text-2xl w-6 h-6 flex justify-center items-center `}>
                {isopen ?
               <i className="fa-solid fa-xmark text-3xl"></i>
               :
               <i className="fa-solid fa-bars text-3xl"></i>
                }
              </span>
            </button>
          </div>
          <div className={`${isScrolled ? 'text-black' : 'text-white'} ${isopen ? "block rounded-2xl shadow-2xl" : "hidden"} items-center justify-between w-full md:flex md:w-auto md:order-1`}>
            <ul className="flex text   flex-col p-4 md:p-0 mt-4 font-medium border border-default rounded-base bg-neutral-secondary-soft md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-neutral-primary">
              <li className="relative">
                <a href="#home" className={`${activeSection === "home"  ? "br2 text-orange-400 font-bold " : "br"} block py-2 px-3 rounded-sm md:bg-transparent md:text-fg-brand md:p-0 cursor-pointer`}>
                  Home</a>
              </li>
              <li className="relative">
                <a href="#schedule" className={`${activeSection === "schedule"  ? "br2  text-orange-400 font-bold " : "br"} block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent cursor-pointer`}>
                  Schedule</a>
              </li>
              <li className="relative">
                <a href="#speaker" className={`${activeSection === "speaker"  ? "br2  text-orange-400 font-bold " : "br"} block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent cursor-pointer`}>
                  Speakers</a>
              </li>
              <li className="relative">
                <a href="#register" className={`${activeSection === "register"  ? "br2  text-orange-400 font-bold " : "br"} block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent cursor-pointer`}>
                  Registration</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
