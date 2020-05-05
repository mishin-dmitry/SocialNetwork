import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'e26f2b9e-6475-49af-a1d9-dbf7214597f5'
    }
});

export const userAPI = {
    getUsers:(page = 1, count = 5) => {
        return instance.get(`users?page=${page}&count=${count}`)
            .then(response => response.data)
            .catch(e => console.error(e));
    },
    getUserData:() => {
        return instance.get(`auth/me`)
            .then(response => response.data)
            .catch(e => console.error(e));
    },
    getProfile:(id) => {
        return instance.get(`profile/${id}`)
            .then(response => response.data)
            .catch(e => console.error(e));
    },
    userFollow:(id) => {
        return instance.post(`follow/${id}`,{},{
        }).then(response => response.data).catch(e => console.error(e));
    },

    userUnfollow:(id) => {
        return instance.delete(`follow/${id}`,{},{
        }).then(response => response.data).catch(e => console.error(e));
    }
}