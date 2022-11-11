import {createGlobalStyle} from "styled-components";

const SharedStyles = createGlobalStyle`
body {
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;
    text-decoration: none;
    list-style: none;
  }
  :root {
    --DarkElements: hsl(209, 23%, 22%);
    --DarkBg :  hsl(207, 26%, 17%);
    --LightText: hsl(200, 15%, 8%);
    --LightInput: hsl(0, 0%, 52%);
    --LightBg: hsl(0, 0%, 98%);
    --White: hsl(0, 0%, 100%);
  }
}
`

export default SharedStyles