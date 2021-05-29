import React, { useState } from "react";
import { RegisterForm } from "../components/index"
import UserServices from "../services/UserServices"

export default function CreateUser() {

    const initialStateUser = { country: "Colombia", documentType: "Cédula de Ciudadanía", area: "Administración", active: true }
    const [user, setUser] = useState(initialStateUser);

    const registerUser = () => {
        UserServices.registerUser(user)
            .then(res => {
                if (res.status == '201') {
                    alert("Usuario Creado");
                    setUser(initialStateUser);
                } else {
                    console.log("Ha ocurrido un error");
                    alert("Error inesperado, revisa los datos");
                }
            })
    }

    return (
        <div className="container mt-5">
            <h1 className="d-block display-5 text-center">Crear usuario</h1>
            <hr className="mb-5" />
            <RegisterForm user={user} setUser={setUser} mode={1}/>
            <div className="d-flex justify-content-center mb-5">
                <button type="submit" onClick={() => registerUser()} className="d-block btn btn-block btn-dark btn-md mt-5">Registrar</button>
            </div>
        </div>
    )
}