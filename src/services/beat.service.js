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

    createVote(instrumentalId, voteType) {
        return axios
            .post(`${API_URL}${instrumentalId}/vote/${voteType}`, {})
            .then(response => {
                return response.data;
            });
    }
}

export default new BeatService();