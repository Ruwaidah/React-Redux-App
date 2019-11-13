import React, { useState, useEffect } from "react";
import "./App.css";
import { Route } from "react-router-dom";

// Component
import HomePage from "./components/HomePage";
import Header from "./components/Header";

// actions
import { axiosAction } from "./actions/axiosAction";

// react-redux
import { connect } from "react-redux";

// App Function
function App(props) {
  const [text, setText] = useState("");
  console.log(text);
  console.log(props.data);

  useEffect(() => {
    props.axiosAction(text);
  }, [props.axiosAction]);

  // input Change
  const handleChange = event => {
    // console.log(event.target.value);
    setText(event.target.value);
    console.log(text);
  };

  const onSubmit = event => {
    event.preventDefault();
    console.log(text);
    props.axiosAction(text);
    setText("");
  };
  if (props.data.length <= 0) return <p>Loading</p>;
  return (
    <div className="App">
      <Route path="/" component={Header} />
      <Route
        exact
        path="/"
        render={() => (
          <HomePage
            handleChange={handleChange}
            onSubmit={onSubmit}
            text={text}
            data={props.data}
          />
        )}
      />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    data: state.data
  };
};

export default connect(
  mapStateToProps,
  { axiosAction }
)(App);
