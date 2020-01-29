import ShopActionTypes from './shop.types';

const INIT_STATE = {
    collections: null,
    isFetching: false,
    errorMessage: ''
}

const shopReducer = (state = INIT_STATE, action) => {
    switch(action.type) {
        case ShopActionTypes.FETCH_COLLECTIONS_START: // FETCHING STARTS HERE
            return {
                ...state,
                isFetching: true,
            }
        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS: // FETCH CALL SUCCEEDS
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            }
        case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:  // FETCH CALL FAILS
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default: 
        return state;
    }
}

export default shopReducer;