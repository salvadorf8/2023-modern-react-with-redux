import BasicTable from '../components/BasicTable';

const BasicTablePage = () => {
    const data = [
        { name: 'Orange', color: 'bg-orange-500', score: 5 },
        { name: 'Apple', color: 'bg-red-500', score: 3 },
        { name: 'Banana', color: 'bg-yellow-500', score: 1 },
        { name: 'Lime', color: 'bg-green-500', score: 4 }
    ];

    return (
        <div>
            <div>
                <BasicTable data={data} />
            </div>
        </div>
    );
};

export default BasicTablePage;
