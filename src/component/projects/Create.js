import React, { Component } from "react";
import { createProject } from "../../store/action/Actions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Create extends Component {
  state = {
    title: "",
    content: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubit = (e) => {
    e.preventDefault();
    // console.log(this.state)
    this.props.createProject(this.state);
    this.props.history.push('/')
  };

  render() {
   
    const { auth } = this.props
    if (!auth.uid) return <Redirect to='/signin' />

    return (
      <div className="container">
        <form onSubmit={this.handleSubit} className="white">
          <h5 className="grey-text text-darken-3">Create New Project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Content</label>
            <textarea
              type="text"
              id="content"
              className="materialize-textarea"
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (projects) => dispatch(createProject(projects)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Create);
