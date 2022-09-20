import styled from 'styled-components';

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  justify-content: center;
  padding-left: 0;
  margin-top: ${props => props.theme.space[4]}px;
  background-color: ${props => props.theme.colors.mycolor};
  padding: ${props => props.theme.space[6]}px;
  color: black;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  border-radius: ${props => props.theme.radii.md}px;
  border: 2px solid ${props => props.theme.colors.bordercolor};
`;
