import React from 'react';
import PokemonCard from '../../components/PokemonCard';
import { pokemons } from '../../pokemons';

import s from './Pokedex.module.scss';

const PokedexPage = () => {
    return (
        <>
            <div>
                <div className={s.pokemons}>
                    {pokemons.map(({ name, stats, types, img, id }) => {
                        return <PokemonCard key={id} name={name} stats={stats} types={types} img={img} />;
                    })}
                </div>
            </div>
        </>
    );
};

export default PokedexPage;
