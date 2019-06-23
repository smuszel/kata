import React from 'react';

export const Product = ({ title, price }) => {
    return (
        <>
            <h4 className="title">{title}</h4>
            <span className="price">{price}</span>
        </>
    );
};
