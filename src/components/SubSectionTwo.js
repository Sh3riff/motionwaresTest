import React from 'react';
import { Section } from '../styledComponents/GlobalStyles';
import { SubSectionB1, SubSectionB2, SubSectionB3 } from "../Helper/SubSectionHelper"

const SubSectionTwo = () => {
    return (
        <Section>
            <h1 style={ {color: "#FD7170"} }>DEEPEN YOUR KNOWLEDGE</h1>
            <section className="oneline">
                <SubSectionB1 />
                <SubSectionB2 />
                <SubSectionB3 />
            </section>
            <div className="newplus">
                <a href="#" target="_blank" rel="noopener noreferrer">READ OUR MAGAZINE</a>
                <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 4v16m8-8H4"></path>
                </svg>
                
            </div>   
            
        </Section>
    )
}

export default SubSectionTwo
