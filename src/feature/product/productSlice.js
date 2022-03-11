import { createSlice } from "@reduxjs/toolkit";



export const slice = createSlice({

    name: 'products',
    initialState: {
        selectedCategory: 'fruit'
    },
    reducers: {
        filtercategory: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            

                
            state.selectedCategory = action.payload;

        }
    }
});

export const getSelectedCategory = state => state.products.selectedCategory;

export const {filtercategory} = slice.actions;

export default slice.reducer;