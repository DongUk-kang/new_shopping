import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Hearder from "./components/Header";
import Footer from "./components/Footer";
import {Container} from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

const App = () => {
    return (
        <Router>
            <Hearder />
            <main className={'py-3'}>
                <Container>
                    <Route path={"/"} exact component={HomeScreen} />
                    <Route path={"/product/:id"} exact component={ProductScreen} />
                    {/*<Redirect from={'*'} to={"/"} />*/}
                </Container>

            </main>

            <Footer />
        </Router>
    );
};

export default App;
