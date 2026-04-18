let text = "Sunday"
console.log(typeof text);
console.log(text);

text=12.345
console.log(typeof text);
console.log(text);

text=true
console.log(typeof text);
console.log(text);

text=[[0,1,0.2,"venkat"],{"fname":"venkat","lname":"mamidi"}]
console.log(typeof text);
console.log(text);
console.log("===========================");
console.log(text[0][3][2]);
console.log(text[1].fname);
let str=text[1].fname
console.log(str);

let fullname="My name is venkat and i had a dream"
console.log(fullname.includes("is"));
console.log(fullname.startsWith("is"));
console.log(fullname.endsWith("is"));
console.log(fullname.trim("is"));
console.log(fullname.split(" ")[3]);
let ar=[1,2,3,4,5].push(6)
console.log(ar)

let ar1=[1,2,3,4,5].unshift(6)
console.log(ar1)