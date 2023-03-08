import { GoTrashcan } from 'react-icons/go';

import { useRemoveAlbumMutation } from '../store';
import Button from './Button';
import ExpandablePanel from './ExpandablePanel';
import PhotosList from './PhotosList';

const AlbumsListItem = ({ album }) => {
    const [removeAlbum, results] = useRemoveAlbumMutation();

    const handleRemoveAlbum = (album) => {
        // Stephen calling this mutation function
        removeAlbum(album);
    };

    const header = (
        <>
            <Button className='mr-2' loading={results.isLoading} onClick={() => handleRemoveAlbum(album)}>
                <GoTrashcan />
            </Button>

            <div>{album.title}</div>
        </>
    );

    return (
        <ExpandablePanel key={album.id} header={header}>
            <PhotosList album={album} />
        </ExpandablePanel>
    );
};

export default AlbumsListItem;
