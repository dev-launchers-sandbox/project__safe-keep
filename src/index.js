import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import Header from "./components/common/Header";
import PageBody from "./components/common/PageBody";

function App() {
  return (
    <div className="App">
      <Header />
      <PageBody>
        <br />
        <h1>Safe Keep</h1>
        <hr />
        <h3>For a Longhorn Trying to Succeed</h3>
        <p>
          Have you ever felt lost on the 40 acres? Needed help finding campus
          resources or getting connected to the right people? This is your one
          stop to recieving all of this and more! Click "Sign Up" to get started
          or "Log In" if you are already a member!
        </p>

        <button type="button">Sign Up</button>
        <button type="button">Log In</button>
      </PageBody>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
