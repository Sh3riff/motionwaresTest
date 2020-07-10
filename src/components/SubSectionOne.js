import React from 'react';
import { Section } from '../styledComponents/GlobalStyles';
import { SubSection1, SubSection2, SubSection3, SubSection4, SubSection5, SubSection6 } from "../Helper/SubSectionHelper"

const SubSectionOne = () => {
    return (
            <Section>
                <h1 style={ {color: "blue"} }>YOGA VIDEOS: OUR FAVORITES</h1>
                <section>
                    <SubSection1 />
                    <SubSection2 />
                    <SubSection3 />
                    <SubSection4 />
                    <SubSection5 />
                    <SubSection6 />
                </section>            
            </Section>
    )
}

export default SubSectionOne
