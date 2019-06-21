import React from 'react';

export const App = () => {
    React.useEffect(() => {
        document.title = 'ABC Products';
    }, []);

    return (
        <a href="#/products">
            <button>show products</button>
        </a>
    );
};
