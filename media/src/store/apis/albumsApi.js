import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';

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
            addAlbum: builder.mutation({
                invalidatesTags: (result, error, user) => {
                    return [{ type: 'Album', id: user.id }];
                },
                query: (user) => {
                    return {
                        url: '/albums',
                        method: 'POST',
                        body: {
                            userId: user.id,
                            title: faker.commerce.productName()
                        }
                    };
                }
            }),
            fetchAlbums: builder.query({
                providesTags: (result, error, user) => {
                    return [{ type: 'Album', id: user.id }];
                },
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
export const { useFetchAlbumsQuery, useAddAlbumMutation } = albumsApi;
export { albumsApi };

// albumsApi.useFetchAlbumsQuery
