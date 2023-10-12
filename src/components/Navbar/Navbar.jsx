import { Paper, Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../../utils/constants'
import { Searchbar } from '../../components'
import { Search } from '@mui/icons-material'
import IconButton from '@mui/material/IconButton';

const Navbar = () => {
    return (
        <Stack
            direction="row"
            alignItems="center"
            p={2}
            sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between' }}
        >

            <Link to="/">
                <img src={logo} alt='logo' height={40}></img>
            </Link>
            <Searchbar />
            <Paper
                component="form"
                onSubmit={() => { }}
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
                    value=""
                    onChange={() => { }} />
                <IconButton sx={{p:'10px',color : 'red'}}>
                    <Search />
                </IconButton>

            </Paper>
        </Stack>
    )
}

export default Navbar