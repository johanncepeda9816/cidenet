import React, { useEffect, useState } from "react";

export default function RegisterForm(props) {

    const user = props.user;
    const [currentDate, setDate] = useState();

    useEffect(() => {

        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        var hour = today.getHours();
        var minutes = today.getMinutes();
        var seconds = today.getSeconds();

        if (dd < 10) {
            dd = "0" + dd
        } else if (mm < 10) {
            mm = "0" + mm
        }

        var lastDate = yyyy + "-" + mm + "-" + dd + "T" + hour + ":" + minutes + ":00";

        setDate(lastDate);
    })

    const handleData = (e) => {
        props.setUser({ ...user, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        const email = user.firstName + "." + user.firstSurname + "@cidenet.com";
        props.setUser({ ...user, email: email.toLowerCase() })
    }, [user.firstName, user.firstSurname])

    return (
        <div className="">
            <form onSubmit={(e) => e.preventDefault()}>
                <h4 className="text-center">Datos Personales</h4>
                <div className="row mt-5 d-flex justify-content-center">
                    <div className="col-6">
                        <label htmlFor="firstSurname" className="text-dark d-block">Primer apellido</label>
                        <input id="firstSurname" type="text" maxLength={20} name="firstSurname" value={user.firstSurname || ""}
                            onChange={(e) => handleData(e)}
                            className="col-8"
                            required
                        />
                    </div>
                    <div className="col-6">
                        <label htmlFor="secondSurname" className="text-dark d-block">Segundo apellido</label>
                        <input id="secondSurname" type="text" maxLength={20} name="secondSurname" value={user.secondSurname || ""}
                            onChange={(e) => handleData(e)}
                            required
                            className="col-8"

                        />
                    </div>
                    <div className="col-6">
                        <label htmlFor="firstName" className="text-dark d-block">Primer nombre</label>
                        <input id="firstName" type="text" maxLength={20} name="firstName" value={user.firstName || ""}
                            onChange={(e) => handleData(e)}
                            className="col-8"
                            required
                        />
                    </div>

                    <div className="col-6">
                        <label htmlFor="otherName" className="text-dark d-block">Otros:</label>
                        <input id="otherName" type="text" maxLength={50} name="otherName" value={user.otherName || ""}
                            onChange={(e) => handleData(e)}
                            className="mx-auto col-8"
                        />
                    </div>

                    <div className="col-6 mx-auto mt-1">
                        <label htmlFor="documentType" className="text-dark d-block">Tipo de documento</label>
                        <select id="documentType" className=""
                            name="documentType"
                            onChange={(e) => handleData(e)}
                            value={user.documentType || "Cédula de Ciudadanía"}
                            className="col-8"
                            required
                        >
                            <option>Cédula de Ciudadanía</option>
                            <option>Cédula de Extranjería</option>
                            <option>Pasaporte</option>
                            <option>Permiso Especial</option>
                        </select>
                    </div>

                    <div className="col-6 mx-auto mt-1">
                        <label htmlFor="documentNumber" className="text-dark d-block">Número de documento</label>
                        <input id="documentNumber" type="text" maxLength={20} name="documentNumber" value={user.documentNumber || ""}
                            onChange={(e) => handleData(e)}
                            className="mx-auto"
                            className="col-8"
                            required
                        />
                    </div>

                    <h4 className="text-center mt-5">Datos Laborales</h4>

                    <div className="row mt-3">
                        <div className="mx-auto row">
                            <label htmlFor="country" className="text-dark col-4">País de empleo:</label>
                            <select id="country" className="col-8"
                                name="country" onChange={(e) => handleData(e)}
                                defaultValue={user.country || "Colombia"}
                                required
                            >
                                <option>Colombia</option>
                                <option>Estados Unidos</option>
                            </select>
                        </div>

                        <div className="mx-auto mt-3 row">
                            <label htmlFor="area" className="text-dark d-inline col-4">Área</label>
                            <select id="area" className="col-8"
                                name="area"
                                onChange={(e) => handleData(e)}
                                defaultValue={user.area || "Administración"}
                                required
                            >
                                <option>Administración</option>
                                <option>Financiera</option>
                                <option>Compras</option>
                                <option>Infraestructura</option>
                                <option>Operación</option>
                                <option>Talento Humano</option>
                                <option>Servicios</option>
                                <option>Varios</option>
                            </select>
                        </div>

                        <div className="mt-3 row mx-auto">
                            <label className="col-4">Fecha de ingreso</label>
                            <input onChange={(e) => handleData(e)} name="registrationDate" className="col-8" type="datetime-local" max={currentDate} required />
                        </div>

                        <div className="mx-auto mt-3 row">
                            <label className="d-inline col-4">Correo electrónico</label>
                            <input className="col-8" value={user.email || ""} type="email" placeholder={user.email || ""} readOnly />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}