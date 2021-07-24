import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { Footer, Header } from "./components/index"
import {Container} from "react-bootstrap";
import {
    HomeScreen,
    ProductScreen,
    LoginScreen,
    RegisterScreen,
    CartScreen,
    ShippingScreen,
    PaymentScreen,
    PlaceOrder,
    ProfileScreen
} from "./screens"

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
                    <Route path={"/shipping"} exact component={ShippingScreen} />
                    <Route path={"/payment"} exact component={PaymentScreen} />
                    <Route path={"/placeorder"} exact component={PlaceOrder} />
                    <Route path={"/profile"} exact component={ProfileScreen} />

                    {/*<Redirect from={'*'} to={"/"} />*/}
                </Container>
            </main>

            <Footer />
        </Router>
    );
};

export default App;
