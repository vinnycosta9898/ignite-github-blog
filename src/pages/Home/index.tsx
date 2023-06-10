import { useCallback, useState, useEffect } from "react";
import { Post } from "./components/Post";
import { Profile } from "./components/Profile";
import { SearchInput } from "./components/SearchInput";
import { PostListContainer } from "./styles";
import { api } from "../../services/api";

export interface IPost{
    title: string;
    body: string;
    createdAt: string;
    number: number;
    html_url: string;
    comments: number;
    user:{
        login: string;
    }
}

const userName = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

export function Home(){
    const [posts, setPosts] = useState<IPost[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const getPosts = useCallback(async(query = "") => {
        try{
            setIsLoading(true);
            const response = await api.get(`/search/issues?q=${query}%20label:published%20repo:${userName}/${repoName}`)
            console.log(response.data.items)
            setPosts(response.data.items)
        }finally{
            setIsLoading(false)
        }
    }, [posts])

    useEffect(() => {
        getPosts()
    }, [])

    return(
        <div>
            <Profile/>
            <SearchInput/>
            <PostListContainer>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </PostListContainer>
        </div>
    )
}