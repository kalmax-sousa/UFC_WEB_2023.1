import { Box, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import {Delete, Edit} from "@mui/icons-material"   
import MainPage from "../MainPAge"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from 'axios'

const ListarAluno = () => {
    const navigate = useNavigate();

    const [alunos, setAlunos] = useState([]);
    const [change, setChange] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:3333/aluno')
            .then(res => setAlunos(res.data))
            .catch(err => console.log(err))
    }, [])

    function deleteAluno(id){
        if(window.confirm("Tem certeza que deseja excluir?")){
            axios.delete(`http://localhost:3333/aluno/delete/${id}`)
                .then(res => {
                    const newArray = alunos.filter(aluno => aluno._id !== Number(id))
                    setAlunos(newArray)
                    setChange(!change)
                })
                .catch(err => console.log(err))
        }
    }

    return(
        <MainPage>
            <Typography variant="h5" fontWeight="bold"> Listar Aluno </Typography>

            <TableContainer component={Paper} sx={{mt: 4}}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>NOME</TableCell>
                            <TableCell>CURSO</TableCell>
                            <TableCell>IRA</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {alunos.map((aluno) => (
                            <TableRow key={aluno._id} sx={{'&:nth-of-type(odd)': {backgroundColor: "#e5e5e5"}}}>
                                <TableCell>{aluno._id}</TableCell>
                                <TableCell>{aluno.nome}</TableCell>
                                <TableCell>{aluno.curso}</TableCell>
                                <TableCell>{aluno.ira}</TableCell>
                                <TableCell>
                                    <Box>
                                        <IconButton aria-label="delete" color="error" onClick={() => deleteAluno(aluno._id)}>
                                            <Delete />
                                        </IconButton>
                                        <IconButton 
                                            aria-label="delete" 
                                            color="primary"
                                            sx={{ml: 2}}
                                            component={Link}
                                            to={`/aluno/editar/${aluno._id}`}
                                        >
                                            <Edit />
                                        </IconButton>
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </MainPage>
    )
}

export default ListarAluno