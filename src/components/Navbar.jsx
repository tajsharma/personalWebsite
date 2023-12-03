import React,{ useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles';
import { navLinks } from '../constants';
import { menu, close, logo} from '../assets';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className = {`${styles.paddingLeft} ${styles.paddingRight} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>

      <div className='w-full flex justify-between items-center max-w-7kl mx-auto'>
        <Link
          to = "/"
          className='flex items-center gap-2'
          onClick={()=>{
            setActive("");
            window.scrollTo(0,0);
          }
          }
        >
          <img src = {logo} alt = "logo" className="w-10 h-11 object-contain"/>

          <p className='italic text-white text-[18px] font-bold cursor-pointer'>
            Taj Sharma<span className=''> | Developer Portfolio</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link)=> (
            <li 
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } italic hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items center'>
          <img 
            src={toggle ? close : menu}
            alt='menu' 
            className='w-[28px] h-[28[x] object-contain cursor-pointer'
            onClick={()=>setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 
          bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% absolute top-20
          right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>

          </div>
            

        </div>


      </div>

    </nav>
  )
}

export default Navbar