import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';

class AuthService {
    login(form) {
        return axios
            .post(API_URL + 'auth', {
                email: form.email,
                password: form.password,
            })
            .then(response => {
                if (response.data.token) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem('user');
    }

    register(user) {
        return axios.post(API_URL + 'register', {
            email: user.email,
            password: user.password
        });
    }
}

export default new AuthService();