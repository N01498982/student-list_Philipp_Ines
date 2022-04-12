import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudent } from "../../slices/studentSlice";

export const AddStudentForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [classroom, setClassroom] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Add Student Form</h1>
      <label>Name: </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <label>Age: </label>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      ></input>
      <label>Classroom: </label>
      <input
        type="text"
        value={classroom}
        onChange={(e) => setClassroom(e.target.value)}
      ></input>
      <button
        onClick={() =>
          dispatch(addStudent({ name, age, classroom }))
        }
      >
        Add Student
      </button>
    </div>
  );
};