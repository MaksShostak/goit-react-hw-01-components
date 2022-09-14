import styled from 'styled-components';
import { checkStatus } from './checkStatus';
export const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  box-shadow: 6px 4px 4px 4px grey;
  width: 600px;
  height: 150px;
  border: 2px solid rgb(61, 58, 59);
  font-family: 'Brush Script MT', cursive;
  font-size: 42px;
  padding: 20px;
  background-color: white;
`;
export const FriendName = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  text-align: center;
`;
export const FriendAvatar = styled.img`
  display: block;
  margin-left: 25px;
  margin-bottom: 0px;
`;
export const FriendStatus = styled.span`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${checkStatus};
`;

// function checkStatus({ status }) {
//   console.log(status);
//   return status ? 'green' : 'red';
// }
