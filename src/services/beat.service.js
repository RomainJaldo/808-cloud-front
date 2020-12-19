import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API}v1/instrumental/`;

class BeatService {
    getList(page, size) {
        return axios
            .get(`${API_URL}`, {params: { page, size }})
            .then(response => {
                return response.data;
            });
    }

    createBeat(form) {
        return axios
            .post(`http://localhost:8000/api/v1/instrumentals`, {
                url: "url",
                image: null,
                title: form.title,
                producer: "http://localhost:8000/api/v1/users/1",
                categories: [
                    "http://localhost:8000/api/v1/categories/1"
                ],
                comments: [],
                votes: [],
                audioFile: null
            })
            .then(response => {
                return response.data;
            });
    }

    createVote(instrumentalId, voteType) {
        return axios
            .post(`${API_URL}${instrumentalId}/vote/${voteType}`, {})
            .then(response => {
                return response.data;
            });
    }

    delete(instrumentalId) {
        return axios
            .delete(`http://localhost:8000/api/v1/instrumentals/${instrumentalId}`)
            .then(response => {
                return response.data;
            });
    }
}

export default new BeatService();