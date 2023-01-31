import { useSelector, useDispatch } from 'react-redux';
// action creator
import { removeCar } from '../store';

const CarList = () => {
    const dispatch = useDispatch();
    const cars = useSelector(({ cars: { data, searchTerm } }) => {
        return data.filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()));
    });
    // This is what I had but I'm changing it to use filtering
    // const { cars } = useSelector((state) => state.cars);

    const handleCarDelete = (car) => {
        dispatch(removeCar(car.id));
    };

    // variable
    const renderedCars = cars.map((car) => {
        return (
            <div key={car.id} className='panel'>
                <p>
                    {car.name} - {car.cost}
                </p>
                <button className='button is-danger' onClick={() => handleCarDelete(car)}>
                    Delete
                </button>
            </div>
        );
    });

    return (
        <div className='car-list'>
            {renderedCars}
            <hr />
        </div>
    );
};

export default CarList;
