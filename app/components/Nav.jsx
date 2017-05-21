import React from 'react';
import {NavLink} from 'react-router-dom';


const Nav = () => {
    return (
      <div>
        <h2>Nav Component</h2>
        <NavLink exact to="/"
          activeClassName="active"
          activeStyle={{color:'red'}}>
          Get Weather
        </NavLink>

        <NavLink to="/about"
          activeClassName="active"
          activeStyle={{color: 'red'}}>
          About
        </NavLink>

        <NavLink to="/examples"
          activeClassName="active"
          activeStyle={{color: 'red'}}>
          Examples
        </NavLink>
      </div>
    )
  }

export default Nav;



// class About extends React.Component {
//
//   constructor (props) {
//     super(props);
//   }
//
//   render() {
//     return(
//       <h3>About Component</h3>
//     )
//   }
// }
