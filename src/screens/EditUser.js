import React, { useState } from "react"
import { RegisterForm } from "../components/index"

export default function EditUser(){

    const [user, setUser] = useState({
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
        secondSurname: "Alza"
    });
    
    return(
        <div className="container mt-5 mb-5">
            <h1 className="display-5 text-center">Editar usuario</h1>
            <hr className="mb-5"/>
            <RegisterForm user={user} setUser={setUser} mode={1}/>
        </div>
    )
}