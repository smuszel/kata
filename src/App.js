import React from 'react';

export const App = () => {
    React.useEffect(() => {
        document.title = 'ABC Products';
    }, []);

    return <button>show products</button>;
};
