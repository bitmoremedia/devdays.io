import { injectGlobal } from 'styled-components'

import { resetCSS } from './module/reset-css'
import { appBackground } from './module/colors'

injectGlobal`
  ${resetCSS}
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html, body {
    width: 100%;
  }  
  body {
    font-family: monospace;
    background: ${appBackground};
  }
  #root {
    width: 100%;
  }
`
