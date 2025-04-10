"use client";
import styled from "styled-components";
import { Sixtyfour_Convergence } from "next/font/google";

const sixtyfourConvergence = Sixtyfour_Convergence({
    weight: '400',
    style: 'normal',
    subsets: ['latin'],
    display: 'swap',
});

const NarutoHeaderDiv=styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1vh 1vw;
`;

const NarutoMovieH1=styled.h1`
    margin: auto;
    font-family: ${sixtyfourConvergence.style.fontFamily}, serif;
    font-optical-sizing: auto;
    font-size: calc(15px + 2vw);
`;
export default function Header() {
    return (
        <NarutoHeaderDiv>
            <NarutoMovieH1>Harvard Art Museums Exhibitions</NarutoMovieH1>
        </NarutoHeaderDiv>
    );
}