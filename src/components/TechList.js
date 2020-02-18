import React, { Component } from "react";

class TechList extends Component {
  state = {
    techs: ["NodeJs", "ReactJs", "React Native"]
  };

  render() {
    return (
      <ul>
        <li>NodeJS</li>
        <li>ReactJS</li>
        <li>React Native</li>
      </ul>
    );
  }
}

export default TechList;
