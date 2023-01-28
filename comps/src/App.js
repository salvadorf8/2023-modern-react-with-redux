import Sidebar from './components/sidebar';
import Route from './components/Route';
import AccordionPage from './pages/AccordionPage';
import DropdownPage from './pages/DropdownPage';
import ButtonsPage from './pages/ButtonPage';
import ModalPage from './pages/ModalPage';
import BasicTablePage from './pages/BasicTablePage';
import FruitTablePage from './pages/FruitTablePage';
import CounterPage from './pages/CounterPage';

const App = () => {
    return (
        <div className='container mx-auto grid grid-cols-5 gap-4 mt-4'>
            <Sidebar />
            <div className='col-span-3'>
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
                <Route path='/basic-table'>
                    <BasicTablePage />
                </Route>
                <Route path='/fruit-table'>
                    <FruitTablePage />
                </Route>
                <Route path='/counter'>
                    <CounterPage initialCount={10} />
                </Route>
            </div>
        </div>
    );
};

export default App;
