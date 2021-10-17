import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
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
import { useGlobalContext } from "./reducer/context";
import { doc,onSnapshot } from "firebase/firestore";
import { database } from "./config/firebase-config";
import VisionTestResult from "./pages/results/visionTestResult";
import AuralTestResult from "./pages/results/auralTestResult";

const MainRouter = () => {
  const { dispatch,email } = useGlobalContext();

  useEffect(() => {
    const unSubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const { displayName, photoURL, email } = user.multiFactor.user;
        dispatch({
          type: "SIGN_IN_USER",
          payload: { userName: displayName, email, profileImg: photoURL },
        });
      }
    });
    return () => unSubscribe();
  }, [dispatch]);


  useEffect(() => {
    if (email) {
      const unsubscribe = onSnapshot(doc(database, "users", email), (doc) => {
        if(!doc.data())return;
        const { auralTestResults, visionTestResults } = doc?.data();
        dispatch({
          type: "SET_PREVIOUS_TESTS_DATA",
          payload: { auralTestResults, visionTestResults },
        });
      });
      return () => unsubscribe();
    }
  }, [email,dispatch]);

  return (
    <div className="inner-root">
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/loginreq" component={LoginReq} />
        <Route exact path="/eyetest" component={EyeTest} />
        <Route exact path="/auraltest" component={AuralTest} />
        <Route exact path="/results" component={Results} />
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
        <Route exact path="/vision-test/pdf" component={VisionTestResult} />
        <Route exact path="/aural-test/pdf" component={AuralTestResult} />
        <Redirect to="/" />
      </Switch>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default MainRouter;
