import { createSlice } from '@reduxjs/toolkit';

export const PaginationSlice = createSlice({
    name: 'pagination',
    initialState: {
        page: 1,
    },
    reducers: {
        incrementPage: (state, action) => {
            if (state.page < action.payload) {
                state.page += 1;
            }
        },
        decrementPage: (state) => {
            if (state.page > 1) {
                state.page -= 1;
            }
        },
        setPage: (state, action) => {
            if (action.payload.newPage > 0 && action.payload.newPage <= action.payload.pageCount) {
                state.page = action.payload.newPage;
            }
        },
        setPageCount: (state, action) => {
            state.pageCount = action.payload;
        }
    },
});

export const { incrementPage, decrementPage, setPage, setPageCount } = PaginationSlice.actions;


export const selectPage = state => state.pagination.page;

export default PaginationSlice.reducer;