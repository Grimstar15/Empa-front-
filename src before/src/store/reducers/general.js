import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isHome: true,
    title: ''
};

const setHomePage = (state, action) => {
    return {
        ...state,
        isHome: true,
        title: ''
    };
};

const setOtherPage = (state, action) => {
    return {
        ...state,
        isHome: false,
        title: action.title
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_HOMEPAGE: return setHomePage(state, action);
        case actionTypes.SET_OTHERPAGE: return setOtherPage(state, action);
        default: return state;
    }
};

export default reducer;
