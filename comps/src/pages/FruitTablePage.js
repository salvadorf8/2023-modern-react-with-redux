// import Table from '../components/Table-reusable';
import SortableTable from '../components/SortableTable';
import Table from '../components/Table';

const FruitTablePage = () => {
    const data = [
        { _id: 1, name: 'Orange', color: 'bg-orange-500', score: 5 },
        { _id: 2, name: 'Apple', color: 'bg-red-500', score: 3 },
        { _id: 3, name: 'Banana', color: 'bg-yellow-500', score: 1 },
        { _id: 4, name: 'Lime', color: 'bg-green-500', score: 4 },
        { _id: 5, name: 'Cherry', color: 'bg-red-700', score: 2.5 }
    ];

    const config = [
        { label: 'Name', render: (fruit) => fruit.name, sortValue: (fruit) => fruit.name },
        { label: 'Color', render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`} /> },
        { label: 'Score', render: (fruit) => fruit.score, sortValue: (fruit) => fruit.score },
        { label: 'Squared', render: (fruit) => fruit.score ** 2, sortValue: (fruit) => fruit.score ** 2 }
    ];

    const keyFn = (fruit) => {
        return fruit._id;
    };

    return (
        <div>
            {/* data sent straight to Table component */}
            Data sent straight to Table
            <Table data={data} config={config} keyFn={keyFn} />
            {/* data sent to SortData before sending to Table component*/}
            Data sent to SortableTable, then sent to Table
            <SortableTable data={data} config={config} keyFn={keyFn} />
        </div>
    );
};

export default FruitTablePage;
