import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CourseList from "./CourseList";

class CoursesPage extends React.Component {
  componentDidMount() {
    this.props.actions.loadCourses().catch((error) => {
      alert("Loading courses failed" + error);
    });
  }

  render() {
    return (
      <>
        <h2>Courses</h2>
        <CourseList courses={this.props.courses} />
      </>
    );
  }
}
//Proptypes
CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  //createCourse: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
};
//This function determines what state is passed to our component via props
function mapStateToProps(state) {
  return {
    courses: state.courses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    //createCourse: (course) => dispatch(courseActions.createCourse(course)),
    // actions: bindActionCreators(courseActions, dispatch), //mapDispatchToProps with bindActionCreators
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
