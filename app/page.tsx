"use client";
import { ExhibitionType } from "../interfaces/ExhibitionType";
import Exhibitions from "../components/Exhibitions";
import styled from 'styled-components';
import {useEffect, useState} from "react";
import getExhibitions from "@/lib/getExhibitions";
const WrapperDiv=styled.div`
    width: 80vw;
    margin: auto;
`;

export default function App(){
    const [exhibitionData, setExhibitionData] = useState<ExhibitionType[]>([]);

    useEffect(() => {
        
        async function fetchExhibitions() {
            const data = await getExhibitions();
            setExhibitionData(data.records);
        }
        
        fetchExhibitions()
            .catch((e: Error) => console.log("There was the error: " + e));
    }, []);

    return (
        <WrapperDiv>
            <Exhibitions exhibitionData={exhibitionData}/>
        </WrapperDiv>
    )
}