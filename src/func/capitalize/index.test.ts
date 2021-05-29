import toCapitalizeFirstLetter from './index'

describe('toCapitalizeFirstLetter', () => {
    test('Должна принимать строку и возвращать ту же строку , но с заглавной первой буквой', () => {
        const str = toCapitalizeFirstLetter('hello mr.Strong')
        expect(str).toEqual('Hello mr.Strong')
    });

    test('Должна принимать строку со специальными символами и возвращать ту же строку', () => {
        const str = toCapitalizeFirstLetter('/index.tsx')
        expect(str).toEqual('/index.tsx')
    });
})