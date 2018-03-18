import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

import Body from '../Body'
import TimersDisplay from '../TimersDisplay'
import TimerSettings from '../TimerSettings'

import {
  TimerDashboardContainer,
  TimerSettingsContainerOuter,
  TimerSettingsContainerInner,
} from './styled-components'

class TimerDashboard extends Component {
  state = {
    displaySettings: false,
  }

  componentWillMount() {
    if (!this.props.endDate) {
      this.setState({
        displaySettings: true,
      })
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keyDown, false)
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyDown, false)
  }

  componentWillReceiveProps(nextProps) {
    // for now we just assume new props are only passed when timer details are updated
    // which is an OK assumption to make for now
    this.setState({
      displaySettings: false,
    })
  }

  keyDown = e => {
    if (e.keyCode === 27) {
      this.hideSettings()
    }
  }

  showSettings = () => {
    this.setState({
      displaySettings: true,
    })
  }

  hideSettings = () => {
    this.setState({
      displaySettings: false,
    })
  }

  toggleSettings = () => {
    this.setState(state => {
      return {
        displaySettings: !state.displaySettings,
      }
    })
  }

  clickOuterContainer = () => {
    this.hideSettings()
  }

  clickInnerContainer = e => {
    e.stopPropagation()
  }

  render() {
    const { timerName } = this.props
    const { displaySettings } = this.state
    const { toggleSettings, clickOuterContainer, clickInnerContainer } = this

    // set defaults for missing props
    const props = {
      ...this.props,
      devDayPattern: this.props.devDayPattern || 'mon-fri',
    }

    const bodyStyle = {
      overflow: displaySettings ? 'hidden' : 'inherit',
      position: displaySettings ? 'fixed' : 'inherit',
    }

    return (
      <Body style={bodyStyle}>
        <TimerDashboardContainer>
          <Helmet>
            <title>{timerName} - Dev Days</title>
          </Helmet>
          <TimersDisplay {...props} toggleSettings={toggleSettings} />
          <TimerSettingsContainerOuter
            displaySettings={displaySettings}
            onClick={clickOuterContainer}
          >
            <TimerSettingsContainerInner
              displaySettings={displaySettings}
              onClick={clickInnerContainer}
            >
              <TimerSettings {...this.props} mode="update" alwaysShowSubmitButton />
            </TimerSettingsContainerInner>
          </TimerSettingsContainerOuter>
        </TimerDashboardContainer>
      </Body>
    )
  }
}

export default TimerDashboard
