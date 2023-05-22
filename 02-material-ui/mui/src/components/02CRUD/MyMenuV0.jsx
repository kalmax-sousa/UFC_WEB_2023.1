import {AppBar, Box, Button, Container, Toolbar, Typography} from '@mui/material'
import AdbIcon from '@mui/icons-material/Adb';

const MyMenuV0 = () => {
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
                        <Button
                            sx={{
                                my: 2,
                                color: 'white'
                            }}
                        >
                            Professores
                        </Button>

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

export default MyMenuV0