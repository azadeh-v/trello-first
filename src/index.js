import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const DATA= [
  {
    id: 'column-1',
    label: 'List A',
    cards: [{ id: 'card-1', name: 'Task 1'}, { id: 'card-2', name: 'Task 2'}, { id: 'card-3', name: 'Task 3'}] 
  },
  {
    id: 'column-2',
    label: 'List B',
    cards: [{ id: 'card-4', name: 'Task 4'}]
  },
  {
    id: 'column-3',
    label: 'List C',
    cards: []
  }
];

ReactDOM.render(
  <React.StrictMode>
    <App columns={DATA}/>
  </React.StrictMode>,
  document.getElementById('root')
);


