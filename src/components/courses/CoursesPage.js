import React from "react";

// const CoursesPage = () => {
//  const course = {
//   title : ''
//  }
//   return <h2>Courses---Functional component</h2>;
// };

// export default CoursesPage;

class CoursesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      course: {
        title: "",
      },
    };
  }

  handleChange(event) {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course: course });
  }

  render() {
    return (
      <form>
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
