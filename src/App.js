import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Container} from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen"
import CartScreen from "./screens/CartScreen";

const App = () => {
    return (
        <Router>
            <Header />
            <main className={'py-3'}>
                <Container>
                    <Route path={"/"} exact component={HomeScreen} />
                    <Route path={"/product/:id"} exact component={ProductScreen} />
                    <Route path={"/register"} exact component={RegisterScreen} />
                    <Route path={"/login"} exact component={LoginScreen} />
                    <Route path={"/cart"} exact component={CartScreen} />
                    {/*<Redirect from={'*'} to={"/"} />*/}
                </Container>
            </main>

            <Footer />
        </Router>
    );
};

export default App;
