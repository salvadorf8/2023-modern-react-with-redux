import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// here will require a large configuration
// when we create this API, it's going to automatically create a slice for us behind the scenes
// reducerPath is a string that specifies a key where we want to store all the state related to this API
const albumsApi = createApi({
    reducerPath: 'albums',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005'
    }),
    endpoints(builder) {
        return {
            fetchAlbums: builder.query({
                // come back and find out where this user came from
                query: (user) => {
                    return {
                        url: '/albums',
                        params: {
                            userId: user.id
                        },
                        mehtod: 'GET'
                    };
                }
            })
        };
    }
});

// useFetchAlbumsQuery is automatically generated
export const { useFetchAlbumsQuery } = albumsApi;
export { albumsApi };

// albumsApi.useFetchAlbumsQuery
