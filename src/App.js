import React, { useState } from 'react';
import Column from './components/Column';
import AddForm from './components/AddForm';
import { nanoid } from 'nanoid';

function App(props) {
  let initialState;
  const [columns,setColumns] = useState(props.columns);
  
  initialState=true
  const columnList = columns.map(column => (
    <Column
      id={column.id}
      label={column.label}
      cards={column.cards}
      key={column.id}
      onEdit={editHandeler}
      onMove={moveHandler}
      colList= {!initialState? props.columns: columns}
    />
  ));
   
  //To add a column
  function addHandeler(name) {
    const newColumn = { id: "column-" + nanoid(), label: name, cards: [] };
    setColumns([...columns, newColumn]);
  }
  //To edit a column
  function editHandeler(id, newLabel) {
    const editedColumnList = columns.map(column => {
      if (id === column.id) {
        return {...column, label: newLabel}
      }
      return column;
    });
    setColumns(editedColumnList);
  }
//To move a card from a column to another column
function moveHandler(cardId, newColumnLabel,lastColumnId){
    
  const lastColumn = columns.find(column =>column.id===lastColumnId);
  const newColumn = columns.find(column =>column.label===newColumnLabel);
  const movedCard=lastColumn.cards.find(card =>card.id===cardId );

  if (typeof newColumn==="undefined"){ 
    alert("This column does not exist on the board!");
  } else if (newColumn.id!==lastColumn.id){
    const columnList = columns.map(column => {
      if (lastColumn.id === column.id) {
        return {...column, cards: column.cards.filter(card => card.id !== movedCard.id)}
      }  
      if(newColumn.id===column.id) {
        return{...column, cards:column.cards.concat(movedCard)} 
      } 
      return column;
    });
    console.log(columnList);
    setColumns(columnList);      
 } 
}
 
  return (
    <div className="">
      <h1>Trello Board</h1>
      <div className="todoapp stack-large">        
        <AddForm onAdd={addHandeler} item="column"/>
        <ul className="">          
          {columnList}
        </ul>
      </div>
    </div>
  );
}

export default App;
