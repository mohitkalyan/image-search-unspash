import "./Inputform.css";
import React from "react";

class Input extends React.Component {
  state = { text: "" };

  onInputChange = (e) => {
    this.setState({ text: e.target.value });
  }

  onSearchSubmit = (e)=>{
    e.preventDefault();
    this.props.onSubmit(this.state.text);  
}

  render() {
    return (
      <div className="centre top">
      <form >
        <div className="ui action input ">
          <input
            type="text"
            value = {this.state.text}
            placeholder="Search..."
            onChange={this.onInputChange}
          />
          <button onClick={this.onSearchSubmit} className="ui button">Search</button>
        </div>
        </form>
      </div>
    );
  }
}

export default Input;
