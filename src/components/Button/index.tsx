import React from 'react';
import s from './Button.module.scss';

type width = 'max' | 'normal';
type color = 'yellow' | 'green';
type size = 'small' | 'normal';

interface ButtonProps {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    width: width;
    color: color;
    size: size;
}

const Button: React.FC<ButtonProps> = ({ children, onClick , width, color, size}) => {
    return (
        <button 
            type="button" 
            className={s.root} 
            onClick={onClick} 
            style={{
                width: (width === 'max') ? '100%' : '231px',
                background: (color === 'yellow') ? '#F5DB13' : '#73D677',
                height: (size === 'small') ? '16px' : '66px',
            }}
        >
            {children}
        </button>
    );
};

export default Button;
