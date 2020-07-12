import React from 'react';
import styled  from 'styled-components';
import { SubContainer, SubContainerText, SubContainerWrap } from '../styledComponents/GlobalStyles';
import A2 from '../img/A2.jpg';
import BS1 from '../img/BS1.jpg';
import BS4 from '../img/BS4.jpg';
import Pro4 from '../img/Pro4.jpg';
import Pro5 from '../img/Pro5.jpg';
import Pro6 from '../img/Pro6.jpg';
import Z1 from '../img/Z1.jpg';
import Z2 from '../img/Z2.jpg';
import Z3 from '../img/Z3.jpg';

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
const SubB1 = styled(SubContainer)`
    background-image: url(${Z1});
`;
const SubB2 = styled(SubContainer)`
    background-image: url(${Z2});
`;
const SubB3 = styled(SubContainer)`
    background-image: url(${Z3});
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
                <h3>SHORT ASHTANGA PRACTICE</h3>
                <p>An asana practice that includes a sequence of dynamic yoga postures, taken from the Ashtanga Yoga Method. This is a compact and invigorating practice, suitable for all levels.</p>                
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
                <h3>MORNING GLORY</h3>
                <p>An active vinyasa flow practice that is a great way to begin your day; awakening your body and allowing your energy to flow through you in a harmonious way. You will focus a lot on connecting to your inner ground, developing an intimate sense of grounding and stability.</p>
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
                <h3>THE DEEPER ASPECT OF YOGA</h3>
                <p>What does yoga mean, really? Eddie Stern shares his view on enlightenment, modern-day yoga teachers, Pattabhi Jois, and getting to know yourself a little deeper.</p>
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
                <h3>THREE DOORS MEDITATION</h3>
                <p>A guided meditation on the body, speech, and mind, rooted in the Tibetan Bon Buddhist tradition. This practice helps to cultivate awareness, inner silence, and warmth.</p>
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
                <h3>OUT OF BALANCE? FEELING DEPLETED</h3>
                <p>In this talk the kapha dosha, (one of the 3 primary constitutions in the Ayurvedic system) is explained. The two elements in kapha dosha are earth and water. In this talk, you will begin to understand the qualities (within yourself or others) that reflect these elements.</p>
            </SubContainerText>
        </SubContainerWrap>
    )
}
export const SubSectionB1 = () => {
    return (
        <SubContainerWrap>
            <SubB1>
                            
            </SubB1>
            <SubContainerText>
                <h3> <em>SLICE:</em> TWO MONKS</h3>
                <p>Ah, attachment. One of those pesky parts of our human experience. We often assume attachment means that we clamp to material objects, certain people or familiar places. But we can also get trapped by our own dogmas and rules. This ‘tunnel vision’ can impact us in unconscious or troubling ways.</p>
            </SubContainerText>
        </SubContainerWrap>
    )
}
export const SubSectionB2 = () => {
    return (
        <SubContainerWrap>
            <SubB2>
                            
            </SubB2>
            <SubContainerText>
                <h3> <em>SLICE:</em> DISCOVER: MEDITATION MYTHS</h3>
                <p>The practice of meditation has become much more mainstream in the Western culture over the last forty years. It seems like it’s practiced by everyone, from politicians, military personnel,prisoners, artists, scientists, teachers and business executives.</p>
            </SubContainerText>
        </SubContainerWrap>
    )
}
export const SubSectionB3 = () => {
    return (
        <SubContainerWrap>
            <SubB3>                            
            </SubB3>
            <SubContainerText>
                <h3> <em>POETRY:</em> “THE HOPE OF LOVING” – BY MEISTER ECKHART</h3>
                <p>What keeps us alive, what allows us to endure?I think it is the hope of loving,or being loved.</p>
            </SubContainerText>
        </SubContainerWrap>
    )
}
