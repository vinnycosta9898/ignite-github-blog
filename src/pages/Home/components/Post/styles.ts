import styled from "styled-components";

export const PostContainer = styled.div`
    width: 100%;
    height: 16.25rem;

    border-radius: 10px;
    background: ${({ theme }) => theme.colors["base-post"]};
    border: 2px solid ${({ theme }) => theme.colors["base-post"]};
    cursor: pointer;
    padding: 2rem;
    transition: 0.4s;

    &:hover{
        border-color: ${({ theme }) => theme.colors["base-label"]};
    }

    div{
        display: flex;
        gap: 1rem;
        margin-bottom: 1.25rem;

        strong{
            flex: 1;
            color: ${({ theme }) => theme.colors["base-title"]};
            font-size: ${({ theme }) => theme.textSizes["title-title-m"]};

            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;

        }

        span{
            width: max-content;
            color: ${({ theme }) => theme.colors["base-span"]};
            font-size: ${({ theme }) => theme.textSizes["text-text-s"]};
        }

        p{
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 4;
        }
    }
`