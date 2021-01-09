import React, { useState } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import firebase from "./firebase";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const App = () => {
  React.useEffect(() => {
    firebase
      .database()
      .ref("-MQbgkl_B_gz-LOVYQ5_")
      .on("value", (snapshot) => {
        let studentlist = [];
        snapshot.forEach((snap) => {
          studentlist.push(snap.val());
        });
        setStudentList(studentlist);
      });
      // eslint-disable-next-line
  },[]
  );
  // eslint-disable-next-line
  const [gridApi, setGridApi] = useState(null);
  // eslint-disable-next-line
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const [studentList, setStudentList] = useState([]);

  function onGridReady(params) {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  }

  return (
    <div className='ag-theme-alpine' style={{ height: 1400, width: 1600 }}>
      <AgGridReact onGridReady={onGridReady} rowData={studentList}>
        <AgGridColumn field="Timestamp" sortable={ true } filter={ true }></AgGridColumn>
        <AgGridColumn field="Email address" sortable={ true } filter={ true }></AgGridColumn>
        <AgGridColumn field="What is your name?" sortable={ true } filter={ true }></AgGridColumn>
        <AgGridColumn field="Your current city?" sortable={ true } filter={ true }></AgGridColumn>
        <AgGridColumn field="Your contact number?" sortable={ true } filter={ true }></AgGridColumn>
        <AgGridColumn field="Your age?" sortable={ true } filter={ true }></AgGridColumn>
        <AgGridColumn field="Please upload your latest resume" sortable={ true } filter={ true }></AgGridColumn>
        <AgGridColumn field="What's your job role in your current  last company?" sortable={ true } filter={ true }></AgGridColumn>
        <AgGridColumn field="What is your current last drawn CTC?" sortable={ true } filter={ true }></AgGridColumn>
        <AgGridColumn field="What is the FIXED component in your CTC?" sortable={ true } filter={ true }></AgGridColumn>
        <AgGridColumn field="What is your total work experience?" sortable={ true } filter={ true }></AgGridColumn>
      </AgGridReact>
      							
    </div>
  );
};

export default App;