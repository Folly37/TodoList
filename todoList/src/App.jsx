import React from 'react';
import { Container, Typography } from '@mui/material';
import TodoInput from './components/TodoInput';
import TodoFilters from './components/TodoFilters';
import TodoList from './components/TodoList';
import { useTodos } from './hooks/useTodos';

function App() {
  const {
    todos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
  } = useTodos();

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h5" align="center" gutterBottom>
        TODO
      </Typography>

      <TodoInput onAdd={addTodo} />
      <TodoFilters filter={filter} onChange={setFilter} />
      <TodoList
        todos={todos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onEdit={editTodo}
      />
    </Container>
  );
}

export default App;