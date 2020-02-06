import axios from 'axios';


export const fetchData = (lat, lon) => {
    return {
        type: 'FETCH_RESTAURANT_DATA',
        payload: axios.get(`/data/${lat}/${lon}`)
    }
};

export const fetchDataById = id => {
    return {
        type: 'FETCH_RESTAURANT_DATA_BY_ID',
        payload: axios.get(`/data/${id}`)
    }
};