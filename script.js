/** @format */

let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
  ];
  
  function PrintStudentswithMap() {
    //Write your code here , just console.log
   let result = "";
    arr.map((student) => {
      if (student.marks > 50) {
        result += `<p>ID: ${student.id}, Name: ${student.name}, Age: ${student.age}, Marks: ${student.marks}</p>`;
      }
    });
    document.getElementById("map-result").innerHTML = result;
  }
  
  function PrintStudentsbyForEach() {
    //Write your code here , just console.log
    let result = "";
    arr.forEach((student) => {
      if (student.marks > 50) {
        result += `<p>ID: ${student.id}, Name: ${student.name}, Age: ${student.age}, Marks: ${student.marks}</p>`;
      }
    });
    document.getElementById("foreach-result").innerHTML = result;
  }
  
  function addData() {
    //Write your code here, just console.log
    arr.push({ id: 4, name: "susan", age: "20", marks: 45 });
    let result = "";
    arr.forEach((student) => {
      result += `<p>ID: ${student.id}, Name: ${student.name}, Age: ${student.age}, Marks: ${student.marks}</p>`;
    });
    document.getElementById("add-data-result").innerHTML = result;
  }
  
  function removeFailedStudent() {
    //Write your code here, just console.log
    arr = arr.filter((student) => student.marks >= 50);
    let result = "";
    arr.forEach((student) => {
      result += `<p>ID: ${student.id}, Name: ${student.name}, Age: ${student.age}, Marks: ${student.marks}</p>`;
    });
    document.getElementById("remove-failed-result").innerHTML = result;
  }
  
  
  function concatenateArray() {
    //Write your code here, just console.log
    let newArr = [
      { id: 4, name: "sarah", age: "22", marks: 75 },
      { id: 5, name: "dave", age: "25", marks: 60 },
      { id: 6, name: "kim", age: "24", marks: 65 },
    ];
    let result = "";
    let concatArr = arr.concat(newArr);
    concatArr.forEach((student) => {
      result += `<p>ID: ${student.id}, Name: ${student.name}, Age: ${student.age}, Marks: ${student.marks}</p>`;
    });
    document.getElementById("concatenatedArray").innerHTML = result;
  }
  
