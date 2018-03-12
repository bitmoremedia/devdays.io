import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

import SceneManager from './component/SceneManager'

import './global-styles'

ReactDOM.render(<SceneManager />, document.getElementById('root'))
registerServiceWorker()
