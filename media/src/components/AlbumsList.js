import { useFetchAlbumsQuery, useAddAlbumMutation } from '../store';
import Skeleton from './Skeleton';
import ExpandablePanel from './ExpandablePanel';
import Button from './Button';

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
        content = <Skeleton times={3} />;
    } else if (error) {
        content = <div>Error loading albums</div>;
    } else {
        content = data.map((album) => {
            const header = <div>{album.title}</div>;
            return (
                <ExpandablePanel key={album.id} header={header}>
                    List of photos in the album
                </ExpandablePanel>
            );
        });
    }

    return (
        <div>
            <div>
                Albums By {user.name}
                <Button onClick={handleAddAlbum}>+ Add Album</Button>
            </div>
            <div>{content}</div>
        </div>
    );
};

export default AlbumsList;
