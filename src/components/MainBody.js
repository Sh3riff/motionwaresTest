import React from 'react';
import { BodyX } from '../styledComponents/GlobalStyles';
import A1 from '../img/A1.jpg';
import A2 from '../img/A2.jpg';
import A3 from '../img/A3.jpg';

const MainBody = () => {
    return (
        <BodyX>
            <div className="intro">
                <blockquote>The House of Yoga is a true online sanctuary.</blockquote>
                <p>Holland Herand</p>
            </div>
            <div className="container">
                <div className="pixcomplement">
                    <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                    <h3>UNLIMITED ACCESS</h3>
                    <div className="line"></div>
                </div>
                <img src={A1} alt="dummy picture"/>
                <p>The House of Yoga offers guided yoga, meditation, pranayama practice and 
                    satsang videos - in various styles and class times. All videos are made 
                    with lots of love and care, because they’re not just ‘one time’ practices.
                    Repetition is key to go deeper and work on a sustainable practice.</p>
            </div>
            <div className="container">
                <div className="pixcomplement">
                    <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                    <h3>QUALIFIED TEACHERS</h3>
                    <div className="line"></div>
                </div>
                <img src={A2} alt="dummy picture"/>
                <p>We strive to capture the essence of the traditional yoga teachings and 
                        connect you with some of the most inspiring teachers from around the world. 
                        All in the comfort of your own living room - or wherever you are.</p>
            </div>
            <div className="container">
                <div className="pixcomplement">
                    <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path>
                    </svg>
                    <h3>FOR ALL LEVELS</h3>
                    <div className="line"></div>
                </div>
                <img src={A3} alt="dummy picture"/>
                <p>Our mission is to make authentic lineage-based teachings accessible to 
                        everyone, regardless of your experience, geographical location or background.
                         Whether you are a beginner or an experienced practitioner, this is the place 
                         for real and authentic yoga – for all levels.</p>
            </div>
        </BodyX>
    )
}

export default MainBody
