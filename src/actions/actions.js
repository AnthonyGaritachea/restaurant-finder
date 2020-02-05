import axios from 'axios';


export const fetchData = (lat, lon) => {
    return {
        type: 'FETCH_RESTAURANT_DATA',
        payload: axios.get(`/data/${lat}/${lon}`)
    }
};