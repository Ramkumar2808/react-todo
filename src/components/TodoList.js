import React from "react";

function TodoList({ todos, handleDelete }) {
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={todo.id}>
              <td> {index + 1}</td>
              <td>{todo.fname}</td>
              <td>{todo.lname}</td>
              <td>
                <button className="btn btn-primary btn-sm me-2">Edit</button>
                <button
                  id={todo.id}
                  className="btn btn-danger btn-sm"
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {!todos.length && (
            <tr className="text-center">
              <td colSpan={5}>No Data Available at this moment</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TodoList;
