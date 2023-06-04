import { ExternalLink } from '../../../../components/ExternalLink';
import { ProfileContainer, ProfilePicture, ProfileDetails } from './styles';

export function Profile(){
    return(
        <ProfileContainer>
            <ProfilePicture src="http://github.com/vinnycosta9898.png"/>
            <ProfileDetails>
                <header>
                    <h1>Vinicius Costa</h1>
                    <ExternalLink text="Github" href="#"/>
                </header>
            </ProfileDetails>
        </ProfileContainer>
    )
}