import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

import Body from './component/Body'
import SceneManager from './component/SceneManager'

import './global-styles'

ReactDOM.render(
  <Body>
    <SceneManager />
  </Body>,
  document.getElementById('root'),
)
registerServiceWorker()
