import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

const INCREMENT_COUNT = 'increment';
const DECREMENT_COUNT = 'decrement';
const SET_VALUE_TO_ADD = 'set_value_to_add';
const ADD_COUNT_TO_VALUE_TO_ADD = 'add-value-to-add-to-count';

const reducer = (state, action) => {
    // REMEMBER: you cannot modify the state object
    // must return new
    switch (action.type) {
        case INCREMENT_COUNT:
            return { ...state, count: state.count + 1 };
        case DECREMENT_COUNT:
            return { ...state, count: state.count - 1 };
        case SET_VALUE_TO_ADD:
            return { ...state, valueToAdd: action.payload };
        case ADD_COUNT_TO_VALUE_TO_ADD:
            return { ...state, count: state.count + state.valueToAdd, valueToAdd: 0 };
        default:
            // community best practice
            // throw new Error('unexpected action type: ', action.type) or just return state
            return state;
    }
};

/**
 * This Component makes use of a useReducer
 *
 * @param {number} initialCount
 * @returns JSX
 */
const CounterPage = ({ initialCount }) => {
    // const [count, setCount] = useState(initialCount);
    // const [valueToAdd, setValueToAdd] = useState(0);

    const [state, dispatch] = useReducer(reducer, { count: initialCount, valueToAdd: 0 });

    const increment = () => {
        // when we call dispatch, react will call the reducer
        dispatch({ type: INCREMENT_COUNT });
    };
    const decrement = () => {
        dispatch({ type: DECREMENT_COUNT });
    };

    const handleChange = (event) => {
        // NOTE: input is of type: number, however if you control.log, it will be a string - parseInt is required
        // NOTE: if you place cursor to the right of the number and click delete - you will get a NaN in this
        //      case, add the || 0 to ensure it is a zero if NaN
        const value = parseInt(event.target.value) || 0;

        dispatch({ type: SET_VALUE_TO_ADD, payload: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({ type: ADD_COUNT_TO_VALUE_TO_ADD });
    };

    return (
        <Panel className='m-3'>
            <h1 className='text-lg'>Count is {state.count}</h1>
            <div className='flex flex-row'>
                <Button onClick={increment}>Increment</Button>
                <Button onClick={decrement}>Decrement</Button>
            </div>

            <form onSubmit={handleSubmit}>
                <label>Add a lot!</label>
                <input type='number' className='p-1 m-3 bg-gray-50 border border-gray-300' value={state.valueToAdd || ''} onChange={handleChange} />
                <Button>Add it!</Button>
            </form>
        </Panel>
    );
};

export default CounterPage;
