const initialState = {
    data: []
};

function fetchDataReducer(state = initialState, action) {
    switch (action.type){
        case 'FETCH_RESTAURANT_DATA':
            return {
                data: action.payload.data
            }
        default: 
            return state
    }
};

export default fetchDataReducer