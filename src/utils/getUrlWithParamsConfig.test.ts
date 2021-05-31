import getUrlWithParamsConfig from "./getUrlWithParamsConfig"

describe('getUrlWithParamsConfig', () => {
    test('Должна принимать два аргумента "getPokemons" и пустой объект , на выходе получить объект с полем method и двумя оъектами uri, с полями pathname и пустым query, и пустым body', () => {
        const url = getUrlWithParamsConfig('getPokemons', {})

        expect(url).toEqual({
            method: 'GET',
            uri: {
                protocol: 'http',
                host: 'zar.hosthot.ru',
                pathname: '/api/v1/pokemons',
                query: {}
            },
            body: {}
        })
    });
    test('Должна принимать два аргумента "getPokemons" и {name: "Pikachu"} , на выходе получить объект с полем method и двумя оъектами uri, с полями pathname и query, и пустым body', () => {
        const url = getUrlWithParamsConfig('getPokemons', {name: 'Pikachu'})

        expect(url).toEqual({
            method: 'GET',
            uri: {
                protocol: 'http',
                host: 'zar.hosthot.ru',
                pathname: '/api/v1/pokemons',
                query: {name: 'Pikachu'}
            },
            body: {}
        })
    });
    test('Должна принимать два аргумента "getPokemons" и {id: 25} , на выходе получить объект с полем method и двумя оъектами uri, с полями pathname, который указывает на покемона по id и пустым query, и пустым body', () => {
        const url = getUrlWithParamsConfig('getPokemon', { id: 25 })

        expect(url).toEqual({
            method: 'GET',
            uri: {
                protocol: 'http',
                host: 'zar.hosthot.ru',
                pathname: '/api/v1/pokemon/25',
                query: {}
            },
            body: {}
        })
    }); 
    
})