let employeeCustomers = []

export const useEmployeeCustomers = () => employeeCustomers.slice()

export const getEmployeeCustomers = () => fetch("http://localhost:3000/employeeCustomers")
    .then(res => res.json())
    .then(parsedEmployeeCustomers => employeeCustomers = parsedEmployeeCustomers) 