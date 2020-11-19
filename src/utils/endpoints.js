import { ENDPOINT } from './variables'
import axios from 'axios';
import { getAllCharacters } from '../action/character';

export function getAllCharactersAPI() {
    return ((dispatch) => {
        axios.get(`${ENDPOINT}/character/`)
            .then(res => {
                dispatch(getAllCharacters(res.data, false, false));
            })
            .catch(() => {
                dispatch(getAllCharacters({}, false, true));
            })
    })
}