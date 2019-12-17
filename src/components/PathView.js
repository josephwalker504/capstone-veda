import React, { Component } from "react";
import { Route, withRouter, Redirect } from "react-router-dom";
import Login from "./Auth/LogIn";
import Reg from "./Auth/Reg";
import MealForm from "./Meal/MealForm";
import MealEditForm from "./Meal/MealEditForm";
import MealList from "./Meal/MealList";

export default class PathView extends Component {
  isAuthenticated = () => localStorage.getItem("credentials") !== null;

  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={props => {
            return <Login setUser={this.props.setUser} {...props} />;
          }}
        />
        <Route
          exact
          path="/register"
          render={props => {
            return <Reg setUser={this.props.setUser} {...props} />;
          }}
        />
        <Route
          exact
          path="/meals"
          render={props => {
            if (this.isAuthenticated()) {
              return <MealList {...props} />;
            } else {
              return <Redirect to="/" />;
            }
          }}
        />
        <Route
          path="/meal"
          render={props => {
            return <MealForm setUser={this.props.setUser} {...props} />;
          }}
        />
        <Route
          path="/meals/:mealId(\d+)/edit"
          render={props => {
            return <MealEditForm {...props} />;
        }}
        />
      </React.Fragment>
    );
  }
}
