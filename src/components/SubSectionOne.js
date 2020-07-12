import React from 'react';
import { Section } from '../styledComponents/GlobalStyles';
import { SubSection1, SubSection2, SubSection3, SubSection4, SubSection5, SubSection6 } from "../Helper/SubSectionHelper"

const SubSectionOne = () => {
    return (
            <Section>
                <h1 style={ {color: "skyblue"} }>YOGA VIDEOS: OUR FAVORITES</h1>
                <section className="twolines">
                    <SubSection1 />
                    <SubSection2 />
                    <SubSection3 />
                    <SubSection4 />
                    <SubSection5 />
                    <SubSection6 />
                </section>
                <div className="newplus">
                    <a href="#" target="_blank" rel="noopener noreferrer">SHOW ME ALL VIDEOS</a>
                    <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 4v16m8-8H4"></path>
                    </svg>
                    
                </div>           
            </Section>
    )
}

export default SubSectionOne
