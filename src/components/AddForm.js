import React, { useState } from "react";

const AddForm = (props) => {
  const [name, setName] = useState("");
  
  function changeHandler(e) {
    setName(e.target.value);
  }
  //To submit a new item (a column or card)
  function submitHandler(e) {
    e.preventDefault();
    if (name === "") {
      alert(`Please Enter a ${props.item} Name!`)
    }else{
      props.onAdd(name);
      setName("");  
    }    
  }
  
  return(
    <form onSubmit={submitHandler}>
      <h3 className="">
        <label htmlFor="new-todo-input" className="label__lg">
          What {props.item} is needed?
        </label>
      </h3 >
      <input
        type="text"
        id="new-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={changeHandler}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add {props.item}
      </button>
    </form>
  );

}

export default AddForm;