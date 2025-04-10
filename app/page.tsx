"use client";
import { NarutoType } from "../interfaces/Naruto";
import Naruto from "../components/Naruto";
import styled from 'styled-components';
import {useEffect, useState} from "react";
import getExhibitions from "@/lib/getExhibitions";
const WrapperDiv=styled.div`
    width: 80vw;
    margin: auto;
`;

    // display: flex;
    // flex-direction: column;
export default function App(){
const [narutoData, setNarutoData] = useState<NarutoType[]>([]);

    useEffect(() => {
        
        async function fetchExhibitions() {
            const data = await getExhibitions();
            console.log(data);
            setNarutoData(data.records);
        }
        
        fetchExhibitions()
            .catch((e: Error) => console.log("There was the error: " + e));
    }, []);

    return (
        <WrapperDiv>
            
            <Naruto narutoData={narutoData}/>
        </WrapperDiv>
    )
}