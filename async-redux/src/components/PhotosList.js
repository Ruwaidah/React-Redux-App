import React from "react";
import { connect } from "react-redux";
import Photo from "./Photo";
import InputForm from "./InputForm";

function PhotosList(props) {
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
        {props.hits ? (
          props.hits.length > 0 ? (
            props.hits.map(photo => <Photo photo={photo} />)
          ) : (
            <p>No Photos Found</p>
          )
        ) : null}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state.data.data);
  return state.data.data;
};
export default connect(
  mapStateToProps,
  {}
)(PhotosList);
