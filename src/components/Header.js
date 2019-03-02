import React from 'react';
import PropTypes from "prop-types";
//this has been converted to a "stateless functional component":
//no custom data, just data passed into it.
//if the component only has a render method. 
//"implicit return" is using the =>  (arrow) function, with only one argument you don't need parenthesis

const Header = props =>  ( 
    <header className="top">
        <h1>
            Catch
            <span className="ofThe">
                <span className="of">Of</span>
                <span className="the">The</span>
            </span>
            Day
        </h1>
        <h3 className="tagline" >
            <span>{props.tagline}</span>
        </h3>
    </header>

         )

Header.propTypes = {
    tagline: PropTypes.string.isRequired
}
 
export default Header;