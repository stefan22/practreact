import React from 'react';
import '../scss/navigation.scss';
import {navigation} from '../data/navdata';
import {NavLink} from 'react-router-dom';


const Navigation = (props) => {
  const {label0,label1,label2,label3,label4} = navigation;

  return (

    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
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

          <li className='nav-item'>
            <NavLink to={label1.linkUrl} className='nav-link'
               activeClassName='is-active' exact={true}
               >
               {label1.name}
               <span className='sr-only'>(current)</span>
            </NavLink>
          </li>

          <li className='nav-item'>
            <NavLink to={label2.linkUrl} className='nav-link'
               activeClassName='is-active'
               >
               {label2.name}
            </NavLink>
          </li>

          <li className='nav-item'>
            <NavLink to={label3.linkUrl} className='nav-link'
               activeClassName='is-active'
               >
               {label3.name}
            </NavLink>
          </li>

          <li className='nav-item'>
            <NavLink to={label4.linkUrl} className='nav-link'
               activeClassName='is-active'
               >
               {label4.name}
            </NavLink>
          </li>

        </ul>
      </div>
    </nav>
  );

};


export default Navigation;
