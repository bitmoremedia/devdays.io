import React, { Component, Fragment } from 'react'
import moment from 'moment'

import { getTimesUntil } from '../../module/timerCalcs'
import TimePanel from '../TimePanel'
import Footer from '../Footer'
import {
  IconContainer,
  HomeIcon,
  SettingsIcon,
} from '../Icons'
import {
  OutOfTimeContainer,
  Container,
  HeaderContainer,
  Header,
  TitleContainer,
  Title,
  Date,
  TimePanelsContainerStretch,
  TimePanelsContainerOuter,
  TimePanelsContainerInner,
  TimePanelContainer,
} from './styled-components'

const CHECK_TIMER_INTERVAL = 1000
const MOMENT_DATE_FORMAT = 'dddd, MMMM Do YYYY'
const MOMENT_DATE_TIME_FORMAT = 'ddd Do MMMM YYYY HH:mm'

class TimersDisplay extends Component {
  state = {
    years: 0,
    months: 0,
    weeks: 0,
    days: 0,
    devDays: 0,
    hours: 0,
    minutes: 0,
    now: undefined,
  }

  timer = undefined

  calculateTimers = props => {
    const currentProps = props || { ...this.props }
    const timesUntil = getTimesUntil({ ...currentProps })
    const now = moment().format(MOMENT_DATE_TIME_FORMAT)
    this.setState({ ...timesUntil, now })
  }

  applyTimerProps(props) {
    this.calculateTimers(props)
    clearInterval(this.timer)
    this.timer = setInterval(() => {
      this.calculateTimers()
    }, CHECK_TIMER_INTERVAL)
  }

  componentDidMount() {
    this.applyTimerProps({ ...this.props })
  }

  componentWillReceiveProps(nextProps) {
    this.applyTimerProps({ ...nextProps })
  }

  componentWillUnmount = () => {
    clearInterval(this.timer)
  }

  renderTimePanels = () => {
    const { devDayPattern } = this.props
    const { years, months, weeks, days, devDays } = this.state
    return (
      <Fragment>
        <TimePanelContainer>
          <TimePanel label="Dev Day" value={devDays} info={devDayPattern} standout />
        </TimePanelContainer>
        <TimePanelContainer>
          <TimePanel label="Day" value={days} />
        </TimePanelContainer>
        {weeks > 1 && (
          <TimePanelContainer>
            <TimePanel label="Week" value={weeks} />
          </TimePanelContainer>
        )}
        {months > 1 && (
          <TimePanelContainer>
            <TimePanel label="Month" value={months} />
          </TimePanelContainer>
        )}
        {years > 1 && (
          <TimePanelContainer>
            <TimePanel label="Year" value={years} />
          </TimePanelContainer>
        )}
      </Fragment>
    )
  }

  renderTimesUp = () => {
    return <OutOfTimeContainer>Out of time!!!</OutOfTimeContainer>
  }

  render() {
    const { timerName, endDate, toggleSettings, goToAddTimer } = this.props
    const { days, now } = this.state

    const dateDisplay = moment(endDate).format(MOMENT_DATE_FORMAT)

    return (
      <Container>
        <HeaderContainer>
          <Header>
            <IconContainer onClick={goToAddTimer}>
              <HomeIcon />
            </IconContainer>
            <TitleContainer>
              <Title>{timerName}</Title>
              <Date>{dateDisplay}</Date>
            </TitleContainer>
            <IconContainer onClick={toggleSettings}>
              <SettingsIcon />
            </IconContainer>
          </Header>
        </HeaderContainer>
        <TimePanelsContainerStretch>
          <TimePanelsContainerOuter>
            <TimePanelsContainerInner>
              {days < 1 && this.renderTimesUp()}
              {days >= 1 && this.renderTimePanels()}
            </TimePanelsContainerInner>
          </TimePanelsContainerOuter>
        </TimePanelsContainerStretch>
        <Footer now={now} />
      </Container>
    )
  }
}

export default TimersDisplay


/*
          <div>
            Icons made by{' '}
            <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">
              Smashicons
            </a>{' '}
            from{' '}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>{' '}
            is licensed by{' '}
            <a
              href="http://creativecommons.org/licenses/by/3.0/"
              title="Creative Commons BY 3.0"
              target="_blank"
              rel="noopener noreferrer"
            >
              CC 3.0 BY
            </a>
          </div>
*/