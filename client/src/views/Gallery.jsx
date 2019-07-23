import React, { Component } from "react";
import axios from "axios";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };
  }

  componentDidMount() {
    this.fetch();
  }

  fetch = () => {
    axios.get("");
  };
  render() {
    return <div />;
  }
}

export default Gallery;
