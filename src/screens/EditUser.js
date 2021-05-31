import React, { useEffect, useState } from "react"
import { useHistory, useLocation } from "react-router";
import { RegisterForm } from "../components/index"
import UserServices from "../services/UserServices";

export default function EditUser(props) {

    const location = useLocation();
    const history = useHistory();

    const [user, setUser] = useState(location.state.user);
    const [newUser, setNewUser] = useState(location.state.user);
    const [loading, setLoading] = useState(false);

    const editUser = () => {
        let users = { users: [user, newUser] };
        setLoading(true);
        UserServices.editUser(users)
            .then(res => {
                if (res.status == '200') {
                    alert("Usuario actualizado correctamente");
                    history.push("/");
                } else {
                    alert("Error actualizando el usuario");
                    console.log(res.statusText);
                }

                setLoading(false);
            })
            .catch(error => {
                console.log(error)
                setLoading(false);
            });
    }

    return (
        <div className="container mt-5 mb-5">
            <h1 className="display-5 text-center">Editar usuario</h1>
            <hr className="mb-5" />
            <RegisterForm user={newUser} setUser={setNewUser} mode={2} />
            <div className="d-flex justify-content-center mb-5">
                {
                    !loading ?
                        <button type="submit" onClick={() => editUser()} className="col-12 col-sm-6 col-md-6 col-xs-6 btn btn-block btn-dark btn-md mt-5">Editar</button>
                        :
                        <div className="d-flex justify-content-center"><div class="spinner-border" role="status" /></div>
                }
            </div>
        </div>
    )
}