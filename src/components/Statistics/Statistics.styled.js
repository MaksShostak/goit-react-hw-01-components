import styled from 'styled-components';

export const Section = styled.section`
  margin-top: 20px;
  background-color: rgb(193, 186, 186);
  padding: 70px;
  color: black;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  border-radius: 10px;
  border: 2px solid rgb(61, 58, 59);
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
  margin-top: 0;
  margin-bottom: 0;
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
  color: white;
  background-color: ${({ color }) => color};
  margin-top: 0;
  margin-bottom: 0;
`;
export const Label = styled.span`
  margin-bottom: 16px;
`;
export const Percentage = styled.span`
  font-family: 'Brush Script MT', cursive;
  font-size: 50px;
  color: white;
`;
