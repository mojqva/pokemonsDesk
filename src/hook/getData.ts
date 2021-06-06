import {useState, useEffect} from 'react'
import { Endpoints } from '../config';
import req from '../utils/request';

const useData = <T>(endpoint: Endpoints , query: object, deps: any[] = []) => {
    const [data, setData] = useState<T>({} as T);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        const getData = async (): Promise<void> => {
            setIsLoading(true);
            try {
                const result = await req<T>(endpoint, query);

                setData(result);
            } catch (e) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }
        getData();
    }, deps)

    return {
        data,
        isLoading,
        isError
    }
}

export default useData