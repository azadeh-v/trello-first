import React, { useState } from "react";
import AddForm from "./AddForm";
import Card from "./Card";
import { nanoid } from "nanoid";
import EditForm from "./EditForm";

const Column = (props) => {
  
  const [isColEditing, setColEditing] = useState(false);
  const [newLabel,setNewLabel]=useState("");
  const [cards, setCards] = useState(props.cards);
  const [columnList,setColumnList]=useState(props.colList)
  const cardList = cards.map(card => (
    <Card
      id={card.id}
      name={card.name}
      key={card.id}
      onEdit={cardEditHandler}
      onMove={onCardMove}
    />
  ));
  //To add a card
  function addHandler(name) {
    const newCard = { id: "card-" + nanoid(), name: name };
    setCards([...cards, newCard]);
    const changeColList=columnList.map(column=>{
      if(props.id===column.id) {
        return{...Column, cards:column.cards.push(newCard)} 
      } 
      return column;
    }); 
    setColumnList(changeColList);
  }
  
  // To edit a card
  function cardEditHandler(id, newName) {
    const editedCardList = cards.map(card => {
      if (id === card.id) {
        return {...card, name: newName}
      }
      return card;
    });
    setCards(editedCardList);
  }
  function onCardMove(cardId, newColumnLabel){
    props.onMove(cardId, newColumnLabel, props.id);
  }
  

  function submitHandler(e) {
    e.preventDefault();
    if (newLabel === "") {
      alert("Please Enter a New Label!")
    }else{
      props.onEdit(props.id, newLabel);
      setNewLabel("");
      setColEditing(false);
    }
  }

  function changeHandler(e) {
    setNewLabel(e.target.value);
  }

  const handelCancel=() => setColEditing(false);

  const viewMode=(
    <div>
      <h4 className="">{props.label} </h4>
      <button type="button" className="btn" onClick={()=>setColEditing(true)}>
          Change Label 
      </button>
    </div>
  );
  const editMode=(
    <EditForm
      id = {props.id}
      name={props.label}
      newName={newLabel}
      onChange={changeHandler}
      onSubmit={submitHandler}
      onCancel={handelCancel}
      description="New label for"
    />    
);
     
  return(
    <li className="column">
      {isColEditing ? editMode : viewMode }
      <AddForm onAdd={addHandler} item="card"/>                
      <h4 id="list-card">
        Cards of {props.label}:
      </h4> 
      <ul className="card" aria-labelledby="list-heading">
        {cardList}                      
      </ul>
    </li>
  );
}

export default Column;