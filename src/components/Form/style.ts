import styled from "styled-components"; 

export const StyledForm = styled.form`
    width: 100%;
    max-width: 400px;
    height: auto;
    padding: 2rem 1rem;
    border: 1px solid var(--gray-2);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (max-width:768px) {
        max-width: unset;
    }


    label{
        color: var(--gray-4);
    }

    input, select {
        padding: 1rem;
        font-size: 1rem;
        background-color: var(--gray-1);
        border: 2px solid transparent;
        border-radius: 8px;
        font-weight: 600;
        width: 100%;
    }

    input:focus,select:focus {
        border: 2px solid var(--gray-3);
    }

    .inputBox {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        
        
        div {
            display: flex;
            flex-direction: column;
            width: 45%;
            height: 100%;
            gap: 1rem;
        }
    }


`