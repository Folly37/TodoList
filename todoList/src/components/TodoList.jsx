import React, { useState } from 'react';
import { List, Typography } from '@mui/material';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggle, onDelete, onEdit }) => {
    const [editingId, setEditingId] = useState(null);

    if (todos.length === 0) {
        return (
            <Typography align="center">
                Задач нет
            </Typography>
        );
    }

    return (
        <List>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    isEditing={editingId === todo.id}
                    onStartEdit={() => setEditingId(todo.id)}
                    onStopEdit={() => setEditingId(null)}
                    onToggle={onToggle}
                    onDelete={onDelete}
                    onEdit={(text) => {
                        onEdit(todo.id, text);
                        setEditingId(null);
                    }}
                />
            ))}
        </List>
    );
};

export default TodoList;