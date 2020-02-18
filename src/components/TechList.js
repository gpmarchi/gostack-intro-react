import React, { Component } from "react";

import TechItem from "./TechItem";

class TechList extends Component {
  state = {
    techs: ["NodeJs", "ReactJs", "React Native"],
    newTech: ""
  };

  handleInputChange = event => {
    this.setState({ newTech: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ""
    });
  };

  handleDelete = tech => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech) });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map(tech => (
            <TechItem
              key={tech}
              tech={tech}
              onDelete={() => this.handleDelete(tech)}
            />
          ))}
        </ul>
        <input
          type="text"
          value={this.state.newTech}
          onChange={this.handleInputChange}
        />
        <input type="submit" value="Save" />
      </form>
    );
  }
}

export default TechList;
