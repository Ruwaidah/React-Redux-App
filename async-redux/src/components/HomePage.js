import React from "react";
import { connect } from "react-redux";
import Photo from "./Photo";
import InputForm from "./InputForm";

function HomePage(props) {
  // console.log(props.data.data.hits);
  // console.log(props.handleChange);
  return (
    <div className="allphotos">
      <div className="input-form">
        <InputForm
          handleChange={props.handleChange}
          onSubmit={props.onSubmit}
          text={props.text}
        />
      </div>
      <div className="photos">
        {props.data.data.hits ? (
          props.data.data.hits.length > 0 ? (
            props.data.data.hits.map(photo => <Photo photo={photo} />)
          ) : (
            <p>No Photos Found</p>
          )
        ) : null}
      </div>
    </div>
  );
}

export default connect(
  state => state,
  {}
)(HomePage);
