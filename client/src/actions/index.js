import axios from 'axios';
import {FETCH_REQUEST} from './type';

export const fetchRequest = () => async dispatch => {
    const result = await axios.get('api/fetch_request');
    console.log(result);

    dispatch({
        type: fetchRequest,
        payload: result.data
    });
};