import axios from 'axios';

const KEY = 'AIzaSyBgCTY8pFd2wYQsrM__kBs6hGRxE5hpdtA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3'
});
