import axios from 'axios';

const API_URL = process.env.REACT_APP_API;

class UserService {

    getInfo(userId) {
        return axios
            .get(`${API_URL}v1/users/${userId}`)
            .then(response => {
                return response.data;
            });
    }

    update(userId, form) {
        return axios
            .post(`${API_URL}v1/users/${userId}`, {
                email: form.email,
                password: form.password
            })
            .then(response => {
                return response.data;
            });
    }

    delete(userId) {
        return axios
            .delete(`${API_URL}v1/users/${userId}`)
            .then(response => {
                return response.data;
            });
    }
}

export default new UserService();