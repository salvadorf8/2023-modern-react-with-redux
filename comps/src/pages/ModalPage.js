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
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id odio mattis, sodales dolor sed, eleifend ante. Suspendisse in nisl a leo dignissim placerat quis non orci. Donec urna dolor, semper nec massa quis, luctus auctor dui. Nulla sit amet metus vel justo efficitur maximus.
                Fusce laoreet malesuada dui, vel molestie erat dapibus rhoncus. Ut egestas et orci quis dapibus. Nunc blandit, tellus tempus viverra aliquet, magna odio ultrices nunc, at fringilla odio est id mauris. Etiam elementum convallis risus, eget luctus tellus sodales et. Etiam efficitur
                lectus eget purus gravida facilisis. Morbi facilisis tempus sollicitudin. Proin eu neque vel risus molestie ultricies. Vivamus consectetur facilisis lacus, ac mattis turpis ultrices ac. Proin non metus et mauris interdum mattis quis non augue. Sed egestas sollicitudin justo, nec
                tincidunt est pretium sagittis. Vestibulum faucibus ex nec elementum mattis.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id odio mattis, sodales dolor sed, eleifend ante. Suspendisse in nisl a leo dignissim placerat quis non orci. Donec urna dolor, semper nec massa quis, luctus auctor dui. Nulla sit amet metus vel justo efficitur maximus.
                Fusce laoreet malesuada dui, vel molestie erat dapibus rhoncus. Ut egestas et orci quis dapibus. Nunc blandit, tellus tempus viverra aliquet, magna odio ultrices nunc, at fringilla odio est id mauris. Etiam elementum convallis risus, eget luctus tellus sodales et. Etiam efficitur
                lectus eget purus gravida facilisis. Morbi facilisis tempus sollicitudin. Proin eu neque vel risus molestie ultricies. Vivamus consectetur facilisis lacus, ac mattis turpis ultrices ac. Proin non metus et mauris interdum mattis quis non augue. Sed egestas sollicitudin justo, nec
                tincidunt est pretium sagittis. Vestibulum faucibus ex nec elementum mattis.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id odio mattis, sodales dolor sed, eleifend ante. Suspendisse in nisl a leo dignissim placerat quis non orci. Donec urna dolor, semper nec massa quis, luctus auctor dui. Nulla sit amet metus vel justo efficitur maximus.
                Fusce laoreet malesuada dui, vel molestie erat dapibus rhoncus. Ut egestas et orci quis dapibus. Nunc blandit, tellus tempus viverra aliquet, magna odio ultrices nunc, at fringilla odio est id mauris. Etiam elementum convallis risus, eget luctus tellus sodales et. Etiam efficitur
                lectus eget purus gravida facilisis. Morbi facilisis tempus sollicitudin. Proin eu neque vel risus molestie ultricies. Vivamus consectetur facilisis lacus, ac mattis turpis ultrices ac. Proin non metus et mauris interdum mattis quis non augue. Sed egestas sollicitudin justo, nec
                tincidunt est pretium sagittis. Vestibulum faucibus ex nec elementum mattis.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id odio mattis, sodales dolor sed, eleifend ante. Suspendisse in nisl a leo dignissim placerat quis non orci. Donec urna dolor, semper nec massa quis, luctus auctor dui. Nulla sit amet metus vel justo efficitur maximus.
                Fusce laoreet malesuada dui, vel molestie erat dapibus rhoncus. Ut egestas et orci quis dapibus. Nunc blandit, tellus tempus viverra aliquet, magna odio ultrices nunc, at fringilla odio est id mauris. Etiam elementum convallis risus, eget luctus tellus sodales et. Etiam efficitur
                lectus eget purus gravida facilisis. Morbi facilisis tempus sollicitudin. Proin eu neque vel risus molestie ultricies. Vivamus consectetur facilisis lacus, ac mattis turpis ultrices ac. Proin non metus et mauris interdum mattis quis non augue. Sed egestas sollicitudin justo, nec
                tincidunt est pretium sagittis. Vestibulum faucibus ex nec elementum mattis.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id odio mattis, sodales dolor sed, eleifend ante. Suspendisse in nisl a leo dignissim placerat quis non orci. Donec urna dolor, semper nec massa quis, luctus auctor dui. Nulla sit amet metus vel justo efficitur maximus.
                Fusce laoreet malesuada dui, vel molestie erat dapibus rhoncus. Ut egestas et orci quis dapibus. Nunc blandit, tellus tempus viverra aliquet, magna odio ultrices nunc, at fringilla odio est id mauris. Etiam elementum convallis risus, eget luctus tellus sodales et. Etiam efficitur
                lectus eget purus gravida facilisis. Morbi facilisis tempus sollicitudin. Proin eu neque vel risus molestie ultricies. Vivamus consectetur facilisis lacus, ac mattis turpis ultrices ac. Proin non metus et mauris interdum mattis quis non augue. Sed egestas sollicitudin justo, nec
                tincidunt est pretium sagittis. Vestibulum faucibus ex nec elementum mattis.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id odio mattis, sodales dolor sed, eleifend ante. Suspendisse in nisl a leo dignissim placerat quis non orci. Donec urna dolor, semper nec massa quis, luctus auctor dui. Nulla sit amet metus vel justo efficitur maximus.
                Fusce laoreet malesuada dui, vel molestie erat dapibus rhoncus. Ut egestas et orci quis dapibus. Nunc blandit, tellus tempus viverra aliquet, magna odio ultrices nunc, at fringilla odio est id mauris. Etiam elementum convallis risus, eget luctus tellus sodales et. Etiam efficitur
                lectus eget purus gravida facilisis. Morbi facilisis tempus sollicitudin. Proin eu neque vel risus molestie ultricies. Vivamus consectetur facilisis lacus, ac mattis turpis ultrices ac. Proin non metus et mauris interdum mattis quis non augue. Sed egestas sollicitudin justo, nec
                tincidunt est pretium sagittis. Vestibulum faucibus ex nec elementum mattis.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id odio mattis, sodales dolor sed, eleifend ante. Suspendisse in nisl a leo dignissim placerat quis non orci. Donec urna dolor, semper nec massa quis, luctus auctor dui. Nulla sit amet metus vel justo efficitur maximus.
                Fusce laoreet malesuada dui, vel molestie erat dapibus rhoncus. Ut egestas et orci quis dapibus. Nunc blandit, tellus tempus viverra aliquet, magna odio ultrices nunc, at fringilla odio est id mauris. Etiam elementum convallis risus, eget luctus tellus sodales et. Etiam efficitur
                lectus eget purus gravida facilisis. Morbi facilisis tempus sollicitudin. Proin eu neque vel risus molestie ultricies. Vivamus consectetur facilisis lacus, ac mattis turpis ultrices ac. Proin non metus et mauris interdum mattis quis non augue. Sed egestas sollicitudin justo, nec
                tincidunt est pretium sagittis. Vestibulum faucibus ex nec elementum mattis.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id odio mattis, sodales dolor sed, eleifend ante. Suspendisse in nisl a leo dignissim placerat quis non orci. Donec urna dolor, semper nec massa quis, luctus auctor dui. Nulla sit amet metus vel justo efficitur maximus.
                Fusce laoreet malesuada dui, vel molestie erat dapibus rhoncus. Ut egestas et orci quis dapibus. Nunc blandit, tellus tempus viverra aliquet, magna odio ultrices nunc, at fringilla odio est id mauris. Etiam elementum convallis risus, eget luctus tellus sodales et. Etiam efficitur
                lectus eget purus gravida facilisis. Morbi facilisis tempus sollicitudin. Proin eu neque vel risus molestie ultricies. Vivamus consectetur facilisis lacus, ac mattis turpis ultrices ac. Proin non metus et mauris interdum mattis quis non augue. Sed egestas sollicitudin justo, nec
                tincidunt est pretium sagittis. Vestibulum faucibus ex nec elementum mattis.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id odio mattis, sodales dolor sed, eleifend ante. Suspendisse in nisl a leo dignissim placerat quis non orci. Donec urna dolor, semper nec massa quis, luctus auctor dui. Nulla sit amet metus vel justo efficitur maximus.
                Fusce laoreet malesuada dui, vel molestie erat dapibus rhoncus. Ut egestas et orci quis dapibus. Nunc blandit, tellus tempus viverra aliquet, magna odio ultrices nunc, at fringilla odio est id mauris. Etiam elementum convallis risus, eget luctus tellus sodales et. Etiam efficitur
                lectus eget purus gravida facilisis. Morbi facilisis tempus sollicitudin. Proin eu neque vel risus molestie ultricies. Vivamus consectetur facilisis lacus, ac mattis turpis ultrices ac. Proin non metus et mauris interdum mattis quis non augue. Sed egestas sollicitudin justo, nec
                tincidunt est pretium sagittis. Vestibulum faucibus ex nec elementum mattis.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id odio mattis, sodales dolor sed, eleifend ante. Suspendisse in nisl a leo dignissim placerat quis non orci. Donec urna dolor, semper nec massa quis, luctus auctor dui. Nulla sit amet metus vel justo efficitur maximus.
                Fusce laoreet malesuada dui, vel molestie erat dapibus rhoncus. Ut egestas et orci quis dapibus. Nunc blandit, tellus tempus viverra aliquet, magna odio ultrices nunc, at fringilla odio est id mauris. Etiam elementum convallis risus, eget luctus tellus sodales et. Etiam efficitur
                lectus eget purus gravida facilisis. Morbi facilisis tempus sollicitudin. Proin eu neque vel risus molestie ultricies. Vivamus consectetur facilisis lacus, ac mattis turpis ultrices ac. Proin non metus et mauris interdum mattis quis non augue. Sed egestas sollicitudin justo, nec
                tincidunt est pretium sagittis. Vestibulum faucibus ex nec elementum mattis.
            </p>
        </div>
    );
};

export default ModalPage;
