import styled from 'styled-components';
import { checkStatus } from './checkStatus';
export const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: ${props => props.theme.space[4]}px;
  box-shadow: 6px 4px 4px 4px grey;
  width: 600px;
  height: 150px;
  border: 2px solid ${props => props.theme.colors.bordercolor};
  font-family: 'Brush Script MT', cursive;
  font-size: 42px;
  padding: 20px;
  background-color: white;
  transition: all 500ms ease-out;
  &:hover {
    background-color: aqua;
    transform: scaleX(1.05);
  }
`;
export const FriendName = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  text-align: center;

  svg {
    color: azure;
    fill: green;
    stroke: red;
  }
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
