import React from "react";
import Input from "./Inputform";
import axios from "./api/unsplash";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { img: [] };

  onSearchSubmit = async (term) => {
    const response = await axios.get("/search/photos", {
      params: { query: term },
    });

    this.setState({ img: response.data.results });
  };
  render() {
    return (
      <div>
        <Input onSubmit={this.onSearchSubmit} />
        <ImageList images= {this.state.img} />
        
      </div>
    );
  }
}

export default App;
