import { createSlice, nanoid } from '@reduxjs/toolkit';

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        data: []
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        addCar(state, action) {
            // one slice will never have visibility to another slice...

            // addCar is a little tricky - will have to assume the object is exactly the same
            // Assumption:
            // action.payload === { name: 'ab', cost: 140 }

            // second tricky, here we need an id - on the fly - which we could use Math.random()...
            // HOWEVER!!!!! redux toolkit provides an extra function specifically for id's!!!!!
            // nanoid
            state.data.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid()
            });
        },
        removeCar(state, action) {
            // Assumption:
            // action.payload === id then remove car
            const updated = state.data.filter((car) => {
                return car.id !== action.payload;
            });
            state.data = updated;
        }
    }
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
