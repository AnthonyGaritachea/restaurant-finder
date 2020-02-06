const initialState = {
    data: [],
};

export default function fetchDataReducer(state = initialState, action) {
    switch (action.type){
        case 'FETCH_RESTAURANT_DATA':
            return {
                data: action.payload.data.businesses
            }
        default: 
            return state;
    }
};