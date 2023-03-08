import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { usersReducer } from './slices/usersSlice';
import { albumsApi } from './apis/albumsApi';
import { photosApi } from './apis/photosApi';

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
        [albumsApi.reducerPath]: albumsApi.reducer,
        [photosApi.reducerPath]: photosApi.reducer
    },
    // When ever we create an API, a set of middleware is also created for us
    // I'm going to chain on another concat call
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(albumsApi.middleware).concat(photosApi.middleware);
    }
});

// listeners already taken care of.... never have to repeat it
setupListeners(store.dispatch);

// export everything that is in the file ./thunks/fetchUsers which in this case is fetchUsers
// the * means { fetchUsers }
export * from './thunks/fetchUser';
export * from './thunks/addUser';
export * from './thunks/removeUser';
export { useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation } from './apis/albumsApi';
export { useFetchPhotosQuery, useAddPhotoMutation, useRemovePhotoMutation } from './apis/photosApi';
