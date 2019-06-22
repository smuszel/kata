import { Link } from 'react-router-dom';
import React from 'react';

export const Landing = () => {
    return (
        <Link to="/products">
            <button id="show-products">show products</button>
        </Link>
    );
};
