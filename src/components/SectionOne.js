import React from 'react';
import styled  from 'styled-components';
import { Board } from '../styledComponents/GlobalStyles';
import BS2 from '../img/BS2.jpg';

const BoardPlus = styled(Board)`
    background-image: url(${BS2});
`;

const SectionOne = () => {
    return (
        <BoardPlus>
            <div className="texty">
                <h1>START YOUR <br /> YOGA PRACTICE TODAY</h1>
                <h3>Unlimited yoga videos <br /> Qualified teachers <br /> For all levels</h3>
                <h3>Only <em>€1</em> for your first month</h3>
                <a href="#" target="_blank" rel="noopener noreferrer">SIGN UP NOW</a>
            </div>  
        </BoardPlus>
    )
}

export default SectionOne
