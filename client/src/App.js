import React from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import ProjectList from "./components/ProjectList";

class App extends React.Component {
  state = {
    projects: []
  };

  componentDidMount() {
    axios.get("http://localhost:5000/projects").then(res =>
      this.setState({
        projects: res.data
      })
    );
  }
  render() {
    const { projects } = this.state;
    return (
      <Route exact path="/" render={props => (
        <ProjectList {...props} projects={projects} />
      )} />
    );
  }
}

export default App;
