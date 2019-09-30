import React from "react";
import styled from "styled-components";

import Color from "./ColorVariables";
import {AnimateBottom,AnimateFadeIn,AnimateImage} from "../styles/AnimationStyles";


export const Card = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h1`
    color: ${Color.blue};
    font-size: 40px;
    text-transform: uppercase;
    text-align: center;

    animation: ${AnimateBottom} 2.5s ease-in-out;
`;

export const Date = styled.p`
    background-color: ${Color.lightTint};
    padding: 20px;
    font-size: 20px;
    color: #77233A;
`;


export const Desc = styled.p`
    font-size: 20px;
    line-height: 1.5;
    color: ${Color.lightGreen};
    animation: ${AnimateFadeIn} 4s ease-in-out;
`;

export const Image = styled.img`
    max-width: 100%;
    max-height: 800px;
    border: 5px solid ${Color.blue};
    border-radius: 10px;

    animation: ${AnimateImage} 4s ease-in;
    animation-fill-mode: backwards;
`;

export const Copyright = styled.p`
    padding: 20px;
    color: ${Color.lightBlue};
    font-size: 20px;

`;
