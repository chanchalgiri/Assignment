import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [tableData, setTableData] = useState([]);

  const handleAddRow = () => {
    const newData = [...tableData, { id: Date.now(), name: 'Enter name', age: 'Enter age', email: 'Enter email id' }];
    setTableData(newData);
  };

  const handleUpdateRow = (id, field, value) => {
    const updatedData = tableData.map(row => (row.id === id ? { ...row, [field]: value } : row));
    setTableData(updatedData);
  };

  const handleDeleteRow = (id) => {
    const updatedData = tableData.filter(row => row.id !== id);
    setTableData(updatedData);
  };

  const saveData = () => {
    axios.post('/api/table', { data: tableData })
      .then(response => {
        console.log(response.data.message);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="App">
      <button onClick={handleAddRow}>Add Row</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(row => (
            <tr key={row.id}>
              <td><input type="text" value={row.name} onChange={(e) => handleUpdateRow(row.id, 'name', e.target.value)} /></td>
              <td><input type="text" value={row.age} onChange={(e) => handleUpdateRow(row.id, 'age', e.target.value)} /></td>
              <td><input type="text" value={row.email} onChange={(e) => handleUpdateRow(row.id, 'email', e.target.value)} /></td>
              <td><button onClick={() => handleDeleteRow(row.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={saveData}>Save Data</button>
    </div>
  );
}

export default App;