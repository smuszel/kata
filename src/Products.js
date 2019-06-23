import React from 'react';
import { Product } from './Product';
import { List } from './List';

const p = { title: 'product title', price: '100' };

export const Products = () => {
    return (
        <List
            Comp={Product}
            id="products-list"
            className="products"
            items={Array(5).fill(p)}
        />
    );
};
