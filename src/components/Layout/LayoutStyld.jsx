import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  font-size: 40px;
  padding: 20px;
  display: flex;
  gap: 20px;
  background-color: saddlebrown;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
  border-radius: 20px;
`;

export const ActivNavLink = styled(NavLink)`
&.active {
    color: orange;
  }
`;
