import * as React from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { cardList } from '../constants/selectValues'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  row: {
    '& .MuiTableCell-root': {
      color: `#fff`,
    },
  },
  pagination: {
    '& .MuiToolbar-root': {
      color: `#fff`,
    },
    '& .MuiSvgIcon-root': {
      color: `#fff`,
    },
  },
  autocomplete: {
    '& .MuiInputLabel-formControl': {
      color: `#fff`,
    },
    '& .MuiSvgIcon-root': {
      color: `#fff`,
    },
    '& .MuiInput-underline:before': {
      borderBottom: `1px solid #fff`,
    },
    '& .MuiInput-root': {
      color: `#fff`,
    },
    '& .MuiFormControl-fullWidth': {
      width: 250,
    },
  },
}));

export const AdminTable = () => {
  const classes = useStyles()
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <SContainer>
      <STop>
      <SWrap>
          <SButton>
            <svg style={{marginRight: 12}} width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 14L6.11959e-07 7L10 0L10 14Z" fill="white"/>
            </svg>
            К списку корпусов
          </SButton>
          <Autocomplete
            className={classes.autocomplete}
            disablePortal
            id="combo-box-demo"
            options={houses}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Корпус" />}
          />
        </SWrap>
        <STitle>Таблица плановых работ</STitle>
      </STop>
      <TableContainer sx={{ maxHeight: 440, border: '1px solid #fff' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow className={classes.row}>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 0, minWidth: column.minWidth, background: '#2D2B2E' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow className={classes.row} hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        className={classes.pagination}
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      <SButtonContainer>
        <SButton>Взять в работу</SButton>
        <SButton>Сохранить</SButton>
        <SButton>Завершить</SButton>
      </SButtonContainer>
  
    </SContainer>
    
  );
}

const houses = cardList.map(house => house.name)

const columns = [
  { id: 'name', label: 'Название организации', minWidth: 170, color: '#fff' },
  { id: 'code', label: 'Вид работы', minWidth: 100 },
  {
    id: 'one',
    label: '1',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'two',
    label: '2',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'three',
    label: '3',
    minWidth: 170,
    align: 'right',
    format: (value) => value,
  },
];

function createData(name, code, one, two, three ) {
  return { name, code, one, two, three };
}

const rows = [
  createData('ООО Название', 'Работа', 10, 10, 10),
  createData('ООО Название', 'Работа', 10, 10, 10),
  createData('ООО Название', 'Работа', 10, 10, 10),
  createData('ООО Название', 'Работа', 10, 10, 10),
  createData('ООО Название', 'Работа', 10, 10, 10),
  createData('ООО Название', 'Работа', 10, 10, 10),
  createData('ООО Название', 'Работа', 10, 10, 10),
  createData('ООО Название', 'Работа', 10, 10, 10),
  createData('ООО Название', 'Работа', 10, 10, 10),
  createData('ООО Название', 'Работа', 10, 10, 10),
  createData('ООО Название', 'Работа', 10, 10, 10),
  createData('ООО Название', 'Работа', 10, 10, 10),
  createData('ООО Название', 'Работа', 10, 10, 10),
  createData('ООО Название', 'Работа', 10, 10, 10),
  createData('ООО Название', 'Работа', 10, 10, 10),
];

const SContainer = styled.div`
  background: #2D2B2E;
  padding: 48px 63px;
`
const STitle = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 42px;
  line-height: 60px;
  color: #FFFFFF;
  text-align: center;
  margin-bottom: 200px;
`
const SButton = styled.button`
  background: #3D3D3D;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 50px;
  display: flex;
  align-items: center;
  color: #FFFFFF;
  border: none;
  padding: 0 10px;
  cursor: pointer;
  margin-bottom: 95px;
`
const SWrap = styled.div`
  position: absolute;
`
const STop = styled.div`
  position: relative
  display: flex;
`
const SButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  grid-column-gap: 38px;
`
