import React from 'react';

const Table = ({ data, config, keyFn }) => {
    const renderedHeaders = config.map((column) => {
        if (column.header) {
            return <React.Fragment key={column.label}>{column.header()}</React.Fragment>;
        }

        return <th key={column.label}>{column.label}</th>;
    });

    const renderRows = data.map((rowData) => {
        const renderedCells = config.map((column) => {
            return (
                <td className='p-2' key={column.label}>
                    {column.render(rowData)}
                </td>
            );
        });

        return (
            <tr className='border-b' key={keyFn(rowData)}>
                {renderedCells}
            </tr>
        );
    });

    return (
        <table className='table-auto border-spacing-2'>
            <thead>
                <tr className='border-b-2'>{renderedHeaders}</tr>
            </thead>
            <tbody>{renderRows}</tbody>
        </table>
    );
};

export default Table;
