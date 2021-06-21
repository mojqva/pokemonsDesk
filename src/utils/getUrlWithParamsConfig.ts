import config from "../config"

interface IApiConfigUri {
    protocol: string,
    host: string,
    pathname: string,
    query?: object
}

interface IEndpoint {
    method: string,
    uri: {
        pathname: string,
        query?: object
    }
}

function getUrlWithParamsConfig(endpointConfig: string, params?: object) {
    const { method, uri }: IEndpoint = config.client.endpoint[endpointConfig as keyof typeof config.client.endpoint];
    let body = {};

    const apiConfigUri: IApiConfigUri = {
        ...config.client.server,
        ...uri,
        query: {
            ...uri.query
        }
    }

    const query = { // {id: 25}
        ...params 
    }
    console.log('query', query);
    console.log('Object.keys(query)', Object.keys(query));
    console.log('apiConfigUri.pathname', apiConfigUri.pathname);
    
    
    const pathname = Object.keys(query).reduce((acc, val) => { //Object.keys(query) = ['id'], acc = 'id', val = 25
            
        if(acc.indexOf(`{${val}}`) !== -1){
            const result = acc.replace(`{${val}}`, query[val as keyof typeof query]);
            delete query[val as keyof typeof query];
            return result
        }
        return acc
    }, apiConfigUri.pathname)

    apiConfigUri.pathname = pathname;

    if(method === 'GET') {
        apiConfigUri.query = {
            ...apiConfigUri.query,
            ...query
        }
    } else {
        body = query
    }
        
    return {
        method,
        uri: apiConfigUri,
        body
    };
}
    


export default getUrlWithParamsConfig