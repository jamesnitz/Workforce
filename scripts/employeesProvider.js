let employees = []

export const useEmployees = () => employees.slice()

export const getEmployees = () => fetch("http://localhost:3000/employees")
    .then(res => res.json())
    .then(parsedEmployees => employees = parsedEmployees)