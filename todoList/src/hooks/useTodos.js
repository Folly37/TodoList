import { useState } from 'react';

export const useTodos = () => {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('all');

    const addTodo = (text) => {
        if (!text.trim()) return;
        setTodos((prev) => [
            ...prev,
            { id: Date.now(), text: text.trim(), completed: false },
        ]);
    };

    const toggleTodo = (id) => {
        setTodos((prev) =>
            prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
        );
    };

    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((t) => t.id !== id));
    };

    const editTodo = (id, text) => {
        if (!text.trim()) return;
        setTodos((prev) =>
            prev.map((t) => (t.id === id ? { ...t, text: text.trim() } : t))
        );
    };

    let visibleTodos = todos;
    if (filter === 'active') visibleTodos = todos.filter((t) => !t.completed);
    if (filter === 'completed') visibleTodos = todos.filter((t) => t.completed);

    return {
        todos: visibleTodos,
        filter,
        setFilter,
        addTodo,
        toggleTodo,
        deleteTodo,
        editTodo,
    };
};