import React from "react";
import "./Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import MainParagraph from "./MainParagraph.js";
import MainSentence from "./MainSentence";

const Main = () => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate("/questions");
  };

  return (
    <div className="main">
      <img className="main_image" src="/images/help.me_logo.jpg" alt="Logo" />
      <MainParagraph />
      <div className="main_sentence">
        <MainSentence />
        <FontAwesomeIcon
          icon={faArrowRight}
          className="main_sentence_arrow"
          onClick={onClickHandler}
          color="#e5cdba"
        />
      </div>
    </div>
  );
};

export default Main;
