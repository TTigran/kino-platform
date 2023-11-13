import React from 'react';
import { Box, Typography } from '@mui/material';
import ReactPlayer from "react-player";
import {SelectedVideoProps} from "../types";
import {formatDuration} from "../util";

const SelectedVideo: React.FC<SelectedVideoProps> = ({ video }: SelectedVideoProps) => {
    return (
        <Box sx={{color: 'white',  padding: '16px', maxWidth: '600px', margin: 'auto' }}>
            <Typography variant="h4" sx={{ marginBottom: '8px' }}>
                {video.Title}
            </Typography>
            <Typography variant="subtitle1">{`Release Year: ${video.ReleaseYear}`}</Typography>
            <Typography variant="subtitle1">{`MPA Rating: ${video.MpaRating}`}</Typography>
            <Typography variant="subtitle1">{`Category: ${video.Category}`}</Typography>
            <Typography variant="subtitle1">{`Duration: ${formatDuration(parseInt(video.Duration))}`}</Typography>
            <Typography variant="subtitle1">{`Description: ${video.Description}`}</Typography>
            <ReactPlayer
                url={video.VideoUrl}
                controls
                width="100%"
                height="auto"
                style={{ marginTop: '16px' }}
            />
        </Box>
    );
};

export default SelectedVideo;