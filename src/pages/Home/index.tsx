import { Profile } from "./components/Profile";
import { SearchInput } from "./components/SearchInput";
import { PostListContainer } from "./styles";

export function Home(){
    return(
        <div>
            <Profile/>
            <SearchInput/>
            <PostListContainer>
                
            </PostListContainer>
        </div>
    )
}