import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi"; //import the api

// export function createCourse(course) {
//   return { type: types.CREATE_COURSE, course: course };
// }

export function loadCourseSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses: courses };
}

//create a update course success
export function createCourseSuccess(course) {
  return { type: types.CREATE_COURSE_SUCCESS, course };
}

export function updateCourseSuccess(course) {
  return { type: types.UPDATE_COURSE_SUCCESS, course };
}

//thunks used for load courses with async call
export function loadCourses() {
  return function (dispatch) {
    //used by redux thunk middleware
    return courseApi
      .getCourses()
      .then((courses) => {
        dispatch(loadCourseSuccess(courses));
      })
      .catch((error) => {
        throw error;
      });
  };
}

//using thunk save the course
export function saveCourse(course) {
  // eslint-disable-next-line no-unused-vars
  return function (dispatch) {
    return courseApi
      .saveCourse(course)
      .then((savedCourse) => {
        course.id
          ? dispatch(updateCourseSuccess(savedCourse))
          : dispatch(createCourseSuccess(savedCourse));
      })
      .catch((error) => {
        throw error;
      });
  };
}
