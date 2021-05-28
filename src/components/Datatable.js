import React, { useEffect } from "react"
import { Link, useHistory } from "react-router-dom";
import { useTable, useFilters } from "react-table";
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
        useFilters
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = tableInstance

    return (
        <div className="table-responsive">
            <table className="table" {...getTableProps()} style={{ border: 'solid 1px blue' }}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column, i) => (
                                <th
                                    {...column.getHeaderProps()}
                                    style={{
                                        borderBottom: 'solid 3px red',
                                        background: 'aliceblue',
                                        color: 'black',
                                        fontWeight: 'bold',
                                        textAlign: "center",
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
                    {rows.map((row, i) => {
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
                                                background: 'papayawhip',
                                                textAlign: "center"
                                            }}
                                        >
                                            {cell.render('Cell')}
                                            {
                                                j == 11 &&
                                                <div className="col-12 row w-100 mx-auto">
                                                    <div className="col-6">
                                                        <IconButton aria-label="edit" size="small" onClick={() => navigation.push("/editUser", { user: cell.row.original, mode: 1 })}>
                                                            <EditIcon />
                                                        </IconButton>
                                                    </div>
                                                    <div className="col-6">
                                                        <IconButton aria-label="delete" size="small" onClick={() => navigation.push("/editUser", { user: cell.row.original, mode: 1 })}>
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
    )
}