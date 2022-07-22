import DataTable from './components/Table/DataTable'
import React from 'react'
import './App.css'
import Container from '@mui/material/Container'



function App() {

  return (
    <div className="App">
      <Container fixed>
        <h3> Rick and Morty API</h3>
        <DataTable />
      </Container>
    </div>
  );
}

export default App;
