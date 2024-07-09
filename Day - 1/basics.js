let names=["Arun","Naveen","John"];
console.log(names);
console.log("The length of the list is",names.length); //gives the no: of elements in the list
console.log(names[1]);
console.log("The length of the name is",names[1].length); //gives length of the second element
names.push("Abraham");
console.log(names);
names.pop("John"); //pops the name John, if we simply give pop(), it will pop the last element
console.log(names); 
names.unshift("Anu"); //unshift puts the name in first position
console.log(names);

let person={
    Name:"Meera",
    Age: 41
}

console.log(person);

let persons=[
    {
        Name:"Abhishek",
        Age: 23
    },
    {
        Name:"Deepak",
        Age: 31
    },
    {
        Name:"Aleena",
        Age: 19
    }
]

console.log(persons); //this give the entire list of array elements
console.log(persons[2].Name); //this gives the name of the third element of the array