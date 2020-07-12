import React, { useState } from 'react';
import { HeaderX } from '../styledComponents/GlobalStyles';
import { HeaderHelper } from '../Helper';

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)
    
    const setNavState = () => setIsNavOpen(!isNavOpen)
    return (
        <>
         { (!isNavOpen) ? 
            <HeaderX init>
                <HeaderHelper setStyle = {setNavState}  />
            </ HeaderX> :
            <HeaderX>
                <HeaderHelper setStyle = {setNavState}  />
            </ HeaderX>
        }
        </>
    )
}

export default Header
