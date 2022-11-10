import { createGlobalStyle } from "styled-components";
import roboto from './Roboto-Black.ttf'
import JuaRegular from './Jua-Regular.ttf'

export default createGlobalStyle`
@font-face {
  font-family: "roboto";
  src: local("roboto"),
  url(${roboto}) format('woff');
}
@font-face {
        font-family: 'JuaRegular';
        src: local('JuaRegular');
        src: url(${JuaRegular}) format('truetype');
  }
`;
