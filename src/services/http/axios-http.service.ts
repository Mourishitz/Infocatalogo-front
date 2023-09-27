import axios, { Axios, type AxiosRequestConfig, type AxiosResponse } from 'axios';
import type { IHttpClient } from './interfaces';
import { HttpServiceException } from './exceptions'

export class AxiosHttpService implements IHttpClient {
    private http: Axios;

    constructor() {
        this.http = axios.create({
            baseURL: 'https://picsum.photos', // TODO: implement real endpoints
        });
    }

    async get(endpoint: string, config?: AxiosRequestConfig<any>): Promise<AxiosResponse<any, any>> {
        try {
            return this.http.get(endpoint, config).then((data) => data);
        } catch (error) {
            throw this.handle(error as Error);
        }
    }

    async post(endpoint: string, data?: any, config?: AxiosRequestConfig<any>): Promise<AxiosResponse<any, any>> {
        try {
            return this.http.post(endpoint, data, config).then((data) => data);
        } catch (error) {
            throw this.handle(error as Error);
        }
    }

    async put(endpoint: string, data?: any, config?: AxiosRequestConfig<any>): Promise<AxiosResponse<any, any>> {
        try {
            return this.http.put(endpoint, data, config).then((data) => data);
        } catch (error) {
            throw this.handle(error as Error);
        }
    }

    async delete(endpoint: string, config?: AxiosRequestConfig<any>): Promise<AxiosResponse<any, any>> {
        try {
            return this.http.delete(endpoint, config).then((data) => data);
        } catch (error) {
            throw this.handle(error as Error);
        }
    }

    private handle(error: Error) {
        throw new HttpServiceException(
            error.message,
            {
                cause: error.cause,
            }
        );
    }
}
