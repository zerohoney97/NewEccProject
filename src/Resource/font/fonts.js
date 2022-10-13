import { createGlobalStyle } from "styled-components";
import roboto from './Roboto-Black.ttf'

export default createGlobalStyle`
@font-face {
  font-family: "roboto";
  src: local("roboto"),
  url(${roboto}) format('woff');
}
`;