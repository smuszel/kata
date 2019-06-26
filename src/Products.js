import React from 'react';
import axios from 'axios';
import { Product } from './Product';
import { List } from './List';

const Loader = () => {
    return <div className="loader"></div>;
};

export const Products = () => {
    const [_products, setState] = React.useState([]);
    React.useEffect(() => {
        axios.get('/api/products').then(r => {
            setState(r.data);
        });
    }, []);

    return _products.length ? (
        <List Comp={Product} id="products-list" className="products" items={_products} />
    ) : (
        <Loader />
    );
};
