import React, { useEffect, useState } from 'react';
import Heading from '../../components/Heading';
import { IData } from '../../pokemons';
import req from '../../utils/request';

import s from './Pokedex.module.scss';

const usePokemons = () => {
    const [data , setData] = useState<IData>({} as IData);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const getPokemons = async () => {
            setIsLoading(true);
            try {
                const result = await req('getPokemons');

                setData(result);
            } catch (e) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }
        getPokemons();
    }, [])

    return {
        data, 
        isLoading, 
        isError
    }
}

const PokedexPage = () => {
    const { 
        data,
        isLoading,
        isError
    } = usePokemons()

    if(isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>Something wrong!</div>
    }

    return (
        <div>
            <Heading type="h2" className={s.root}>
                {data.total} Pokemons for you to choose your favourite
            </Heading>
            <div style={{ 'display': 'block' }}>
                {
                    data.pokemons.map(item => <div key={item.id}>{item.name}</div>)
                }
            </div> 
        </div>
    );
};

export default PokedexPage;
