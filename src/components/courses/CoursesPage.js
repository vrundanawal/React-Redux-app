import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";

class CoursesPage extends React.Component {
  state = {
    course: {
      title: "",
    },
  };

  handleChange = (event) => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course: course });
    //console.log(course);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.course);

    this.props.dispatch(courseActions.createCourse(this.state.course));
    //alert(this.state.course.title);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          value={this.state.course.title}
          onChange={this.handleChange}
        />
        <input type="submit" value="Save" />
        {/* <pre>{JSON.stringify(this.props.courses)}</pre> */}
        {this.props.courses.map((course) => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    );
  }
}
//Proptypes
CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};
//This function determines what state is passed to our component via props
function mapStateToProps(state) {
  return {
    courses: state.courses,
  };
}

export default connect(mapStateToProps)(CoursesPage);
