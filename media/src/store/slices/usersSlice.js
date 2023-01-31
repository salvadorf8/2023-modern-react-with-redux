import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from '../thunks/fetchUser';

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
        isLoading: false,
        error: null
    },
    reducers: {},
    extraReducers(builder) {
        // Redux Toolkit helps us not have to write out these individual action types manually.
        // the fetchUsers here for example is going to have three properties automatically assigned to it
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false;
            //NOTE: Action here will not have a payload, it will be an error with an error object
            state.error = action.error;
        });
    }
});

export const usersReducer = usersSlice.reducer;
