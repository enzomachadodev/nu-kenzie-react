import { StyledForm } from "./style"

const Form = () => {
    return (
        <StyledForm>
            <label htmlFor="descricao">
                Descrição
            </label>
            <input type="text" name="descricao" placeholder="Digite aqui sua descrição"/>
            <div className="inputBox">
                <div className="valueBox">
                    <label htmlFor="valor">Valor</label>
                    <input type="number" name="valor" placeholder="0"/>
                </div>
                <div className="typeBox">
                    <label htmlFor="tipo">Tipo de valor</label>
                    <select name="tipo">
                        <option value="" selected>Selecione</option>
                        <option value="entrada" selected>Entrada</option>
                        <option value="saida" selected>Saída</option>
                    </select>
                </div>
                
            </div>
            <button className="button-1">
                    Inserir Valor
            </button>
        </StyledForm>
    )
}

export default Form