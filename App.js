const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift()

fruits.push("Afocado")

console.log(fruits);

let studentsInfo = [
    firstStudent = {
       "name":"omar",
       "age": 20,
       "major":"cs"
   },
    secondStudent = {
       "name":"anas",
       "age":23,
       "major":"MIs"
   },
   thirdStudent = {
    "name": "ahmad",
    "age": 27,
    "major":"Eng"
   },
   fourthStudent ={
    "name": "Khaled",
    "age": 29,
    "major": "Acountant"
   },
   fifthStudent = {
    "name": "Ehab",
    "age": 26,
    "major":"Cis"
   }
]
    studentsInfo.forEach((student)=>{
        const newAge  = student.age + 10
        console.log(`${student.name} : ${newAge}`);
        
    })
for(let i = 0; studentsInfo.length > i; i++ ) {

    console.log(`${studentsInfo[i].name} : ${studentsInfo[i].age + 10} `);
}

const cars = ['BMW','Marcides','Volvo']
cars.unshift('Oppel')
console.log(cars);

const convertToString = function (array) {
    return array.join(' ') 
  };
  console.log(convertToString(["Hello", "i", "am", "John", "Doe"]));



  