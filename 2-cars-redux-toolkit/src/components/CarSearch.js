import { useDispatch, useSelector } from 'react-redux';
import { changeSearchTerm } from '../store';

const CarSearch = () => {
    const dispatch = useDispatch(); // TODO: find out why I had this in the method (state) => state.carsReducer
    const searchTerm = useSelector((state) => {
        return state.carsReducer.searchTerm;
    });

    const handleSearchTermChange = (event) => {
        dispatch(changeSearchTerm(event.target.value));
    };

    return (
        <div className='list-header'>
            <h3 className='title is-3'>My Cars</h3>
            <div className='search field is-horizontal'>
                <label className='label'>Search</label>
                <input className='input' value={searchTerm} onChange={handleSearchTermChange} />
            </div>
        </div>
    );
};

export default CarSearch;
