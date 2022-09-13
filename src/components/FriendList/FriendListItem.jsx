import PropTypes from "prop-types";
import {GrAccessibility } from "react-icons/gr";
export const FriendListItem = (({ isOnline, avatar, name }) =>
(<li className="item">
        <span className="status">{ isOnline}</span>
        <img className="avatar" src={ avatar} alt="User avatar" width="48" />
    <p className="name"> <GrAccessibility /> {name}</p>
</li>))
       

FriendListItem.propTypes = { 
    
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
}