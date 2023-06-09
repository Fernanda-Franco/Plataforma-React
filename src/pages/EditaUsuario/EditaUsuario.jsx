import { Button } from "react-bootstrap";
import { usuarios } from "../../data/usuarios";
import { useParams, useNavigate } from "react-router-dom";

export function EditaUsuario() {

    // useParams é uma função que retorna um objeto
    //Este objeto contem os parametros passados pela rota
        let params = useParams();
    let id = params.id;
    
    const usuario = usuarios.find(usuario => {
        return usuario.id === parseInt(id); // retorna valor booleano que satisfaza a pesquisa
    });

let navigate = useNavigate();

    function editar() {
        //Capturar as informações do formulário
        //Validar os dados de entrada
        //Modificar as informações no banco de dados
        navigate("/usuarios")
    }

    return (
        <div className="edita-usuario">
            <h2>{usuario.nome}</h2>
            <span>{usuario.email}</span>
            <br />
            <span>{usuario.idade} anos</span>
            <br />
            <Button variant="dark">Editar</Button>
        </div>
    )
}