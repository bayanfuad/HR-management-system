const employees =[];

function Employee(employeeId,fullName,department,level){
    this.employeeId = employeeId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
     this.salary = this.randomNumberSalary ();
    employees.push(this);
}
Employee.prototype.randomNumberSalary =function ()
{ if(this.level==="Senior"){
	 this.salary = Math.floor(Math.random() * (2000- 1500 + 1) +1500)};
    if(this.level==="Mid-Senior"){
        this.salary = Math.floor(Math.random() * (1500- 1000 + 1) +1000) 
    };  if(this.level==="Junior"){
        this.salary = Math.floor(Math.random() * (1000- 500 + 1) +500) 
    };
    this.salary = this.salary-this.salary*.075
    employees.push(this.salary);

    // console.log(this.salary);
    return this.salary
}

 
Employee.prototype.print = function (){
    document.write(`${this.fullName} :${this.salary} JD <br>`)

}


// console.log(`${this.fullName} : ${this.salary} JD`)
// for(let i=0; i<=employees.length; i++){
//     employees[i].print
 
//  document.write("anaswelcome")

const employee1 = new Employee(1000,"Ghazi Samer","Administration","Senior")
const employee2 = new Employee(1001,"Lana Ali","AFinance","Senior")
const employee3 = new Employee(1002,"Tamara Ayoub","Marketing","Senior")
const employee4 = new Employee(1003,"Safi Walid","Administration","Mid-Senior")
const employee5 = new Employee(1004,"Safi Walid","Administration","Mid-Senior")
const employee6 = new Employee(1005,"Omar Zaid","Development","Senior")
const employee7 = new Employee(1006,"Rana Saleh","Development","Junior")
const employee8 = new Employee(1007,"Hadi Ahmad","Finance","Mid-Senior")

 console.log(employees);
 employee1.print();
 employee2.print();
 employee3.print();
 employee4.print();
 employee5.print();
 employee6.print();
 employee7.print();
 employee8.print();
// console.log(employee2)
// Employee.prototype.randomNumbeSalaryr =function (min, max)
// {
// 	return Math.floor(Math.random() * (max - min + 1) + min);
// }