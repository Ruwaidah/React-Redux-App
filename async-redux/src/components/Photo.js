import React from "react";
import Commints from "../photos/commints.png";
import Downloads from "../download.png";
import Likes from "../likes.jpg";
import Favorites from "../favorite.png";
import User from "../photos/user.jpg";

export default function Photo(props) {
  return (
    <div className="Photo">
      {/* <div className="user">
        {props.photo.userImageURL ? (
          <img src={props.photo.userImageURL} alt="userimage" width="40px" />
        ) : null}
        <p>
          <img src={User} width="30px" alt="User" /> {props.photo.user}
        </p>
      </div> */}
      <img
        alt="image"
        src={props.photo.webformatURL}
        width="300px"
        height="250px"
      />
      <div className="colifado">
        <div className="text">
          <img src={Commints} alt="Commints" width="30px" />
          <span className="span1">{props.photo.comments}</span>
        </div>
        <div className="text">
          <img src={Downloads} alt="Downloads" width="30px" />{" "}
          <span>{props.photo.downloads}</span>
        </div>
        <div className="text">
          <img src={Favorites} alt="Favorites" width="30px" />{" "}
          <span>{props.photo.favorites}</span>
        </div>
        <div className="text">
          <img src={Likes} width="30px" alt="Likes" />{" "}
          <span>{props.photo.likes}</span>
        </div>
      </div>
    </div>
  );
}
