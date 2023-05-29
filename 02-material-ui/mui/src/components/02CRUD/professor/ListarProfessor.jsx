import { Box, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import {Delete, Edit} from "@mui/icons-material"   
import MainPage from "../MainPAge"
import { Link } from "react-router-dom"

const ListarProfessor = () => {

    const professores = [
        {id: 0, nome: "Vito Corleone", curso: "SI", titulacao: "GRAD"},
        {id: 1, nome: "Michael Corleone", curso: "DD", titulacao: "DOUT"},
        {id: 2, nome: "Kay Adams", curso: "CC", titulacao: "MEST"},
        {id: 3, nome: "Luca Brasil", curso: "SI", titulacao: "GRAD"},
        {id: 4, nome: "Peter Clemenza", curso: "SI", titulacao: "DOUT"},
    ]

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
                                        <IconButton aria-label="delete" color="error">
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