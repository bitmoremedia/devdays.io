import React, { Component } from 'react'

import {
  TimerSettingsContainer,
  Form,
  FormItem,
  FormItemLabel,
  FormInput,
  FormSelect,
  SubmitButton,
} from './styled-components'
import { getDayPatternToDayIndexes } from '../../module/timerCalcs'
import { isValidDateString } from '../../module/utils'

class TimerSettings extends Component {
  state = {
    timerName: '',
    endDate: '',
    devDayPatternStart: 'mon',
    devDayPatternEnd: 'fri',
    formValid: false,
  }

  applyTimerProps = ({ timerName, endDate, devDayPattern }) => {
    let devDayPatternStart = 'mon'
    let devDayPatternEnd = 'fri'
    if (devDayPattern) {
      devDayPatternStart = devDayPattern.split('-')[0]
      devDayPatternEnd = devDayPattern.split('-')[1]
    }
    this.setState(
      {
        timerName: timerName || '',
        endDate: endDate || '',
        devDayPatternStart,
        devDayPatternEnd,
      },
      this.validateForm,
    )
  }

  componentDidMount() {
    this.applyTimerProps({ ...this.props })
  }

  validateForm = () => {
    let formValid = true
    const { timerName, endDate, devDayPatternStart, devDayPatternEnd } = this.state
    // ensure we have name and date values
    if (!timerName || !endDate) {
      formValid = false
    }
    // ensure the date value is a valid date
    if (formValid && !isValidDateString({ dateString: endDate })) {
      formValid = false
    }
    // ensure the devDayPattern is valid
    if (formValid) {
      const devDayPattern = `${devDayPatternStart}-${devDayPatternEnd}`
      const indexes = getDayPatternToDayIndexes({ devDayPattern })
      if (!indexes) {
        formValid = false
      }
    }
    this.setState({ formValid })
  }

  handleChange = e => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      this.validateForm,
    )
  }

  handleSubmit = e => {
    e.preventDefault()
    const { timerName, endDate, devDayPatternStart, devDayPatternEnd, formValid } = this.state
    if (formValid) {
      const devDayPattern = `${devDayPatternStart}-${devDayPatternEnd}`
      this.props.goToTimer({ timerName, endDate, devDayPattern })
    }
  }

  render() {
    const { handleChange } = this
    const { mode, alwaysShowSubmitButton } = this.props
    const { timerName, endDate, devDayPatternStart, devDayPatternEnd, formValid } = this.state

    const submitBtnText = mode === 'update' ? 'Update' : 'Add'

    return (
      <TimerSettingsContainer>
        <Form onSubmit={this.handleSubmit}>
          <FormItem>
            <FormItemLabel>Name</FormItemLabel>
            <FormInput name="timerName" onChange={handleChange} value={timerName} />
          </FormItem>

          <FormItem>
            <FormItemLabel>End Date</FormItemLabel>
            <FormInput
              type="date"
              name="endDate"
              small={true}
              onChange={handleChange}
              value={endDate}
            />
          </FormItem>

          <FormItem>
            <FormItemLabel>Dev Week Start</FormItemLabel>
            <FormSelect
              name="devDayPatternStart"
              value={devDayPatternStart}
              onChange={handleChange}
            >
              <option value="mon">Monday</option>
              <option value="tue">Tuesday</option>
              <option value="wed">Wednesday</option>
              <option value="thu">Thursday</option>
              <option value="fri">Friday</option>
              <option value="sat">Saturday</option>
              <option value="sun">Sunday</option>
            </FormSelect>
          </FormItem>

          <FormItem>
            <FormItemLabel>Dev Week End</FormItemLabel>
            <FormSelect name="devDayPatternEnd" value={devDayPatternEnd} onChange={handleChange}>
              <option value="mon">Monday</option>
              <option value="tue">Tuesday</option>
              <option value="wed">Wednesday</option>
              <option value="thu">Thursday</option>
              <option value="fri">Friday</option>
              <option value="sat">Saturday</option>
              <option value="sun">Sunday</option>
            </FormSelect>
          </FormItem>
          {(formValid || alwaysShowSubmitButton) && (
            <FormItem>
              <SubmitButton type="submit" disabled={!formValid}>
                {submitBtnText} Timer
              </SubmitButton>
            </FormItem>
          )}
        </Form>
      </TimerSettingsContainer>
    )
  }
}

export default TimerSettings
