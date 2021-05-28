import React, { useState } from "react";
import { RegisterForm } from "../components/index"
import UserServices from "../services/UserServices"

export default function CreateUser() {

    const initialStateUser = { country: "Colombia", documentType: "Cédula de Ciudadanía", area: "Administración", active:true}
    const [user, setUser] = useState(initialStateUser);

    const registerUser = () => {
        console.log(user);
        UserServices.registerUser(user)
            .then(res => {
                if (res.status == '201') {
                    console.log("Usuario Creado");
                } else {
                    console.log("Ha ocurrido un error");
                }
            })
    }

    return (
        <div className="container mt-5">
            <h1 className="d-block display-5 text-center">Crear usuario</h1>
            <hr className="mb-5" />
            <RegisterForm user={user} setUser={setUser} />
            <div className="d-flex justify-content-center mb-5">
                <button type="submit" onClick={() => registerUser()} className="d-block btn btn-block btn-primary btn-md mt-5">Registrar</button>
            </div>
        </div>
    )
}