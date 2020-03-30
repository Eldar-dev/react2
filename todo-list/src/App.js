import React from 'react';
import './App.css';
import Header from './components/Header';
import { InputSearch } from './components/InputSearch';
import TodoList from './components/TodoList';
import AddSave from './components/AddSave';
import TodoFilters from './components/TodoFilters';

function App() {
  return (
    <div className="container">
      <Header />
      <div className="listNav">
     <InputSearch />
     <TodoFilters />
     </div>
     <TodoList />
     <AddSave />
    </div>
  );
}

export default App;
