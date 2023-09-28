import React from 'react';
import '../style/Header.css';
import logo from '../images/logo192.png';
const Header =({setActiveContent})=>{
    return(
        <div>
            <header>
                <nav>
                    {/* <img src="{logo}" alt="" height={"24px"} width={"24px"}/> */}
                    <ul>
                    <li><a href='#' onClick={()=>setActiveContent('post')} ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="35" height="35" focusable="false">
      <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z"></path>
    </svg>
                        </a></li>
                    <li><a href='#' onClick={()=>setActiveContent('aboutus')} >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="35" height="35" focusable="false">
      <path d="M12 6.5a4.5 4.5 0 114.5 4.5A4.49 4.49 0 0112 6.5zm6 6.5h-3a3 3 0 00-3 3v6h9v-6a3 3 0 00-3-3zM6.5 6A3.5 3.5 0 1010 9.5 3.5 3.5 0 006.5 6zm1 9h-2A2.5 2.5 0 003 17.5V22h7v-4.5A2.5 2.5 0 007.5 15z"></path>
    </svg></a></li>
                    <li><a href='#' onClick={()=>setActiveContent('services')} ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="35" height="35" focusable="false">
      <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
    </svg></a></li>
                    <li><a href='#' onClick={()=>setActiveContent('blog')}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="35" height="35" focusable="false">
      <path d="M22 8a6 6 0 01-3 5.22A7 7 0 0012 7H8a7 7 0 00-1.95.28A6 6 0 0112 2h4a6 6 0 016 6zm-4 6v.48a6 6 0 01-2.69 5L10 23v-3H8A6 6 0 018 8h4a6 6 0 016 6zM8 14a1 1 0 10-1 1 1 1 0 001-1zm3 0a1 1 0 10-1 1 1 1 0 001-1zm3 0a1 1 0 10-1 1 1 1 0 001-1z"></path>
    </svg></a></li>
                    <li><a href='#' onClick={()=>setActiveContent('contact')}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="35" height="35" focusable="false">
      <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
    </svg></a></li>
                    </ul>
                </nav>
            </header>
        </div>
    );

}
export default Header;

