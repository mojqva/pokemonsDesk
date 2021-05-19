import React from 'react'
import Header from '../../components/Header'
import PokemonCard from '../../components/PokemonCard'
import { pokemons } from '../../pokemons'

import s from './Pokedex.module.scss'

const PokedexPage = () => {

    return (
        <>
            <Header/>
            <div>
                <div className={s.pokemons}>
                    {
                        pokemons.map(({name, stats, types, img}, index) => {
                            return (
                            <PokemonCard
                                key={index}
                                name={name}
                                attack={stats.attack}
                                defense={stats.defense}
                                types={types}
                                img={img}
                            />
                        )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default PokedexPage