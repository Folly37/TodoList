import React, { useState, useEffect } from 'react';
import {
    ListItem,
    ListItemText,
    Checkbox,
    TextField,
    IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';

const TodoItem = ({
    todo,
    isEditing,
    onStartEdit,
    onStopEdit,
    onToggle,
    onDelete,
    onEdit,
}) => {
    const [editText, setEditText] = useState(todo.text);

    useEffect(() => {
        if (isEditing) setEditText(todo.text);
    }, [isEditing, todo.text]);

    const handleSave = () => {
        onEdit(editText);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') handleSave();
        if (e.key === 'Escape') onStopEdit();
    };

    return (
        <ListItem
            divider
            secondaryAction={
                <>
                    <IconButton
                        edge="end"
                        onClick={isEditing ? handleSave : onStartEdit}
                    >
                        {isEditing ? <CheckIcon /> : <EditIcon />}
                    </IconButton>
                    <IconButton edge="end" onClick={() => onDelete(todo.id)}>
                        <DeleteIcon />
                    </IconButton>
                </>
            }
        >
            <Checkbox
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
            />

            {isEditing ? (
                <TextField
                    fullWidth
                    variant="standard"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyDown={handleKeyDown}
                    autoFocus
                    InputProps={{ disableUnderline: true }}
                    sx={{
                        '& input': { p: 0 },
                        '& .MuiInputBase-root': { outline: 'none' },
                        '& input:focus': { outline: 'none' },
                    }}
                />
            ) : (
                <ListItemText
                    primary={todo.text}
                    sx={{
                        textDecoration: todo.completed ? 'line-through' : 'none',
                    }}
                />
            )}
        </ListItem>
    );
};

export default TodoItem;