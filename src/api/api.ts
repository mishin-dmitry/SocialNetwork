import axios from 'axios';
import {ProfileType} from "../types/types";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'e26f2b9e-6475-49af-a1d9-dbf7214597f5'
    }
});

export const userAPI = {
    getUsers:(page = 1, count = 5) => instance.get(`users?page=${page}&count=${count}`),
    userFollow:(id: number) => instance.post(`follow/${id}`),
    userUnfollow:(id: number) => instance.delete(`follow/${id}`)
}

export const profileAPI = {
	getProfile:(id: number) => instance.get(`profile/${id}`),
	getStatus:(id: number) => instance.get(`profile/status/${id}`),
	updateStatus:(status: string) => instance.put('profile/status', { status }),
	savePhoto:(photo: any) => {
		const formData = new FormData();
		formData.append("image", photo);
		return instance.put(`profile/photo`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		});
	},
	saveProfile:(data: ProfileType) => instance.put(`profile`, data)
}


type MeResponseType = {
	data: { id: number, email: string, login: string },
	resultCode: number,
	messages: Array<string>
}
export const authAPI = {
    me:() => instance.get<MeResponseType>('auth/me'),
	login:(email: string, password: string, rememberMe = false, captcha: null | string = null) => instance.post('auth/login', { email, password, rememberMe, captcha }),
	logout:() => instance.delete('auth/login')
}

export const securityAPI = {
	getCaptchUrl: () => instance.get('security/get-captcha-url')
}

export enum ApiResultCode {
	success = 0,
	error = 1,
}

export enum ApiResultCodeForCaptcha {
	captchaIsRequired = 10
}