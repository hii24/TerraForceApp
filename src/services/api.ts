import axios, { AxiosError } from 'axios';

const BASE_URL = 'https://server-terra-force.herokuapp.com/api';


export const get = async (url: string) => {
    try {
        const response = await axios.get(`${BASE_URL}/${url}`);
        console.log(`${BASE_URL}/${url}`);

        return response.data;
    } catch (error: any) {
        throw new Error((error as AxiosError).message);
    }
};


export const post = async (url: string, data: any) => {
    try {
        const response = await axios.post(`${BASE_URL}/${url}`, data);
        return response.data;
    } catch (error: any) {
        throw new Error((error as AxiosError).message);
    }
};


export const put = async (url: string, data: any) => {
    try {
        const response = await axios.put(`${BASE_URL}/${url}`, data);
        return response.data;
    } catch (error: any) {
        throw new Error((error as AxiosError).message);
    }
};


export const remove = async (url: string) => {
    try {
        const response = await axios.delete(`${BASE_URL}/${url}`);
        return response.data;
    } catch (error: any) {
        throw new Error((error as AxiosError).message);
    }
};
