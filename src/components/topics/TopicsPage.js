import React from "react";
import {connect} from "react-redux";
import * as topicActions from "../../redux/actions/topicActions";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";

class TopicsPage extends React.Component {
  state={
    topic: {
      title: ""
    }
  };

  handleChange=event => {
    const topic={...this.state.topic,title: event.target.value};
    this.setState({topic});
  };

  handleSubmit=event => {
    event.preventDefault();
    this.props.actions.createTopic(this.state.topic);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Topics</h2>
        <h3>Add Topic</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.topic.title}
        />

        <input type="submit" value="Save" />
        {this.props.topics.map(topic => (
          <div key={topic.title}>{topic.title}</div>
        ))}
      </form>
    );
  }
}

TopicsPage.propTypes={
  topics: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    topics: state.topics
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(topicActions,dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicsPage);
