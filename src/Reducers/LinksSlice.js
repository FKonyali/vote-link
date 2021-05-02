import { PAGEITEMSIZE } from '../Resources/Contstants';
import { createSlice } from '@reduxjs/toolkit';
import { LoadFromLocalStorage, SaveToLocalStorage } from '../Helpers/LocalStorage';

export const LinksSlice = createSlice({
    name: 'links',
    initialState: {
        links: LoadFromLocalStorage(),
        sortProperty: 'createDate',
        reverseSort: false
    },
    reducers: {
        UpVote: (state, action) => {
            let link = state.links.find((link) => link.id === action.payload);
            link.point = link.point + 1;
            link.lastVoteDate = Date.now();
            SaveToLocalStorage(state.links);
        },
        DownVote: (state, action) => {
            let link = state.links.find((link) => link.id === action.payload);
            link.point = link.point > 0 ? link.point - 1 : 0;;
            link.lastVoteDate = Date.now();
            SaveToLocalStorage(state.links);
        },
        SetSortOptions: (state, action) => {
            state.sortProperty = action.payload.sortProperty;
            state.reverseSort = action.payload.reverseSort;
        },
        RemoveLink: (state, action) => {
            state.links = state.links.filter(link => link.id !== action.payload)
            SaveToLocalStorage(state.links);
        },
        AddLink: (state, action) => {
            state.links.push({
                id: (state.links.length + 1),
                title: action.payload.title,
                link: action.payload.link,
                point: 0,
                createDate: Date.now(),
                lastVoteDate: Date.now()
            })
            SaveToLocalStorage(state.links)
        }

    },
});

export const { UpVote, DownVote, SetSortOptions, RemoveLink, AddLink } = LinksSlice.actions;


export const selectPageCount = state => Math.ceil(state.links.links.length / PAGEITEMSIZE)
export const selectLinks = state => state.links.links;
export const selectLinkInfos = state => {
    return state.links.links.map((link) => (({ id, title, link, point }) => ({ id, title, link, point }))(link));
}
export const selectSortOptions = state => ({
    sortProperty: state.links.sortProperty,
    reverseSort: state.links.reverseSort
});

export default LinksSlice.reducer;