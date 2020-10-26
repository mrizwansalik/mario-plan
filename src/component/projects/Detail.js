import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from 'moment'


const Detail = (props) => {
  const { project, auth } = props;
  if(!auth.uid) return <Redirect to='/signin' />
  if (project) {
    return (
      <div className="container section project-detail">
        <div className="card z-depth-0">
          <div className="card-content">
            <h2 className="card-title">{project.title}</h2>
            <p>{project.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <h5>
              Posted by {project.authorFirstName} {project.authorLastName}
            </h5>
            <div>{moment(project.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading projects......</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(Detail);
