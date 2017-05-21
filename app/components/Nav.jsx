import React from 'react';
import {NavLink} from 'react-router-dom';


class Nav extends React.Component {

  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this)
  }

  onSearch(e){
    e.preventDefault();
    alert('Not yet wired up!')
  }

  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>

            <li>
              <NavLink exact to="/"
                activeClassName="active"
                activeStyle={{color:'red'}}>
                Get Weather
              </NavLink>
            </li>

            <li>
              <NavLink to="/about"
                activeClassName="active"
                activeStyle={{color: 'red'}}>
                About
              </NavLink>
            </li>

            <li>
              <NavLink to="/examples"
                activeClassName="active"
                activeStyle={{color: 'red'}}>
                Examples
              </NavLink>
            </li>
          </ul>
        </div>

        <div className= "top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search weather"/>
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
      )
    }
  }


  export default Nav;
