import React from 'react'
import './style.css'
// import SearchHeader from '../search-header/SearchHeader'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.js';
import GlassImage from '../../assets/icons/glass.png';
import GlobalImg from '../../assets/icons/global.png'
import { PiSunglassesBold } from "react-icons/pi";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaSearch } from 'react-icons/fa'



const Header = () => {
  return (
    <header>
    <div className='top_header'>

    <div class="search-form">
      <input type="text" placeholder="Search..."/>
      <button type="submit"><FaSearch/></button>
    </div>
    <h2 className='header-title'>O‘zbekiston nomoddiy madaniy merosi</h2>
    <div className='buttons'>
      <button>
      <PiSunglassesBold />
      </button>
      <button>
      <AiOutlineGlobal />
      </button>
      
    </div>
    </div>


<div className='bottom_header'>
  <ul>
    <li>Bosh sahifa</li>
    <li>Loyiha haqida</li>
    <li>NMM</li>
    <li>Yangiliklar</li>
    <li>Normativ xujjatlar</li>
    <li>Material</li>
    <li>Aloqa</li>
  </ul>
</div>

</header>
  )
}

export default Header
