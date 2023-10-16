import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchFromApi } from '../../utils/fetchFromApi';
import ReactPlayer from 'react-player';
import { CheckCircle } from '@mui/icons-material';
import Video from '../video/Video';

const VideoDetail = () => {
    const { id } = useParams();
    const [video, setVideo] = useState(null);
    const [relatedVideos, setRelatedVideos] = useState([]);

    useEffect(() => {
        fetchFromApi(`videos?part=snippet,statistics&id=${id}`)
            .then((data) => { setVideo(data.items[0]) });
        fetchFromApi(`search?part=snippet&relatedToVideoid=${id}&type=video`)
            .then((data) => { setRelatedVideos(data.items) });
    }, [id]);

    if (!video)
        return 'loadig...'

    const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = video;
    return (
        <Box minHeight="95vh">
            <Stack direction={{ xs: 'cloumn', md: 'row' }}>
                <Box flex={1}>
                    <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
                        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
                            className="react-player"
                            controls />
                        <Typography color="#fff" variant='h5' fontWeight='bold' p={2}>{title}</Typography>
                        <Stack direction="row"
                            justifyContent="space-between"
                            sx={{ color: '#fff' }}
                            px={2}
                            py={1}
                        >
                            <Link to={`/channel/${channelId}`}>
                                <Typography variant={{ sm: 'subtitle', md: 'h6' }}
                                    color="#fff">
                                    {channelTitle}
                                    <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
                                </Typography>
                            </Link>
                            <Stack direction="row" gap="20px" alignItems="center">
                                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                                    {parseInt(viewCount).toLocaleString()} Views
                                </Typography>
                                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                                    {parseInt(likeCount).toLocaleString()} Views
                                </Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>
                <Box
                    px={2}
                    py={{ md: 1, xs: 5 }}
                    justifyContent="center"
                    alignItems="center">
                    <Video videos={relatedVideos} direction="column" />
                </Box>
            </Stack>
        </Box>
    )
}

export default VideoDetail