import Url from 'url'
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

async function req<T>(param: string, query: object): Promise<T> {
    const uri = Url.format(getUrlWithParamsConfig(param, query));  
    
    return await fetch(uri).then(res => res.json())
}

export default req