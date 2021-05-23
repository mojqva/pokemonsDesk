import Url from 'url'
import config from '../config';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

async function req(param: keyof typeof config.client.endpoint) {
    const uri = Url.format(getUrlWithParamsConfig(param));
    
    return await fetch(uri).then(res => res.json())
}

export default req