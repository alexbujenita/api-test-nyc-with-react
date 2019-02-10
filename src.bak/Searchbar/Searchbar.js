import React, { Component } from 'react';
import './Searchbar.css'

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userinput: '',
    }
    this.setInput = this.setInput.bind(this);
  }


 setInput (event) {
   this.props.callFromApp(event.target.value)
   this.setState({
     userinput: event.target.value,
   });
 }

  render() {
    return (
      <div className="bar">
        <input type="text"
          name="search"
          autoComplete="off"
          id="myinput"
          placeholder="Search a hospital..."
          onKeyUp={this.setInput} />
      </div>
    );
  }
};

export default Searchbar;
