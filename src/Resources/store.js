import { configureStore } from '@reduxjs/toolkit';
import paginationReducer from '../Reducers/PaginationSlice';
import linksReducer from '../Reducers/LinksSlice';

export default configureStore({
    reducer: {
        pagination: paginationReducer,
        links: linksReducer
    },
});