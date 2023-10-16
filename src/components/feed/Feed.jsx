import { Stack, Typography } from '@mui/material'
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react'
import { Video, Sidebar } from '../../components'
import { fetchFromApi } from '../../utils/fetchFromApi';

const Feed = () => {
    console.log(process.env.APi_KEY);
    const [selectedCategory, setSelectedCategory] = useState('New');
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
        .then((data)=> setVideos(data.items))
    }, [selectedCategory])
    return (
        <Stack
            sx={{ flexDirection: { sx: "column", md: "row" } }}>
            <Box sx={{
                height: { sx: 'auto', md: '92vh' }
                , borderRight: '1px solid #3d3d3d'
                , px: { sx: 0, md: 2 }
            }}>
                <Sidebar selectedCategory ={selectedCategory} setSelectedCategory={setSelectedCategory} />
            </Box>

            <Box p={2} sx={{overflowY :"auto" , height: '90vh', flex: 2 }}>
                <Typography variant='h4' fontWeight='bold' mb={2}
                    sx={{ color: 'white' }}
                >{selectedCategory}
                    <span style={{ color: '#F31503' }}> Videos</span>
                </Typography>
                <Video videos = {videos}/>
            </Box>
        </Stack>
    )
}

export default Feed