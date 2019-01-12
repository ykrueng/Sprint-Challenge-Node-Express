import React from "react";
import { Segment, Header, Card, Icon, Button } from "semantic-ui-react";

import axios from "axios";

class ProjectCard extends React.Component {
  state = {
    project: null
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    axios
      .get(`http://localhost:5000/projects/${id}`)
      .then(res => this.setState({ project: res.data }))
      .catch(err => console.log(err));
  }
  render() {
    const { project } = this.state;
    const { history } = this.props;
    return (
      <Segment textAlign="center">
        <Header as="h1">{project ? project.name : 'Project Card'}</Header>
        <div style={{ marginBottom: "1rem"}}>
          <Button primary icon="home" content="Home" onClick={() => history.push("/")} />
          <Button primary icon="edit" content="Edit" />
        </div>
        <Card style={{ margin: "0 auto", width: "50rem" }}>
          {project && (
            <Card.Content>
              <Card.Description>
                <p>{project.description}</p>
                <ul
                  style={{
                    textAlign: "left",
                    listStyleType: "none",
                    margin: "2.5rem"
                  }}
                >
                  {project.actions.map(action => (
                    <li
                      style={{
                        marginBottom: "1.2rem",
                        display: "flex",
                        borderBottom: "1px solid darkslategray"
                      }}
                      key={action.id}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "flex-end",
                          paddingRight: "1rem"
                        }}
                      >
                        <Icon
                          style={{
                            fontSize: "24px",
                            color: project.completed ? "green" : "orange"
                          }}
                          className={`${
                            project.completed ? "check" : "clock outline"
                          }`}
                        />
                        {project.completed ? "completed" : "incomplete"}
                      </div>
                      <div>
                        <Header as="h4">{action.description}</Header>
                        <p>{action.notes}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </Card.Description>
            </Card.Content>
          )}
        </Card>
      </Segment>
    );
  }
}

export default ProjectCard;
