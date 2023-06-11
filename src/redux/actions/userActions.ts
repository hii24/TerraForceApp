import { Dispatch } from 'redux';
import { get, post, put, remove } from '../../services/api';



export const fetchUsers = (): any => {
    return async (dispatch: Dispatch) => {
        try {
            const users = await get('users');
            dispatch({ type: 'FETCH_USERS_SUCCESS', payload: users });
        } catch (error: any) {
            dispatch({ type: 'FETCH_USERS_FAILURE', payload: error.message });
        }
    };
};


export const createUser = (userData: any) => {
    return async (dispatch: Dispatch) => {
        try {
            const createdUser = await post('users', userData);
            dispatch({ type: 'CREATE_USER_SUCCESS', payload: createdUser });
        } catch (error: any) {
            dispatch({ type: 'CREATE_USER_FAILURE', payload: error.message });
        }
    };
};


export const updateUser = (userId: string, updatedData: any) => {
    return async (dispatch: Dispatch) => {
        try {
            const updatedUser = await put(`users/${userId}`, updatedData);
            dispatch({ type: 'UPDATE_USER_SUCCESS', payload: updatedUser });
        } catch (error: any) {
            dispatch({ type: 'UPDATE_USER_FAILURE', payload: error.message });
        }
    };
};


export const deleteUser = (userId: number): any => {
    return async (dispatch: Dispatch) => {
        try {
            await remove(`users/${userId}`);
            dispatch({ type: 'DELETE_USER_SUCCESS', payload: userId });
        } catch (error: any) {
            dispatch({ type: 'DELETE_USER_FAILURE', payload: error.message });
        }
    };
};
