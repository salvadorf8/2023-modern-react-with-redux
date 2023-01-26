import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';

import Button from '../components/Button';

function ButtonPage() {
    const handleClick = () => {
        console.log('I was Clicked!!');
    };

    return (
        <div>
            <div>
                <Button primary className='mb-5' onClick={handleClick}>
                    <GoBell />
                    Click!
                </Button>
            </div>
            <div>
                <Button secondary outline onMouseEnter={handleClick}>
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

export default ButtonPage;
