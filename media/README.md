# MEDIA - Redux Toolkit

## ASSUMPTIONS

```bash
We are going to assume the user is on a bandwidth constrained connection
```

```bash
The data-loading experience must be near-perfect
```

```bash
We are going to look at data fetching with plain RTK, then well use RTK Query
```

# DATA FETCHING

> We will use `Lazy Fetching` BEST APPROACH
>
> 1. first call give me list of users.
> 2. click on user - another call give me list of albums for that user
> 3. click on album - another call give me list of photos for that album

# LIBRARIES

> [json-server](https://www.npmjs.com/package/json-server)
>
> [axios](https://www.npmjs.com/package/axios)
>
> [react-redux](https://www.npmjs.com/package/react-redux) and [@redux/toolkit](https://www.npmjs.com/package/@reduxjs/toolkit)
>
> [classnames](https://www.npmjs.com/package/classnames)
>
> [tailwindcss](https://tailwindcss.com/docs/guides/create-react-app)

# NICE NOTE TO REMEMBER

```javascript
extraReducers(builder) {
    builder.addCase('movie/reset', (state, action) => {
        return []
    })
}
```

```javascript
import { createSlice } from '@reduxjs/toolkit';
import { addCar } from './carsSlice';

// template
const formSlice = createSlice({
    name: 'form',
    initialState: {},
    reducers: {
        changeName: (state, action) => {},
        changeCost: (state, action) => {}
    },
    extraReducers(builder) {
        builder.addCase(addCar, (state, action) => {
            state.name = '';
            state.cost = 0;
        });
    }
});

// export from formSlice actions -
// those are the different action creators that get generated for us
export const { changeName, changeCost } = formSlice.actions;

// export the combined reducer (no s) -
// NOTE: another words, one single combined reducer - get your state from this
export const formReducer = formSlice.reducer;
```

addCar = 'cars/addCar'

# DATA STRUCTURE

There are two options, we have a Denormalized Form, and a Normalized form. For this application we will store everything in a normalized form for both json-server and redux store

create a user POST http://localhost:3005/users

fetch all users GET

delete users/1
