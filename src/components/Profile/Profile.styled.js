import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgb(193, 186, 186);
  border-radius: 10px;
  border: 2px solid rgb(61, 58, 59);
  color: black;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  padding: 150px;
  margin-top: 50px;
`;

export const DescriptionContainer = styled.div`
  background-color: white;
  border-bottom: 2px solid rgb(61, 58, 59);
  padding: 20px;
  padding-top: 50px;
`;
export const UserImg = styled.img`
  display: block;
  border-radius: 50%;
  width: 200px;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid rgb(61, 58, 59);

  background-color: rgb(225, 225, 225);
  margin-bottom: 0px;
`;
export const UserName = styled.p`
  font-family: 'Brush Script MT', cursive;
  font-size: 48px;
  font-weight: 700;
  color: #020202;
`;
export const UserDescribe = styled.p`
  font-family: 'Brush Script MT', cursive;
  color: rgb(177, 172, 172);
  font-size: 38px;
`;
export const StatsList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  list-style: none;
  justify-content: center;
  background-color: rgb(225, 225, 225);
`;
export const StatsItem = styled.li`
  padding: 20px;
  margin: 0;
  width: 100%;
  height: 100%;
  border: 2px solid rgb(61, 58, 59);
`;
export const StatsOptions = styled.span`
  display: block;
  margin-bottom: 15px;
  padding-top: 30px;
`;
export const StatsInfo = styled.span`
  display: block;
  font-family: 'Brush Script MT', cursive;
  font-size: 48px;
  font-weight: 700;
  padding-bottom: 30px;
`;
