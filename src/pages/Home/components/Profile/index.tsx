import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ExternalLink } from '../../../../components/ExternalLink';
import { ProfileContainer, ProfilePicture, ProfileDetails } from './styles';

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons';

export function Profile(){
    return(
        <ProfileContainer>
            <ProfilePicture src="http://github.com/vinnycosta9898.png"/>
            <ProfileDetails>
                <header>
                    <h1>Vinicius Costa</h1>
                    <ExternalLink text="Github" href="#"/>
                </header>
                <p>
                Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
                </p>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faGithub}/>
                        @vinnycosta9898
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faBuilding}/>
                        Curitiba
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faUserGroup}/>
                        21 Seguidores
                    </li>
                </ul>
            </ProfileDetails>
        </ProfileContainer>
    )
}