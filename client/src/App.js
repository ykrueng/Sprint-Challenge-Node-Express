import React from "react";
import { Segment, Header, Card, Icon } from "semantic-ui-react";
import axios from "axios";

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
      <Segment style={{ textAlign: "center"}}>
        <Header as="h1">Node-Express Project</Header>
        <Card.Group style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }} itemsPerRow={2}>
          {
            projects.map(project => (
              <Card raised color="teal" key={project.id}>
                <Card.Content>
                  <Card.Header>
                    {project.name}
                  </Card.Header>
                  <Card.Description>
                    {project.description}
                  </Card.Description>
                  <Icon
                    style={{
                      fontSize: "24px",
                      marginTop: "2rem",
                      color: project.completed? "green" : "orange"
                    }}
                    className={`${project.completed ? "check" : "clock outline"}`} />
                  <br />
                  {project.completed ? "completed" : "incomplete"}
                </Card.Content>
              </Card>
            ))
          }
        </Card.Group>
      </Segment>
    );
  }
}

export default App;
