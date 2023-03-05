import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
} 
ul,
ol {
  padding: 0;
} 
body,
h1,
h2,
h3,
h4,
h5,
p,
ul,
ol,
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}
ul,
ol {
  list-style: none;
}
a {
  text-decoration: none;
}
img {
  display: block;
}
article>*+* {
  margin-top: 1em;
}
input,
button,
textarea,
select {
  font: inherit;
}
#root {
    font-family: 'Montserrat', sans-serif;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}
body {
    background: linear-gradient(96.97deg, rgba(248, 161, 31, 0.77) 13.78%,
     rgba(230, 184, 23, 0.77) 84.6%);
}
`;
