import React from 'react';
import { Stack, ToggleButtonGroup, ToggleButton } from '@mui/material';

const TodoFilters = ({ filter, onChange }) => {
    return (
        <Stack direction="row" justifyContent="center" sx={{ mb: 2 }}>
            <ToggleButtonGroup
                size="small"
                exclusive
                value={filter}
                onChange={(_, value) => value && onChange(value)}
            >
                <ToggleButton value="all">Все</ToggleButton>
                <ToggleButton value="active">Активные</ToggleButton>
                <ToggleButton value="completed">Выполненные</ToggleButton>
            </ToggleButtonGroup>
        </Stack>
    );
};

export default TodoFilters;