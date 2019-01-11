import React from 'react';
import { Segment, Header, Card, Icon } from "semantic-ui-react";

const ProjectList = ({ history, projects}) => {
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
              <Card
                raised color="teal" key={project.id}
                onClick={() => history.push(`/projects/${project.id}`)}
              >
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
 
export default ProjectList;