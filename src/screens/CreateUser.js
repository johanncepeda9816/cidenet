import React from "react";
import { RegisterForm } from "../components/index"

export default function CreateUser() {
    return (
        <div className="container mt-5">
            <h1 className="d-block display-5 text-center">Crear usuario</h1>
            <hr className="mb-5"/>
            <RegisterForm />
        </div>
    )
}