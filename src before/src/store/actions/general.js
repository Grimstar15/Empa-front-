import * as actionTypes from './actionTypes';

export const setHomePage = () => {
    return {
        type: actionTypes.SET_HOMEPAGE,
        title: ''
    };
};

export const setOtherPage = (title) => {
    return {
        type: actionTypes.SET_OTHERPAGE,
        title: title
    };
};
