import * as React from 'react'
import { DataGrid, GridColDef, DataGridProps } from '@mui/x-data-grid'

export interface DataTableProps<T> extends DataGridProps {
  columns: GridColDef[]
  rows: T[]
  pageSize?: number
  pageNumber?: number
}
const defaultPageSizeOptions = [10, 50, 100]
const defaultPageSize = 10
const defaultPageNumber = 0

const DataTable = <T extends Record<string, any>>({
  rows,
  columns,
  pageSizeOptions = defaultPageSizeOptions,
  pageSize = defaultPageSize,
  pageNumber = defaultPageNumber
}: DataTableProps<T>) => {
  return (
    <div style={{ height: 'auto', width: '100%' }} data-testid='datatable-component'>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: pageNumber, pageSize: pageSize }
          }
        }}
        pageSizeOptions={pageSizeOptions}
        checkboxSelection
      />
    </div>
  )
}

export default DataTable
