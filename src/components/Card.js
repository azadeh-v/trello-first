import React, { useState} from "react";
import EditForm from "./EditForm";
const Card = (props) => {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");
  const [isMoving, setMoving] = useState(false);

  //To submit a new name for a card or  move a cart to another column
  function submitHandler(e) {
    e.preventDefault();
    if (isEditing) {
      if (newName === "") {
        alert("Please Enter a New Name!")
      }else{
        props.onEdit(props.id, newName);
        setNewName("");
      }
      setEditing(false);
    }else{
      if (newName === "") {
        alert("Please Enter a Column Label!")
      }else{
        props.onMove(props.id,newName);
        setMoving(false);
      }
    }
  }  

  function changehandler(e) {
    setNewName(e.target.value);
  }
  const cancelHandler=() => {
    if (isEditing) {
      setEditing(false)
    }else{
      setMoving(false)
    } 
  }

  //To define an editing template for the card
  const editingTemplate = (
    <EditForm
      id = {props.id}
      name={props.name}
      newName={newName}
      key={props.id}
      onChange={changehandler}
      onSubmit={submitHandler}
      onCancel={cancelHandler}
      description="New name for"
     />   
  );

  //To define a moving template for the card
  const movingTemplate=(
    <EditForm
      id = {props.id}
      name={props.name}
      newName={newName}
      key={props.id}
      onChange={changehandler}
      onSubmit={submitHandler}
      onCancel={cancelHandler}
      description="Change column for"
     />
  );

    //To define a view template for cards
  const viewTemplate = (
    <div>
      <div className="">
        <label className="">
        {props.name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn" onClick={() => setEditing(true)}>
          Edit
        </button>
        <button type="submit" className="btn"onClick={() => setMoving(true)}>
          Move
        </button>
      </div>
    </div>
  );

  return <li className="">{isEditing ? editingTemplate : (
    isMoving ? movingTemplate : viewTemplate)}</li>;
}

export default Card;