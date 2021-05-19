import React from 'react';
import s from './Button.module.scss';

type widthType = 'max' | 'normal';
type colorType = 'yellow' | 'green';
type sizeType = 'small' | 'normal';

interface ButtonProps {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    width: widthType;
    color: colorType;
    size: sizeType;
}

const Button: React.FC<ButtonProps> = ({ children, onClick , ...props}) => {
    return (
        <button 
            type="button" 
            className={s.root} 
            onClick={onClick} 
            style={{
                width: (props.width === 'max') ? '100%' : '231px',
                background: (props.color === 'yellow') ? '#F5DB13' : '#73D677',
                height: (props.size === 'small') ? '16px' : '66px',
            }}
        >
            {children}
        </button>
    );
};

export default Button;
