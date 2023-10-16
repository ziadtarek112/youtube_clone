import { Box, Stack } from '@mui/material'
import React from 'react'
import { VideoCard, ChannelCard } from '../../components'

const Video = ({ videos, direction }) => {
    console.log(videos);
    return (
        <Stack direction={direction || "row"}
            flexWrap="wrap"
            justifyContent="start"
            gap={1}>
            {videos.map((item, id) => (
                <Box key={id}>
                    {item.id.videoId && <VideoCard video={item} />}
                    {item.id.channelId && <ChannelCard channelDetail={item} />}
                </Box>

            ))}
        </Stack>
    )
}

export default Video