import { createSlice } from "@reduxjs/toolkit";


interface IViewsStore {
    viewSelected: string;
}

const ViewsReducer = createSlice({
    name: 'views',
    initialState: {
        viewSelected: 'categories'
    } as IViewsStore,
    reducers: {
        setViewSelected: (state, action) => {
            state.viewSelected = action.payload;
        },
        clearViewSelected: (state) => {
            state.viewSelected = 'categories';
        }
    }
})

export const { setViewSelected, clearViewSelected } = ViewsReducer.actions;
export const getViewSelectedStore = (state: { views: IViewsStore }) => state.views.viewSelected;
export default ViewsReducer;