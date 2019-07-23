import React, { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import Name from "./Name";
import LandingGirl from "./LandingGirl";
import Arrow from "./Arrow";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <section id="top">
            <LandingGirl />
            <Name />

            <AnchorLink href="#projects">
              <Arrow />
            </AnchorLink>
          </section>
          <section id="projects">
            <h2>Projects</h2>
            <iframe
              src="https://public.google.stackdriver.com/public/chart/5459968254404096218?drawMode=color&showLegend=true&theme=light"
              width="600"
              height="400"
              scrolling="no"
              seamless="seamless"
            />

            <AnchorLink href="#top">Back to top</AnchorLink>
          </section>
        </div>
      </div>
    );
  }
}

export default Landing;
