import React, { Component } from "react";
import { Route, withRouter, Redirect } from "react-router-dom";
import Login from "./Auth/LogIn";
import Reg from "./Auth/Reg";
import MealForm from "./Meal/MealForm";
import MealEditForm from "./Meal/MealEditForm";
import MealList from "./Meal/MealList";
import PottyForm from "./Potty/PottyForm";
import PottyEditForm from "./Potty/PottyEditForm";
import SleepForm from "./Sleep/SleepForm";
import ChildForm from "./Child/ChildForm";
import ChildList from "./Child/ChildList";
import ChildEditForm from "./Child/ChildEditForm";
import PottyList from "./Potty/PottyList";


export default class PathView extends Component {
  isAuthenticated = () => localStorage.getItem("credentials") !== null;
  //  setUser = () => {
  //    localStorage.setItem("userId", 1)
  //   }

  render() {
    return (
      <React.Fragment>
       <Route
          exact
          path="/"
          render={props => {
            if (this.isAuthenticated())
           {return <MealList />;
          } else {
            return <Login setUser={this.props.setUser} {...props} />;
          }
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
              
              return <Redirect to="meals" />;
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

<Route
          path="/potty"
          render={props => {
            return <PottyForm setUser={this.props.setUser} {...props} />;
          }}
        />

<Route
          path="/pottys/:pottyId(\d+)/edit"
          render={props => {
            return <PottyEditForm {...props} />;
        }}
        />

<Route
          exact
          path="/pottys"
          render={props => {
            return <PottyList setUser={this.props.setUser} {...props} />;
          }}
        />

<Route
          path="/sleep"
          render={props => {
            return <SleepForm setUser={this.props.setUser} {...props} />;
          }}
        />
        <Route
          path="/child"
          render={props => {
            return <ChildForm setUser={this.props.setUser} {...props} />;
          }}
        />

<Route
          exact
          path="/children"
          render={props => {
            return <ChildList setUser={this.props.setUser} {...props} />;
          }}
        />

<Route
          path="/children/:childId(\d+)/edit"
          render={props => {
            return <ChildEditForm setUser={this.props.setUser} {...props} />;
        }}
        />




      </React.Fragment>
    );
  }
}
