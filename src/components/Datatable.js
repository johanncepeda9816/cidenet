import React, { useEffect } from "react"
import { Link, useHistory } from "react-router-dom";
import { useTable, useFilters, usePagination } from "react-table";
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from "@material-ui/core/IconButton"
import EditIcon from '@material-ui/icons/Edit';

export default function Datatable(props) {

    const columns = props.columns;
    const data = props.data;
    const navigation = useHistory();

    const tableInstance = useTable(
        {
            columns,
            data
        },
        useFilters,
        usePagination
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        pageOptions,
        page,
        state: { pageIndex, pageSize = 1 },
        previousPage,
        nextPage,
        canPreviousPage,
        canNextPage,
    } = tableInstance

    return (
        <div>
            <div className="table-responsive">
                <table className="table" {...getTableProps()} style={{ border: 'solid 1px blue' }}>
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column, i) => (
                                    <th
                                        {...column.getHeaderProps()}
                                        style={{
                                            borderBottom: 'solid 3px black',
                                            background: '#292b2e',
                                            fontWeight: 'bold',
                                            textAlign: "center",
                                            color: "white",
                                            padding: 10
                                        }}
                                    >
                                        {column.render('Header')}
                                        <div>{column.canFilter ? column.render('Filter') : null}</div>
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page.map((row, i) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map((cell, j) => {
                                        return (
                                            <td
                                                {...cell.getCellProps()}
                                                style={{
                                                    padding: '10px',
                                                    border: 'solid 1px gray',
                                                    background: 'white',
                                                    textAlign: "center"
                                                }}
                                            >
                                                {cell.render('Cell')}
                                                {
                                                    j == 0 &&
                                                    <div className="col-12 row w-100 mx-auto">
                                                        <div className="col-6">
                                                            <IconButton aria-label="edit" size="small" onClick={() => navigation.push("/editUser", { user: cell.row.original })}>
                                                                <EditIcon />
                                                            </IconButton>
                                                        </div>
                                                        <div className="col-6">
                                                            <IconButton aria-label="delete" size="small" onClick={() => props.deleteUser(cell.row.original.documentNumber)}>
                                                                <DeleteIcon />
                                                            </IconButton>
                                                        </div>
                                                    </div>
                                                }
                                            </td>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div className="">
                <div className="bg-dark">
                    <label className="text-light text-center mx-auto d-block">
                        Página{' '} {pageIndex + 1} de {pageOptions.length}
                    </label>
                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-dark mx-auto m-3" onClick={() => previousPage()} disabled={!canPreviousPage}>
                        Anterior
                </button>
                    <button className="btn btn-dark mx-auto m-3" onClick={() => nextPage()} disabled={!canNextPage}>
                        Siguiente
                    </button>
                </div>
            </div>
        </div>
    )
}