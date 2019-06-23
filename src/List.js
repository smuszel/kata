import React from 'react';

export const List = ({ items, id, className, Comp }) => {
    return (
        <ul id={id} className={className}>
            {items.map((x, ix) => {
                return (
                    <li key={ix}>
                        <Comp {...x} />
                    </li>
                );
            })}
        </ul>
    );
};
