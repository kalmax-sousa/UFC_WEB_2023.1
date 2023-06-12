import { Box, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import {Delete, Edit} from "@mui/icons-material"   
import MainPage from "../MainPAge"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from 'axios'

const ListarProfessor = () => {
    const navigate = useNavigate();

    const [professores, setProfessores] = useState([]);
    const [change, setChange] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:3333/professor')
            .then(res => setProfessores(res.data))
            .catch(err => console.log(err))
    }, [])

    function deleteProfessor(id){
        if(window.confirm("Tem certeza que deseja excluir?")){
            axios.delete(`http://localhost:3333/professor/delete/${id}`)
                .then(res => {
                    const newArray = professores.filter(professor => professor.id !== Number(id))
                    setProfessores(newArray)
                    setChange(!change)
                })
                .catch(err => console.log(err))
        }
    }

    return(
        <MainPage>
            <Typography variant="h5" fontWeight="bold"> Listar Professor </Typography>

            <TableContainer component={Paper} sx={{mt: 4}}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>NOME</TableCell>
                            <TableCell>CURSO</TableCell>
                            <TableCell>TITULAÇÃO</TableCell>
                            <TableCell>AÇÕES</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {professores.map((professor) => (
                            <TableRow key={professor.id} sx={{'&:nth-of-type(odd)': {backgroundColor: "#e5e5e5"}}}>
                                <TableCell>{professor.id}</TableCell>
                                <TableCell>{professor.nome}</TableCell>
                                <TableCell>{professor.curso}</TableCell>
                                <TableCell>{professor.titulacao}</TableCell>
                                <TableCell>
                                    <Box>
                                        <IconButton aria-label="delete" color="error" onClick={() => deleteProfessor(professor.id)}>
                                            <Delete />
                                        </IconButton>
                                        <IconButton 
                                            aria-label="delete" 
                                            color="primary"
                                            sx={{ml: 2}}
                                            component={Link}
                                            to={`/professor/editar/${professor.id}`}
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

export default ListarProfessor