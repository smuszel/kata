import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { Landing } from './Landing';
import { Products } from './Products';

export const App = () => {
    React.useEffect(() => {
        document.title = 'ABC Products';
    }, []);

    return (
        <HashRouter>
            <Route exact path="/" component={Landing} />
            <Route path="/products" component={Products} />
        </HashRouter>
        // <a href="#/products">
        //     <button id="show-products">show products</button>
        // </a>
    );
};
