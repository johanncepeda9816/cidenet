import React, { useMemo } from "react"
import { useTable } from "react-table";
import { Datatable } from "../components/index"
import { COLUMNS } from "../constants/columns"

export default function Home() {

    const data = useMemo( () => [{
        id:"1",
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
        secondSurname: "Alza",
    }])

    const columns = useMemo(() => COLUMNS, []);

    return (
        <div className="container">
            <h1>Home page</h1>
            <Datatable data={data} columns={columns} />
        </div>
    )
}