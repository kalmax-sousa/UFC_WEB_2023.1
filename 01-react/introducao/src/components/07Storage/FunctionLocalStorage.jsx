const SaveData = () => {
    const saveData = () => {
        const aluno = {nome: "Kalmax", curso: "si"};
        localStorage.setItem("aluno01", JSON.stringify(aluno));
        sessionStorage.setItem("disciplina", "Desennvolvimento de Software Web");
    }

    return(
        <div>
            {saveData()}
            <LoadData />
        </div>
    );
}

const LoadData = () => {
    const loadData = () => {
        const alunoCarregado = JSON.parse(localStorage.getItem("aluno01"));
        return(
            <>
                <h3>nome: {alunoCarregado.nome}</h3>
                <h3>curso: {alunoCarregado.curso}</h3>
            </>
        );
    }

    return(
        <div>
            {loadData()}
        </div>
    );
}

export default SaveData;