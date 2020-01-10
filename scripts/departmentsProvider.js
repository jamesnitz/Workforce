let departments = []

export const useDepartments = () => departments.slice()

export const getDepartments = () => fetch("http://localhost:3000/departments")
    .then(res => res.json())
    .then(parsedDepartments => departments = parsedDepartments)