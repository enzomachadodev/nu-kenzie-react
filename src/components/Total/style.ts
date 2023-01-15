import styled from "styled-components";

export const StyledTotal = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    justify-content: space-around;
    border: 1px solid var(--gray-2);
    border-radius: 8px;

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    span {
        color: var(--color-primary);
        font-weight: 800;
        font-size: 1rem;
    }


`