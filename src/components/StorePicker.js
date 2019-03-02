import React from "react";
import PropTypes from 'prop-types';
import { getFunName } from "../helpers";

class StorePicker extends React.Component {

  static propTypes = {
    history: PropTypes.object
  }

  myInput = React.createRef();

  goToStore = event => {
    // 1. Stop the form from submitting
    event.preventDefault();
    // 2. get the text from that input
    const storeName = this.myInput.current.value;
    // 3. Change the page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store →</button>
      </form>
    );
  }
}

export default StorePicker;





//NOTES:
/*
- if you use the onClick with a ...this.handleClick()  it runs it when it mounts. 
- "this" within the built-in methods of react will often refer to the component as a whole. 
    - "this" inside of non-built-in methods will render an undefined. 
- constructor()  --->  will run before the component is rendered. HOWEVER it needs the "super()" method 
as the first method that exists inside of constructor. 
    - Inside constructor()...









*/