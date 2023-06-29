import React from "react";
import {connect} from "react-redux";
import * as topicActions from "../../redux/actions/topicActions";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import TopicList from "./TopicList";

class TopicsPage extends React.Component {
  componentDidMount() {
    const {topics,authors,actions}=this.props;

    if(topics.length===0) {
      actions.loadTopics().catch(error => {
        alert("Loading topics failed"+error);
      });
    }

    if(authors.length===0) {
      actions.loadAuthors().catch(error => {
        alert("Loading authors failed"+error);
      });
    }
  }

  render() {
    return (
      <>
        <h2>Topics</h2>
        <TopicList topics={this.props.topics} />
      </>
    );
  }
}

TopicsPage.propTypes={
  authors: PropTypes.array.isRequired,
  topics: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    topics:
      state.authors.length===0
        ? []
        :state.topics.map(topic => {
          return {
            ...topic,
            authorName: state.authors.find(a => a.id===topic.authorId).name
          };
        }),
    authors: state.authors
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadTopics: bindActionCreators(topicActions.loadTopics,dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors,dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicsPage);
