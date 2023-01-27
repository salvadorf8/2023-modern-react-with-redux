import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';

import Button from '../components/Button';

function ButtonPage() {
    const handleClick = () => {};

    return (
        <div>
            <div>
                <Button primary className='mb-5' onClick={handleClick}>
                    <GoBell />
                    Go TRI IRONMAN!
                </Button>
            </div>
            <div>
                <Button secondary outline onMouseEnter={handleClick}>
                    <GoCloudDownload />
                    SWIM!
                </Button>
            </div>
            <div>
                <Button success rounded>
                    <GoDatabase />
                    BIKE!
                </Button>
            </div>
            <div>
                <Button warning>RUN!</Button>
            </div>
            <div>
                <Button danger rounded outline>
                    WIN!
                </Button>
            </div>
        </div>
    );
}

export default ButtonPage;
