import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
    name: 'form',
    initialState: {
        name: '',
        cost: 0
    },
    reducers: {
        changeName: (state, action) => {
            state.name = action.payload;
        },
        changeCost: (state, action) => {
            state.cost = action.payload;
        }
    }
});

// export from formSlice actions -
// those are the different action creators that got generated for us
export const { changeName, changeCost } = formSlice.actions;

// export the combined reducer (no s) -
// NOTE: another words, one single combined reducer - get your state from this
export const formReducer = formSlice.reducer;
