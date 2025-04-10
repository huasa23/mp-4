"use client";
import { NarutoType } from "../interfaces/Naruto";
import styled from "styled-components";
import Link from "next/link";
import { Play } from "next/font/google";

const play = Play({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});

const NarutoWrapperDiv = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
`;

const NarutoDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 20%;
    padding: 1%;
    margin: 1%;
`;

const LinkDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    justify-content: space-between;
    margin-top: 1%;
    width: 100%;
    border-top: 1px solid black;
`;

const ImageDiv = styled.img`
    max-width: 100%;
    height: 30vh;
`;
const TitleP = styled.p`

    text-decoration: none;
    font-family: "Play", serif;
    font-size: calc(1px + 1vw);
    font-style: normal;
    
`;
const ScoreP = styled.p`
    font-family: "Play", serif;
    font-size: calc(1px + 1vw);
    margin-right: 1vw;
`;
const LinkA = styled.a`
    text-decoration: none;
    font-family: "Play", serif;
    font-size: calc(1px + 1vw);
    font-style: normal;
    color: black;
`;
const LinkB = styled(Link)`
    text-decoration: none;
    font-family: ${play.style.fontFamily}, serif;
    font-size: calc(1px + 1vw);
    font-style: normal;
    color: black;
`;
export default function Naruto(props: {narutoData: NarutoType[]}){

    return(
        <NarutoWrapperDiv>
            {props.narutoData.map((naruto) => (
                <NarutoDiv key={naruto.title}>
                
                <ImageDiv src={naruto.primaryimageurl} alt={naruto.title}/>
                <LinkB href={`/details/${naruto.id}`}>
                {naruto.title}
                </LinkB>
                {/* <TitleP>{naruto.title}</TitleP> */}
                
                {/* <LinkDiv>
                    <ScoreP>Rating: {naruto.score}</ScoreP>
                    <LinkA href={naruto.url}>Profile</LinkA>
                    {naruto.trailer.url ? <LinkA href={naruto.trailer.url}>|Trailer</LinkA> : null}
                </LinkDiv> */}
                </NarutoDiv>
            ))}
            
        </NarutoWrapperDiv>
        
    )
}