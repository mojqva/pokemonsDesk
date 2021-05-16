import React from 'react';
import { ReactComponent as PokemonLogo } from './assets/Logo.svg';
import s from './Header.module.scss';

interface IMenu {
    id: number;
    value: string;
    link: string;
}

const MENU: IMenu[] = [
    {
        id: 1,
        value: 'Home',
        link: '#',
    },
    {
        id: 2,
        value: 'Pokédex',
        link: '#',
    },
    {
        id: 3,
        value: 'Legendaries',
        link: '#',
    },
    {
        id: 4,
        value: 'Documentation',
        link: '#',
    },
];

const Header = () => {
    return (
        <div className={s.root}>
            <div className={s.wrap}>
                <div className={s.pokemonLogo}>
                    <PokemonLogo />
                </div>
                <div className={s.menuWrap}>
                    {MENU.map(({ value, link, id }) => (
                        <a href={link} className={s.menuLink} key={id}>
                            {value}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Header;
