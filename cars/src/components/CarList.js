import { useSelector, useDispatch } from 'react-redux';
// action creator
import { removeCar } from '../store';

const CarList = () => {
    const dispatch = useDispatch();
    const { cars, name } = useSelector(({ form, cars: { data, searchTerm } }) => {
        const filteredCars = data.filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()));

        return {
            cars: filteredCars,
            name: form.name
        };
    });
    // This is what I had but I'm changing it to use filtering
    // const { cars } = useSelector((state) => state.cars);

    const handleCarDelete = (car) => {
        dispatch(removeCar(car.id));
    };

    // variable
    const renderedCars = cars.map((car) => {
        // decide if this car should be bold
        const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

        return (
            <div key={car.id} className={`panel ${bold && 'bold'}`}>
                <p>
                    {car.name} - ${car.cost}
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

// IMPORTANT TO KNOW: DO NOT change our data model just to better suit our UI or add in a new feature
// do not do this {id: name: cost: bold:}  DO NOT ADD bold
