import Sidebar from './components/sidebar';
import Route from './components/Route';
import AccordionPage from './pages/AccordionPage';
import DropdownPage from './pages/DropdownPage';
import ButtonsPage from './pages/ButtonPage';
import ModalPage from './pages/ModalPage';
import TablePage from './pages/TablePage';
import ReusableTablePage from './pages/TablePage-reusable';

const App = () => {
    return (
        <div className='container mx-auto grid grid-cols-6 gap-4 mt-4'>
            <Sidebar />
            <div className='col-span-5'>
                <Route path='/accordion'>
                    <AccordionPage />
                </Route>
                <Route path='/'>
                    <DropdownPage />
                </Route>
                <Route path='/buttons'>
                    <ButtonsPage />
                </Route>
                <Route path='/modal'>
                    <ModalPage />
                </Route>
                <Route path='/table'>
                    <TablePage />
                </Route>
                <Route path='/reusabletable'>
                    <ReusableTablePage />
                </Route>
            </div>
        </div>
    );
};

export default App;
