import axios from 'axios';

const AUTH_SERVER_HOST =
    process.env.NODE_ENV === 'production'
        ? process.env.REACT_APP_AUTH_SERVER_HOST_PROD
        : process.env.REACT_APP_AUTH_SERVER_HOST_DEV;

export class AxiosRequest {
    static post = async (url, params, options?) => {
        console.log(`dam url : `, `${AUTH_SERVER_HOST}${url}`);
        return axios.post(`${AUTH_SERVER_HOST}${url}`, params, options);
    };
}
