import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';

import Button from './Button';

function App() {
    return (
        <div className='App'>
            <h1 className='text-3xl font-bold underline m-4'>Hello world!</h1>
            <div>
                <Button primary>
                    <GoBell />
                    Click!
                </Button>
            </div>
            <div>
                <Button secondary outline>
                    <GoCloudDownload />
                    Buy Now!
                </Button>
            </div>
            <div>
                <Button success rounded>
                    <GoDatabase />
                    Delete
                </Button>
            </div>
            <div>
                <Button warning>Add to cart</Button>
            </div>
            <div>
                <Button danger rounded outline>
                    Enter
                </Button>
            </div>
        </div>
    );
}

export default App;
