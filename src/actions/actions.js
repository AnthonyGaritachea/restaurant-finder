import axios from 'axios';


export const fetchData = () => {
    return {
        type: 'FETCH_RESTAURANT_DATA',
        payload: axios.get('/data')
    }
};