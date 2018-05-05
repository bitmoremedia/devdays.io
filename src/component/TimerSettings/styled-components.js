import React from 'react'
import styled, { css } from 'styled-components'

import { textOnPrimary, secondary, danger } from '../../module/colors'

export const TimerSettingsContainer = styled.div`
  background: ${secondary};
  border: 1px ${textOnPrimary} solid;
  padding: 5px;
  margin: 10px;
  @media (min-width: 700px) {
    width: 500px;
    padding: 20px 40px 20px 40px;
    margin: 0;
  }
`
export const Form = styled.form``

export const FormItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  padding-right: ${props => props.noRightPad ? '0' : '10px'};
`

export const FormItemLabel = styled.label`
  color: ${textOnPrimary};
  padding-right: 20px;
  font-size: 1.5em;
`

const baseFormElementStyles = css`
  outline: none;
  background: ${secondary};
  border: 1px solid rgba(243, 249, 255, 0.2);
  color: rgba(243, 249, 255, 0.9);
  border-radius: 5px;
`

export const FormInput = styled.input`
  ${baseFormElementStyles} padding: 6px 10px;
  width: ${props => (props.small ? '155px;' : '100%;')};
  font-size: 1em;
`

export const DayInput = styled.input`
  border: 1px solid #dbdbdb;
  width: 112px;
  font-weight: 200;
  color: #565a5c;
  background-color: #fff;
  border: 0;
  border-top: 0;
  border-right: 0;
  border-bottom: 2px solid transparent;
  border-left: 0;
  font-size: 16px;
  line-height: 16px;
  padding: 7px 6px 7px 11px;
  outline: none;
`

const RadioInput = styled.input`
  font-size: 1em;
  cursor: pointer;
`

const RadioOption = styled.div`
  text-align: center;
  padding-left: 5px;
  padding-right: 5px;
`

const RadioLabel = styled.label`
  color: ${textOnPrimary};
  cursor: pointer;
  display: block;
  @media (min-width: 700px) {
    display: inline-block;
    padding-left: 3px;
  }
`

export const FormRadio = ({ type, name, value, label, onChange, checked }) => (
  <RadioOption>
      <RadioInput id={name} type={type} name={name} value={value} onChange={onChange} checked={checked} />
      <RadioLabel htmlFor={name}>{label}</RadioLabel>
  </RadioOption>
)

export const RadioOptions = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding-left: 5px;
  padding-right: 5px;
`

export const FormSelect = styled.select`
  ${baseFormElementStyles} font-size: 1em;
  background: transparent;
  appearance: none;
  padding: 6px;
  cursor: pointer;
  // font-size need to be 16px to stop the iOS zoom!
  font-size: 16px;
`
export const SubmitButton = styled.button`
  ${baseFormElementStyles};
  font-size: 1em;
  width: 100%;
  padding: 12px;
  text-transform: uppercase;
  cursor: pointer;
  margin-top: 12px;
  background: ${secondary};
  :hover {
    background: rgba(243, 249, 255, 0.1);
  }
  :disabled {
    border: 1px solid ${danger};
    cursor: not-allowed;
  }
`
