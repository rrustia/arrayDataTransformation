// Instructions.txt data - just 5 employees for the challenge

const employeeList = [
  { name: "Alice", department: "Engineering", salary: 95000, years: 3 },
  { name: "Bob", department: "Marketing", salary: 65000, years: 1 },
  { name: "Carol", department: "Engineering", salary: 120000, years: 5 },
  { name: "David", department: "Sales", salary: 70000, years: 2 },
  { name: "Eve", department: "Marketing", salary: 80000, years: 4 }
];

// Task 1 - high earners (salary > $75k)
// .filter() loops through each employee and keeps those matching the condition
// currentEmployee represents the individual employee object being checked in each iteration
const highEarners = employeeList.filter(currentEmployee => currentEmployee.salary > 75000);

// Task 2 - avg salary by department
// .reduce() builds up an object with totals and counts per dept
// departmentSummary is the object tracking totals and counts as we process each employee
// currentEmployee is the individual employee being processed in this iteration
const deptSummary = employeeList.reduce((departmentSummary, currentEmployee) => {
  // if this department hasn't been seen yet, initialize it with total:0 and count:1
  // !departmentSummary[currentEmployee.department] checks if the dept key doesn't exist in the object yet
  // if true, create a new entry for this department with starting values
  if (!departmentSummary[currentEmployee.department]) {
    departmentSummary[currentEmployee.department] = { total: 0, count: 1 };
  } else {
    // otherwise just increment the count and add to total salary
    departmentSummary[currentEmployee.department].count++;
    departmentSummary[currentEmployee.department].total += currentEmployee.salary;
  }
  return departmentSummary; // pass the updated accumulator to the next iteration
}, {}); // {} is the initial value - start with an empty object

// Now calculate averages using Math.round
// Object.keys(deptSummary) gets all the department names (keys) from the object
// .forEach() runs a function for each department name
// departmentName is the current department being processed in this iteration
Object.keys(deptSummary).forEach(departmentName => {
  // calculate average = total salary / number of employees, then round to nearest integer
  deptSummary[departmentName] = Math.round(deptSummary[departmentName].total / deptSummary[departmentName].count);
});

// Task 3 - senior staff (3+ years)
// .filter() keeps only employees where currentEmployee.years >= 3
// .map() transforms each remaining employee object into just their name string
const seniorStaff = employeeList
  .filter(currentEmployee => currentEmployee.years >= 3)
  .map(currentEmployee => currentEmployee.name);

// Task 4 - total payroll
// .reduce() adds up all salaries starting from 0
// totalSalarySum is the running total as we process each employee
const totalPayroll = employeeList.reduce((totalSalarySum, currentEmployee) => totalSalarySum + currentEmployee.salary, 0);

// Task 5 - promotion candidates (Engineering, 2+ years, < $100k)
// .filter() with multiple conditions using && (AND operator)
// currentEmployee.department === 'Engineering' checks if in Engineering
// currentEmployee.years >= 2 checks experience
// currentEmployee.salary < 100000 checks salary threshold
const promotionCandidates = employeeList.filter(currentEmployee => 
  currentEmployee.department === 'Engineering' && 
  currentEmployee.years >= 2 && 
  currentEmployee.salary < 100000
);

// Show results for instructions.txt data
console.log('Instructions.txt data results');
console.log('\nTask 1 - High Earners:');
console.log(highEarners);

console.log('\nTask 2 - Department Summary:');
console.log(deptSummary);

console.log('\nTask 3 - Senior Staff:');
console.log(seniorStaff);

console.log('\nTask 4 - Total Payroll: $' + totalPayroll);

console.log('\nTask 5 - Promotion Candidates:');
console.log(promotionCandidates);

// Now using data.js (10 employees), I will repeat the same tasks as above but with this larger dataset. The code is the same.
const { employees: employeeList2, projects } = require('./data');

// Task 1 - high earners (bigger dataset)
const highEarners2 = employeeList2.filter(currentEmployee => currentEmployee.salary > 75000);

// Task 2 - avg salary by dept
const deptSummary2 = employeeList2.reduce((departmentSummary, currentEmployee) => {
  if (!departmentSummary[currentEmployee.department]) {
    departmentSummary[currentEmployee.department] = { total: 0, count: 1 };
  } else {
    departmentSummary[currentEmployee.department].count++;
    departmentSummary[currentEmployee.department].total += currentEmployee.salary;
  }
  return departmentSummary;
}, {});

Object.keys(deptSummary2).forEach(departmentName => {
  deptSummary2[departmentName] = Math.round(deptSummary2[departmentName].total / deptSummary2[departmentName].count);
});

// Task 3 - senior staff
const seniorStaff2 = employeeList2
  .filter(currentEmployee => currentEmployee.years >= 3)
  .map(currentEmployee => currentEmployee.name);

// Task 4 - total payroll
const totalPayroll2 = employeeList2.reduce((totalSalarySum, currentEmployee) => totalSalarySum + currentEmployee.salary, 0);

// Task 5 - promotion candidates
const promotionCandidates2 = employeeList2.filter(currentEmployee => 
  currentEmployee.department === 'Engineering' && 
  currentEmployee.years >= 2 && 
  currentEmployee.salary < 100000
);

// Show results for data.js
console.log('\n\n=== Data.js Results ===');
console.log('Task 1 - High Earners:');
console.log(highEarners2);

console.log('\nTask 2 - Department Summary:');
console.log(deptSummary2);

console.log('\nTask 3 - Senior Staff:');
console.log(seniorStaff2);

console.log('\nTask 4 - Total Payroll: $' + totalPayroll2);

console.log('\nTask 5 - Promotion Candidates:');
console.log(promotionCandidates2);
