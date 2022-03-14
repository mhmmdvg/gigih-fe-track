const students = [
  { name: "Vasya", age: 20 },
  { name: "Petya", age: 25 },
  { name: "Kolya", age: 30 },
];

const name = "John";
const age = 29;
const newStudent = { name, age };

students.push(newStudent);
students.forEach((student) => {
  console.log(student.name);
});

const newStudents = [...students, newStudent];
console.log(newStudents);

function studentsAgeReducer(acc, student) {
  return acc + student.age;
}

function averageAge(students) {
  const totalAge = students.reduce(studentsAgeReducer, 0);

  return totalAge / students.length;
}

const students2 = [
  { name: "Vasya", age: 20 },
  { name: "Petya", age: 21 },
  { name: "Kolya", age: 20 },
];

console.log(averageAge(students2));

const mapStudents = students2.map((student) => student.age * 2);

console.log(mapStudents);

////////////////////////////////////////////////////////////////////////////////
// Language: javascript
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter((number) => number % 2 === 0);

console.log("evenNumbers", evenNumbers);

const numberSum = numbers.reduce((acc, number) => acc + number, 0);
// The output is 55

//* Process *//
// acc   current_number   result
// 0            1          1
// 1            2          3
// 3            3          6
// 6            4          10
// 10           5          15
// 15           6          21
// 21           7          28
// 28           8          36
// 36           9          45
// 45           10         55

console.log("numberSum", numberSum);

const value = null;
if (value) {
  console.log(`${value} is truthy`);
} else {
  console.log(`${value} is falsy`);
}

//* optional chaining object1.value?.object2.value?.object3.value
