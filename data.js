// Sample data for Array Data Transformation Challenge
// Use this employee dataset to practice your array manipulation skills

const employees = [
  { name: "Alice Johnson", department: "Engineering", salary: 95000, years: 3, email: "alice@techcorp.com" },
  { name: "Bob Smith", department: "Marketing", salary: 65000, years: 1, email: "bob@techcorp.com" },
  { name: "Carol Davis", department: "Engineering", salary: 120000, years: 5, email: "carol@techcorp.com" },
  { name: "David Wilson", department: "Sales", salary: 70000, years: 2, email: "david@techcorp.com" },
  { name: "Eve Brown", department: "Marketing", salary: 80000, years: 4, email: "eve@techcorp.com" },
  { name: "Frank Miller", department: "Engineering", salary: 88000, years: 2, email: "frank@techcorp.com" },
  { name: "Grace Lee", department: "Sales", salary: 75000, years: 3, email: "grace@techcorp.com" },
  { name: "Henry Garcia", department: "Engineering", salary: 110000, years: 6, email: "henry@techcorp.com" },
  { name: "Iris Chen", department: "Marketing", salary: 68000, years: 1, email: "iris@techcorp.com" },
  { name: "Jack Thompson", department: "Sales", salary: 82000, years: 4, email: "jack@techcorp.com" }
];

// Additional challenge data
const projects = [
  { id: 1, name: "Website Redesign", department: "Marketing", budget: 50000, status: "completed" },
  { id: 2, name: "Mobile App", department: "Engineering", budget: 120000, status: "in-progress" },
  { id: 3, name: "Sales Dashboard", department: "Sales", budget: 30000, status: "planned" },
  { id: 4, name: "API Integration", department: "Engineering", budget: 80000, status: "completed" },
  { id: 5, name: "Customer Portal", department: "Engineering", budget: 100000, status: "in-progress" }
];

// Export for use in your solutions
module.exports = { employees, projects }; // Uncommented for import purpose

/* 
CHALLENGE TASKS:
1. Find High Earners - Return array of employees earning over $75,000
2. Department Summary - Create object showing average salary by department  
3. Senior Staff - Get names of employees with 3+ years experience
4. Total Payroll - Calculate total salary cost for all employees
5. Promotion Candidates - Find employees in Engineering with 2+ years making under $100k
*/ 