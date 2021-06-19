import React from 'react';
import products from "../Product";

const HomeScreen = () => {

    return (
        <div>
            {products.map(item =>
                <h1>{item.name}</h1>
            )}
        </div>
    );
};

export default HomeScreen;
