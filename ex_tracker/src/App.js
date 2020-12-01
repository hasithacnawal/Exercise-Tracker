import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./components/AppNavbar";

import CreateExercise from "./components/create-exercise";
import CreateUser from "./components/create-user";
import EditExercises from "./components/edit-exercises";
import ExerciseList from "./components/exercises-list";

function App() {
  return (
    <Router>
      <AppNavbar />
      <br />
      <Route path="/" exact component={ExerciseList} />
      <Route path="/edit/:id" exact component={EditExercises} />
      <Route path="/create" exact component={CreateExercise} />
      <Route path="/user" exact component={CreateUser} />
    </Router>
  );
}

export default App;
