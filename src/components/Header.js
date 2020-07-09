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
                <HeaderHelper styler="init" setStyle = {setNavState}  />
            </ HeaderX> :
            <HeaderX>
                <HeaderHelper styler="init" setStyle = {setNavState}  />
            </ HeaderX>
        }
        </>
    )
}

export default Header
