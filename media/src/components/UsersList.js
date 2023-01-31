import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store';
import Skeleton from './Skeleton';

const UsersList = () => {
    const dispatch = useDispatch();
    // REMEMBER: state.users will have { data: [], isLoading: false, error: null }
    const { isLoading, data, error } = useSelector((state) => {
        return state.users;
    });

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    if (isLoading) {
        return <Skeleton times={6} className='h-10 w-full' />;
    }

    if (error) {
        return <div>Error fetching data...</div>;
    }

    return <div>{data.length}</div>;
};

export default UsersList;
