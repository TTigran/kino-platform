import React, { useState } from 'react';
import { Box } from '@mui/material';
import SelectedVideo from './SelectedVideo';
import {Video, TrendingSectionProps} from "../types";

const TrendingSection: React.FC<TrendingSectionProps> = ({ videos }: TrendingSectionProps) => {
    const [selectedVideo, setSelectedVideo] = useState<Video | boolean>(false);

    const handleVideoClick = (video: Video) => {
        setSelectedVideo(video);
    };

    return (
        <>
            {selectedVideo && <SelectedVideo video={selectedVideo as any} />}
            <Box className="trending-section">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        flexWrap: 'wrap',
                    }}
                    className="carousel"
                >
                    {videos.slice(0, 8).map((video: Video) => (
                        <Box
                            key={video.Id}
                            className="carousel-item"
                            onClick={() => handleVideoClick(video)}
                            sx={{
                                margin: '0 10px 20px',
                                '@media (min-width: 600px)': {
                                    maxWidth: 'calc(50% - 20px)',
                                },
                                '@media (min-width: 960px)': {
                                    maxWidth: 'calc(33.33% - 20px)',
                                },
                            }}
                        >
                            <img
                                src={require(`../assets/${video.CoverImage}`)}
                                alt={`Trending ${video.Title}`}
                                style={{ borderRadius: '8px', cursor: 'pointer', width: '100%' }}
                            />
                        </Box>
                    ))}
                </Box>
            </Box>
        </>
    );
};

export default TrendingSection;