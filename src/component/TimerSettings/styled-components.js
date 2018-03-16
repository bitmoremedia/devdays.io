import styled, { css } from 'styled-components'

import { textOnPrimary, secondary, danger } from '../../module/colors'

export const TimerSettingsContainer = styled.div`
  background: ${secondary};
  border: 1px ${textOnPrimary} solid;
  padding: 10px;
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
