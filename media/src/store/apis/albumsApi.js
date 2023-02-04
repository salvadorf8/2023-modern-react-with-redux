import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';

// DEV ONLY!!!! to add a pause for loading
const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
};

// here will require a large configuration
// when we create this API, it's going to automatically create a slice for us behind the scenes
// reducerPath is a string that specifies a key where we want to store all the state related to this API
const albumsApi = createApi({
    reducerPath: 'albums',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005',
        // DEV ONLY!!!!!
        // RTK uses the fetch function to work... in some cases you can overwrite the fetch function
        // in this case we're adding a pause here for TESTING PURPOSE
        fetchFn: async (...args) => {
            await pause(0);
            return fetch(...args);
        }
    }),
    // In the case userId is not available to use for TAGS.... an EXCELLENT trick to remember - TODO: revisit video 400
    // result, error, args
    // result is the result of the query, error if it had failed, args what ever is passed into the mutation function
    endpoints(builder) {
        return {
            removeAlbum: builder.mutation({
                invalidatesTags: (result, error, album) => {
                    return [{ type: 'Album', id: album.id }];
                },
                query: (album) => {
                    return {
                        url: `/albums/${album.id}`,
                        method: 'DELETE'
                    };
                }
            }),
            addAlbum: builder.mutation({
                invalidatesTags: (result, error, user) => {
                    return [{ type: 'UsersAlbums', id: user.id }];
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
                    const tags = result.map((album) => {
                        return { type: 'Album', id: album.id };
                    });
                    tags.push({ type: 'UsersAlbums', id: user.id });
                    console.log('SF - tags', tags);

                    return tags;
                },
                query: (user) => {
                    return {
                        url: '/albums',
                        mehtod: 'GET',
                        params: {
                            userId: user.id
                        }
                    };
                }
            })
        };
    }
});

// useFetchAlbumsQuery is an automatically generated HOOK
export const { useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation } = albumsApi;
export { albumsApi };

// albumsApi.useFetchAlbumsQuery

// TODO: providesTags(result, error, args) what is the result and error?
