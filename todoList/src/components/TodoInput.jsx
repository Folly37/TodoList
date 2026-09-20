import React, { useState } from 'react';
import { Stack, TextField, Button } from '@mui/material';

const TodoInput = ({ onAdd }) => {
    const [text, setText] = useState('');

    const handleAdd = () => {
        if (!text.trim()) return;
        onAdd(text);
        setText('');
    };

    return (
        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
            <TextField
                fullWidth
                size="small"
                label="Новая задача"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
            />
            <Button variant="contained" onClick={handleAdd}>
                Добавить
            </Button>
        </Stack>
    );
};

export default TodoInput;