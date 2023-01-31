import { useDispatch, useSelector } from 'react-redux';
// action creators
import { changeName, changeCost, addCar } from '../store';

const CarForm = () => {
    const dispatch = useDispatch();
    const { name, cost } = useSelector((state) => state.form);

    // stephen grider did it this way
    // const { name, cost } = useSelector((state) => {
    //     return { name: state.form.name, cost: state.form.cost };
    // });

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch(addCar({ name, cost }));
        // used an extraReducers() method to take care of this - commenting out
        // dispatch(changeName(''));
        // dispatch(changeCost(0));
    };

    const handleNameChange = (event) => {
        dispatch(changeName(event.target.value));
    };

    const handleCostChange = (event) => {
        // NOTE: again from notes in counter application
        // 1) input type number still gives a string - requires a parseInt
        // 2) click del or backspace returns a NaN - requires a ||0 to fix issue
        // 3) input type nubmer begins with a 0 - to start with clear input - requires a ||'' on input
        dispatch(changeCost(parseInt(event.target.value) || 0));
    };

    return (
        <div className='car-form panel'>
            <h4 className='subtitle is-3'>Add Car</h4>
            <form onSubmit={handleSubmit}>
                <div className='field-group'>
                    <div className='field'>
                        <label className='label'>Name</label>
                        <input className='input is-expanded' value={name} onChange={handleNameChange} />
                    </div>
                    <div className='field'>
                        <label className='label'>Cost</label>
                        <input className='input is-expanded' type='number' value={cost || ''} onChange={handleCostChange} />
                    </div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default CarForm;
