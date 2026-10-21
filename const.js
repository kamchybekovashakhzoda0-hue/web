const students = {
    student1: {id: 1, name: "shaha"},
    student2: {id: 1, name: "bob"},
   student3: {id: 1, name: "adinai"},
}
 

 for (let key in students) {
    console.log(students[key].name);
    console.log(students[key].id);
}
