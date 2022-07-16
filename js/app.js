const employees =[];

function Employee(employeeId,fullName,department,level,image){
    this.employeeId = employeeId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
     this.salary = this.randomNumberSalary ();
     this.image = image ;
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
    // console.log(this.salary);
    return this.salary
}
// Employee.prototype.print =function (){
// document.write(`${this.fullName} : ${this.level} JD <br>`)};
// instances

const employee1 = new Employee(1000,"Ghazi Samer","Administration","Senior" ,"https://github.com/LTUC/new-prep-course-std/blob/main/Day10/Task/assets/Ghazi.jpg?raw=true")
const employee2 = new Employee(1001,"Lana Ali","AFinance","Senior", "../assets/Lana.jpg")
const employee3 = new Employee(1002,"Tamara Ayoub","Marketing","Senior","../assets/Tamara.jpg")
const employee4 = new Employee(1003,"Safi Walid","Administration","Mid-Senior","../assets/Safi.jpg")
const employee6 = new Employee(1005,"Omar Zaid","Development","Senior","../assets/Omar.jpg")
const employee7 = new Employee(1006,"Rana Saleh","Development","Junior","../assets/Rana.jpg")
const employee8 = new Employee(1007,"Hadi Ahmad","Finance","Mid-Senior","../assets/Hadi.jpg")

//  console.log(employees);
//  employee1.print();
//  employee2.print();
//  employee3.print()
//  employee4.print()
//  employee5.print()
//  employee6.print()
//  employee7.print()

 const h1El = document.getElementById("headingID");
 h1El.textContent ="HR Managment System";
 h1El.style.color = "#354259";
 document.body.style.backgroundColor = "#ECE5C7";

 Employee.prototype.render = function(){
const mainpo = document.getElementById("mainID")
const divEl= document.createElement("div");
   const par = document.createElement("p");

par.textContent = "Name : "+this.fullName              +"Department : "+this.department              +"Level : "+this.level;
divEl.appendChild(par);
const image = document.createElement("img")
 image.src = this.image;
 image.alt = "photo"
 divEl.appendChild(image);
 mainpo.appendChild(divEl);
//  divEl.style.cssText ="text-align:center"
// image.style.cssText ="hight:25% ; width:25%"
// image.style.backgroundColor = "#C2DED1";
image.setAttribute("id","imgID");
divEl.setAttribute("class","div1")
divEl.classList.add("fromJs");
}


function final(){
  for ( let i =0; i< employees.length;i++){
   employees[i].render();
 }
}
final();
