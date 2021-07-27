import React from "react";
import ContainerBig from '../components/ContainerBig/ContainerBig'
import Navbar from "../components/Navbar";
import { StoryProvider } from '../components/Story/StoryContext';
import { CharacterProvider } from '../components/Story/CharacterContext';
import StoryPrompt from '../components/StoryPrompt';
import ChoiceBox from '../components/ChoiceBox';
import StoryPic from '../components/StoryPic/StoryPic'




function Story() {
    return (
        <ContainerBig>
            <Navbar />
            <StoryPic />
            <CharacterProvider>
                <StoryProvider>
                    <StoryPrompt />
                    <ChoiceBox />
                </StoryProvider>
            </CharacterProvider>
            <a className="btn" href="/quiz">try quiz</a>
        </ContainerBig>   
    )
}

export default Story
