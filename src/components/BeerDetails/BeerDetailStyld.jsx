import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding-top: 10px;
`;

export const Title = styled.h2`
  color: white;
  font-size: 30px;
`;

export const ContainerInfo = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  flex-wrap: nowrap;
  padding: 20px;
  border-radius: 30px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
  background-color: #86940a;
  justify-content: flex-start;
`;
export const ContainerImage = styled.div`
  width: 180px;
  margin-left: 100px;
`;
export const ContainerDetails = styled.div`
  width: 50%;
  margin-left: 100px;
`;

export const Span = styled.span`
  display: block;
`;

export const Text = styled.p`
  display: block;
  width: 50%;
  color: white;
  font-size: 18px;
  padding: 10px;
  outline: 1px solid white;
  border-radius: 10px;
  margin-top: 10px;
`;

export const Image = styled.img`
  width: 180px;
  height: 400px;
`;

export const LinkGoBack = styled(Link)`
  display: block;
  width: 120px;
  font-size: 24px;
  background-color: saddlebrown;
  color: white;
  padding: 10px;
  margin-bottom: 20px;
  margin-top: 20px;
  text-align: center;
  border-radius: 30px;
`;
