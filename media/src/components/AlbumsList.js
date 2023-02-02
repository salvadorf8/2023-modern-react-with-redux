import { useFetchAlbumsQuery, useAddAlbumMutation } from '../store';
import Skeleton from './Skeleton';
import Button from './Button';
import AlbumsListItem from './AlbumsListItem';

const AlbumsList = ({ user }) => {
    // what we structure out is frequently refered to as the results object
    // data,
    // error,
    // isLoading, True if currently loading data for the first time only
    // isFetching, True if currently loading data
    // refetch, Function tell the query to rerun
    const { data, error, isLoading } = useFetchAlbumsQuery(user);
    const [addAlbum, results] = useAddAlbumMutation();

    const handleAddAlbum = () => {
        addAlbum(user);
    };

    let content;
    if (isLoading) {
        content = <Skeleton className='h-10 w-full' times={3} />;
    } else if (error) {
        content = <div>Error loading albums</div>;
    } else {
        content = data.map((album) => {
            return <AlbumsListItem key={album.id} album={album} />;
        });
    }

    return (
        <div>
            <div className='m-2 flex flex-row items-center justify-between'>
                <h3 className='text-lg font-bold'>Albums By {user.name}</h3>
                <Button loading={results.isLoading} onClick={handleAddAlbum}>
                    + Add Album
                </Button>
            </div>
            <div>{content}</div>
        </div>
    );
};

export default AlbumsList;
