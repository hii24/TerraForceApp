interface User {
    id: number;
    name: string,
    lastName: string,
    position: string,
    age: string
}

interface UserState {
    users: User[];
    loading: boolean;
    error: string | null;
}

const initialState: UserState = {
    users: [],
    loading: false,
    error: null,
};

const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'FETCH_USERS_SUCCESS':
            return {
                ...state,
                users: action.payload,
                loading: false,
                error: null,
            };
        case 'FETCH_USERS_FAILURE':
            return {
                ...state,
                users: [],
                loading: false,
                error: action.payload,
            };
        case 'CREATE_USER_SUCCESS':
            return {
                ...state,
                users: [...state.users, action.payload],
                loading: false,
                error: null,
            };
        case 'CREATE_USER_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case 'UPDATE_USER_SUCCESS':
            const updatedUsers = state.users.map((user) =>
                user.id === action.payload.id ? action.payload : user
            );
            return {
                ...state,
                users: updatedUsers,
                loading: false,
                error: null,
            };
        case 'UPDATE_USER_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case 'DELETE_USER_SUCCESS':
            const filteredUsers = state.users.filter(
                (user) => user.id !== action.payload
            );
            return {
                ...state,
                users: filteredUsers,
                loading: false,
                error: null,
            };
        case 'DELETE_USER_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;
