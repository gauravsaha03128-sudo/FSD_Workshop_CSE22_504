import fs from "fs";

const file = "attendance.txt";
// Add student
function addStudent(name) {
    fs.appendFileSync(file, name + "\n");
    console.log("Student added");
}
// Show all student
function showStudents() {
    if (fs.existsSync(file)) {
        const data = fs.readFileSync(file, "utf8");
        console.log("\nAttendance List:");
        console.log(data);
    } else {
        console.log("File does not exist");
    }
}

// Update student
function updateStudent(oldName, newName) {
    let data = fs.readFileSync(file, "utf8");
    data = data.replace(oldName, newName);
    fs.writeFileSync(file, data);
    console.log("Student updated");
}
// Delete student
function deleteStudent(name) {
    let data = fs.readFileSync(file, "utf8");
    let students = data.split("\n");
    students = students.filter(student => student !== name);
    fs.writeFileSync(file, students.join("\n"));
    console.log("Student deleted");
}
// Test the functions
addStudent("Rahul");
addStudent("Aman");
addStudent("Priya");
showStudents();
updateStudent("Aman", "Rohit");
showStudents();
deleteStudent("Rahul");
showStudents();