import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { getDayPatternToDayIndexes } from '../../module/timerCalcs'
import { isValidDateString } from '../../module/utils'

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
  // no timer name param, this is effectively the root of the site
  if (!timerName) {
    return <NewTimer goToTimer={goToTimer} />
  }
  // only pass valid endDate and devDayPattern params
  let validDevDayPattern = true
  if (devDayPattern) {
    validDevDayPattern = getDayPatternToDayIndexes({
      devDayPattern,
    })
  }
  let validEndDate = true
  if (endDate) {
    validEndDate = isValidDateString({
      dateString: endDate,
    })
  }
  if (timerName && !validEndDate) {
    history.push(`/${timerName}`)
    return null
  } else if (timerName && !validDevDayPattern) {
    history.push(`/${timerName}/${endDate}`)
    return null
  }
  return <TimerDashboard {...match.params} goToTimer={goToTimer} goToAddTimer={goToAddTimer} />
}

export default SceneManager
