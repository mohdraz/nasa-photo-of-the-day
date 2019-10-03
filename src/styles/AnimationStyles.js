import React from "react";
import styled, {keyframes} from "styled-components";
import Color from "./ColorVariables";

export  const AnimateBottom = keyframes`
    from {
        transform: translateY(500px);
        background-color: ${Color.blue};
        color: white;
        padding: 20px;
    }

    to {
        transform: translateY(0);
    }
`;

export const AnimateFadeIn = keyframes`
    from {opacity: 0}
    to {opacity: 1}
`;

export const AnimateImage = keyframes`
        0% {
            opacity: 0;
        }

        50% {
            opacity: .5;
        }

        100% {
            opacity: 1;
        }
`;