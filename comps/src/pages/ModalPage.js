import Modal from '../components/Modal';
import Button from '../components/Button';
import { useState } from 'react';

const ModalPage = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = (
        <div>
            <Button onClick={handleClose} danger>
                Bring It!
            </Button>
        </div>
    );
    const modal = (
        <Modal onClose={handleClose} actionBar={actionBar}>
            <p>Are you ready IRONMAN?</p>
        </Modal>
    );

    return (
        <div>
            <Button primary onClick={handleClick}>
                Open Modal
            </Button>
            {showModal && modal}
        </div>
    );
};

export default ModalPage;
