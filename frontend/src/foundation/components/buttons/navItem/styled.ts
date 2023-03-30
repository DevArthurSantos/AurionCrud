import styled from 'styled-components';

export const NavItem = styled.li`
  font-size: 14px;

  letter-spacing: 1.2px;
  text-transform: uppercase;
  list-style: none;

  & > a{
    position: relative;
    color: black;
    text-decoration: none;
      &::after, &::before{
      content: "";
      position: absolute;
      width: 0%;
      height: 2px;
      border-radius: 8px;
      margin-bottom: -.15rem;
      background-color: ${props => props.theme.colors.secondary};
      transition: all .4s linear;
      bottom: 0;
    }
    &::after{
      right: 0;
  }
    &::before{
      left: 0;
  }
  }
  &.active > a{
    color: ${props => props.theme.colors.secondary};
  
    &::after{
    width: 53%;
  }
    &::before{
    width: 53%;
  }

  }
  
`;


export default NavItem;