import React from "react";
import {Card, Title, Desc, Date,Image,Copyright} from "../styles/CardStyles";



const NasaCard = props => {
    return (
        <Card>
            <Title>{props.title}</Title>
            <Date>Today is {props.date}</Date>
            <Desc>{props.explanation}</Desc>
            <Image alt={props.title} src={props.imgUrl}></Image>
            <Copyright>Copyright: {props.copyright}</Copyright>
        </Card>
    );
};

export default NasaCard;

