import Button from './Button';

function App() {
    return (
        <div className='App'>
            <h1 className='text-3xl font-bold underline '>Hello world!</h1>
            <div>
                <Button success>Click !</Button>
            </div>
            <div>
                <Button>Submit !</Button>
            </div>
            <div>
                <Button>Delete !</Button>
            </div>
            <div>
                <Button>Add to cart !</Button>
            </div>
            <div>
                <Button>Enter !</Button>
            </div>
        </div>
    );
}

export default App;
