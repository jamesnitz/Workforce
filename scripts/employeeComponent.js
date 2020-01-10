export const employeeComponent = (employee, computer, dept, location, customers) => {
    return `
      <section class="employees__Card">
          <header>
              <h2>${employee.firstName} ${employee.lastName}</h2>
          </header>
          <div>
            Uses a ${computer.year} ${computer.model}
          </div>
          <div>
             Works in ${dept.name} at the ${location.name} office
          </div>
          <section class="employee__customers">
        Works for:
        <ul>
            ${customers.map(
                customer =>
                    `
                        <li> ${customer.name}</li>
                     `
            ).join("")
        }   
        </ul>
        </section>
    </section>
  `
}
