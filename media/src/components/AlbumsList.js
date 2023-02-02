import { useFetchAlbumsQuery } from '../store';

const AlbumsList = ({ user }) => {
    // what we structure out is frequently refered to as the results object
    // data,
    // error,
    // isLoading, True if currently loading data for the first time only
    // isFetching, True if currently loading data
    // refetch, Function tell the query to rerun
    const { data, error, isLoading } = useFetchAlbumsQuery(user);

    console.log('SF - data', data, error, isLoading);
    return <div>Albums for {user.name}</div>;
};

export default AlbumsList;
