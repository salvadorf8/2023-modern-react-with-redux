import { createSlice } from '@reduxjs/toolkit';
import { addCar } from './carsSlice';

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
    },
    // this was added to clear out the input boxes after submit
    extraReducers(builder) {
        builder.addCase(addCar, (state, action) => {
            state.name = '';
            state.cost = 0;
        });
    }
});

// export from formSlice actions -
// those are the different action creators that got generated for us
export const { changeName, changeCost } = formSlice.actions;

// export the combined reducer (no s) -
// NOTE: another words, one single combined reducer - get your state from this
export const formReducer = formSlice.reducer;
