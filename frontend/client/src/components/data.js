import React from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';




export const Data = () => {

  const rowData = [
    {Resturents: "Toyota", Food : "Celica", price: 35000 , location :"india"},
    {Resturents: "Ford", Food : "Mondeo", price: 32000, location :"india"},
    {Resturents: "Porsche", Food : "Boxter", price: 72000, location :"india"},
    {Resturents: "Toyota", Food : "Celica", price: 35000, location :"india"},
    {Resturents: "Ford", Food : "Mondeo", price: 32000, location :"india"},
    {Resturents: "Porsche", Food : "Boxter", price: 72000, location :"india"},
    {Resturents: "Toyota", Food : "Celica", price: 35000, location :"india"},
    {Resturents: "Ford", Food : "Mondeo", price: 32000, location :"india"},
    {Resturents: "Porsche", Food : "Boxter", price: 72000, location :"india"},  
    {Resturents: "Toyota", Food : "Celica", price: 35000, location :"india"},
    {Resturents: "Ford", Food : "Mondeo", price: 32000, location :"india"},
    {Resturents: "Porsche", Food : "Boxter", price: 72000, location :"india"}, 
    {Resturents: "Toyota", Food : "Celica", price: 35000, location :"india"},
    {Resturents: "Ford", Food : "Mondeo", price: 32000, location :"india"},
    {Resturents: "Porsche", Food : "Boxter", price: 72000, location :"india"}
];

  return (
    <div className="ag-theme-alpine"  style={{height: 400, width:900 ,marginLeft: 200}}>
    <AgGridReact
        rowData={rowData}>
        <AgGridColumn field="Resturents" enableCellTextSelection={true} sortable={true} filter={true}></AgGridColumn>
        <AgGridColumn field="Food" sortable={true}></AgGridColumn>
        <AgGridColumn field="price" sortable={true} ></AgGridColumn>
        <AgGridColumn field="location" sortable={true} pagination={true} paginationPageSize= {500}></AgGridColumn>

    </AgGridReact>
</div>
  )
}
