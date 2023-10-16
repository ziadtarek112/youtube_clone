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

        </Stack>
    )
}

export default Navbar