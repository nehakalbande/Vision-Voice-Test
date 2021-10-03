import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./pages/Navbar";
// import Footer from "./pages/Footer";
import Footer from "./pages/Footer2";
import Home from "./pages/Home";
import EyeTest from "./pages/eye_test/Eye_test";
import Contact from "./pages/Contact/Contact";
import EyeTestStart from "./pages/eye_test/eye_test_start";
import AuralTest from "./pages/aural_test/aural_test";
import AuralSurvey from "./pages/aural_test/auralSurvey";
import AuralTestStart from "./pages/aural_test/aural_test_start";
import ScrollToTop from "./pages/ScrollToTop";
import EyeSurvey from "./pages/eye_test/eyeSurvey";
import Results from "./pages/Results";
import LoginReq from "./pages/LoginReq";
import firebase from "@firebase/app-compat";
class MainRouter extends React.Component {
  state = {
    user: {},
    error: null,
    authenticated: false,
    username: ''
  };
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({authenticated: true})
        this.setState({username: firebase.auth().currentUser.displayName})
      }
      else{
        this.setState({authenticated: false})
        this.setState({username: ''})
      }
    })

    fetch("http://localhost:5000", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          console.log(response.session);
          return response.session.user;
        }
      })
      .then((responseJson) => {
        this.setState({
          authenticated: true,
          user: responseJson.user,
        });
      })
      .catch((error) => {
        this.setState({
          authenticated: false,
          error: "Failed to authenticate user",
        });
      });
  }
  render() {
    return (
      <div className="inner-root">
        <Navbar
          authenticated={this.state.authenticated}
          handleNotAuthenticated={this._handleNotAuthenticated}
          username={this.state.username}
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/loginreq" component={LoginReq} />
          <Route exact path="/eyetest" component={EyeTest} />
          <Route exact path="/auraltest" component={AuralTest} />
          <Route exact path="/results" component={Results} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/auraltest/aural-survey" component={AuralSurvey} />
          <Route
            exact
            path="/auraltest/aural_test_start"
            component={AuralTestStart}
          />
          <Route
            exact
            path="/eyetest/vision-test-start"
            component={EyeTestStart}
          />
          <Route exact path="/eyetest/vision-survey" component={EyeSurvey} />
          <Route
            exact
            path="/auraltest/aural_test_start"
            component={AuralTestStart}
          />
        </Switch>
        <ScrollToTop />
        <Footer />
      </div>
    );
  }

  _handleNotAuthenticated = () => {
    this.setState({ authenticated: false });
  };
}

export default MainRouter;
