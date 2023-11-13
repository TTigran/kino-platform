import React, {useState} from 'react';
import {Box, Button, Typography} from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import {FeaturedProps} from "../types";
import {formatDuration} from "../util";

const commonStyle = {
    fontSize: '32px',
    height: '72px',
    width: '240px',
    padding: '10px 20px',
    borderRadius: '40px',
};

const textStyle = {fontSize: '20px', fontWeight: 'bold'}

const Featured: React.FC<FeaturedProps> = ({featured}: FeaturedProps) => {
    return (
        <Box sx={{width:'50%'}}>
            <Typography variant='body1' sx={{...textStyle, color: 'grey'}}>
                {featured.Category}
            </Typography><br/>
            <img src={require(`../assets/${featured.TitleImage}`)}/>
            <Typography variant='body1' sx={{...textStyle, color: 'white'}}>
                {`${featured.ReleaseYear}  ${featured.MpaRating}  ${formatDuration(parseInt(featured.Duration))}`}
            </Typography><br/>
            <Typography variant='body1' sx={{...textStyle, color: 'white'}}>
                {featured.Description}
            </Typography><br/>
            <Button sx={{
                ...commonStyle,
                color: 'black',
                backgroundColor: 'white',
            }} component="label" variant="contained" startIcon={<PlayArrowIcon sx={{width:'32px',height:'32px'}}/>} >
                <b>Play</b>
            </Button>
            <Button sx={{
                ...commonStyle,
                marginLeft: '20px',
                color: 'white',
                backgroundColor: '#2727F5',
            }} component="label" variant="contained" >
                <b>More Info</b>
            </Button>
        </Box>
    );
};

export default Featured;