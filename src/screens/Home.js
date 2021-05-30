import React, { useEffect, useMemo, useState } from "react"
import { Datatable } from "../components/index"
import { COLUMNS } from "../constants/columns"
import UserServices from "../services/UserServices";
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 

export default function Home() {

    const columns = useMemo(() => COLUMNS, []);
    const [data, setData] = useState([]);

    useEffect(() => {
        retrieveUsers();
    }, [])

    const retrieveUsers = () => {
        UserServices.getAllUsers()
            .then(res => res.json())
            .then(retrieveData => {
                let data = []
                retrieveData.map((item) => {
                    let status = item.active ? "Activo" : "Inactive";
                    item.active = status;
                    data.push(item);
                })

                setData(data);
            })
            .catch(error => console.log(error));
    }


    const deleteUser = (documentNumber) => {
        confirmAlert({
            title: 'Eliminar',
            message: 'Está seguro de que desea eliminar el empleado?',
            buttons: [
                {
                    label: 'Eliminar',
                    onClick: () => {
                        UserServices.deleteUser(documentNumber)
                            .then(res => {
                                if (res.ok) {
                                    alert("Usuario eliminado")
                                    retrieveUsers();
                                } else {
                                    alert("Ha ocurrido un error");
                                }
                            })
                    }
                },
                {
                    label: 'Cancelar',
                    onClick: () => {}
                }
            ]
        });
    }


    return (
        <div className="fluid-container m-3 mt-5 mb-5">
            <h1 className="text-center display-5">Lista de usuarios</h1>
            <hr className="mb-5" />
            <Datatable data={data} columns={columns} deleteUser={deleteUser} />
        </div>
    )
}