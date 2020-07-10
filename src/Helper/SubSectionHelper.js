import React from 'react';
import styled  from 'styled-components';
import { SubContainer, SubContainerText, SubContainerWrap } from '../styledComponents/GlobalStyles';
import A2 from '../img/A2.jpg';
import BS1 from '../img/BS1.jpg';
import BS4 from '../img/BS4.jpg';
import Pro4 from '../img/Pro4.jpg';
import Pro5 from '../img/Pro5.jpg';
import Pro6 from '../img/Pro6.jpg';

const Sub1 = styled(SubContainer)`
    background-image: url(${A2});
`;
const Sub2 = styled(SubContainer)`
    background-image: url(${BS1});
`;
const Sub3 = styled(SubContainer)`
    background-image: url(${BS4});
`;
const Sub4 = styled(SubContainer)`
    background-image: url(${Pro4});
`;
const Sub5 = styled(SubContainer)`
    background-image: url(${Pro5});
`;
const Sub6 = styled(SubContainer)`
    background-image: url(${Pro6});
`;

export const SubSection1 = () => {
    return (
        <SubContainerWrap>
            <Sub1>
                <div className="first">
                    <img src={A2} />
                    <p>Teacher <br/>JOHN DOE<br/>Style<br/>FREE YOGA</p>
                </div>
                <div className="second">
                    <p>Level <br/>ALL LEVELS<br/>Duration<br/>30 MINS</p>
                </div>            
            </Sub1>
            <SubContainerText>
                <h3>STABILIZE & GROUND</h3>
                <p>A vinyasa flow class focused on grounding. With this practice, you will become more present and establish a strong connection to the Earth. The focus is on hip openers, standing postures and forward folds.</p>
            </SubContainerText>
        </SubContainerWrap>
    )
}
export const SubSection2 = () => {
    return (
        <SubContainerWrap>
            <Sub2>
                <div className="first">
                    <img src={BS1} />
                    <p>Teacher <br/>JOHN DOE<br/>Style<br/>FREE YOGA</p>
                </div>
                <div className="second">
                    <p>Level <br/>ALL LEVELS<br/>Duration<br/>30 MINS</p>
                </div>            
            </Sub2>
            <SubContainerText>
                <h3>STABILIZE & GROUND</h3>
                <p>A vinyasa flow class focused on grounding. With this practice, you will become more present and establish a strong connection to the Earth. The focus is on hip openers, standing postures and forward folds.</p>
            </SubContainerText>
        </SubContainerWrap>
    )
}
export const SubSection3 = () => {
    return (
        <SubContainerWrap>
            <Sub3>
                <div className="first">
                    <img src={BS4} />
                    <p>Teacher <br/>JOHN DOE<br/>Style<br/>FREE YOGA</p>
                </div>
                <div className="second">
                    <p>Level <br/>ALL LEVELS<br/>Duration<br/>30 MINS</p>
                </div>            
            </Sub3>
            <SubContainerText>
                <h3>STABILIZE & GROUND</h3>
                <p>A vinyasa flow class focused on grounding. With this practice, you will become more present and establish a strong connection to the Earth. The focus is on hip openers, standing postures and forward folds.</p>
            </SubContainerText>
        </SubContainerWrap>
    )
}
export const SubSection4 = () => {
    return (
        <SubContainerWrap>
            <Sub4>
                <div className="first">
                    <img src={Pro4} />
                    <p>Teacher <br/>JOHN DOE<br/>Style<br/>FREE YOGA</p>
                </div>
                <div className="second">
                    <p>Level <br/>ALL LEVELS<br/>Duration<br/>30 MINS</p>
                </div>            
            </Sub4>
            <SubContainerText>
                <h3>STABILIZE & GROUND</h3>
                <p>A vinyasa flow class focused on grounding. With this practice, you will become more present and establish a strong connection to the Earth. The focus is on hip openers, standing postures and forward folds.</p>
            </SubContainerText>
        </SubContainerWrap>
    )
}
export const SubSection5 = () => {
    return (
        <SubContainerWrap>
            <Sub5>
                <div className="first">
                    <img src={Pro5} />
                    <p>Teacher <br/>JOHN DOE<br/>Style<br/>FREE YOGA</p>
                </div>
                <div className="second">
                    <p>Level <br/>ALL LEVELS<br/>Duration<br/>30 MINS</p>
                </div>            
            </Sub5>
            <SubContainerText>
                <h3>STABILIZE & GROUND</h3>
                <p>A vinyasa flow class focused on grounding. With this practice, you will become more present and establish a strong connection to the Earth. The focus is on hip openers, standing postures and forward folds.</p>
            </SubContainerText>
        </SubContainerWrap>
    )
}
export const SubSection6 = () => {
    return (
        <SubContainerWrap>
            <Sub6>
                <div className="first">
                    <img src={Pro6} />
                    <p>Teacher <br/>JOHN DOE<br/>Style<br/>FREE YOGA</p>
                </div>
                <div className="second">
                    <p>Level <br/>ALL LEVELS<br/>Duration<br/>30 MINS</p>
                </div>            
            </Sub6>
            <SubContainerText>
                <h3>STABILIZE & GROUND</h3>
                <p>A vinyasa flow class focused on grounding. With this practice, you will become more present and establish a strong connection to the Earth. The focus is on hip openers, standing postures and forward folds.</p>
            </SubContainerText>
        </SubContainerWrap>
    )
}
