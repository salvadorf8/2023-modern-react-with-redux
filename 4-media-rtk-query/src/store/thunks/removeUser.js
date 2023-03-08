import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// REMEMBER  'user/remove' is a base type
const removeUser = createAsyncThunk('users/remove', async (user) => {
    // const response = await axios.delete(`http://localhost:3005/users/${user.id}`);
    const response = await axios.delete(`http://localhost:3005/users/${user.id}`);

    // Promise Lifecycle Actions
    // NOTE: createAsyncThunk will generate three Redux action creators
    //      createAction: pending, fulfilled, and rejected
    // each action object will contain the
    // action.type
    //      - "users/remove/fulfilled"
    // action.meta
    //      - current unique requestId *
    //      - arg values *
    // action.payload
    //      - what ever is returned below

    // when removing a user, the response will be an empty object (ex: payload: {})
    // to know who was removed, in your case, look in the meta.arg property
    // or pass the argument (user) here in the return statement
    return response.data;
});

export { removeUser };
