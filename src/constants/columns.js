import ColumnFilter from "../components/ColumnFiler";

export const COLUMNS = [
    {
        Header: "Primer Nombre",
        accessor: "firstName",
        Filter: ColumnFilter
    },
    {
        Header: "Otros Nombres",
        accessor: "otherName",
        Filter: ColumnFilter
    },
    {
        Header: "Primer Apellido",
        accessor: "firstSurname",
        Filter: ColumnFilter
    },
    {
        Header: "Segundo Apellido",
        accessor: "secondSurname",
        Filter: ColumnFilter
    },
    {
        Header: "Tipo de identificación",
        accessor: "documentType",
        Filter: ColumnFilter
    },
    {
        Header: "Número de identificación",
        accessor: "documentNumber",
        Filter: ColumnFilter
    },
    {
        Header: "País de Empleo",
        accessor: "country",
        Filter: ColumnFilter
    },
    {
        Header: "Correo electrónico",
        accessor: "email",
        Filter: ColumnFilter
    },
    {
        Header: "Estado",
        accessor: "active",
        Filter: ColumnFilter
    },

]