import React, { Fragment, useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("");

  const onChange = (event) => {
    const { value } = event.target;
    setDescription(value);
  };

  const onSubmitForm = async (event) => {
    event.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:3001/api/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/";
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div>
      <Fragment>
        <h1 className="text-center mt-5">Pern To-do list</h1>
        <form className="d-flex mt-5" onSubmit={onSubmitForm}>
          <input
            type="text"
            className="form-control"
            value={description}
            onChange={onChange}
          />
          <button className="btn btn-success">Add</button>
        </form>
      </Fragment>
    </div>
  );
};

export default InputTodo;

