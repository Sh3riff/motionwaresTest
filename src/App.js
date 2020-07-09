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
        <h1>Work in Progress, please check back </h1>
        </>
    )
}

export default App
