import React from "react";
import { connect } from "react-redux";
import { loadCourses } from "../../redux/actions/courseActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
//import { bindActionCreators } from "redux";

class ManageCoursePage extends React.Component {
  componentDidMount() {
    //destructuring
    const { courses, authors, loadCourses, loadAuthors } = this.props;
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
  }

  render() {
    return (
      <>
        <h2>Manage Course</h2>
      </>
    );
  }
}
//Proptypes
ManageCoursePage.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  //createCourse: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
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

// function mapDispatchToProps(dispatch) {
//   return {
//     //createCourse: (course) => dispatch(courseActions.createCourse(course)),
//     // actions: bindActionCreators(courseActions, dispatch), //mapDispatchToProps with bindActionCreators
//     actions: {
//       loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
//       loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
//     },
//   };
// }

//Implementing Object form of mapDispatchToProps
const mapDispatchToProps = {
  loadCourses: loadCourses,
  loadAuthors: loadAuthors,
};
export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
