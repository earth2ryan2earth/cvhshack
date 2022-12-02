import styled from "styled-components";
import navBack from '../assets/navBack.svg';

export const PrimaryFooter = styled.footer`
  background-image: url(${navBack});
  background-repeat: no-repeat;
  background-position: left bottom;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Logo = styled.img`
  margin: 2rem;
`;