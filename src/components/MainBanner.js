import React from 'react';
import vid from '../img/yoga.mp4';
import { ShowBox } from '../styledComponents/GlobalStyles';

const MainBanner = () => {
    return (
        <ShowBox>
            <video autoPlay="autoplay" loop="loop" muted>
                <source src={vid} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <div className="textOver">
                <h1>SUMMER OFFER</h1>
                <h3>Let's celebrate summer with this special offer:</h3>
                <h3>Get 1 year for <em>€35,94 (50% off)</em>.</h3>
                <a href="#" target="_blank" rel="noopener noreferrer">SIGN UP NOW</a>
            </div>
        </ShowBox>
    )
}

export default MainBanner
