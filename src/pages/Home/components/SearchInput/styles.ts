import styled from "styled-components";

export const SearchInputContainer = styled.form`
    width: 100%;
    margin-top: 4.5rem;
    margin-bottom: 3rem;

    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 0.85rem;

        h3{
            color: ${({ theme }) => theme.colors["base-subtitle"]};
            font-size: ${({ theme })=> theme.textSizes["title-title-s"]};
        }

        span{
            color: ${({ theme }) => theme.colors["base-span"]};
            font-size: ${({ theme })=> theme.textSizes["text-text-s"]};
        }
    }

    input{
        width: 100%;

        background: ${({ theme }) => theme.colors["base-input"]};
        border: 1px solid ${({ theme }) => theme.colors["base-border"]};
        border-radius: 6px;
        color: ${({ theme }) => theme.colors["base-text"]};
        padding: 0.75rem 1rem;
        transition: 0.4s;

        &:focus{
            border-color: ${({ theme }) => theme.colors["brand-blue"]};
            outline: none;
        }

        &::placeholder{
            color: ${({ theme }) => theme.colors["base-label"]};
        }
    }
`