import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/styles'
import { NavLink } from 'react-router-dom'

const style=makeStyles({
    header:{
        background:"#111111",
    },
    tabs:{
         color:"#FFFFFF",
         textDecoration:"none",
         marginRight:10,
         fontFamily:"cursive",
         fontSize:14,
    }
})


const NavBar = () => {
    const styles=style();
  return (
    <AppBar className={styles.header} position="static" >
      <Toolbar>
        <NavLink className={styles.tabs} to ="./"> CRUD</NavLink>
        <NavLink className={styles.tabs} to ="/Users"> USERS</NavLink>
        <NavLink className={styles.tabs} to="/AddUsers"> ADD USERS</NavLink>
      </Toolbar>
    </AppBar>
    )
}

export default NavBar