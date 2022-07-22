
import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import { DataGrid } from '@mui/x-data-grid'
import axios from '../../utils/axiosInstance';
import { columns } from './columns';

const DataTable = () => {
  const [characterData, setCharacterData] = useState([])
  const [characterInfo, setCharacterInfo] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const GetData = async (pageNo) => {
    setIsLoading(true)
    const res = await axios.get(`api/character?page=${pageNo}`)
    if (res.data) {
      setCharacterData(res.data.results)
      setCharacterInfo(res.data.info)
    }
    setIsLoading(false)
  }
  useEffect(() => {
    GetData(1)
  }, [])

  return (
    <Box sx={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={characterData}
        columns={columns}
        loading={isLoading}
        pageSize={20}
        pagination
        paginationMode="server"
        onPageChange={(newPage) => { GetData(newPage + 1) }}
        rowCount={characterInfo ? characterInfo?.count : 20}
      />
    </Box>
  );

}

export default DataTable