import styled from "styled-components";

export const ProfileContainer = styled.section`
    width: 100%;
    min-height: 13.25rem;
    background: ${({ theme }) => theme.colors["base-profile"]};
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    margin-top: -5.5rem;
    padding: 2rem 2.5rem;

    display: flex;
    gap: 2rem;
`

export const ProfilePicture = styled.img`
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
    object-fit: cover;
`

export const ProfileDetails = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;

    header{
        display: flex;
        align-items: center;
        justify-content: space-between;

        h1{
            color: ${({ theme }) => theme.colors["base-title"]};
            font-size: ${({ theme }) => theme.textSizes["title-title-l"]};
            line-height: 130%;
        }
    }
`