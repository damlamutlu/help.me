import React from "react";
import "./Card.css";

const Card = (props) => {
    let cssClassName = `${props.className} card_view`;
    return(
        <div className={cssClassName}>
            {props.children}
        </div>
    );

};
export default Card;