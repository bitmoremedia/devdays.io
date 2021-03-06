import React, { Component, Fragment } from 'react'

import { numberWithCommas } from '../../module/utils'
import {
  TimePanelContainer,
  Label,
  Value,
  Integer,
  Decimal,
  DecimalPoint,
  SubLabelContainer,
  SubLabel,
} from './styled-components'

class TimePanel extends Component {
  render() {
    const { value, label, info, standout, showDecimal } = this.props

    let valueDisplay = value.toFixed(1).toString()
    let labelDisplay = label

    if (valueDisplay.indexOf('.0') > -1) {
      valueDisplay = valueDisplay.substring(0, valueDisplay.indexOf('.0'))
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
          {showDecimal && <Fragment>
              <DecimalPoint>.</DecimalPoint>
              <Decimal>{decimal}</Decimal>
          </Fragment>}
          {subLabel}
        </Fragment>
      )
    }

    // pluralise label
    if (Number(integer) === 1) {
      if (decimal) {
        labelDisplay = `${labelDisplay}s`
      }
    } else {
      labelDisplay = `${labelDisplay}s`
    }

    return (
      <TimePanelContainer standout={standout}>
        <Value>{valueDisplayParts}</Value>
        <Label>{labelDisplay}</Label>
        {subLabel}
      </TimePanelContainer>
    )
  }
}

export default TimePanel
