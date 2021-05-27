import React, { useEffect, useState } from "react";

export default function RegisterForm() {

    const initialStateUser = {country: "Colombia", documentType: "Cédula de Ciudadanía"}
    const [user, setUser] = useState(initialStateUser);

    const handleData = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        const email = user.firstName + "." + user.firstSurname + "@cidenet.com";
        setUser({...user, email: email.toLowerCase()})
    }, [user.firstName, user.firstSurname])

    const registerUser = (e) =>{
        e.preventDefault();
        console.log(user);
    }

    return (
        <div className="">
            <form className="mx-auto" onSubmit={(e) => registerUser(e)}>
                <div className="row mt-5">
                    <div className="col-4">
                        <label for="firstSurname" className="text-dark d-block">Primer apellido</label>
                        <input id="firstSurname" type="text" maxLength={20} name="firstSurname" value={user.firstSurname || ""}
                            onChange={(e) => handleData(e)}
                            required
                        />
                    </div>
                    <div className="col-4">
                        <label for="secondSurname" className="text-dark d-block">Segundo apellido</label>
                        <input id="secondSurname" type="text" maxLength={20} name="secondSurname" value={user.secondSurname || ""}
                            onChange={(e) => handleData(e)}
                            required
                        />
                    </div>
                    <div className="col-4">
                        <label for="firstName" className="text-dark d-block">Primer nombre</label>
                        <input id="firstName" type="text" maxLength={20} name="firstName" value={user.firstName || ""}
                            onChange={(e) => handleData(e)}
                            required
                        />
                    </div>
                </div>
                <div className="mt-3 col-12 row w-100">
                    <label for="otherName" className="text-dark d-inline col-3 text-center">Otros:</label>
                    <input id="otherName" type="text" maxLength={50} name="otherName" value={user.otherName || ""}
                        onChange={(e) => handleData(e)}
                        className="col-9 mx-auto"
                    />
                </div>
                <div className="mt-5 col-12 row">
                    <label for="country" className="text-dark d-inline col-3 text-center">País de empleo:</label>
                    <select id="country" className="col-9" 
                        name="country" onChange={(e) => handleData(e)} 
                        value={user.country || "Colombia"}
                    >
                        <option>Colombia</option>
                        <option>Estados Unidos</option>
                    </select>
                </div>
                <div className="mt-3 col-12 row w-100">
                    <div className="col-6 mx-auto">
                        <label for="documentType" className="text-dark d-block col-12">Tipo de documento</label>
                        <select id="documentType" className="col-12" 
                            name="documentType" 
                            onChange={(e) => handleData(e)}
                            value={user.documentType || "Cédula de Ciudadanía"}
                        >
                            <option>Cédula de Ciudadanía</option>
                            <option>Cédula de Extranjería</option>
                            <option>Pasaporte</option>
                            <option>Permiso Especial</option>
                        </select>
                    </div>

                    <div className="col-6 mx-auto">
                        <label for="documentNumber" className="text-dark d-block col-12">Número de documento</label>
                        <input id="documentNumber" type="text" maxLength={20} name="documentNumber" value={user.documentNumber || ""}
                            onChange={(e) => handleData(e)}
                            className="col-12 mx-auto"
                        />
                    </div>

                    <div className="mt-5">
                        <label>Correo electrónico</label>
                        <input class="form-control" value={user.email || ""} type="email" placeholder={user.email || ""} readonly/>
                    </div>
                </div>

                <div className="d-flex justify-content-center">
                    <button type="submit" className=" d-block btn btn-primary btn-md mt-5">Registrar</button>
                </div>
            </form>
        </div>
    )
}