import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  /* padding: 10px; */
  padding-top: 10px;
`;

export const Title = styled.h2`
  padding: 30px 20px 20px 20px;
  font-size: 30px;
  gap: 10px;
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 125px;
  padding: 20px;
  border-radius: 30px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
  background-color: #86940a;
`;

export const Items = styled.li`
  padding: 20px 40px 20px 40px;
  width: 180px;
  height: auto;
  font-size: 20px;
  font-weight: 700;
  border: 2px solid rgba(148, 148, 148, 0.4);
  border-radius: 10px 9px 10px 10px;

  z-index: 1000;
  background-color: saddlebrown;
`;

export const Image = styled.img`
  width: 180px;
  height: 400px;
`;

export const BeerLink = styled(Link)`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  width: 180px;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const ButtonBuy = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  background-color: #12cf12;
  color: white;
  padding: 20px 30px;
  border-radius: 10px;
  &:hover {
    -webkit-box-shadow: 0px 0px 20px 1px rgba(66, 66, 66, 0.7);
    box-shadow: 0px 0px 20px 1px rgba(66, 66, 66, 0.7);
  }
`;
export const ButtonDelite = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  background-color: #cf2912;
  color: white;
  padding: 20px 30px;
  border-radius: 10px;
  &:hover {
    -webkit-box-shadow: 0px 0px 20px 1px rgba(66, 66, 66, 0.7);
    box-shadow: 0px 0px 20px 1px rgba(66, 66, 66, 0.7);
  }
`;
