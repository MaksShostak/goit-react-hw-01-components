import PropTypes from "prop-types";
import {ListContainer} from "./FriendList.styled"
import {FriendListItem} from "./FriendListItem";


export const FriendList = ({friends}) => {
    return <ListContainer>
        {friends.map(({id,isOnline,avatar,name}) =>
        <FriendListItem key={id}
        isOnline={isOnline}
        avatar={avatar}
        name={name}
        id={id}
    />)}
       </ListContainer>
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    
}))
}