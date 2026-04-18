var arr = ["Ramu","Laxmi","Mohan","Devayani","Mahesh","Rama Laxmi"]

console.log(arr);

console.log(arr[1]);

for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
    
}

var arr2 = [1,null,3.0, "Devayani", true, undefined]

console.log(arr2);

for(let i=0;i<arr2.length;i++)
{
    console.log(arr2[i]);
    
}

const details = {
    fname:"Venkat",
    lname:"mamidi",
    family:arr
}

console.log(details.fname);

console.log(details['lname'])

console.log("=======================================");


for(let i=0;i<details.family.length;i++)
{
    console.log(details.family[i]);    
}

