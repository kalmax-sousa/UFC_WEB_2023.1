import { Box, Button, TextField, Typography } from "@mui/material"
import MainPage from "../MainPAge"
import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const CadastrarAluno = () => {

    const navigate = useNavigate()

    const [nome, setNome] = useState("")
    const [curso, setCurso] = useState("")
    const [ira, setIra] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(nome, curso, ira)

        const newAluno = {nome, curso, ira}

        axios.post('http://localhost:3333/aluno/register', newAluno)
            .then(response => {
                alert(`Aluno ${response.data._id} cadastrado com sucesso!`)
                navigate('/aluno')
            })
            .catch(error => {console.log(error)})
    }

    return(
        <MainPage>
            <Typography variant="h5" fontWeight="bold">
                Cadastrar Aluno
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

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="ira"
                    name="ira"
                    label="IRA"
                    autoFocus
                    onChange={e => setIra(e.target.value)}
                    type="number"
                    inputProps={{
                        step: 0.1,
                    }}
                />

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

export default CadastrarAluno