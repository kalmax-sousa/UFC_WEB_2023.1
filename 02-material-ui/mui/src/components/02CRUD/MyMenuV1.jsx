import {AppBar, Box, Button, Container, Menu, MenuItem, Toolbar, Typography} from '@mui/material'
import AdbIcon from '@mui/icons-material/Adb';
import { useState } from 'react';

const MyMenuV1 = () => {
    
    const [anchorElProfessor, setAnchorElProfessor] = useState(null)

    const handleOpenProfMenu = (event) => {
        setAnchorElProfessor(event.currentTarget)
    }

    const handleCloseProfMenu = () => {
        setAnchorElProfessor(null)
    }

    const profDropMenu = () => {
        return(
            <Box>
                <Button
                    sx={{
                        my: 2,
                        color: 'white'
                    }}
                    onClick={handleOpenProfMenu}
                    
                >
                    Professores
                </Button>

                <Menu 
                    anchorEl={anchorElProfessor}
                    open={!!anchorElProfessor}
                    onClose={handleCloseProfMenu}
                >
                   <MenuItem onClick={handleCloseProfMenu}>
                        <Typography>Cadastrar</Typography>
                   </MenuItem>

                   <MenuItem onClick={handleCloseProfMenu}>
                        <Typography>Listar</Typography>
                   </MenuItem> 
                </Menu>
            </Box>
        )
    }

    return(
        <AppBar>
            <Container maxWidth='xl'>
                <Toolbar>
                    <AdbIcon/>
                    <Typography 
                        variant='h5'
                        component="a"
                        href="/"
                        sx={{
                            textDecoration: 'none',
                            ml: 1,
                            fontFamily: 'monospace',
                            fontWeight:700,
                            letterSpacing: ".2rem",
                            color: 'white'
                        }}
                    >
                        CRUD
                    </Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            flex: 1,
                            alignItems: 'center',
                            ml: 3,
                        }}
                    >
                        {profDropMenu()}

                        <Button
                            sx={{
                                my: 2,
                                color: 'white'
                            }}
                        >
                            Alunos
                        </Button>

                        <Button
                            sx={{
                                my: 2,
                                color: 'white'
                            }}
                        >
                            Sobre
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default MyMenuV1