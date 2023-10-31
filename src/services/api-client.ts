import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '65c8018d8ae14782a60ed22c70f58d50'
    }
})