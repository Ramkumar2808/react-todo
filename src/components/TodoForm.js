import React, { useState } from "react";

import { v4 as uuidv4 } from "uuid";

function TodoForm({ addTodo }) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (fname.trim() !== "" && lname.trim() !== "") {
      setError(false);
      const tempTodo = {
        id: uuidv4(),
        fname,
        lname,
      };
      addTodo(tempTodo);
      setFname("");
      setLname("");
    } else {
      setError(true);
    }
    console.log(error);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="fname" className="form-label">
          First Name
        </label>
        <input
          type="text"
          className="form-control"
          id="fname"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />
        {error && (
          <span className="d-block invalid-feedback">
            All Field is Required
          </span>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="lname" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          className="form-control"
          id="lname"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default TodoForm;
