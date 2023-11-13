import * as React from 'react';
import {styled, useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {Avatar, CSSObject, Typography} from "@mui/material";
import DeashboardImage from '../assets/FeaturedCoverImage.png';
import json from '../static/data.json';
import TrendingSection from "../component/TrendingSection";
import {useState} from "react";
import Featured from "../component/Featured";
import {getList, drawerWidth} from "../static/NavBarListData";



const openedMixin = (theme: any): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: any): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({theme}) => ({
    height: '200px',
    backgroundColor: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));


const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        backgroundColor: 'black',
        background: 'transparent',
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const sectionStyle = {
    height: '1500px',
    width: '100%',
    background: `url('${DeashboardImage}') no-repeat center center fixed`,
    backgroundColor: 'black',
    flexGrow: 1,
    p: 3,
    backgroundSize: 'cover',
    backgroundPosition: 'start',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start'
}


export default function BoardContainer() {
    const [data, setData] = useState(json)
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [homeOpen, setHomeOpen] = useState(true);
    const [tvShowsOpen, setTvShowsOpen] = useState(false);
    const [moviesOpen, setMoviesOpen] = useState(false);
    const [genresOpen, setGenresOpen] = useState(false);
    const [watchLaterOpen, setWatchLaterOpen] = useState(false);

    const choseNavigateByIndex = (index: number) => {
        const flags = Array
            .from({length: getList.length})
            .fill(false) as boolean[];
        flags[index] = true
        setSearchOpen(flags[0]);
        setHomeOpen(flags[1]);
        setTvShowsOpen(flags[2]);
        setGenresOpen(flags[3]);
        setMoviesOpen(flags[4]);
        setWatchLaterOpen(flags[5]);
    }

    const handleNavigationItemClick = (label: string) => {
        switch (label) {
            case 'Search':
                choseNavigateByIndex(0)
                break;
            case 'Home':
                choseNavigateByIndex(1)
                break;
            case 'TV Shows':
                choseNavigateByIndex(2)
                break;
            case 'Movies':
                choseNavigateByIndex(3)
                break;
            case 'Genres':
                choseNavigateByIndex(4)
                break;
            case 'Watch Later':
                choseNavigateByIndex(5)
                break;
            default:
                break;
        }
    };

    const handleDrawerOpen = (label: string): void => {
        setOpen(true);
        handleNavigationItemClick(label)
    };

    const handleDrawerClose = (): void => {
        setOpen(false);
    };

    return (
        <Box sx={{display: 'flex', height: "100%"}}>
            <CssBaseline/>
            <Drawer sx={{background: 'transparent'}} variant="permanent" open={open}>
                <DrawerHeader>
                    {open && <>
                        <Avatar
                            alt="User Avatar"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6843Ok3kDj66soe1Z5hwkreSIaXDmSCE2kw&usqp=CAU"
                            sx={{width: 64, height: 64}}
                        />
                        <Typography variant="h6" sx={{color: 'white', marginLeft: 2}}>
                            Daniel
                        </Typography>
                        <IconButton sx={{color: 'white'}} onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                        </IconButton>
                    </>}
                </DrawerHeader>
                <List sx={{backgroundColor: 'black', color: 'white', height: '1200px'}}>
                    {getList.map((item, index) => (
                        <ListItem key={index} disablePadding sx={{display: 'block'}}>
                            <ListItemButton
                                onClick={() => handleDrawerOpen(item.label)}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <img src={item.icon}/>
                                <ListItemText primary={item.label} sx={{marginLeft: '10px', opacity: open ? 1 : 0}}/>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Box component="main" sx={sectionStyle}>
                {homeOpen && <Box sx={{padding: '50px'}}>
                    <Featured featured={data.Featured}/>
                    <br/>
                    <TrendingSection videos={data.TendingNow}/>
                </Box>}
                {searchOpen && <Box sx={{color: 'white', padding: '50px'}}>
                    <h1>TO DO Search page</h1>
                </Box>}
                {tvShowsOpen && <Box sx={{color: 'white', padding: '50px'}}>
                    <h1>TO DO TV Shows page</h1>
                </Box>}
                {moviesOpen && <Box sx={{color: 'white', padding: '50px'}}>
                    <h1>TO DO TV Movies page</h1>
                </Box>}
                {genresOpen && <Box sx={{color: 'white', padding: '50px'}}>
                    <h1>TO DO TV Genres page</h1>
                </Box>}
                {watchLaterOpen && <Box sx={{color: 'white', padding: '50px'}}>
                    <h1>TO DO TV Watch Later page</h1>
                </Box>}
            </Box>
        </Box>
    );
}
