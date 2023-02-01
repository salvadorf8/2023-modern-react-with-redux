import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from '../thunks/fetchUser';
import { addUser } from '../thunks/addUser';
import { removeUser } from '../thunks/removeUser';

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

        builder.addCase(addUser.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(addUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data.push(action.payload);
        });
        builder.addCase(addUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });

        builder.addCase(removeUser.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(removeUser.fulfilled, (state, action) => {
            state.isLoading = false;

            // delete user from json-server will not return anything thus action.payload will be {}
            // to know who got deleted, look at the action object property meta and look at the argument
            // passed to the createAsyncThunk()
            state.data = state.data.filter((user) => user.id !== action.meta.arg.id);
            // console.log('SF - fulfilled lifecycle action creator - signatures: ', action);
        });
        builder.addCase(removeUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
            // console.log('SF - error lifecycle action creator - signatures: ', action);
        });
    }
});

export const usersReducer = usersSlice.reducer;

// The FIX ME part
// when ever we run removeUser thunk, we return response.data which is
// action payload inside of our reducer
