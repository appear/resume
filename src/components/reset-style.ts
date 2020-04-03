import { css, createGlobalStyle } from 'styled-components'

// prettier-ignore
export const reset = css`
@font-face { 
  font-family: 'SansKR'; 
  src:url('/fonts/NotoSansKR-Regular.otf');
  src: url('/fonts/NotoSansKR-Regular.woff') format(‘woff’), 
    url('/fonts/NotoSansKR-Regular.woff2') format(‘woff’), 
    url('/fonts/NotoSansKR-Regular.ttf') format('truetype');

  font-weight: normal;  
  font-style: normal;
}

@font-face { 
  font-family: 'SansKR'; 
  src:url('/fonts/NotoSansKR-Medium.otf');
  src: url('/fonts/NotoSansKR-Medium.woff') format(‘woff’), 
    url('/fonts/NotoSansKR-Medium.woff2') format(‘woff’), 
    url('/fonts/NotoSansKR-Medium.ttf') format('truetype');;

  font-weight: 500; 
  font-style: normal;  
}

@font-face { 
  font-family: 'SansKR'; 
  src:url('/fonts/NotoSansKR-Bold.otf');
  src: url('/fonts/NotoSansKR-Bold.woff') format(‘woff’), 
    url('/fonts/NotoSansKR-Bold.woff2') format(‘woff’), 
    url('/fonts/NotoSansKR-Bold.ttf') format('truetype');

  font-weight: bold;   
  font-style: normal;
}


html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
  font-family: 'SansKR'; 
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  text-decoration: none; 
  outline: none;
  color: #1b1b1b;
}

a:hover, a:active {text-decoration: none;}
`

export default createGlobalStyle`${reset}`
