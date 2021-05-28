import React, { useEffect, useState } from "react"
import { useLocation } from "react-router";
import { RegisterForm } from "../components/index"

export default function EditUser(props){

    const location = useLocation();

    const [user, setUser] = useState(location.state.user);

    useEffect(() => {
        console.log(location.state.user)
    }, [])
    
    return(
        <div className="container mt-5 mb-5">
            <h1 className="display-5 text-center">Editar usuario</h1>
            <hr className="mb-5"/>
            <RegisterForm user={user} setUser={setUser} mode={1}/>\
            <div className="d-flex justify-content-center mb-5">
                <button type="submit" onClick={() => console.log("editado")} className="d-block btn btn-block btn-primary btn-md mt-5">Editar</button>
            </div>
        </div>
    )
}