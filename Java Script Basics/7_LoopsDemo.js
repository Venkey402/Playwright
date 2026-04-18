for(let i=0;i<10;i++)
{
    if(i==2)
    {
        continue
    }
     if(i==7)
    {
        break
    }
    console.log(i*i);    
}

let arr = [1,2,3,4,5,6,7,8]

arr.forEach(element => {
    console.log("for each ",element);
    
});

let arrObj = {
    "Fname": "Venkatarao",
 "Lname": "Mamidi",
}

console.log(arrObj);

for(x in arrObj)
{
console.log(arrObj[x]);
}