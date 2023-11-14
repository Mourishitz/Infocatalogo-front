import type { PostResource } from "../../types";
import { AxiosHttpService } from "../http";
import type { GetPostsResponse } from "./responses/getPostsResponse";
import type { LikePost } from "./responses/likePost";
import { getCookie, setCookie } from 'typescript-cookie'

class InfocatalogoAPI extends AxiosHttpService
{
    private token: string = '1|eVRIDJcXumcg16dsTBw9cGKkQxpOGwWIDSg2M3Ex';

    public async login(): Promise<any> {
        
    }

    public async getPosts(): Promise<GetPostsResponse>{
        const response = await this.get('/api/post', {
            headers: {
                Authorization: `Bearer ${this.token}`
            }
        });
        return response.data;
    }

    public async likePost(post: number):  Promise<LikePost> {
        const response = await this.post(`/api/like/post/${post}`, {}, {
            headers: {
                Authorization: `Bearer ${this.token}`
            }
        })

        return response.data;
    }

    public async dislikePost(post: number):  Promise<LikePost> {
        const response = await this.delete(`/api/like/post/${post}`, {
            headers: {
                Authorization: `Bearer ${this.token}`
            }
        })

        return response.data;
    }

    private getToken(): string {
        return this.token;
    }

    private setToken(token: string): void {
        this.token = setCookie('token', token);
    }
}

export default new InfocatalogoAPI('http://ec2-15-228-161-132.sa-east-1.compute.amazonaws.com');