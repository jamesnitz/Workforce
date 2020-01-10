import { getComputers } from "./computersProvider.js";
import { getEmployees } from "./employeesProvider.js";
import { employeesList } from "./employeeList.js";
import {getDepartments} from "./departmentsProvider.js"
import { getLocations } from "./locationsProvider.js";
import { getCustomers } from "./customerProvider.js";
import { getEmployeeCustomers } from "./employeeCustomerProvider.js";
import { customerList } from "./customerList.js";

getEmployees()
.then(getComputers)
.then(getDepartments)
.then(getLocations)
.then(getCustomers)
.then(getEmployeeCustomers)
.then(employeesList)
.then(customerList)