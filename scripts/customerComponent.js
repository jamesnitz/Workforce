export const customerComponent = (customers, employees) => {
  return `
  <div class="customer__Card">
  <header>
  <h2>${customers.name}</h2>
</header>
  <ul>
  ${employees.map(
    employee => `
    
    <li> ${employee.firstName} ${employee.lastName}</li>
    `
  ).join("")
    }
  </ul>
  </div>
  `
}