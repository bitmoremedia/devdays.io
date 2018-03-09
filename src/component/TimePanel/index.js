import React, { Component, Fragment } from 'react'

import { numberWithCommas } from '../../module/utils'
import {
  Container,
  Label,
  Value,
  Integer,
  Decimal,
  DecimalPoint,
  SubLabelContainer,
  SubLabel,
} from './styled-components'

class TimerSettings extends Component {
  render() {
    const { value, label, info, standout } = this.props

    let valueDisplay = value.toFixed(3).toString()

    if (valueDisplay.indexOf('.000') > -1) {
      valueDisplay = valueDisplay.substring(0, valueDisplay.indexOf('.000'))
    }

    const numberParts = valueDisplay.split('.')
    const integer = numberParts[0]
    const decimal = numberParts[1]
    const integerDisplay = numberWithCommas(Number(integer))

    const subLabel = info ? (
      <SubLabelContainer>
        <SubLabel>{info}</SubLabel>
      </SubLabelContainer>
    ) : null

    let valueDisplayParts
    if (!decimal) {
      valueDisplayParts = <Integer>{integerDisplay}</Integer>
    } else {
      valueDisplayParts = (
        <Fragment>
          <Integer>{integerDisplay}</Integer>
          <DecimalPoint>.</DecimalPoint>
          <Decimal>{decimal}</Decimal>
          {subLabel}
        </Fragment>
      )
    }

    return (
      <Container standout={standout}>
        <Value>{valueDisplayParts}</Value>
        <Label>{label}</Label>
        {subLabel}
      </Container>
    )
  }
}

export default TimerSettings
