import React from 'react'
import HeaderMenu from './HeaderMenu';
import { useState } from 'react';
import {AppBar,Box,InputBase,Toolbar,Typography,styled
} from "@mui/material"
import {BookmarkAdd, ExpandMore, Menu} from '@mui/icons-material';
import { logoURL  } from './constants/constant'
import { useNavigate } from 'react-router-dom';
import {routePath} from "../common/constants/route"
const StyledToolBar=styled(Toolbar)`
background:#121212;
min-height:56px !important;
padding:0 115px !important;
justify-content:space-between;
& > * {
  padding:0 16px;
}
& > div{
  display:flex;
  align-items:center;
  cursor:pointer;
  & > p{
    font-size:14px;
    font-weight:600
  }
}
& > p{
  font-size:14px;
  font-weight:600
}
`;

const InputSearchField=styled(InputBase)`
background:#fff;
height:30px;
width:55%;
border-radius:5px;
`

const Logo=styled("img")({
  width:64
})

const Header = () => {
  const [open,setOpen]=useState(null);
  const navigate=useNavigate();
  const handleClick=(e)=>{
    setOpen(e.currentTarget)
  }

  const handleClose=()=>{
    setOpen(null);
  }
  return (
   <AppBar position='static'>
    <StyledToolBar>
      <Logo src={logoURL} alt='logo' onClick={(e)=>navigate(routePath.home)} style={{cursor:'pointer'}} />
      <Box onClick={handleClick}>
        <Menu /> 
        <Typography>Menu</Typography>
      </Box>
      <HeaderMenu open={open} handleClose={handleClose} />
      <InputSearchField/>
      <Typography>IMDb<Box component="span">Pro</Box></Typography>
      <Box><BookmarkAdd/>
      <Typography>
        Watchlist
        </Typography></Box>
        <Typography>SignIn</Typography>
        <Box>
          <Typography>EN</Typography>
          <ExpandMore />
        </Box>
    </StyledToolBar>
   </AppBar>
  )
}

export default Header