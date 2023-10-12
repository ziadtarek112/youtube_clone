import { Stack, Typography } from '@mui/material'
import Box from '@mui/material/Box';
import React from 'react'
import {Video,Sidebar} from '../../components'

const Feed = () => {
    return (
        <Stack
            sx={{ flexDirection: { sx: "column", md: "row" } }}>
            <Box sx={{
                height: { sx: 'auto', md: '92vh' }
                , borderRight: '1px solid #3d3d3d'
                , px: { sx: 0, md: 2 }
            }}>
            <Sidebar/>
            </Box>

            <Box p={2} sx={{height :'90vh',flex :2}}>
                <Typography variant='h4' fontWeight='bold' mb={2}
                sx={{color : 'white'}}
                >New 
                    <span style={{color : '#F31503'}}> Videos</span>
                </Typography>
            </Box>
        </Stack>
    )
}

export default Feed