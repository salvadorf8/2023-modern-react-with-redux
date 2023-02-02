import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { usersReducer } from './slices/usersSlice';
import { albumsApi } from './apis/albumsApi';

// REMEMBER when ever we create a Api,
// slice is created for us
// that slice is going to make a combined reducer
// we have to connect that combined reducers with the rest reducers below
// albums: albumsApi.reducer <-- will work however
// [] does not create an array, it says go look up the reducers path property, it is a string
// then put that string in the object []
export const store = configureStore({
    reducer: {
        users: usersReducer,
        [albumsApi.reducerPath]: albumsApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(albumsApi.middleware);
    }
});

setupListeners(store.dispatch);

// export everything that is in the file ./thunks/fetchUsers which in this case is fetchUsers
// the * means { fetchUsers }
export * from './thunks/fetchUser';
export * from './thunks/addUser';
export * from './thunks/removeUser';
export { useFetchAlbumsQuery } from './apis/albumsApi';
