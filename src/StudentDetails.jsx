import React, { useState } from "react";

export default function StudentDetails() {
  const [students] = useState([
    { id: 1, name: "Madhuri", course: "CSE", grade: "A" },
    { id: 2, name: "Ravi", course: "ECE", grade: "B+" },
    { id: 3, name: "Anita", course: "ME", grade: "A-" }
  ]);

  return (
    <div>
      <h2>Student Details</h2>
      <table border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.course}</td>
              <td>{student.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
