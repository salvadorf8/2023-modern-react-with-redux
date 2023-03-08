import { configureStore } from '@reduxjs/toolkit';
import { formReducer, changeName, changeCost } from './slices/formSlice';
import { carsReducer, addCar, changeSearchTerm, removeCar } from './slices/carsSlice';

// reducer is important, it will dictate how shape of the state
// will look like inside the store
const store = configureStore({
    reducer: {
        carsReducer: carsReducer,
        formReducer: formReducer
    }
});

export { store, changeName, changeCost, addCar, removeCar, changeSearchTerm };
