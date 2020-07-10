import React from 'react';
import GlobalStyles from './styledComponents/GlobalStyles';
import { Header, MainBanner, MainBody } from './components'

const App = () => {
    return (
        <>
        <GlobalStyles />
        <Header />
        <MainBanner />
        <MainBody />
        <h1 style={ {margin: "50px 0", textAlign: "center", color: "red"} }>Work in Progress, please check back... </h1>
        </>
    )
}

export default App
