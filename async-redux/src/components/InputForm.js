import React from "react";

function InputForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <label>
        Search:{" "}
        <input
          placeholder="searchPhotos"
          onChange={props.handleChange}
          value={props.text}
        />
      </label>
      <button>Search</button>
    </form>
  );
}

export default InputForm;
