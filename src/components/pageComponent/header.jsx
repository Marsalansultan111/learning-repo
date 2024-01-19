import React from 'react'
import './header.css'
import myimg from '../../images/self.jpg'
const Header = () => {
  return (<>
  <header>
    <div className='container'>
           <div className='left'>
                  <h1>Learn Code<br/> <span>Increase Your</span><br/>Knowledge</h1>
                  <p>Changing Expectations invites media outlets, education advocates, 
                      and supporters of diversity in computing to join them in celebrating the 
                      launch of the Closing the AI Education Gap Initiative.</p>
                  <a href="#" className='btn'>Explore course</a>
        
          </div>

          <div className='right'>
            <img src={myimg} alt="image" />
         </div>
    </div>
 </header>
</>)
}

export default Header