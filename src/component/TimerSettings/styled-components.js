import styled, { css } from 'styled-components'

import { textOnPrimary, secondary } from '../../module/colors'

export const Container = styled.div`
  background: ${secondary};
  padding: 20px 40px 20px 40px;
  border-radius: 4px;
  border: 1px ${textOnPrimary} solid;
  width: 500px;
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
  background: rgba(243, 249, 255, 0.1);
  border-radius: 4px;
  border: 1px solid rgba(243, 249, 255, 0.2);
  color: rgba(243, 249, 255, 0.9);
`

export const FormInput = styled.input`
  ${baseFormElementStyles} padding: 6px 10px;
  width: ${props => (props.small ? '155px;' : '100%;')};
  font-size: 1em;
`

export const FormSelect = styled.select`
  ${baseFormElementStyles} font-size: 1em;
  background: transparent;
  appearance: menulist;
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
`
