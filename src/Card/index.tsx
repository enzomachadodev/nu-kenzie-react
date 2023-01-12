import { StyledCard } from "./style"

const Card = () => {

    return (
        <StyledCard className={"type"}>
            <div className="description">
                <h3>{"description"}</h3>
                <div className="value">
                    <p>{`R$ ${"value"}`}</p>
                    <button>trash</button>
                </div>
                <p>{"type"}</p>
            </div>
        </StyledCard>
    )

}

export default Card