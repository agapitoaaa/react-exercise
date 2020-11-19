import { GET_ALL_CHARACTERS } from '../action/character'

const initialState = {
    post: null,
    err: false,
    loading: true,
};

const characters = (
    state = initialState,
    action
) => {
    switch(action.type) {
        case GET_ALL_CHARACTERS:
        return {
            post: action.data,
            err: action.err,
            loading: action.err,
        }
        default:
            return {
                state
            }
    }
}

export default characters;