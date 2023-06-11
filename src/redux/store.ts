import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import userReducer from './reducers/userReducer';

const rootReducer = {
    users: userReducer,
};

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
});

export default store;
