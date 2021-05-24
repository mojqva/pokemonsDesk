import React from 'react';
import Heading from '../Heading';
import { IPokemon } from '../../pokemons';

import s from './PokemonCard.module.scss';

const PokemonCard: React.FC<IPokemon> = ({ name, stats, types, img }) => {
    return (
        <div className={s.root}>
            <div className={s.infoWrap}>
                <Heading type="h3" className={s.titleName}>
                    {name}
                </Heading>
                <div className={s.statWrap}>
                    <div className={s.statItem}>
                        <div className={s.statValue}>{stats.attack}</div>
                        Attack
                    </div>
                    <div className={s.statItem}>
                        <div className={s.statValue}>{stats.defense}</div>
                        Defense
                    </div>
                </div>
                <div className={s.labelWrap}>
                    {types.map((item) => {
                        return <span className={s.label}>{item}</span>;
                    })}
                </div>
            </div>
            <div className={s.pictureWrap}>
                <img src={img} alt="Pokemon" />
            </div>
        </div>
    );
};

export default PokemonCard;
