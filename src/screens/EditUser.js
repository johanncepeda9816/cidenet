import React, { useEffect, useState } from "react"
import { useLocation } from "react-router";
import { RegisterForm } from "../components/index"
import UserServices from "../services/UserServices";

export default function EditUser(props){

    const location = useLocation();

    const [user, setUser] = useState(location.state.user);
    const [newUser, setNewUser] = useState(location.state.user);

    const editUser = () =>{
        let users = {users: [user, newUser]};
        UserServices.editUser(users)
        .then(res => {
            if(res.status == '200'){
                alert("Usuario actualizado correctamente");
            }else{
                alert("Error actualizando el usuario");
                console.log(res.status);
            }
        })
        .catch(error => console.log(error));
    }
    
    return(
        <div className="container mt-5 mb-5">
            <h1 className="display-5 text-center">Editar usuario</h1>
            <hr className="mb-5"/>
            <RegisterForm user={newUser} setUser={setNewUser} mode={2}/>
            <div className="d-flex justify-content-center mb-5">
                <button type="submit" onClick={() => editUser()} className="d-block btn btn-block btn-dark btn-md mt-5">Editar</button>
            </div>
        </div>
    )
}