import {Box, Button, Container, Link, TextField, Typography} from '@mui/material'

const SignIn = () => {
    return(
        <Container maxWidth='xs' >
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                marginTop={16}
            >
                <Typography component="h1" variant="h5">
                    Sign In
                </Typography>

                <TextField 
                    required
                    margin="normal"
                    fullWidth
                    id="email"
                    label="Endereço de e-mail"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField 
                    required
                    margin="normal"
                    fullWidth
                    id="password"
                    label="Senha"
                    name="password"
                    type="password"
                />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{mt: 3, mb: 2}}
                >
                    Sign In
                </Button>

                <Box
                    width="100%"
                    display="flex"
                    justifyContent="space-between"
                >
                    <Link
                        href="#"
                        variant="body1" 
                        underline="none"
                        className="link"
                    >
                        Forgot password?
                    </Link>
                    <Link
                        href="#"
                        variant="body1" 
                        underline="none"
                        className="link"
                    >Don't have an account? Sign Up</Link>
                </Box>
            </Box>
        </Container>
    )
}

export default SignIn