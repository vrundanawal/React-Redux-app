import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadCourses } from "../../redux/actions/courseActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import PropTypes from "prop-types";

function ManageCoursePage({ courses, authors, loadCourses, loadAuthors }) {
  //destructuring
  // const { courses, authors, loadCourses, loadAuthors }  = props;
  useEffect(() => {
    if (courses.length === 0) {
      //for loading the courses
      loadCourses().catch((error) => {
        alert("Loading courses failed" + error);
      });
    }
    if (authors.length === 0) {
      //for loading the authors
      loadAuthors().catch((error) => {
        alert("Loading authors failed" + error);
      });
    }
  }, []);
  return (
    <>
      <h2>Manage Course</h2>
    </>
  );
}

//Proptypes
ManageCoursePage.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
};
//This function determines what state is passed to our component via props
function mapStateToProps(state) {
  return {
    courses: state.courses,
    authors: state.authors,
  };
}

//Implementing Object form of mapDispatchToProps
const mapDispatchToProps = {
  loadCourses: loadCourses,
  loadAuthors: loadAuthors,
};
export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
