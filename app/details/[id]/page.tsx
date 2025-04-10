"use client";
import { useEffect, useState } from "react";
import getExhibition from "../../../lib/getExhibition";
import { NarutoType } from "@/interfaces/Naruto";
import styled from 'styled-components';
import { Play } from "next/font/google";

const play = Play({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});

const WrapperDiv=styled.div`
    width: 80vw;
    margin: auto;
    display: flex;
    flex-direction: row;
    padding: 1vh 1vw;
    justify-content: space-between;
`;

const ImageDiv=styled.img`
    max-width:50%;
    height: 80vh;
    padding: 1vh 1vw;
`;

const InfoDiv=styled.div`
    width: 50%;
    height: 80vh;
    padding: 1vh 1vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const TitleH1=styled.h1`
    font-family: ${play.style.fontFamily}, serif;
    font-size: calc(8px + 1vw);
    font-style: normal;
`;

const TextP=styled.p`
    font-family: ${play.style.fontFamily}, serif;
    font-size: calc(1px + 1vw);
    font-style: normal;
`;

export default function DetailPage({ params }: { params: { id: string } }) {
    const [exhibition, setExhibition] = useState<NarutoType | null>(null);
    const [datestr, setDateStr] = useState<string | null>(null);
    useEffect(() => {
        console.log(params.id);
        async function fetchExhibition() {
            const data = await getExhibition(params.id);
            console.log(data);
            setExhibition(data);
            const dateObj = new Date(data.createdate);
            const friendlyTime = `${dateObj.getFullYear()}-${dateObj.getMonth() + 1}-${dateObj.getDate()} ${dateObj.getHours()}:${String(dateObj.getMinutes()).padStart(2, '0')}`;
            console.log(friendlyTime);
            setDateStr(friendlyTime);
        };
        fetchExhibition()
        .catch((e: Error) => console.log("There was the error: " + e));
    }, []);

    return (
        <>
        <WrapperDiv>
            <ImageDiv src={exhibition?.primaryimageurl} alt={exhibition?.title} />
            <InfoDiv>
                <TitleH1>{exhibition?.title}</TitleH1>
                <TextP>Begins on {datestr}</TextP>
                <TextP>{exhibition?.venues?.[0]?.name}</TextP>
                <TextP>{exhibition?.venues?.[0]?.address1}</TextP>
                <TextP>{exhibition?.venues?.[0]?.city}, {exhibition?.venues?.[0]?.state} {exhibition?.venues?.[0]?.zipcode}</TextP>
            </InfoDiv>
        </WrapperDiv>
        </>
    );
  }