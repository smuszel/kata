import React from 'react';
import axios from 'axios';
import { Product } from './Product';
import { List } from './List';

const Loader = ({ isFrozen }) => {
    return <div className={`loader ${isFrozen ? 'freeze' : 'spin'}`}></div>;
};

export const Products = () => {
    const [_products, setProducts] = React.useState([]);
    const [hasErrors, setErrors] = React.useState(false);
    React.useEffect(() => {
        axios
            .get('/api/products')
            .then(r => {
                setProducts(r.data);
            })
            .catch(() => {
                setErrors(true);
            });
    }, []);

    return _products.length ? (
        <List Comp={Product} id="products-list" className="products" items={_products} />
    ) : (
        <Loader isFrozen={hasErrors} />
    );
};
