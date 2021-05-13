// concat('Hello', 'World') => Hello World
type str = string
function concat (a:str, b: str): str {
    return a + b
}
concat('Hello', ' World')



interface withData {
    howIDoIt: string,
    simeArray: [string, number]
}
interface myHometask {
    howIDoIt: string,
    simeArray: [string, string, number],
    withData: withData[],
}

const myHometask:myHometask = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{ 
        howIDoIt: "I Do It Wel", 
        simeArray: ["string one", 23] 
    }],
}



interface myArray<T> {
    [n: number]: T,

    reduce<U>(callbackfn: (previousValue: T, currentValue: T, index: number, array: readonly T[]) => U): U

}

const myArray: Array<number> = [1, 2, 3]

myArray.reduce((sum, current) => {return sum + current})

