import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { getDayPatternToDayIndexes } from '../../module/timerCalcs'
import { isValidDateString } from '../../module/utils'

import SceneTransition from './SceneTransition'
import TimerDashboard from '../TimerDashboard'
import NewTimer from '../NewTimer'

const SceneManager = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/:timerName/:endDate/:devDayPattern" component={Scene} />
      <Route path="/:timerName/:endDate" component={Scene} />
      <Route path="/:timerName" component={Scene} />
      <Route path="/" component={Scene} />
    </Switch>
  </BrowserRouter>
)

// we resolve routes with our own Routing component to give us
// more control and to keep the rest of the app independent
// of the implementation patterns of our chosen router

const Scene = ({ match, history }) => {
  const goToTimer = ({ timerName, endDate, devDayPattern }) => {
    history.push(`/${timerName}/${endDate}/${devDayPattern}`)
  }
  const goToAddTimer = () => {
    history.push(`/`)
  }
  const { timerName, endDate, devDayPattern } = match.params
  let ActiveScene = null
  let activeSceneName
  let validDevDayPattern = true
  let validEndDate = true
  // no timer name param, this is effectively the root of the site
  if (!timerName) {
    ActiveScene = <NewTimer goToTimer={goToTimer} />
    activeSceneName = 'NewTimer'
  } else {
    // only pass valid endDate and devDayPattern params
    if (devDayPattern) {
      validDevDayPattern = getDayPatternToDayIndexes({
        devDayPattern,
      })
    }
    if (endDate) {
      validEndDate = isValidDateString({
        dateString: endDate,
      })
    }
    if (timerName && !validEndDate) {
      history.push(`/${timerName}`)
    } else if (timerName && !validDevDayPattern) {
      history.push(`/${timerName}/${endDate}`)
    } else {
      const { devDayPattern, endDate, timerName } = match.params
      ActiveScene = (
        <TimerDashboard
          devDayPattern={devDayPattern}
          endDate={endDate}
          timerName={timerName}
          goToTimer={goToTimer}
          goToAddTimer={goToAddTimer}
        />
      )
      activeSceneName = 'TimerDashboard'
    }
  }
  return <SceneTransition activeScene={ActiveScene} activeSceneName={activeSceneName} />
}

export default SceneManager
