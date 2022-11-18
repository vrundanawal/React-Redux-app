import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadCourses, saveCourse } from "../../redux/actions/courseActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import CourseForm from "./CourseForm";
import { newCourse } from "../../../tools/mockData";

function ManageCoursePage({
  courses,
  authors,
  loadCourses,
  loadAuthors,
  saveCourse,
  history, //pass the history as a props
  ...props
}) {
  //destructuring
  // const { courses, authors, loadCourses, loadAuthors }  = props;

  const [course, setCourse] = useState({ ...props.course });
  const [errors, setErrors] = useState({});
  useEffect(() => {
    if (courses.length === 0) {
      //for loading the courses
      loadCourses().catch((error) => {
        alert("Loading courses failed" + error);
      });
    } else {
      setCourse({ ...props.course });
    }
    if (authors.length === 0) {
      //for loading the authors
      loadAuthors().catch((error) => {
        alert("Loading authors failed" + error);
      });
    }
  }, [props.course]);
  //handle change on input
  function handleChange(event) {
    const { name, value } = event.target;
    setCourse((prevCourse) => ({
      ...prevCourse,
      [name]: name === "authorId" ? parseInt(value, 10) : value,
    }));
  }

  function handleSave(event) {
    event.preventDefault();
    saveCourse(course).then(() => {
      history.pushState("/courses");
    });
  }

  return (
    <CourseForm
      course={course}
      errors={errors}
      authors={authors}
      onChange={handleChange}
      onSave={handleSave}
    />
  );
}

//Proptypes
ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  saveCourse: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export function getCourseBySlug(courses, slug) {
  //find the course which is requested
  return courses.find((course) => course.slug === slug) || null;
}

//This function determines what state is passed to our component via props
function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug;
  const course =
    slug && state.courses.length > 0
      ? getCourseBySlug(state.courses, slug)
      : newCourse;
  return {
    course: course,
    courses: state.courses,
    authors: state.authors,
  };
}

//Implementing Object form of mapDispatchToProps
const mapDispatchToProps = {
  loadCourses: loadCourses,
  loadAuthors: loadAuthors,
  saveCourse: saveCourse,
};
export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
