import axios from '../../axios-connect';
import * as actionTypes from './actionTypes';

export const bannerLoadStart = () => {
    return {
        type: actionTypes.BANNER_LOAD_START,
        isLoaded: false,
        banners: [],
        error: null
    };
};

export const bannerLoadSuccess = (banners) => {
    return {
        type: actionTypes.BANNER_LOAD_SUCCESS,
        banners: banners,
        isLoaded: true
    };
};

export const bannerLoadFail = (error) => {
    return {
        type: actionTypes.BANNER_LOAD_FAIL,
        isLoaded: false,
        error: error
    };
};

export const loadBanners = (banners) => {
    return dispatch => {
        dispatch(bannerLoadStart());
        axios.get('/banner')
            .then(response => {
                console.log(response);
                dispatch(bannerLoadSuccess(response.data));
            })
            .catch(error => {
                dispatch(bannerLoadFail(error));
            });
    };
};
