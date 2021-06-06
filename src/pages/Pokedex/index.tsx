import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTypesAction} from '../../store/pokemons'
import Heading from '../../components/Heading';
import PokemonCard from '../../components/PokemonCard';
import useData from '../../hook/getData';
import useDebounce from '../../hook/useDebounce';
import { IData} from '../../pokemons';
import {Endpoints} from '../../config'
import s from './Pokedex.module.scss';

interface IQuery {
    name?: string
}

const PokedexPage = () => {
    const dispatch = useDispatch();
    const types = useSelector((state) => {state.pokemons.types.data});
    console.log(types);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState<IQuery>({});

    const debounceValue = useDebounce(search, 500);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
        setQuery((state: IQuery) => ({
            ...state,
            name: event.target.value
        }))
    }

    const { 
        data,
        isLoading,
        isError
    } = useData<IData>(Endpoints.GET_POKEMONS, query, [debounceValue])

    useEffect(() => {
        dispatch(getTypesAction())
    }, [])

    if (isError) {
        return <div>Something wrong!</div>
    }

    return (
        <div>
            <Heading size="l" className={s.root}>
                {!isLoading && data.total} Pokemons for you to choose your favourite
            </Heading>
            <div>
                <input type="text" value={search} onChange={handleSearchChange}/>
            </div>
            <div className={s.pokemons}>
                {
                    !isLoading && 
                    data.pokemons.map(({id, name, stats, types, img}) => {
                        return (<PokemonCard
                            id={id}
                            name={name}
                            stats={stats}
                            types={types}
                            img={img}
                        />)
                    })
                }
            </div> 
        </div>
    );
};

export default PokedexPage;
