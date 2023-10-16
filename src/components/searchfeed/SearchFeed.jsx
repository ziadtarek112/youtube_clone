import { Stack, Typography } from '@mui/material'
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react'
import { Video, Sidebar } from '../../components'
import { fetchFromApi } from '../../utils/fetchFromApi';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {
    const  {searchTerm} = useParams();
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        fetchFromApi(`search?part=snippet&q=${searchTerm}`)
            .then((data) => setVideos(data.items))
    }, [searchTerm])
    return (


        <Box p={2} sx={{ overflowY: "auto", height: '90vh', flex: 2 }}>
            <Typography variant='h4' fontWeight='bold' mb={2}
                sx={{ color: 'white' }}
            >Search Results for : 
                <span style={{ color: '#F31503' }}> {searchTerm}</span>
            </Typography>
            <Video videos={videos} />
        </Box>

    )
}

export default SearchFeed