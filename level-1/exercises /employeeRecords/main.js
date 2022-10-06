const employees = [];

function Employee( name, jobTitle, salary, status){
    this.name = name,
    this.jobTitle = jobTitle,
    this.salary = salary, 
    this.status = "Full Time"
    this.printEmployeeForm = function (){
    console.log("Employee name: ",this.name);
    console.log("Job Title: ",this.jobTitle);
        console.log("Annual Salary: ",this.salary);
        console.log("Employment Status: ",this.status);
    }
}


const employee1 = new Employee( "Miles", "Manager","$80,000")


const employee2 = new Employee( "Laura", "chef", "$60,000")


const employee3 = new Employee("Peter Parker","photographer","$40,000")


employee1.printEmployeeForm();
employee2.printEmployeeForm();
employee3.printEmployeeForm();

employees.push(employee1, employee2, employee3);
console.log(employees);