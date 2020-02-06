const initialState = {
    restaurantDetails: {}
};

export default function fetchDataByIdReducer(state = initialState, action){
    switch(action.type){
        case 'FETCH_RESTAURANT_DATA_BY_ID':
            return {
                restaurantDetails: action.payload.data
            }
            default:
                return state; 
    }
};