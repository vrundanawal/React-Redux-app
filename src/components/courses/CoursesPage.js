import React from "react";

// const CoursesPage = () => {
//  const course = {
//   title : ''
//  }
//   return <h2>Courses---Functional component</h2>;
// };

// export default CoursesPage;

class CoursesPage extends React.Component {
  state = {
    course: {
      title: "",
    },

    //bind the handleChange inside the constructor
    //this.handleChange = this.handleChange.bind(this);
  };

  // handleChange(event) {
  //   const course = { ...this.state.course, title: event.target.value };
  //   this.setState({ course: course });
  //   console.log(course);
  // }
  //using arrow function no need to bind
  handleChange = (event) => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course: course });
    //console.log(course);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(this.state.course.title);
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
      </form>
    );
  }
}
export default CoursesPage;
