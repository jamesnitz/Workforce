
import { useComputers } from "./computersProvider.js"
import { useEmployees } from "./employeesProvider.js"
import { employeeComponent } from "./employeeComponent.js"
import { useDepartments } from "./departmentsProvider.js"
import { useLocations } from "./locationsProvider.js"
import { useCustomers } from "./customerProvider.js"
import { useEmployeeCustomers } from "./employeeCustomerProvider.js"

const contentTarget = document.querySelector(".employees")

export const employeesList = () => {
    const employees = useEmployees()
    const computers = useComputers()
    const departments = useDepartments()
    const locations = useLocations()
    const customers = useCustomers()
    const customerRelationships = useEmployeeCustomers()

    const render = () => {
      
        contentTarget.innerHTML = employees.map(employee => {
            // Find this employee's computer
            const computer = computers.find(computer => computer.id === employee.computerId)
            //Find employee's deptartment
            const department = departments.find(department => department.id === employee.departmentId)
            //Find employee's locations
            const location = locations.find(location => location.id === employee.locationId)
            //Find all customer relationships for the current employeeor matching the join table by employee ID
            const relationships = customerRelationships.filter(current => current.employeeId === employee.id)
            //For each relationship, find the corresponding company or Then match that by customer ID    
            const assignedCustomers = relationships.map(rel => {
                const foundCustomer = customers.find(customer => customer.id === rel.customerId)
                return foundCustomer
            })

            // Get HTML representation of employee
            const html = employeeComponent(employee, computer, department, location, assignedCustomers)

            return html
        }).join("")
    }

    render()
}
