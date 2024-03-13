import { AppBar, Container, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <AppBar position='static'>
        <Container maxWidth='xl'>
            <Toolbar>
                <Typography>
                    Bank of React
                </Typography>
            </Toolbar>
        </Container>
    </AppBar>
  )
}

export default Navbar