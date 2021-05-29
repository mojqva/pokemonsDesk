import React from 'react'
import useData from '../../hook/getData'
import { IPokemon } from '../../pokemons'
import { Endpoints } from '../Pokedex'

export interface IProps {
    id: number | string
}

const Pokemon: React.FC<IProps> = ({id}) => {
    const {data, isLoading} = useData<IPokemon>(Endpoints.GET_POKEMON, {id})
    
    if(isLoading) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <div>This page is equal to {data?.name}</div>
    )
}

export default Pokemon