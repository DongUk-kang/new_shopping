import React from 'react';
import Hearder from "./components/Header";
import Footer from "./components/Footer";
import {Container} from "react-bootstrap";

const App = () => {
    return (
        <>
            <Hearder />
            <main className={'py-3'}>
                <Container>
                    <h1>
                        Welcome to Dong Uk Shop
                    </h1>
                </Container>
            </main>
            <Footer />
        </>
    );
};

export default App;
