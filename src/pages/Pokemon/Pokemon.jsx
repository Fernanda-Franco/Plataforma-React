import { useForm } from "react-hook-form";

export function Pokemon() {

    const { register, handleSubmit } = useForm();
    
    function onSubmit(data) {
        console.log(data);
    }
    
    
    return (
        <div className="pokemon">
            <h1>Cadastro de Pokemon</h1>
            <form onSubmit={handleSubmit(onSubmitPokemon)} noValidate>
                <label htmlfor="name">Nome</label><br/>
                <input type="text" id="nome" {...register("nome")}/><br/>

                <label htmlfor="tipo">Tipo</label><br/>
                <input type="text" id="tipo" {...register("tipo")}/><br/>

                <label htmlfor="altura">Altura</label><br/>
                <input type="number" id="altura" {...register("altura")}/><br/>

                <label htmlfor="peso">Peso</label><br/>
                <input type="number" id="peso" {...register("peso")}/><br/>

                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}