import React from 'react'
import {AppBar, Toolbar, styled, Box, Typography, IconButton, Drawer, List, ListItem} from '@mui/material'
import Search from './Search'
import CustomButtons from './CustomButtons'
import { Link } from 'react-router-dom'
import { Menu } from '@mui/icons-material'
import { useState } from 'react'

const StyledHeader = styled(AppBar)`
background: #2874f0;
height: 55px;
`

const Component = styled(Link)`
  margin-Left:12%;
  line-height:0;
  text-decoration:none;
  color:inherit;
`

const SubHeading = styled(Typography)`
  font-size:10px;
  font-style:italic;
`

const PlusImage = styled('img')({
    width:10,
    height:10,
    marginLeft:4,
    paddingTop:2,
})

const CustomButtonWrapper = styled(Box)(({theme})=>({
  margin: '0 5% 0 auto',
  [theme.breakpoints.down('md')]:{
    display:'none'
  }
}))

const MenuButton = styled(IconButton)(({theme})=>({
  display:'none',
  [theme.breakpoints.down('md')]:{
    display:'block'
  }

}))





const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';


export default function Header() {

  const [open,setOpen] = useState(false);

  const handleOpen=()=>{
    setOpen(true)
  }
  const handleClose=()=>{
    setOpen(false)
  }

  const list =()=>(
    <Box style={{width:'200px'}} onClick={handleClose}>
      <List>
        <ListItem button >
          <CustomButtons/>
        </ListItem>
      </List>
    </Box>
  )

  return (
    <StyledHeader>
     <Toolbar style={{minHeight:55}}>
      <MenuButton color='inherit' onClick={handleOpen}>
        <Menu/>
      </MenuButton>
      <Drawer open={open} onClose={handleClose}>
      {list()}

      </Drawer>
        <Component to='/'>
            <img src={logoURL} alt="LOGO" style={{width: 75}}/>
            <Box style={{display: 'flex'}}>
      <SubHeading>Explore&nbsp;
        <Box component="span" style={{color:'#FFE500'}}>
            Plus
            </Box>
            </SubHeading>
            <PlusImage src={subURL} alt="logo" />
            </Box>
        </Component>
        <Search/>
        <CustomButtonWrapper>
            <CustomButtons/>
        </CustomButtonWrapper>
     </Toolbar>
    </StyledHeader>
  )
}
