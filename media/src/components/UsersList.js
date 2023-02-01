import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUsers, addUser } from '../store';
import Button from './Button';
import Skeleton from './Skeleton';

const UsersList = () => {
    const [isLoadingUsers, setIsLoadingUsers] = useState(false);
    const [loadingUsersError, setLoadingUsersError] = useState(null);

    const [isCreatingUser, setIsCreatingUser] = useState(false);
    const [creatingUserError, setCreatingUserError] = useState(null);
    const dispatch = useDispatch();
    // REMEMBER: state.users will have { data: [], isLoading: false, error: null }
    const { data } = useSelector((state) => {
        return state.users;
    });

    useEffect(() => {
        setIsLoadingUsers(true);
        dispatch(fetchUsers())
            .unwrap()
            .then(() => {
                // setIsLoadingUser(false); //comented because of finally
            })
            .catch((error) => {
                console.log('SF - error', error);
                setLoadingUsersError(error);
            })
            .finally(() => {
                setIsLoadingUsers(false);
            });
    }, []);

    const handleUserAdd = () => {
        setIsCreatingUser(true);
        dispatch(addUser())
            .unwrap()
            .catch((error) => setCreatingUserError(error))
            .finally(() => setIsCreatingUser(false));
    };

    if (isLoadingUsers) {
        return <Skeleton times={6} className='h-10 w-full' />;
    }

    if (loadingUsersError) {
        return <div>Error fetching data...</div>;
    }

    const renderedUsers = data.map((user) => {
        return (
            <div key={user.id} className='mb-2 border rounded'>
                <div className='flex p-2 justify-between items-center cursor-pointer'>{user.name}</div>
            </div>
        );
    });

    return (
        <div>
            <div className='flex flex-row justify-between m-3'>
                <h1 className='m-2 text-xl'>Users</h1>
                {isCreatingUser ? 'CreatingUser...' : <Button onClick={handleUserAdd}>+ Add User</Button>}
                {creatingUserError && 'Error creating User...'}
            </div>
            {renderedUsers}
        </div>
    );
};

export default UsersList;
