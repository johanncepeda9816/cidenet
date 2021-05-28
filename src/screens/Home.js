import React, { useMemo } from "react"
import { useTable } from "react-table";
import { Datatable } from "../components/index"
import { COLUMNS } from "../constants/columns"

export default function Home() {

    const data = useMemo(() => [
        {
            id: "1",
            active: false ? "Active" : "Inactivo",
            area: "Operación",
            country: "Colombia",
            documentNumber: "1020831979",
            documentType: "Cédula de Ciudadanía",
            email: "johann.cepeda@cidenet.com",
            firstName: "Johann",
            firstSurname: "Cepeda",
            otherName: "Alfonso",
            registrationDate: "2021-05-28T12:14",
            secondSurname: "Alza"
        },
        {
            id: "2",
            active: true ? "Active" : "Inactivo",
            area: "Infraestructura",
            country: "Estados Unidos",
            documentNumber: "1020831979",
            documentType: "Cédula de Ciudadanía",
            email: "johann.cepeda@cidenet.com",
            firstName: "Jorgito",
            firstSurname: "Guayaco",
            otherName: "Cacorro",
            registrationDate: "2021-05-28T12:14",
            secondSurname: "Epico"
        }
    ])

    const columns = useMemo(() => COLUMNS, []);

    return (
        <div className="container mt-5 mb-5">
            <h1 className="text-center display-5">Lista de usuarios</h1>
            <hr className="mb-5" />
            <Datatable data={data} columns={columns} />
        </div>
    )
}