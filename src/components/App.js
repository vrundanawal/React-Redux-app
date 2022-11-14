import React from "react";
import { Route, Switch } from "react-router-dom";
import AboutPage from "./about/AboutPage";
import HomePage from "./home/HomePage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import CoursesPage from "./courses/CoursesPage";

const App = () => {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/about" component={AboutPage}></Route>
        <Route exact path="/courses" component={CoursesPage}></Route>
        <Route component={PageNotFound}></Route>
      </Switch>
    </div>
  );
};

export default App;
