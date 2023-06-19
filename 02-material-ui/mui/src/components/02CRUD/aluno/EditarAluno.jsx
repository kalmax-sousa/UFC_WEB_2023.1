import { useNavigate, useParams } from "react-router-dom"
import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import MainPage from "../MainPAge"
import { useEffect, useState } from "react"
import axios from 'axios'


const EditarAluno = () => {
    const {id} = useParams()
    const navigate = useNavigate();

    const [nome, setNome] = useState("")
    const [curso, setCurso] = useState("")
    const [ira, setIra] = useState("")

    useEffect(() => {
        axios.get(`http://localhost:3333/aluno/retrieve/${id}`)
            .then(response => {
                setNome(response.data.nome)
                setCurso(response.data.curso)
                setIra(response.data.ira)
            })
            .catch(error => {console.log(error)})
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault()
        
        const alunoAtualizado = {nome, curso, ira}
        axios.put(`http://localhost:3333/aluno/update/${id}`, alunoAtualizado)
            .then(res => {
                alert(`Aluno ${res.data._id} atualzado com sucesso!`)
                navigate("/aluno")
            })
            .catch(err => console.log(err))
    }

    return(
        <MainPage>
            <Typography variant="h5" fontWeight="bold">
                Editar Aluno
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
                    value={nome}
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
                    value={curso}
                    label="Curso"
                    autoFocus
                    onChange={e => setCurso(e.target.value)}
                />

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="ira"
                    name="ira"
                    value={ira}
                    label="IRA"
                    autoFocus
                    type="number"
                    inputProps={{
                        step: 0.1,
                    }}
                    onChange={e => setIra(e.target.value)}
                />

                <Box sx={{display: "flex", justifyContent: "center"}}>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{my: 3}}
                    >
                        Atualizar
                    </Button>
                </Box>
            </Box>
        </MainPage>
    )
}

export default EditarAluno