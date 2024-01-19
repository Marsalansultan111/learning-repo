import React,{useRef} from 'react';

import './navBar.css'

const Navbar = ()=>{
 const navRef = useRef();
 const showNavbar = ()=>{
     navRef.current.classList.toggle('show')
 }



     return(<>
        <nav>
             <div className='container'>

                     <a href='#' className='brand'>AR$@L@N $ULTAN</a>
                     <ul className="nav-menu" ref={navRef}>
                      <li><a href="/add">Home</a></li>
                        <li><a href="#">Courses</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Testimonials</a></li>
                        <li><a href="#">Subscribe</a></li>
                        <li class="login"><a href="#">Login</a></li>
                        <li class="signup"><a href="#">Signup</a></li>

                        <div className='close_btn' onClick={showNavbar}  >
                        <span class="material-symbols-outlined">close</span>
                        </div>

			</ul>
             </div>
             <div className='btn_toggle' onClick={showNavbar} >
               <span className="material-symbols-outlined">sort</span>
             </div>
        </nav>
      
     </>)
}


export default Navbar