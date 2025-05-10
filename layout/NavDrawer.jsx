import { Box, ListItem, ListItemButton, ListItemText, Typography, Divider } from "@mui/material";
import { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { navItems } from "./Config";
import { listItemStyle } from "../theme";
import DropdownListItem from "../src/components/DropdownListItem/DropdownListItem";

export const NavDrawer = ({handleDrawerMobile}) => {
  // const { loggedUser } = useContext(userContext);
  const [itemList, setItemList] = useState(navItems);

  return (

    <Box 
      component={'div'}
      sx={{  
        bgcolor: "#074469",
        height: '100%',
        px:1,
        borderRight: 'none',
      }}
    >
      <Box 
            component={'div'}
            mt={2}
            sx={{
                // display: mobileOpen ? 'none' : 'flex',
                display: 'flex',
                justifyContent: 'center',
                borderRadius: 0,
                // height: '50px',
                alignItems: 'center',
                mt: 3,
                left: 20
            }}
        >
            <img id='nav-logo' height={100} 
                src='../src/assets/images/logo-muni.png'
            />
        </Box>

        <Box 
            component="nav"
            sx={{
              flexGrow: 1,
              pb:3,
              pt:1
            }}>
          <Box
            // borderBottom={'2px solid white'}
            mx={2}
            mb={6}
          />
            <Box mt={2}>
              {itemList.map((item, index) => (
                item.dropdown.length === 0 ? (
                  <ListItem key={index} disablePadding>
                    <ListItemButton
                      id='nav-item' 
                      component={NavLink}
                      to={item.path}
                      sx={{...listItemStyle}}
                      onClick={handleDrawerMobile}
                    >
                      {item.icon}
                      <ListItemText style={{fontSize: '12px'}} key={index} primary={item.title} disableTypography/>
                    </ListItemButton>
                  </ListItem>
                ) : (
                  <DropdownListItem key={index} drawerItem={item}></DropdownListItem>
                ) 
              ))}
              
            </Box>
        </Box>
      </Box>
)
} 
      
