import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi"; //import the api

export function createCourse(course) {
  return { type: types.CREATE_COURSE, course: course };
}

export function loadCourseSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses: courses };
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
