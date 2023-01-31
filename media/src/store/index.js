import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './slices/usersSlice';

export const store = configureStore({
    reducer: {
        users: usersReducer
    }
});

// export everything that is in the file ./thunks/fetchUsers which in this case is fetchUsers
// the * means { fetchUsers }
export { fetchUsers } from './thunks/fetchUser';
