import { StyledList } from "./style"

const List = () => {
return (

    <StyledList>
        <div className="filter">
            <h3>Resumo financeiro</h3>
            <div className="btnBox">
                <button className="button-2">Todos</button>
                <button className="button-2">Entradas</button>
                <button className="button-2">Despesas</button>
            </div>
        </div>

        <ul>
            <h2>Você ainda não possui nenhum lançamento</h2>
            <li className="noItems">
                <div></div>
                <div></div>
            </li>
            <li className="noItems">
                <div></div>
                <div></div>
            </li>
            <li className="noItems">
                <div></div>
                <div></div>
            </li>
        </ul>
    </StyledList>
)
}

export default List