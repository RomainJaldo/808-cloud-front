import axios from 'axios';
import {Redirect} from "react-router-dom";
import React from "react";

export default function setup() {
    axios.interceptors.request.use(
        config => {
            let user = JSON.parse(localStorage.getItem('user'));

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
                        console.log(error.response)
                        alert(error.response.data)
                        //do something
                        break;

                    case 401:
                        // Return to login page + Error message
                        alert('Veuillez vous connecter')
                        localStorage.removeItem('user');
                        break;
                    case 403:
                        return <Redirect to="/login" />
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