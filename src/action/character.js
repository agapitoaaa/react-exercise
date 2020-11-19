export const GET_ALL_CHARACTERS = 'GET_ALL_CHARACTERS';

export function getAllCharacters(data, loading, err) {
    return {
        type: GET_ALL_CHARACTERS,
        data,
        loading,
        err,
    }
}