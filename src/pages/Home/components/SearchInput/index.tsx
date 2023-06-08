import { SearchInputContainer } from "./styles"

export function SearchInput(){
    return(
        <SearchInputContainer>
            <header>
                <h3>Publicações</h3>
                <span>
                    16 publicacoes
                </span>
            </header>

            <input 
                type="text" 
                placeholder="Buscar"
            />
        </SearchInputContainer>
    )
}