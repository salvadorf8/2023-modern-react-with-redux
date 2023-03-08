import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

export const useThunk = (thunk) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    // thunk (createAsyncThunk) will always return a resolved promise (fulfilled or rejected)
    // the promise returned by the dispatched thunk has an unwrap property
    // calling unwrap will extract the payload of fulfilled action or
    // to throw either the error/payload from a rejected action.

    const runThunk = useCallback(
        (arg) => {
            setIsLoading(true);
            dispatch(thunk(arg))
                .unwrap()
                .catch((error) => setError(error))
                .finally(() => setIsLoading(false));
        },
        [dispatch, thunk]
    );

    return [runThunk, isLoading, error];
};
