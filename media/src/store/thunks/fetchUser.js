import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// the first argument provided of type string is considered as a base type
// which will be used to generate the pending/rejected (example: users/fetch/pending)
const fetchUsers = createAsyncThunk('users/fetch', async () => {
    const response = await axios.get('http://localhost:3005/users');

    // DEV ONLY!!!
    await pause(1000);

    return response.data;
});

// DEV ONLY!!!! to add a pause for loading
const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
};

export { fetchUsers };

// Redux Toolkit will automatically generate three properties for us
// fetchUsers.pending === 'users/fetch/pending'
// fetchUsers.fulfilled === 'users/fetch/fullfilled'
// fetchUsers.rejected === 'users/fetch/rejected'

// they are automatically added on to the fetchUsers variable for us

// ALSO what ever you return will be assigned to the payload property in the Action
// along with type: users/fetch/fulfilled
// except for error, it will be error: not payload
