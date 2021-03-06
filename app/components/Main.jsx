import React from 'react';
import Nav from 'Nav';
import PropTypes from 'prop-types';

const Main = (props) => {
    return (
      <div>
        <Nav/>
        <h2>Main Component</h2>
        {props.children}
      </div>
    )
  }

Main.propTypes = { children: PropTypes.element.isRequired }

export default Main;
