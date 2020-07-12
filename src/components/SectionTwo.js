import React, { useState } from 'react';
import styled  from 'styled-components';
import { Board } from '../styledComponents/GlobalStyles';
import { ProfileSVG, GlobeSVG, LoveSVG, FacebookSVG, PlusSVG } from "./SVG";
import C1 from '../img/C1.jpg';

const BoardPlus = styled(Board)`
    background-image: url(${C1});
`;

const SectionTwo = () => {
    
    const [hoverz, setHoverz] = useState({
        first: false,
        second: false,
        third: false
    })
    const mouseIn = (param) => setHoverz( {...hoverz, [param]: true} )
    const mouseOut = (param) => setHoverz( {...hoverz, [param]: false} )
    return (
        <BoardPlus>
            <div className="texty">
                <h1>JOIN OUR <br /> COMMUNITY</h1>
                <div className="iconers">
                    {(!hoverz.first) ?
                        <div onMouseOver={() => mouseIn("first")}>
                            <ProfileSVG />
                            <h1>17,300</h1>
                            <p>Yogis</p>
                        </div>
                        :
                        <div style={ {backgroundColor: "#FD7170"} } onMouseOut={() => mouseOut("first")}>
                            <ProfileSVG />
                            <h1>JOIN US</h1>
                            <p>Today</p>
                        </div>
                    }
                    {(!hoverz.second) ?
                        <div onMouseOver={() => mouseIn("second")}>
                            <GlobeSVG />
                            <h1>52</h1>
                            <p>Countries</p>
                        </div>
                        :
                        <div style={ {backgroundColor: "gold"} } onMouseOut={() => mouseOut("second")}>
                            <GlobeSVG />
                            <h1>JOIN US</h1>
                            <p>Today</p>
                        </div>
                    }
                    {(!hoverz.third) ?
                        <div onMouseOver={() => mouseIn("third")}>
                            <LoveSVG />
                            <h1 style={ {visibility: "hidden"} }>A</h1>
                            <p style={ {visibility: "hidden"} }>B</p>
                        </div>
                        :
                        <div style={ {backgroundColor: "skyblue"} } onMouseOut={() => mouseOut("third")}>
                            <FacebookSVG />
                            <h1>LIKE US</h1>
                            <p>on facebook</p>
                        </div>
                    }
                </div>
                <h3>Subscribe to our 'once in a while newsletter'</h3>
                <div className="dummyform">
                    <input type="text" name="text" id="text" placeholder="Your email"/>
                    <span><PlusSVG /></span>
                </div>
                <a href="#" target="_blank" rel="noopener noreferrer">SIGN UP NOW</a>
            </div>  
        </BoardPlus>
    )
}

export default SectionTwo
