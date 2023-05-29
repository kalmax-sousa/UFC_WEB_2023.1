import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainPage from '../components/02CRUD/MainPAge';

import CadastrarProfessor from '../components/02CRUD/professor/CadastrarProfessor';
import EditarProfessor from '../components/02CRUD/professor/EditarProfessor';
import ListarProfessor from '../components/02CRUD/professor/ListarProfessor';
import Dashboard from '../components/02CRUD/Dashboard';

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />}/>

                <Route path="/professor" element={<ListarProfessor />}/>
                <Route path="/professor/cadastrar" element={<CadastrarProfessor />}/>
                <Route path="/professor/editar/:id" element={<EditarProfessor />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router