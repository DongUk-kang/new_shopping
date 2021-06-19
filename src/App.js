import React from 'react';
import Hearder from "./components/Header";
import Footer from "./components/Footer";
import {Container} from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
    return (
        <>
            <Hearder />
            <main className={'py-3'}>
                <Container>
                    <HomeScreen />
                </Container>

            </main>

            <Footer />
        </>
    );
};

export default App;
