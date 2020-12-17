import axios from 'axios';

export default function setup() {
    axios.interceptors.request.use(
        config => {
            let token = localStorage.getItem('token');

            if (token) {
                config.headers = {
                    Authorization: `Bearer ${token}`
                };

            } else {
                /*router.push('/login');*/
            }

            return config;
        },
        error => {
            return Promise.reject(error);
        }
    );

    axios.interceptors.response.use(
        response => {
            if (response.status === 200 || response.status === 201) {
                return Promise.resolve(response);
            } else {
                return Promise.reject(response);
            }
        },
        error => {
            console.log(error)
            if (error.response.status) {
                switch (error.response.status) {
                    case 400:

                        //do something
                        break;

                    case 401:
                        // Return to login page + Error message

                        break;
                    case 403:
                        // Return to login page + Error message
                        break;
                    case 404:
                        alert('page not exist');
                        break;
                    case 502:
                    // Error message
                }
                return Promise.reject(error.response);
            }
        }
    );
}