import styled from 'styled-components';

export const Section = styled.section`
  background-color: rgb(193, 186, 186);
  padding: 150px;
  color: black;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;
export const Title = styled.h2`
  font-family: 'Brush Script MT', cursive;
  font-size: 48px;
  font-weight: 700;
  color: #020202;
  background-color: white;
  text-align: center;
  text-transform: uppercase;
  padding: 100px;
`;
export const StatList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  list-style: none;
  justify-content: center;
`;
export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 30px;
`;
