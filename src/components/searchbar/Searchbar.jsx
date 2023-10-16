import { Search } from '@mui/icons-material'
import { IconButton, Paper } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const [serachTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`search/${serachTerm}`)
        setSearchTerm('');
    }
    return (
        <Paper
            component="form"
            onSubmit={handleSubmit}
            sx={{
                borderRadius: 20,
                border: '1px solid #e3e3e3',
                pl: 2,
                boxShadow: 'none',
                mr: { sm: 5 }
            }}
        >
            <input className='search-bar'
                placeholder='Search...'
                value={serachTerm}
                onChange={(e) => { setSearchTerm(e.target.value) }} />
            <IconButton sx={{ p: '10px', color: 'red' }}>
                <Search />
            </IconButton>

        </Paper>
    )
}

export default SearchBar