import { useComputers } from "./computersProvider.js"
import { useEmployees } from "./employeesProvider.js"
import { employeeComponent } from "./employeeComponent.js"
import { useDepartments } from "./departmentsProvider.js"
import { useLocations } from "./locationsProvider.js"
import { useCustomers } from "./customerProvider.js"
import { useEmployeeCustomers } from "./employeeCustomerProvider.js"
import { customerComponent } from "./customerComponent.js"


const contentTarget = document.querySelector(".customers")

export const customerList = () => {
    const employees = useEmployees()
    const customers = useCustomers()
    const customerRelationships = useEmployeeCustomers()

  const render = () => {
    contentTarget.innerHTML = customers.map(customer => {
      let relationships = customerRelationships.filter(current => current.customerId === customer.id)

      const employee = relationships.map(rel => {
        return employees.find(employee => employee.id === rel.employeeId)
    })
      const html = customerComponent(customer, employee)

      return html
    }).join("")
  }
render()
}