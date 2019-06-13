import { createGlobalStyle } from 'styled-components';
import { accent } from 'constants/theme';

export default createGlobalStyle`
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
  menu, nav, output, ruby, section, summary,
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
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  html {
    font-size: 62.5%;
      background: url(./sn-bg.jpg) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  overflow-x:hidden;
  }

  body {
    font-size: 16px;
    font-family: 'Space Mono', monospace;
    text-transform:uppercase;    line-height: 1;
    color: #000;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    -webkit-font-feature-settings: "pnum";
    font-feature-settings: "pnum";
    font-variant-numeric: proportional-nums;

  }

  input {
    font-size:1em;
    font-family: 'Space Mono', monospace;
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
    color: ${accent};
  }

  pre {
    display: block;
    padding: 2rem;
    margin-top: 4rem;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    border-radius: 5px;
    color: ${accent};
    border: 1px solid #ddd;
    font-family: "SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace;
  }

  video {
    max-width: 100%;
  }

  p {
    margin-bottom: 2rem;
  }

  #ageWrapper.ageUnknown {
  visibility: visible;
  opacity: 1;
}

#ageWrapper {
  visibility: hidden;
  opacity: 0;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9000;
  background-color: rgba(32, 23, 19, .9);
  transition: visibility 0s ease-in-out .5s, opacity .5s ease-in-out;
}

#agePopUp {
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: #ede2d5;
  padding: 0 35px;
  width: 445px;
  height: 250px;
  margin-top: -125px;
  margin-left: -222px;
  box-sizing: border-box;
}


.popup-container {
  box-sizing: border-box;
  position: relative;
  width: 100%;
  top:12%;
  z-index:10000;
  max-width: 476px;
  padding: 5em;
  margin: 80px auto 0;
  background:#eee;

  form {
    overflow:hidden;
    input {
      padding:10px;
      width:100%;
      font-size:16px;
      outline:none;
      text-align:center;
      text-transform:uppercase;
    }

    #mc-embedded-subscribe {
      background:black;
      color:white;
    }

  }

  @media screen and (max-width: 800px) {
    max-width: 100%;
    margin: 1em auto;
    padding: 2em;
  }

}


.navbar-burger {
    padding-top: 26px;
    color: #fff;
    cursor: pointer;
    display: block;
    height: 3.25rem;
    position: absolute;
    right: 42px;
    top: 28px;
    width: 3.25rem;
    margin-left: auto;
    transition-delay: 2s;
    transition: height .35s ease-in-out,opacity .75s ease-in-out;
    outline:none;

    &.is-active {
     transition-delay: 2s;
    transition: height .35s ease-in-out,opacity .75s ease-in-out;
    
    .icon-1 {
      opacity: 0;
      transform: rotate(90deg);
    }
  
    .icon-2 {
      top: 26px;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    }
  

    }


    span {
      background-color: currentColor;
      display: block;
      height: 1.5px;
      left: calc(50% - 8px);
      position: absolute;
      -webkit-transform-origin: center;
      transform-origin: center;
      transition-duration: .2s;
      transition-property: background-color,opacity,-webkit-transform;
      transition-property: background-color,opacity,transform;
      transition-property: background-color,opacity,transform,-webkit-transform;
      transition-timing-function: ease-out;
      width:26px;

      &:nth-child(2) {
      top: calc(50% - 10px);
      transform: rotate(40deg);

    }

      &:first-child {
        transform: rotate(139deg);
        top: calc(50% - 10px);
      }

  }

}

.popup-body {
  box-sizing: border-box;
  font-size: 18px;
  margin-bottom: 20px;
  line-height: 1.2;
}

.popup-actions {
  text-align: center;
}
.popup-btn {
  box-sizing: border-box;
  padding: 6px 12px;
  margin-right: 10px;
  border: none;
  font-size: 14px;
  cursor: pointer;
  color:black;

  &.popup-agree {
    background:#ececec;
    color:black;
    border-radius:4px;
    padding:17px;
    margin-bottom:1em;
  }
}


`;
