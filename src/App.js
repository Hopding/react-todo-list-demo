import React, { useState } from 'react';

import 'semantic-ui-css/semantic.min.css';

import { Button, Input, Divider } from 'semantic-ui-react';

function App() {
  const [newTodoText, setNewTodoText] = useState('');

  const [todoItems, setTodoItems] = useState([
    { text: 'Wash dishes' },
    { text: 'Do homework' },
    { text: 'Fix dinner' },
  ]);

  const handleAddTodo = () => {
    const newTodoItems = [...todoItems, { text: newTodoText }];
    setTodoItems(newTodoItems);
    setNewTodoText('');
  };

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div style={{ marginTop: '25px' }}>
        <TodoInput
          todoText={newTodoText}
          onChangeTodoText={event => {
            setNewTodoText(event.target.value);
          }}
        />
        <AddButton onClickAdd={handleAddTodo} />
        <TodoHeader />
        <Divider />
        <TodoList items={todoItems} />
      </div>
    </div>
  );
}

function TodoHeader() {
  return <h1>TODO List</h1>;
}

function TodoInput({ todoText, onChangeTodoText }) {
  return (
    <Input
      style={{ marginRight: '15px' }}
      placeholder="Learn React..."
      value={todoText}
      onChange={onChangeTodoText}
    />
  );
}

function AddButton({ onClickAdd }) {
  return (
    <Button primary={true} onClick={onClickAdd}>
      Add
    </Button>
  );
}

function TodoList({ items }) {
  return items.map(item => <div>{item.text}</div>);
}

export default App;
