import React from 'react';
import { ReactComponent as PokemonLogo } from './assets/Logo.svg';
import {A, usePath} from 'hookrouter'
import s from './Header.module.scss';
import { GENERAL_MENU } from '../../routes';
import cn from 'classnames'


const Header = () => {
    const path = usePath();
    console.log(path);
    
    return (
        <div className={s.root}>
            <div className={s.wrap}>
                <div className={s.pokemonLogo}>
                    <PokemonLogo />
                </div>
                <div className={s.menuWrap}>
                    {GENERAL_MENU.map(({ title, link}) => (
                        <A 
                            href={link} 
                            className={cn(s.menuLink, {
                                [s.menuLinkActive]: link === path,
                            })} 
                            key={title}
                        >
                            {title}
                        </A>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Header;
