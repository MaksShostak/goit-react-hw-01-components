import PropTypes from "prop-types";
import { GrAccessibility } from "react-icons/gr";
import{ListItem,FriendName,FriendAvatar,FriendStatus  }from "./FriendListItem.styled"
export const FriendListItem = (({ isOnline, avatar, name }) =>
(<ListItem >
        <FriendStatus  status={isOnline}>{ isOnline}</FriendStatus>
        <FriendAvatar  src={ avatar} alt="User avatar" width="48" height="48" />
    <FriendName> <GrAccessibility /> {name}</FriendName>
</ListItem>))
       

FriendListItem.propTypes = { 
    
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
}