import { createSlice } from '@reduxjs/toolkit';
import { reset } from '../actions';

const moviesSlice = createSlice({
    name: 'movie',
    initialState: [],
    reducers: {
        addMovie(state, action) {
            state.push(action.payload);
        },
        removeMovie(state, action) {
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        }
    },
    extraReducers(builder) {
        builder.addCase(reset, (state, action) => {
            return [];
        });
    }
});

// action is an object you are destructuring thus using the { }
export const { addMovie, removeMovie } = moviesSlice.actions;
// export default moviesSlice.reducer;

//  you are getting a direct reference to the combined reducer function
// thus no need for {}
export const moviesReducer = moviesSlice.reducer;
