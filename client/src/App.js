import React, { Component } from "react";

import Landing from "./views/Landing";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Landing />
      </div>
    );
  }
}

export default App;
