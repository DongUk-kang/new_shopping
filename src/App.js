import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
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
    ProfileScreen,
    OrderScreen,
    UserListScreen,
    ProductsListScreen,
    OrderListScreen,
    UserEditScreen,
    ProductUpdateScreen,
    CreateProductScreen
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


                    <Route path={"/cart/:id?"} exact component={CartScreen} />
                    <Route path={"/shipping"} exact component={ShippingScreen} />
                    <Route path={"/payment"} exact component={PaymentScreen} />
                    <Route path={"/placeorder"} exact component={PlaceOrder} />
                    <Route path={"/profile"} exact component={ProfileScreen} />
                    <Route path={"/order/:id"} exact component={OrderScreen} />



                    <Route path={"/admin/userlist"} exact component={UserListScreen} />
                    <Route path={"/admin/productslist"} exact component={ProductsListScreen} />
                    <Route path={"/admin/orderlist"} exact component={OrderListScreen} />
                    <Route path={"/admin/user/:id/edit"} exact component={UserEditScreen} />
                    <Route path={"/admin/products/:id/edit"} exact component={ProductUpdateScreen} />
                    <Route path={"/admin/product/register"} exact component={CreateProductScreen} />
                </Container>
            </main>

            <Footer />
        </Router>
    );
};

export default App;
