let obj1={}
console.log(obj1);
let obj2={"Fname":"Venkatarao","Lname":"Mamidi","Age":36}
console.log(obj2);
obj2.measurements={"Hight":5.4,"Weight":69.20}
console.log(obj2);
obj2.completeAddress={
    "Door No":"50-215",
    "Street": "Bonu street",
    "Village":"Salur",
    "District":"Parvathipuram"}
obj2.familyMembers=["Ramu","Laxmi","Mohan","Devayani","Mahesh","RamaLakshmi"]
console.log(obj2);
console.log("Fname : "+obj2.Fname);
console.log("Age : "+obj2.Age);
console.log("Hight : "+obj2.measurements.Hight);
console.log("District : "+obj2.completeAddress.District);
console.log("familyMembers : "+obj2.familyMembers[3]);
obj1=obj2
console.log(obj1);
delete obj1.Age
console.log(obj1);
console.log(obj2);

let myfun= function()
{
console.log("Inside my fun");
}
myfun()

let addFun =function(x,y) {
    console.log("X is :"+x);
    console.log("y is :"+y);
    if (x+y%2==0) {
        console.log("Sum is even number");        
    } else{
         console.log("Sum is odd number");      
    }
}

addFun(2,4)
addFun(3,4)