"use client";
import { ExhibitionType } from "../interfaces/ExhibitionType";
import styled from "styled-components";
import Link from "next/link";
import { Play } from "next/font/google";

const play = Play({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});

const ExhibitionWrapperDiv = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
`;

const ExhibitionDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 20%;
    padding: 1%;
    margin: 1%;
`;

const ImageDiv = styled.img`
    max-width: 100%;
    height: 30vh;
`;

const LinkB = styled(Link)`
    text-decoration: none;
    font-family: ${play.style.fontFamily}, serif;
    font-size: calc(1px + 1vw);
    font-style: normal;
    color: black;
`;

export default function Exhibitions(props: {exhibitionData: ExhibitionType[]}){

    return(
        <ExhibitionWrapperDiv>
            {props.exhibitionData.map((exhibition) => (
                <ExhibitionDiv key={exhibition.title}>
                
                <ImageDiv src={exhibition.primaryimageurl} alt={exhibition.title}/>
                <LinkB href={`/details/${exhibition.id}`}>
                {exhibition.title}
                </LinkB>
                </ExhibitionDiv>
            ))}
            
        </ExhibitionWrapperDiv>
        
    )
}