import React from "react";

const NasaCard = props => {
    return (
        <div>
            <h1 className="title">{props.title}</h1>
            <p>{props.date}</p>
            <p>{props.explanation}</p>
            <img className="img" alt={props.title} src={props.imgUrl} />
            <p>Copyright: {props.copyright}</p>
        </div>
    );
};

export default NasaCard;

