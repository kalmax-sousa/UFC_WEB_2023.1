import {AppBar, Box, Button, Container, Menu, MenuItem, Toolbar, Typography} from '@mui/material'
import AdbIcon from '@mui/icons-material/Adb';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const MyMenuV1 = () => {
    
    const [anchorElProfessor, setAnchorElProfessor] = useState(null)
    const [anchorElAluno, setAnchorElAluno] = useState(null)

    const handleOpenMenu = (set, event) => {
        set(event.currentTarget)
    }

    const handleCloseMenu = (set) => {
        set(null)
    }

    function profDropMenu(set, link, text) {
        return(
            <Box>
                <Button
                    sx={{
                        my: 2,
                        color: 'white'
                    }}
                    onClick={(e) => handleOpenMenu(setAnchorElProfessor, e)}
                    
                >
                    Professores
                </Button>

                <Menu
                    anchorEl={anchorElProfessor}
                    open={Boolean(anchorElProfessor)}
                    onClick={() => handleCloseMenu(setAnchorElProfessor)}
                >
                    <MenuItem
                        onClick={() => handleCloseMenu(setAnchorElProfessor)}
                        component={Link}
                        to={"/professor/cadastrar"} 
                    >
                        <Typography>Cadastrar</Typography>
                   </MenuItem>

                   <MenuItem onClick={() => handleCloseMenu(setAnchorElProfessor)}>
                        <Typography>Listar</Typography>
                   </MenuItem> 
                </Menu>
            </Box>
        )
    }
    function itemMenu(state, set, text, link) {
        return(
            <Box>
                <Button
                    sx={{
                        my: 2,
                        color: 'white'
                    }}
                    onClick={(e) => handleOpenMenu(set, e)}
                    
                >
                    {text}
                </Button>

                <Menu
                    anchorEl={state}
                    open={Boolean(state)}
                    onClick={() => handleCloseMenu(set)}
                >
                    <MenuItem
                        onClick={() => handleCloseMenu(set)}
                        component={Link}
                        to={link.cadastrar} 
                    >
                        <Typography>Cadastrar</Typography>
                    </MenuItem>

                    <MenuItem 
                        onClick={() => handleCloseMenu(set)}
                        component={Link}
                        to={link.listar} 
                    >
                        <Typography>Listar</Typography>
                   </MenuItem> 
                </Menu>
            </Box>
        )
    }

    

    return(
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar>
                    <AdbIcon
                        sx={{
                            display: "flex",
                            mr: 1
                        }}
                    />
                    <Typography
                        variant="h5"
                        component="a"
                        href="/"
                        sx={{
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".2rem",
                            color: "white",
                            textDecoration: "none"
                        }}
                    >
                        CRUD V1
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            flex: 1,
                            alignItems: "center",
                            justifyContent: "flex-end",
                            ml: 3
                        }}
                    >
                        {itemMenu(anchorElProfessor, setAnchorElProfessor, "Professores", {cadastrar: "/professor/cadastrar", listar: "/professor"})}
                        {itemMenu(anchorElAluno, setAnchorElAluno, "Alunos", {cadastrar: "/aluno/cadastrar", listar: "/aluno"})}

                        <Button
                            sx={{
                                my: 2, color: "white"
                            }}
                            onClick={() => alert("Clicou em Sobre!")}
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