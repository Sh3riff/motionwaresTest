import React from 'react';
import GlobalStyles from './styledComponents/GlobalStyles';
import { Header, MainBanner, MainBody, SectionOne, SubSectionOne } from './components'

const App = () => {
    return (
        <>
        <GlobalStyles />
        <Header />
        <MainBanner />
        <MainBody />
        <SectionOne />
        <SubSectionOne />
        <h1 style={ {margin: "50px 0", textAlign: "center", color: "red"} }>Work in Progress, Kindly check back... </h1>
        </>
    )
}

export default App
