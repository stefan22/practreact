import React from 'react';
import '../scss/navigation.scss';
import {navigation} from '../data/navdata';


const Navigation = () => {
  const {label0,label1,label2,label3,label4,label5,label6,label7} = navigation;

  return (

    <nav className='topnav navbar navbar-expand-lg navbar-dark bg-dark'>
      <a className='navbar-brand'
         href={label0.linkUrl}>{label0.name}
      </a>
      <button className='navbar-toggler'
              type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'
      >
      <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>

          <li className='nav-item active'>
            <a className='nav-link'
               href={label1.linkUrl}>{label1.name}
               <span className='sr-only'>(current)</span></a>
          </li>

          <li className='nav-item'>
            <a className='nav-link'
               href={label2.linkUrl}>{label2.name}
            </a>
          </li>

          <li className='nav-item'>
            <a className='nav-link'
               href={label3.linkUrl}>{label3.name}
            </a>
          </li>

          <li className='nav-item dropdown'>
            <a className='nav-link dropdown-toggle'
               href={label4.linkUrl} id='navbarDropdown'
               role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
              {label4.name}
            </a>
            <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
              <a className='dropdown-item'
                 href={label5.linkUrl}>{label5.name}
              </a>
              <a className='dropdown-item'
                 href={label6.linkUrl}>{label6.name}
              </a>
              <div className='dropdown-divider'></div>
              <a className='dropdown-item'
                 href={label7.linkUrl}>{label7.name}
              </a>
            </div>
          </li>

        </ul>
      </div>
    </nav>
  );

};


export default Navigation;
