import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import { propTypes } from 'react-bootstrap/esm/Image';

const columns = [{
    dataField: 'id',
    text: 'No'
    }, {
    dataField: 'user email',
    text: 'User Email'
    }, {
    dataField: 'start rent',
    text: 'Start Rent'
    },{
    dataField: 'finish rent',
    text: 'Finish Rent'
    },{
    dataField: 'price',
    text: 'Price'
    },
    {
    dataField: 'status',
    text: 'Status'
    },
];

const TableComponent = () => {
  return (
        <BootstrapTable keyField='id' data={props.user}  columns={ columns } />
  )
}

export default TableComponent