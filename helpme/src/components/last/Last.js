import React from "react";
import { useNavigate } from "react-router-dom";
import LastParagraph from "./LastParagraph";
import "./Last.css";

const Last = () => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate("/welcome");
  };
  return (
    <div className="last">
      <h1>Her şey tamam !</h1>
      <img
        style={{ width: "20%" }}
        src="/images/help.me_logo.jpg"
        alt="Logo"
        onClick={onClickHandler}
      />
      <LastParagraph />
    </div>
  );
};
export default Last;
