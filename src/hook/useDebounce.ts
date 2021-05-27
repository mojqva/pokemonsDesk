import { useEffect, useState } from "react"

const useDebounce = (value: string, delay: number) => {
    const [debounceValue, setDebounceValue] = useState(value)

    useEffect(() => {
        const time = setTimeout(() => {
            setDebounceValue(value);
        }, delay);
        
        return () => {
            clearInterval(time)
        }
    }, [value])

    return debounceValue
}

export default useDebounce