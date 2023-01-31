import { useSelector, useDispatch } from 'react-redux';
// action creator
import { removeCar } from '../store';

const CarList = () => {
    const dispatch = useDispatch();
    const { cars } = useSelector((state) => state.cars);

    // TODO: should we call a function or reference a variable
    // function
    // const renderListOfCars1 = () => {
    //     return cars.map((car) => {
    //         return (
    //             <div key={car.id}>
    //                 {car.name}
    //                 {car.cost}
    //             </div>
    //         );
    //     });
    // };

    const handleCarDelete = (car) => {
        console.log(car);
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
