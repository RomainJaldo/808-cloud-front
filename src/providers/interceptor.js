import axios from 'axios';

export default function setup() {
    axios.interceptors.request.use(
        config => {
            let user = store.state.auth.user;

            if (user && user.token) {
                config.headers = {
                    Authorization: `Bearer ${user.token}`
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
                        store.dispatch('auth/logout').then(
                            () => {
                                router.push('/login');
                            },
                            error => {
                                this.loading = false;
                                this.message =
                                    (error.response && error.response.data) ||
                                    error.message ||
                                    error.toString();
                            }
                        );

                        break;
                    case 403:
                        router.replace({
                            path: "/login",
                            query: { redirect: router.currentRoute.fullPath }
                        });
                        break;
                    case 404:
                        alert('page not exist');
                        break;
                    case 502:
                        setTimeout(() => {
                            router.replace({
                                path: "/login",
                                query: {
                                    redirect: router.currentRoute.fullPath
                                }
                            });
                        }, 1000);
                }
                return Promise.reject(error.response);
            }
        }
    );
}