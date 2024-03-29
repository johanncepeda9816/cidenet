import React, { useState } from "react";
import { RegisterForm } from "../components/index"
import UserServices from "../services/UserServices"

export default function CreateUser() {

    const initialStateUser = { country: "Colombia", documentType: "Cédula de Ciudadanía", area: "Administración", active: true }
    const [user, setUser] = useState(initialStateUser);
    const [loading, setLoading] = useState(false);

    const registerUser = () => {
        setLoading(true);
        UserServices.registerUser(user)
            .then(res => {
                if (res.status == '200') {
                    alert("Usuario Creado");
                    setUser(initialStateUser);
                } else {
                    console.log(res);
                    alert("Error inesperado, revisa los datos");
                }

                setLoading(false);
            })
            .catch(error => {
                alert("Error en el servidor");
                console.log(error);
                setLoading(false);
            })
    }

    return (
        <div className="container mt-5">
            <h1 className="d-block display-5 text-center">Crear usuario</h1>
            <hr className="mb-5" />
            <RegisterForm user={user} setUser={setUser} mode={1} />
            <div className="d-flex justify-content-center mb-5">
                {
                    !loading ?
                        <button type="submit" onClick={() => registerUser()} className="col-12 col-sm-6 col-md-6 col-xs-6 btn btn-block btn-dark btn-md mt-5">Registrar</button>
                        :
                        <div className="d-flex justify-content-center"><div class="spinner-border" role="status" /></div>
                }
            </div>
        </div>
    )
}