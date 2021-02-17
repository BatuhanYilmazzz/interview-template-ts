import React from 'react';
import { HeaderProps } from './interfaces';

const Header: React.FC<HeaderProps> = ({ title, name }: HeaderProps): JSX.Element => {
    return (
        <div>
            <h1>{title}</h1>
            <h2>{name}</h2>
        </div>
    );
};

export default Header;
