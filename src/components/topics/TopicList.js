import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const TopicList=({topics}) => (
  <table className="table">
    <thead>
      <tr>
        <th />
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {topics.map(topic => {
        return (
          <tr key={topic.id}>
            <td>
              {/*<a
                className="btn btn-light"
                href={"http://pluralsight.com/topics/"+topic.slug}
              >
                Watch
              </a>*/}
              {/*<Link to={"/topic/"+topic.slug}
                className="btn btn-light"

              >
                Watch
              </Link>*/}
            </td>
            <td>
              <Link to={"/topic/"+topic.slug}>{topic.title}</Link>
            </td>
            <td>{topic.authorName}</td>
            <td>{topic.category}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

TopicList.propTypes={
  topics: PropTypes.array.isRequired
};

export default TopicList;
