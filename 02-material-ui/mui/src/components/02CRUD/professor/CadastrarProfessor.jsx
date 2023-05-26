import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import MainPage from "../MainPAge"
import { useState } from "react"

const CadastrarProfessor = () => {

    const [nome, setNome] = useState("")
    const [curso, setCurso] = useState("")
    const [titulacao, setTitulacao] = useState("GRAD")
    const [areaInteresse, setAreaInteresse] = useState({
        es: false,
        al: false,
        ds: false,
        mc: false
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(nome, curso, titulacao, areaInteresse)
    }

    const handleCheckbox = (event) => {
        setAreaInteresse({
            ...ai, [event.target.name]: event.target.checked
        })
    }

    return(
        <MainPage>
            <Typography variant="h5" fontWeight="bold">
                Cadastrar Professor
            </Typography>
            
            <Box
                component={"form"}
                onSubmit={handleSubmit}
            >
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="nome"
                    name="nome"
                    label="Nome Completo"
                    autoFocus
                    onChange={e => setNome(e.target.value)}
                />

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="curso"
                    name="curso"
                    label="Curso"
                    autoFocus
                    onChange={e => setCurso(e.target.value)}
                />

                <FormControl fullWidth sx={{mt: 2}}>
                    <InputLabel id="select-tit-label">
                        Titulação
                    </InputLabel>
                    <Select
                        labelId="select-tit-label"
                        value={titulacao}
                        label="Titulação"
                        onChange={e => setTitulacao(e.target.value)}
                    >
                        <MenuItem value="GRAD">Graduação</MenuItem>
                        <MenuItem value="MEST">Mestrado</MenuItem>
                        <MenuItem value="DOUT">Doutorado</MenuItem>
                    </Select>
                </FormControl>

                <FormControl
                    component="fieldset"
                    variant="standard"
                    sx={{mt: 2, ml: 2}}
                >
                    <FormLabel
                        component="legend"
                        sx={{fontSize: 12, mb: 2}}
                    >
                        Áreas de Interesse
                    </FormLabel>
                    
                    <FormGroup>
                        <FormControlLabel control={<Checkbox checked={areaInteresse.es}  name="es" onChange={handleCheckbox}/>} label="Engenharia de Software"/>
                        <FormControlLabel control={<Checkbox checked={areaInteresse.al}  name="al" onChange={handleCheckbox}/>} label="Algoritmos"/>
                        <FormControlLabel control={<Checkbox checked={areaInteresse.ds}  name="ds" onChange={handleCheckbox}/>} label="Desenvolvimento de Software"/>
                        <FormControlLabel control={<Checkbox checked={areaInteresse.mc}  name="mc" onChange={handleCheckbox}/>} label="Matematica Computacional"/>
                    </FormGroup>
                </FormControl>

                <Box sx={{display: "flex", justifyContent: "center"}}>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{my: 3}}
                    >
                        Cadastrar
                    </Button>
                </Box>
            </Box>
        </MainPage>
    )
}

export default CadastrarProfessor