import * as actionTypes from '../actions/actionTypes';

const initialState = {
    banners: [],
    isLoaded: false,
    error: null
};

const bannerLoadStart = (state, action) => {
    return {
        ...state,
        banners: [],
        isLoaded: false,
        error: null
    };
};

const bannerLoadSuccess = (state, action) => {
    return {
        ...state,
        banners: action.banners,
        isLoaded: true
    };
};

const bannerLoadFail = (state, action) => {
    return {
        ...state,
        isLoaded: false,
        error: action.error
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.BANNER_LOAD_START: return bannerLoadStart(state, action);
        case actionTypes.BANNER_LOAD_SUCCESS: return bannerLoadSuccess(state, action);
        case actionTypes.BANNER_LOAD_FAIL: return bannerLoadFail(state, action);
        default: return state;
    }
};

export default reducer;