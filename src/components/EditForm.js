import React from "react";

const EditForm =(props) => {
  return(
    <form className="" onSubmit={props.onSubmit}>
      <div className="">
        <label className="" htmlFor={props.id}>
          {props.description} {props.name}
        </label>
        <input 
          id={props.id} 
          className="" 
          type="text" 
          value={props.newName}
          onChange={props.onChange}
        />          
      </div>
      <div className="">
        <button
          type="button"
          className=""
          onClick={props.onCancel}
        >
          Cancel          
        </button>
        <button type="submit" className="" >
          Save          
        </button>
      </div>
    </form>
  );

}

export default EditForm;